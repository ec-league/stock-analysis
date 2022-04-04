package com.sapphire.stock.analysis.biz.sub.state.common;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.biz.sub.state.SubTaskContext;
import com.sapphire.stock.analysis.biz.sub.state.SubTaskState;
import com.sapphire.stock.analysis.biz.sub.state.SubTaskStatus;
import com.sapphire.stock.analysis.core.model.TaskSequenceFlow;
import com.sapphire.stock.analysis.core.model.enums.TaskSequenceFlowStatus;
import com.sapphire.stock.analysis.core.repo.TaskSequenceFlowRepository;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Service
public class FailSubTaskState implements SubTaskState {
    private static final Logger        logger = LoggerFactory.getLogger(FailSubTaskState.class);

    private TaskSequenceFlowRepository taskSequenceFlowRepository;

    @Override
    public void handle(SubTaskContext context) {
        TaskSequenceFlow taskSequenceFlow = context.getTaskSequenceFlow();
        taskSequenceFlow.setStatus(TaskSequenceFlowStatus.FAIL.name());

        taskSequenceFlow.getTaskInfo().put("ERROR_CODE", context.getErrorCode());
        taskSequenceFlow.getTaskInfo().put("ERROR_MSG", context.getErrorMsg());

        taskSequenceFlow.setErrorCode(context.getErrorCode());
        taskSequenceFlow.setErrorMsg(context.getErrorMsg());

        TaskSequenceFlow parent = taskSequenceFlow.getParent();

        if (parent != null) {
            parent.setErrorSubJobName(context.getFlinkSQLJob().getName());
        }

        logger.info("任务执行失败，flinkSqlJob={},errorCode={},errorMsg={}",
            context.getFlinkSQLJob().getId(), context.getErrorCode(), context.getErrorMsg());

        taskSequenceFlowRepository.updateFlow(taskSequenceFlow);
        context.setCurrentState(null);
    }

    @Override
    public SubTaskStatus status() {
        return SubTaskStatus.FAIL;
    }

    @Autowired
    public void setTaskSequenceFlowRepository(TaskSequenceFlowRepository taskSequenceFlowRepository) {
        this.taskSequenceFlowRepository = taskSequenceFlowRepository;
    }
}
