package com.sapphire.stock.analysis.biz.action.sub.flink;

import com.alibaba.druid.util.StringUtils;
import com.sapphire.stock.analysis.biz.action.Action;
import com.sapphire.stock.analysis.biz.entity.FlinkTaskEntity;
import com.sapphire.stock.analysis.core.model.FlinkSQLJob;
import com.sapphire.stock.analysis.core.model.FlinkSqlExtInfo;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.repo.FlinkSqlJobRepository;
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

    private FlinkSqlJobRepository flinkSqlJobRepository;

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

        entity.setReplacedSql(getSqlByFreemaker(sql, replaceParams));

        logger.info("ReplaceParamsAction success");
    }

    @Autowired
    public void setFlinkSqlJobRepository(FlinkSqlJobRepository flinkSqlJobRepository) {
        this.flinkSqlJobRepository = flinkSqlJobRepository;
    }

    private String getSqlByFreemaker(String sql, Map<String, String> replaceParams){

        try {
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
