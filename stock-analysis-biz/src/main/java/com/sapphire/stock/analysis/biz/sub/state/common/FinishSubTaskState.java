package com.sapphire.stock.analysis.biz.sub.state.common;

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
public class FinishSubTaskState implements SubTaskState {
    private TaskSequenceFlowRepository taskSequenceFlowRepository;

    @Override
    public void handle(SubTaskContext context) {
        TaskSequenceFlow taskSequenceFlow = context.getTaskSequenceFlow();
        taskSequenceFlow.setStatus(TaskSequenceFlowStatus.FINISH.name());
        taskSequenceFlowRepository.updateFlow(taskSequenceFlow);
        context.setCurrentState(null);
    }

    @Override
    public SubTaskStatus status() {
        return SubTaskStatus.FINISH;
    }

    @Autowired
    public void setTaskSequenceFlowRepository(TaskSequenceFlowRepository taskSequenceFlowRepository) {
        this.taskSequenceFlowRepository = taskSequenceFlowRepository;
    }
}
