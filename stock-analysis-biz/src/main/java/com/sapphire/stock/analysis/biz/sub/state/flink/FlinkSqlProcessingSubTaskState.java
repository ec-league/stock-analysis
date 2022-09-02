package com.sapphire.stock.analysis.biz.sub.state.flink;

import com.sapphire.stock.analysis.common.util.exception.ErrorCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.biz.sub.state.SubTaskContext;
import com.sapphire.stock.analysis.biz.sub.state.SubTaskStatus;
import com.sapphire.stock.analysis.biz.sub.state.common.ProcessingSubTaskState;
import com.sapphire.stock.analysis.common.integration.client.FlinkClient;
import com.sapphire.stock.analysis.core.model.AsyncTask;
import com.sapphire.stock.analysis.core.model.FlinkSQLJob;
import com.sapphire.stock.analysis.core.repo.AsyncTaskRepository;

import lombok.extern.slf4j.Slf4j;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Slf4j
@Service
public class FlinkSqlProcessingSubTaskState extends ProcessingSubTaskState {

    @Override
    protected void handleInternal(SubTaskContext context, AsyncTask asyncTask) {
        FlinkSQLJob flinkSQLJob = context.getFlinkSQLJob();

        switch (asyncTask.getStatus()) {
            case AsyncTask.INIT:
            case AsyncTask.PROCESSING:
            case AsyncTask.RETRY:
                context.setCurrentState(subTaskStateFactory
                    .getByTaskTypeAndStatus(flinkSQLJob.getType(), SubTaskStatus.WAITING.name()));
                return;
            case AsyncTask.SUCCESS:
                context.setCurrentState(subTaskStateFactory
                    .getByTaskTypeAndStatus(flinkSQLJob.getType(), SubTaskStatus.FINISH.name()));
                return;
            case AsyncTask.FLINK_RETRY:
                context.setCurrentState(subTaskStateFactory
                    .getByTaskTypeAndStatus(flinkSQLJob.getType(), SubTaskStatus.RETRY.name()));
                context.setErrorCode(asyncTask.getErrorCode());
                context.setErrorMsg(asyncTask.getErrorMsg());
                return;
            case AsyncTask.FAILED:
                context.setCurrentState(subTaskStateFactory
                    .getByTaskTypeAndStatus(flinkSQLJob.getType(), SubTaskStatus.FAIL.name()));
                context.setErrorCode(asyncTask.getErrorCode());
                context.setErrorMsg(asyncTask.getErrorMsg());
                return;
            default:
                log.error("出现不支持的状态, 任务失败! asyncTaskId={}, errorStatus={}", asyncTask.getId(),
                    asyncTask.getStatus());
                context.setErrorCode(ErrorCode.SYSTEM_ERROR.name());
                context.setErrorMsg("出现不支持的状态, 任务失败! asyncTaskId=" + asyncTask.getId());
                context.setCurrentState(subTaskStateFactory
                    .getByTaskTypeAndStatus(flinkSQLJob.getType(), SubTaskStatus.FAIL.name()));
        }
    }

    @Override
    public String subTaskType() {
        return FlinkSQLJob.FLINK_SQL_JOB_TYPE_ATOMIC;
    }
}
