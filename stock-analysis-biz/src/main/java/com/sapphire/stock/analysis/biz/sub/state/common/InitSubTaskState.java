package com.sapphire.stock.analysis.biz.sub.state.common;

import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.sapphire.stock.analysis.biz.sub.state.SubTaskContext;
import com.sapphire.stock.analysis.biz.sub.state.SubTaskState;
import com.sapphire.stock.analysis.biz.sub.state.SubTaskStateFactory;
import com.sapphire.stock.analysis.biz.sub.state.SubTaskStatus;
import com.sapphire.stock.analysis.core.model.*;
import com.sapphire.stock.analysis.core.model.enums.TaskSequenceFlowStatus;
import com.sapphire.stock.analysis.core.repo.AsyncTaskRepository;
import com.sapphire.stock.analysis.core.repo.FlinkScheduleJobRepository;
import com.sapphire.stock.analysis.core.repo.FlinkSqlJobRepository;
import com.sapphire.stock.analysis.core.repo.TaskSequenceFlowRepository;

import lombok.Setter;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Service
public class InitSubTaskState implements SubTaskState {
    private static final Logger          logger = LoggerFactory.getLogger(InitSubTaskState.class);

    @Setter
    @Autowired
    protected SubTaskStateFactory        subTaskStateFactory;

    @Setter
    @Autowired
    private FlinkSqlJobRepository        flinkSqlJobRepository;

    @Setter
    @Autowired
    private FlinkScheduleJobRepository   flinkScheduleJobRepository;

    @Setter
    @Autowired
    protected TaskSequenceFlowRepository taskSequenceFlowRepository;

    @Autowired
    protected AsyncTaskRepository          asyncTaskRepository;

    @Override
    public void handle(SubTaskContext context) {
        logger.info("start to process InitSubTaskState");
        // 判断前置是否需要执行
        if (!shouldExecute(context)) {
            logger.info("任务经过判断, 无需执行!");
            context.setCurrentState(subTaskStateFactory.getByTaskTypeAndStatus(subTaskType(),
                TaskSequenceFlowStatus.FINISH.name()));
            return;
        }

        //region 将调度任务参数, 写入到子任务中
        FlinkScheduleJob flinkScheduleJob = context.getFlinkScheduleJob();
        FlinkSQLJob flinkSQLJob = context.getFlinkSQLJob();


        // 当前情况下, async task 仅会在 init状态中创建.
        AsyncTask asyncTask = new AsyncTask();
        asyncTask.setAsyncType(flinkSQLJob.getType());
        asyncTask.setStatus(AsyncTask.INIT);
        ProcessInfo processInfo = new ProcessInfo();
        processInfo.setStartTime(new Date());
        asyncTask.setProcessInfo(processInfo);

        asyncTaskRepository.save(asyncTask);

        context.setAsyncTask(asyncTask);

        flinkSQLJob.setAsyncTaskId(asyncTask.getId());
        flinkSqlJobRepository.save(flinkSQLJob);

        // flink sql 任务单次执行, 不包含调度任务.
        if (flinkScheduleJob != null) {
            String partitionDate = context.getPartitionDate();

            flinkSQLJob.getExtInfo().getReplaceParams()
                .putAll(flinkScheduleJob.getExtInfo().getReplaceParams());

            flinkSQLJob.addReplaceParams("partitionDate", partitionDate);

            flinkSqlJobRepository.save(flinkSQLJob);

            //region 写入当前执行子任务信息
            flinkScheduleJob.getExtInfo().setCurrentRunningJob(flinkSQLJob.getName());
            flinkScheduleJobRepository.save(flinkScheduleJob);
            //endregion 
        }

        //endregion

        TaskSequenceFlow taskSequenceFlow = context.getTaskSequenceFlow();

        if (taskSequenceFlow != null) {
            taskSequenceFlow.setStatus(TaskSequenceFlowStatus.PROCESSING.name());
            long start = System.currentTimeMillis();
            if (!taskSequenceFlow.getTaskInfo().containsKey("start")) {
                taskSequenceFlow.getTaskInfo().put("start", String.valueOf(start));
            }
            taskSequenceFlowRepository.updateFlow(taskSequenceFlow);
        }
        handleInternal(context);
    }

    protected void handleInternal(SubTaskContext context) {
        FlinkSQLJob flinkSQLJob = context.getFlinkSQLJob();

        context.setCurrentState(subTaskStateFactory.getByTaskTypeAndStatus(flinkSQLJob.getType(),
            SubTaskStatus.SUBMIT.name()));
    }

    private boolean shouldExecute(SubTaskContext context) {
        FlinkSQLJob flinkSQLJob = context.getFlinkSQLJob();

        List<String> executeFactor = flinkSQLJob.getExtInfo().getExecuteFactor();

        if (CollectionUtils.isEmpty(executeFactor)) {
            //默认没有条件可以执行
            return true;
        }

        return false;
    }

    @Override
    public SubTaskStatus status() {
        return SubTaskStatus.INIT;
    }
}
