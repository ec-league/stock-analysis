package com.sapphire.stock.analysis.biz.task.handler;

import com.alibaba.fastjson.JSON;
import com.sapphire.stock.analysis.core.constant.TaskStatus;
import com.sapphire.stock.analysis.core.model.Task;
import com.sapphire.stock.analysis.core.repo.TaskRepository;
import com.sapphire.stock.analysis.core.task.TaskHandler;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * @author 柏云鹏
 * @since 2022/8/24.
 */
@Slf4j
@Service
public abstract class BaseTaskHandler implements TaskHandler {

    @Resource
    protected TaskRepository taskRepository;

    public void completeTask(Task task) {
        try {
            task.setStatus(TaskStatus.PROCESSING.name());

            if (!taskRepository.save(task)) {
                return;
            }

            handleInternal(task);
        } catch (Exception e) {
            log.error("处理任务异常! task={}", JSON.toJSONString(task), e);
            dealFailure(task, e.getMessage());
        }
    }

    /**
     * 任务内部处理, 包括正向成功处理, 容错处理等. 当该方法执行完毕后, 任务百分百可以进入一个合法的状态
     *
     * @param task, 任务上下文
     */
    protected abstract void handleInternal(Task taskBO);

    protected void dealFailure(Task taskBO, String msg) {
        taskBO.setResultMsg(msg);
        if (taskBO.getRetryTimes() > 3) {
            taskBO.setStatus(TaskStatus.FAIL.name());
        } else {
            taskBO.setStatus(TaskStatus.RETRY.name());
            taskBO.setRetryTimes(taskBO.getRetryTimes() + 1);
        }

        taskRepository.save(taskBO);
    }

    protected void dealSuccess(Task task) {
        task.setStatus(TaskStatus.SUCCESS.name());
        taskRepository.save(task);
    }
}
