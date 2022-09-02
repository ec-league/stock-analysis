package com.sapphire.stock.analysis.biz.sub.state.common;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.biz.sub.state.SubTaskContext;
import com.sapphire.stock.analysis.biz.sub.state.SubTaskState;
import com.sapphire.stock.analysis.biz.sub.state.SubTaskStateFactory;
import com.sapphire.stock.analysis.biz.sub.state.SubTaskStatus;
import com.sapphire.stock.analysis.core.model.FlinkSQLJob;
import com.sapphire.stock.analysis.core.repo.AsyncTaskRepository;
import com.sapphire.stock.analysis.core.task.AsyncTaskManager;

/**
 * Author: 柏云鹏
 * Date: 2021/11/3.
 */
@Service
public class SubmitSubTaskState implements SubTaskState {

    protected AsyncTaskRepository asyncTaskRepository;

    protected AsyncTaskManager asyncTaskManager;

    protected SubTaskStateFactory subTaskStateFactory;

    @Override
    public void handle(SubTaskContext context) {
        FlinkSQLJob flinkSQLJob = context.getFlinkSQLJob();

        context.setCurrentState(subTaskStateFactory.getByTaskTypeAndStatus(flinkSQLJob.getType(),
            SubTaskStatus.PROCESSING.name()));
    }

    @Override
    public SubTaskStatus status() {
        return SubTaskStatus.SUBMIT;
    }

    @Autowired
    public void setAsyncTaskRepository(AsyncTaskRepository asyncTaskRepository) {
        this.asyncTaskRepository = asyncTaskRepository;
    }

    @Autowired
    public void setAsyncTaskManager(AsyncTaskManager asyncTaskManager) {
        this.asyncTaskManager = asyncTaskManager;
    }

    @Autowired
    public void setSubTaskStateFactory(SubTaskStateFactory subTaskStateFactory) {
        this.subTaskStateFactory = subTaskStateFactory;
    }
}
