package com.sapphire.stock.analysis.biz.task.handler;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;

import com.sapphire.stock.analysis.core.constant.TaskStatus;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.time.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.biz.task.handler.flink.TaskSequenceFlowExecutor;
import com.sapphire.stock.analysis.core.model.FlinkScheduleJob;
import com.sapphire.stock.analysis.core.model.Task;
import com.sapphire.stock.analysis.core.model.TaskSequenceFlow;
import com.sapphire.stock.analysis.core.model.enums.TaskSequenceFlowStatus;
import com.sapphire.stock.analysis.core.repo.FlinkScheduleJobRepository;
import com.sapphire.stock.analysis.core.repo.TaskRepository;
import com.sapphire.stock.analysis.core.repo.TaskSequenceFlowRepository;
import com.sapphire.stock.analysis.core.task.TaskHandler;

import lombok.extern.slf4j.Slf4j;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Service
@Slf4j
public class SchedulerJobFlowHandler implements TaskHandler {
    private TaskSequenceFlowExecutor   taskSequenceFlowExecutor;

    private TaskSequenceFlowRepository taskSequenceFlowRepository;

    private FlinkScheduleJobRepository flinkScheduleJobRepository;

    private TaskRepository             taskRepository;

    private Map<Integer, Integer>      waitMinutes;

    @PostConstruct
    public void init() {
        waitMinutes = new HashMap<>();
        waitMinutes.put(0, 5);
        waitMinutes.put(1, 5);
        waitMinutes.put(2, 5);
        waitMinutes.put(3, 5);
        waitMinutes.put(4, 10);
        waitMinutes.put(5, 30);
        waitMinutes.put(6, 30);
        waitMinutes.put(7, 30);
        waitMinutes.put(8, 60);
        waitMinutes.put(9, 120);
        waitMinutes.put(10, 120);
    }

    @Override
    public void completeTask(Task task) {
        Map<String, String> taskProfile = task.getExtInfo();

        boolean singleExecution = isSingleExecution(taskProfile);

        long taskSequenceFlowId = Long.parseLong(taskProfile.get("taskParentFlowId"));

        TaskSequenceFlow parent = taskSequenceFlowRepository.selectById(taskSequenceFlowId);

        List<TaskSequenceFlow> childSequenceFlow = taskSequenceFlowRepository
            .selectByParentId(taskSequenceFlowId);
        parent.setChildren(childSequenceFlow);

        taskSequenceFlowExecutor.execute(parent, singleExecution);

        dealTaskFinish(parent, task);
    }

    @Override
    public String getTaskType() {
        return "FLINK_SCHEDULER_TASK";
    }

    private boolean isSingleExecution(Map<String, String> taskProfile) {
        String singleTime = taskProfile.get("singleTime");

        return StringUtils.equals(singleTime, "T");
    }

    private void dealTaskFinish(TaskSequenceFlow parent, Task task) {
        TaskSequenceFlowStatus status = parent.currentStatus();

        task.setGmtModified(new Date());

        FlinkScheduleJob flinkScheduleJob = flinkScheduleJobRepository
            .selectById(parent.getSchedulerJobId());

        switch (status) {
            case RETRY:
                task.setRetryTimes(task.getRetryTimes() + 1);
                task.setFireDate(DateUtils.addMinutes(task.getFireDate(),
                    waitMinutes.get(task.getRetryTimes())));
                task.setStatus(TaskStatus.RETRY.name());
                if (task.getRetryTimes() > 10) {
                    task.setStatus(TaskStatus.FAIL.name());
                    task.setResultMsg("重试次数超出限制, 任务失败!");
                    parent.setStatus(TaskSequenceFlowStatus.FAIL.name());
                    parent.setErrorCode("RETRY_10_TIMES");
                    parent.setErrorMsg("重试次数超出限制, 任务失败!");
                    taskSequenceFlowRepository.updateFlow(parent);
                }
                break;
            case PROCESSING:
                task.setStatus(TaskStatus.RETRY.name());
                break;
            case FAIL:
                task.setStatus(TaskStatus.FAIL.name());
                task.setResultMsg(parent.getErrorMsg());

                break;
            case FINISH:
                task.setStatus(TaskStatus.SUCCESS.name());
                if (flinkScheduleJob != null && flinkScheduleJob.getExtInfo() != null && StringUtils
                    .equalsIgnoreCase(flinkScheduleJob.getExtInfo().getNeedEndNotice(), "T")) {
                }
                break;
            default:
                task.setStatus(TaskStatus.FAIL.name());
                task.setResultMsg("任务流出现错误, 状态为" + status);
                break;
        }

        taskRepository.save(task);
    }

    @Autowired
    public void setTaskSequenceFlowExecutor(TaskSequenceFlowExecutor taskSequenceFlowExecutor) {
        this.taskSequenceFlowExecutor = taskSequenceFlowExecutor;
    }

    @Autowired
    public void setTaskSequenceFlowRepository(TaskSequenceFlowRepository taskSequenceFlowRepository) {
        this.taskSequenceFlowRepository = taskSequenceFlowRepository;
    }

    @Autowired
    public void setTaskRepository(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Autowired
    public void setFlinkScheduleJobRepository(FlinkScheduleJobRepository flinkScheduleJobRepository) {
        this.flinkScheduleJobRepository = flinkScheduleJobRepository;
    }
}
