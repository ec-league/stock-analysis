package com.sapphire.stock.analysis.biz.action.sub.flink;

import org.apache.calcite.sql.SqlNodeList;
import org.apache.commons.lang.StringUtils;

import com.sapphire.stock.analysis.biz.action.Action;
import com.sapphire.stock.analysis.biz.entity.FlinkTaskEntity;
import com.sapphire.stock.analysis.biz.sql.SqlParseHelper;
import com.sapphire.stock.analysis.common.util.exception.ErrorCode;
import com.sapphire.stock.analysis.core.exception.AthenaException;
import com.sapphire.stock.analysis.core.model.FlinkSQLJob;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;

import lombok.extern.slf4j.Slf4j;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Slf4j
@Action("sqlParseAction")
public class SqlParseAction implements BusinessAction {

    @Override
    public void process(ProcessContext processContext) {

        FlinkTaskEntity entity = processContext.getEntity();

        FlinkSQLJob flinkSQLJob = entity.getFlinkSQLJob();

        if (flinkSQLJob.getJobConfig() == null) {
            throw new AthenaException(ErrorCode.VALIDATE_ERROR, "SQL job中没有配置对应的JOB执行信息");
        }

        String sql = StringUtils.isEmpty(entity.getReplacedSql())
            ? flinkSQLJob.getJobConfig().getSql()
            : entity.getReplacedSql();

        try {
            SqlNodeList sqlNodes = SqlParseHelper.parseSqlNodeList(sql);

            entity.setSqlNodeList(sqlNodes);
        } catch (Exception e) {
            log.error("Parse Sql failed", e);
            throw new AthenaException(ErrorCode.SQL_ERROR, e.getMessage());
        }
    }
}
