package com.sapphire.stock.analysis.biz.action.sub.flink;

import com.alibaba.druid.util.StringUtils;
import com.sapphire.stock.analysis.biz.action.Action;
import com.sapphire.stock.analysis.biz.entity.FlinkTaskEntity;
import com.sapphire.stock.analysis.common.util.DateUtils;
import com.sapphire.stock.analysis.core.model.FlinkSQLJob;
import com.sapphire.stock.analysis.core.model.FlinkSqlExtInfo;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.repo.FlinkSqlJobRepository;
import com.sapphire.stock.analysis.core.repo.PartitionDateRepository;
import freemarker.cache.StringTemplateLoader;
import freemarker.template.Configuration;
import freemarker.template.Template;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.CollectionUtils;

import java.io.StringWriter;
import java.util.Map;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Action("replaceParamsAction")
public class ReplaceParamsAction implements BusinessAction {

    private static final Logger logger = LoggerFactory.getLogger(ReplaceParamsAction.class);

    @Autowired
    private FlinkSqlJobRepository flinkSqlJobRepository;

    @Autowired
    private PartitionDateRepository partitionDateRepository;

    @Override
    public void process(ProcessContext processContext) {
        FlinkTaskEntity entity = processContext.getEntity();

        FlinkSQLJob flinkSQLJob = entity.getFlinkSQLJob();
        if (StringUtils.isEmpty(entity.getReplacedSql())) {
            String sql = flinkSQLJob.getJobConfig().getSql();
            entity.setReplacedSql(sql);
        }

        String sql = entity.getReplacedSql();

        Map<String, String> replaceParams = entity.getReplaceParams();

        FlinkSqlExtInfo sqlExtInfo = flinkSQLJob.getExtInfo();
        if (sqlExtInfo == null) {
            flinkSQLJob.setExtInfo(new FlinkSqlExtInfo());
        }
        sqlExtInfo = flinkSQLJob.getExtInfo();
        if (CollectionUtils.isEmpty(replaceParams)) {
            replaceParams = sqlExtInfo.getReplaceParams();
        } else {
            sqlExtInfo.setReplaceParams(replaceParams);
            flinkSqlJobRepository.save(flinkSQLJob);
        }

        entity.setReplacedSql(getSqlByFreemarker(sql, replaceParams));

        logger.info("ReplaceParamsAction success");
    }

    private String getSqlByFreemarker(String sql, Map<String, String> replaceParams){

        try {
            String partitionDate = replaceParams.get("partitionDate");

            if (partitionDate == null) {
                String today = DateUtils.getToday();
                replaceParams.put("yesterday", partitionDateRepository.getLastPartitionDate(today));
            } else {
                replaceParams.put("yesterday", partitionDateRepository.getLastPartitionDate(partitionDate));
            }

            Configuration cfg = new Configuration(Configuration.VERSION_2_3_23);

            StringTemplateLoader stringTemplateLoader = new StringTemplateLoader();

            stringTemplateLoader.putTemplate("sql_template", sql);

            cfg.setTemplateLoader(stringTemplateLoader);
            cfg.setDefaultEncoding("UTF-8");

            Template template = cfg.getTemplate("sql_template");

            StringWriter sw = new StringWriter();
            template.process(replaceParams, sw);

            logger.info("The result of SQL rendered by freemaker is=【{}】",sw.toString());
            return sw.toString();
        } catch (Exception e) {
            logger.error("getSqlByFreemaker error", e);

            return sql;
        }
    }
}
