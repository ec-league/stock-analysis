package com.sapphire.stock.analysis.biz.sub.state.flink;

import com.sapphire.stock.analysis.biz.sub.state.SubTaskStatus;
import com.sapphire.stock.analysis.core.model.AsyncTask;
import com.sapphire.stock.analysis.core.repo.AsyncTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.biz.entity.SubTaskEntity;
import com.sapphire.stock.analysis.biz.sub.state.common.InitSubTaskState;
import com.sapphire.stock.analysis.biz.sub.state.SubTaskContext;
import com.sapphire.stock.analysis.core.model.FlinkSQLJob;
import com.sapphire.stock.analysis.core.model.enums.TaskSequenceFlowStatus;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.process.ProcessExecutor;
import com.sapphire.stock.analysis.core.process.cache.ProcessConfigCache;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Service
public class FlinkSqlInitSubTaskState extends InitSubTaskState {

    private ProcessConfigCache processConfigCache;

    private ProcessExecutor    processExecutor;

    @Override
    protected void handleInternal(SubTaskContext context) {
        ProcessContext processContext = new ProcessContext();

        SubTaskEntity entity = new SubTaskEntity();
        entity.setFlinkSQLJob(context.getFlinkSQLJob());
        entity.setTaskSequenceFlow(context.getTaskSequenceFlow());

        processContext.setEntity(entity);

        processContext.setProductCode("sub_task");
        processContext.setBusinessCode(subTaskType());

        processContext.setProcessConfig(processConfigCache.getProcessConfig(processContext));

        processExecutor.execute(processContext);

        context.setErrorCode(processContext.getErrorCode());
        context.setErrorMsg(processContext.getErrorMsg());

        if (entity.isSuccess()) {
            AsyncTask asyncTask = context.getAsyncTask();
            asyncTask.getProcessInfo().getInfos().add("已经提交FLINK执行!");

            asyncTaskRepository.save(asyncTask);

            context.setCurrentState(subTaskStateFactory.getByTaskTypeAndStatus(subTaskType(),
                    SubTaskStatus.SUBMIT.name()));
        } else {
            String errorCode = processContext.getErrorCode();

            switch (errorCode) {
                case "CREATE_FIRE_TASK_ERROR":
                case "FLINK_NOT_AVAILABLE":
                    context.setCurrentState(subTaskStateFactory
                            .getByTaskTypeAndStatus(subTaskType(), SubTaskStatus.RETRY.name()));
                    return;
                default:
                    context.setCurrentState(subTaskStateFactory
                            .getByTaskTypeAndStatus(subTaskType(), SubTaskStatus.FAIL.name()));
            }
        }
    }

    @Override
    public String subTaskType() {
        return FlinkSQLJob.FLINK_SQL_JOB_TYPE_ATOMIC;
    }

    @Autowired
    public void setProcessConfigCache(ProcessConfigCache processConfigCache) {
        this.processConfigCache = processConfigCache;
    }

    @Autowired
    public void setProcessExecutor(ProcessExecutor processExecutor) {
        this.processExecutor = processExecutor;
    }

    @Autowired
    public void setAsyncTaskRepository(AsyncTaskRepository asyncTaskRepository) {
        this.asyncTaskRepository = asyncTaskRepository;
    }
}
