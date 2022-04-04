package com.sapphire.stock.analysis.biz.sub.state.flink;

import com.sapphire.stock.analysis.biz.entity.SubTaskEntity;
import com.sapphire.stock.analysis.biz.sub.state.SubTaskContext;
import com.sapphire.stock.analysis.biz.sub.state.SubTaskState;
import com.sapphire.stock.analysis.biz.sub.state.SubTaskStateFactory;
import com.sapphire.stock.analysis.biz.sub.state.SubTaskStatus;
import com.sapphire.stock.analysis.core.model.FlinkSQLJob;
import com.sapphire.stock.analysis.core.model.TaskSequenceFlow;
import com.sapphire.stock.analysis.core.model.enums.TaskSequenceFlowStatus;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.process.ProcessExecutor;
import com.sapphire.stock.analysis.core.process.cache.ProcessConfigCache;
import com.sapphire.stock.analysis.core.repo.TaskSequenceFlowRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Service
public class FlinkSqlPostProcessSubTaskState implements SubTaskState {

    private ProcessExecutor processExecutor;

    private ProcessConfigCache processConfigCache;

    private SubTaskStateFactory subTaskStateFactory;

    @Autowired
    private TaskSequenceFlowRepository taskSequenceFlowRepository;

    @Override
    public void handle(SubTaskContext context) {
        ProcessContext processContext = new ProcessContext();
        TaskSequenceFlow taskSequenceFlow = context.getTaskSequenceFlow();
        taskSequenceFlow.setStatus(TaskSequenceFlowStatus.POST_PROCESS.name());
        taskSequenceFlowRepository.updateFlow(taskSequenceFlow);

        SubTaskEntity entity = new SubTaskEntity();
        entity.setFlinkSQLJob(context.getFlinkSQLJob());
        entity.setTaskSequenceFlow(context.getTaskSequenceFlow());

        processContext.setEntity(entity);

        processContext.setProductCode("sub_task");
        processContext.setBusinessCode("flink_post_process");

        processContext.setProcessConfig(processConfigCache.getProcessConfig(processContext));

        processExecutor.execute(processContext);

        context.setErrorCode(processContext.getErrorCode());
        context.setErrorMsg(processContext.getErrorMsg());

        if (entity.isSuccess()) {
            context.setCurrentState(subTaskStateFactory.getByTaskTypeAndStatus(subTaskType(),
                    TaskSequenceFlowStatus.FINISH.name()));
        } else {
            // 后置处理可以重试!
            context.setCurrentState(subTaskStateFactory.getByTaskTypeAndStatus(subTaskType(),
                    TaskSequenceFlowStatus.RETRY.name()));
        }
    }

    @Override
    public String subTaskType() {
        return FlinkSQLJob.FLINK_SQL_JOB_TYPE_ATOMIC;
    }

    @Override
    public SubTaskStatus status() {
        return SubTaskStatus.POST_PROCESS;
    }

    @Autowired
    public void setProcessExecutor(ProcessExecutor processExecutor) {
        this.processExecutor = processExecutor;
    }

    @Autowired
    public void setProcessConfigCache(ProcessConfigCache processConfigCache) {
        this.processConfigCache = processConfigCache;
    }

    @Autowired
    public void setSubTaskStateFactory(SubTaskStateFactory subTaskStateFactory) {
        this.subTaskStateFactory = subTaskStateFactory;
    }
}
