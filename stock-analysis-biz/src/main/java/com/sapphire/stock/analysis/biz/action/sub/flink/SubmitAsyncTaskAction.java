package com.sapphire.stock.analysis.biz.action.sub.flink;

import com.sapphire.stock.analysis.biz.action.Action;
import com.sapphire.stock.analysis.biz.entity.SubTaskEntity;
import com.sapphire.stock.analysis.common.util.exception.ErrorCode;
import com.sapphire.stock.analysis.core.constant.TaskStatus;
import com.sapphire.stock.analysis.core.exception.AthenaException;
import com.sapphire.stock.analysis.core.model.FlinkSQLJob;
import com.sapphire.stock.analysis.core.model.Task;
import com.sapphire.stock.analysis.core.model.TaskSequenceFlow;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.repo.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;
import java.util.HashMap;

/**
 * @author 柏云鹏
 * @since 2022/9/2.
 */
@Action("submitAsyncTaskAction")
public class SubmitAsyncTaskAction implements BusinessAction {
    private TaskRepository taskRepository;

    @Override
    public void process(ProcessContext processContext) {
        SubTaskEntity entity = processContext.getEntity();

        FlinkSQLJob flinkSQLJob = entity.getFlinkSQLJob();

        Task task = new Task();
        task.setStatus(TaskStatus.INIT.name());
        task.setTaskType("SUB_TASK_ASYNC_TASK");
        task.setExtInfo(new HashMap<>());
        task.getExtInfo().put("FLINK_SQL_JOB_ID", String.valueOf(flinkSQLJob.getId()));
        task.getExtInfo().put("ASYNC_TASK_ID", String.valueOf(flinkSQLJob.getAsyncTaskId()));
        task.setGmtCreate(new Date());
        task.setGmtModified(new Date());
        task.setFireDate(new Date());

        boolean b = taskRepository.save(task);

        if (!b) {
            throw new AthenaException(ErrorCode.CREATE_FIRE_TASK_ERROR);
        }

        TaskSequenceFlow taskSequenceFlow = entity.getTaskSequenceFlow();

        if (taskSequenceFlow != null) {
            taskSequenceFlow.setAsyncTaskId(task.getId());
        }
    }

    @Autowired
    public void setTaskRepository(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }
}
