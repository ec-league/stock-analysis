package com.sapphire.stock.analysis.biz.action.sub.flink;

import java.util.ArrayList;
import java.util.List;

import org.apache.calcite.config.Lex;
import org.apache.calcite.sql.SqlInsert;
import org.apache.calcite.sql.SqlKind;
import org.apache.calcite.sql.SqlNode;
import org.apache.calcite.sql.SqlNodeList;
import org.apache.calcite.sql.parser.SqlParseException;
import org.apache.calcite.sql.parser.SqlParser;
import org.apache.flink.sql.parser.impl.FlinkSqlParserImpl;
import org.springframework.beans.factory.annotation.Autowired;

import com.sapphire.stock.analysis.biz.action.Action;
import com.sapphire.stock.analysis.biz.entity.FlinkTaskEntity;
import com.sapphire.stock.analysis.common.integration.client.FlinkClient;
import com.sapphire.stock.analysis.common.util.exception.ErrorCode;
import com.sapphire.stock.analysis.core.exception.AthenaException;
import com.sapphire.stock.analysis.core.model.FlinkConfig;
import com.sapphire.stock.analysis.core.model.FlinkSQLJob;
import com.sapphire.stock.analysis.core.model.Response;
import com.sapphire.stock.analysis.core.model.SubmitFlinkRequest;
import com.sapphire.stock.analysis.core.model.enums.FlinkSqlStatus;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.repo.FlinkSqlJobRepository;
import com.sapphire.stock.analysis.core.service.FlinkService;

/**
 * Author: 柏云鹏 Date: 2022/4/5.
 */
@Action("submitFlinkSqlAction")
public class SubmitFlinkSqlAction implements BusinessAction {

    @Autowired
    private FlinkSqlJobRepository flinkSqlJobRepository;

    @Autowired
    private FlinkClient           flinkClient;

    @Autowired
    private FlinkService          flinkService;

    @Override
    public void process(ProcessContext processContext) {
        FlinkTaskEntity entity = processContext.getEntity();

        FlinkSQLJob flinkSQLJob = entity.getFlinkSQLJob();

        SubmitFlinkRequest sqlSubmitFlinkRequest = new SubmitFlinkRequest();

        sqlSubmitFlinkRequest.setSources(new ArrayList<>(entity.getSourceMap().values()));
        sqlSubmitFlinkRequest.setSinks(new ArrayList<>(entity.getSinkMap().values()));

        sqlSubmitFlinkRequest.setFlinkConfig(flinkSQLJob.getFlinkConfig());
        sqlSubmitFlinkRequest.setJobName(flinkSQLJob.getName());
        List<String> sqls = new ArrayList<>();
        SqlNodeList sqlNodeList = entity.getSqlNodeList();

        for (SqlNode sqlNode : sqlNodeList) {
            sqls.add(sqlNode.toString());
        }

        try {
            sqlSubmitFlinkRequest.setSqls(findQuerySql(sqls));
        } catch (Exception e) {
            throw new AthenaException(ErrorCode.SQL_ERROR, e.getMessage());
        }

        int freeSlot = flinkClient.queryFreeSlotNum();
        FlinkConfig flinkConfig = flinkSQLJob.getFlinkConfig();
        int parallelism = flinkConfig.getParallelism();
        if (parallelism > freeSlot) {
            entity.setEnoughSlot(false);
            throw new AthenaException(ErrorCode.FLINK_NOT_AVAILABLE, "可用资源不足，请稍后重试");
        }

        Response<String> flinkResponse = flinkService.submitSync(sqlSubmitFlinkRequest);

        if (flinkResponse == null) {
            flinkSQLJob.setResultMsg("SYSTEM_ERROR: 提交Flink任务失败, 返回为空!");
            flinkSQLJob.setStatus(FlinkSqlStatus.RETRY.name());
            flinkSqlJobRepository.save(flinkSQLJob);
            throw new AthenaException(ErrorCode.FLINK_NOT_AVAILABLE);
        } else if (!flinkResponse.isSuccess()) {
            flinkSQLJob.setResultMsg(flinkResponse.getResultMsg());
            flinkSQLJob.setStatus(FlinkSqlStatus.FAILED.name());
            flinkSqlJobRepository.save(flinkSQLJob);
            throw new AthenaException(ErrorCode.FLINK_NOT_AVAILABLE, flinkResponse.getResultMsg());
        } else {
            entity.setJobId(flinkResponse.getData());
            flinkSQLJob.setFlinkJobId(flinkResponse.getData());
            flinkSQLJob.setStatus(FlinkSqlStatus.SUBMIT.name());
            flinkSqlJobRepository.save(flinkSQLJob);
        }
    }

    public static List<String> findQuerySql(List<String> sqls) throws SqlParseException {
        List<String> newSqls = new ArrayList<>(sqls.size());
        SqlParser.Config CONFIG = SqlParser.configBuilder()
            .setParserFactory(FlinkSqlParserImpl.FACTORY).setLex(Lex.MYSQL).build();
        for (String sql : sqls) {
            SqlParser sqlParser = SqlParser.create(sql, CONFIG);
            SqlNode sqlNode = sqlParser.parseStmt();
            if (sqlNode.getKind() == SqlKind.INSERT) {
                SqlInsert sqlInsert = (SqlInsert) sqlNode;
                newSqls.add(sqlInsert.getSource().toString());
            } else if (sqlNode.getKind() == SqlKind.SELECT) {
                newSqls.add(sqlNode.toString());
            } else {
                throw new IllegalArgumentException("It must be an insert SQL, sql:" + sql);
            }
        }
        return newSqls;
    }
}
