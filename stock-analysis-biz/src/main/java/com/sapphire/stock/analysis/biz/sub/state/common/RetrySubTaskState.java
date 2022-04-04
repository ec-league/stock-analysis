package com.sapphire.stock.analysis.biz.sub.state.common;

import com.sapphire.stock.analysis.biz.sub.state.SubTaskStatus;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.biz.sub.state.SubTaskContext;
import com.sapphire.stock.analysis.biz.sub.state.SubTaskState;
import com.sapphire.stock.analysis.core.model.TaskSequenceFlow;
import com.sapphire.stock.analysis.core.model.enums.TaskSequenceFlowStatus;
import com.sapphire.stock.analysis.core.repo.TaskSequenceFlowRepository;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Service
public class RetrySubTaskState implements SubTaskState {

    private static final Logger        logger = LoggerFactory.getLogger(RetrySubTaskState.class);

    private TaskSequenceFlowRepository taskSequenceFlowRepository;

    @Override
    public void handle(SubTaskContext context) {
        TaskSequenceFlow taskSequenceFlow = context.getTaskSequenceFlow();
        taskSequenceFlow.setStatus(TaskSequenceFlowStatus.RETRY.name());

        taskSequenceFlow.getTaskInfo().put("ERROR_CODE", context.getErrorCode());
        taskSequenceFlow.getTaskInfo().put("ERROR_MSG", context.getErrorMsg());

        taskSequenceFlow.setErrorCode(context.getErrorCode());
        taskSequenceFlow.setErrorMsg(context.getErrorMsg());

        logger.info("任务执行失败，进行重试，flinkSqlJob={},errorCode={},errorMsg={}",
            context.getFlinkSQLJob().getId(), context.getErrorCode(), context.getErrorMsg());

        // retry状态需要任务从头执行, 所以需要将状态重置为INIT
        taskSequenceFlow.setStatus(TaskSequenceFlowStatus.INIT.name());
        taskSequenceFlowRepository.updateFlow(taskSequenceFlow);
        context.setCurrentState(null);
    }

    @Override
    public SubTaskStatus status() {
        return SubTaskStatus.RETRY;
    }

    @Autowired
    public void setTaskSequenceFlowRepository(TaskSequenceFlowRepository taskSequenceFlowRepository) {
        this.taskSequenceFlowRepository = taskSequenceFlowRepository;
    }
}
