package com.sapphire.stock.analysis.biz.sub.state.common;

import com.sapphire.stock.analysis.biz.sub.state.SubTaskContext;
import com.sapphire.stock.analysis.biz.sub.state.SubTaskState;
import com.sapphire.stock.analysis.biz.sub.state.SubTaskStateFactory;
import com.sapphire.stock.analysis.biz.sub.state.SubTaskStatus;
import com.sapphire.stock.analysis.common.util.exception.ErrorCode;
import com.sapphire.stock.analysis.core.model.AsyncTask;
import com.sapphire.stock.analysis.core.model.FlinkSQLJob;
import com.sapphire.stock.analysis.core.repo.AsyncTaskRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Slf4j
@Service
public class ProcessingSubTaskState implements SubTaskState {

    protected SubTaskStateFactory subTaskStateFactory;

    protected AsyncTaskRepository asyncTaskRepository;

    @Override
    public void handle(SubTaskContext context) {
        FlinkSQLJob flinkSQLJob = context.getFlinkSQLJob();

        long asyncTaskId = flinkSQLJob.getAsyncTaskId();

        AsyncTask asyncTask = asyncTaskRepository.selectById(asyncTaskId);

        if (asyncTask == null) {
            log.error("异步任务不存在, 可能任务参数被调整修改过!");
            context.setCurrentState(subTaskStateFactory
                    .getByTaskTypeAndStatus(flinkSQLJob.getType(), SubTaskStatus.FAIL.name()));
            return;
        }

        handleInternal(context, asyncTask);
    }

    protected void handleInternal(SubTaskContext context, AsyncTask asyncTask) {
        FlinkSQLJob flinkSQLJob = context.getFlinkSQLJob();

        switch (asyncTask.getStatus()) {
            case AsyncTask.INIT:
            case AsyncTask.PROCESSING:
                context.setCurrentState(subTaskStateFactory
                        .getByTaskTypeAndStatus(flinkSQLJob.getType(), SubTaskStatus.WAITING.name()));
                return;
            case AsyncTask.SUCCESS:
                context.setCurrentState(subTaskStateFactory
                        .getByTaskTypeAndStatus(flinkSQLJob.getType(), SubTaskStatus.FINISH.name()));
                return;
            case AsyncTask.FAILED:
                context.setCurrentState(subTaskStateFactory
                        .getByTaskTypeAndStatus(flinkSQLJob.getType(), SubTaskStatus.FAIL.name()));
                context.setErrorCode(asyncTask.getErrorCode());
                context.setErrorMsg(asyncTask.getErrorMsg());
                return;
            case AsyncTask.RETRY:
                context.setCurrentState(subTaskStateFactory
                        .getByTaskTypeAndStatus(flinkSQLJob.getType(), SubTaskStatus.RETRY.name()));
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
    public SubTaskStatus status() {
        return SubTaskStatus.PROCESSING;
    }

    @Autowired
    public void setSubTaskStateFactory(SubTaskStateFactory subTaskStateFactory) {
        this.subTaskStateFactory = subTaskStateFactory;
    }

    @Autowired
    public void setAsyncTaskRepository(AsyncTaskRepository asyncTaskRepository) {
        this.asyncTaskRepository = asyncTaskRepository;
    }
}
