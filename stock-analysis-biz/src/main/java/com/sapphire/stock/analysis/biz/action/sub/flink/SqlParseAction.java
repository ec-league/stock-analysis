package com.sapphire.stock.analysis.biz.action.sub.flink;

import org.apache.calcite.config.Lex;
import org.apache.calcite.sql.SqlNodeList;
import org.apache.calcite.sql.parser.SqlParser;
import org.apache.commons.lang.StringUtils;
import org.apache.flink.sql.parser.impl.FlinkSqlParserImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.sapphire.stock.analysis.biz.action.Action;
import com.sapphire.stock.analysis.biz.entity.FlinkTaskEntity;
import com.sapphire.stock.analysis.common.util.exception.ErrorCode;
import com.sapphire.stock.analysis.core.exception.AthenaException;
import com.sapphire.stock.analysis.core.model.FlinkSQLJob;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Action("sqlParseAction")
public class SqlParseAction implements BusinessAction {
    private static final Logger logger = LoggerFactory.getLogger(SqlParseAction.class);

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

        SqlParser.ConfigBuilder builder = SqlParser.configBuilder().setLex(Lex.MYSQL);

        builder.setParserFactory(FlinkSqlParserImpl.FACTORY);

        try {
            SqlParser sqlParser = SqlParser.create(sql, builder.build());

            SqlNodeList sqlNodes = sqlParser.parseStmtList();

            entity.setSqlNodeList(sqlNodes);
        } catch (Exception e) {
            logger.error("Parse Sql failed", e);
            throw new AthenaException(ErrorCode.SQL_ERROR, e.getMessage());
        }
    }
}
