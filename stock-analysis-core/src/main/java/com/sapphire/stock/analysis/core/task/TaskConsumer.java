package com.sapphire.stock.analysis.core.task;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.core.constant.TaskStatus;
import com.sapphire.stock.analysis.core.model.Task;
import com.sapphire.stock.analysis.core.repo.TaskRepository;

import lombok.extern.slf4j.Slf4j;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
@Service
@Slf4j
public class TaskConsumer {

    @Autowired
    private TaskRepository     taskRepository;

    @Autowired
    private TaskHandlerFactory taskHandlerFactory;

    public void consumeTask(long taskId) {
        // 1. 根据任务id捞取任务详情
        Task task = taskRepository.selectTaskById(taskId);

        try {
            // 2. 任务置为处理中
            String status = task.getStatus();

            if (!StringUtils.equals(status, "INIT") && !StringUtils.equals(status, "RETRY")) {
                log.warn("Task executed repeated! taskId={}", task.getId());
                return;
            }

            task.setStatus(TaskStatus.PROCESSING.name());
            boolean success = taskRepository.save(task);

            if (!success) {
                log.info("Update task status fail,taskId={}", taskId);
                return;
            }

            String taskType = task.getTaskType();

            // 3. 任务具体逻辑执行
            TaskHandler taskHandler = taskHandlerFactory.selectTaskHandlerByTaskType(taskType);

            // 4. 任务处理完成, 落库 RETRY状态或者FAIL状态
            taskHandler.completeTask(task);
        } catch (TaskExecuteException e) {
            log.error("");
            if (e.isNeedRetry() && task.getRetryTimes() < 3) {
                task.setRetryTimes(task.getRetryTimes() + 1);
                task.setStatus(TaskStatus.RETRY.name());
            } else {
                task.setStatus(TaskStatus.FAIL.name());
            }
            task.setResultMsg(e.getErrorMsg());
            taskRepository.save(task);
        } catch (Exception e) {
            log.error("Consume task failed, taskId={}", taskId, e);
            task.setStatus(TaskStatus.FAIL.name());
            task.setResultMsg(e.getMessage());
            taskRepository.save(task);
        } finally {
            log.info("CONSUME-DIGEST taskId={}, taskType={}, taskStatus={}", taskId,
                task.getTaskType(), task.getStatus());
        }
    }
}
