package com.sapphire.stock.analysis.biz.sub.state.flink;

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
            context.setCurrentState(subTaskStateFactory.getByTaskTypeAndStatus(subTaskType(),
                TaskSequenceFlowStatus.PROCESSING.name()));
        } else {
            String errorCode = processContext.getErrorCode();

            switch (errorCode) {
                case "CREATE_FIRE_TASK_ERROR":
                case "FLINK_NOT_AVAILABLE":
                    context.setCurrentState(subTaskStateFactory.getByTaskTypeAndStatus(
                        subTaskType(), TaskSequenceFlowStatus.RETRY.name()));
                    return;
                default:
                    context.setCurrentState(subTaskStateFactory
                        .getByTaskTypeAndStatus(subTaskType(), TaskSequenceFlowStatus.FAIL.name()));
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
}
