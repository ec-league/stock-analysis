package com.sapphire.stock.analysis.core.task;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
@Service
public class TaskHandlerFactory {

    private final Map<String, TaskHandler> taskHandlerMap = new HashMap<>();

    @Resource
    private ApplicationContext             applicationContext;

    @PostConstruct
    public void init() {
        Map<String, TaskHandler> beansOfType = applicationContext.getBeansOfType(TaskHandler.class);

        for (TaskHandler value : beansOfType.values()) {
            taskHandlerMap.put(value.getTaskType(), value);
        }
    }

    public TaskHandler selectTaskHandlerByTaskType(String taskType) {
        return taskHandlerMap.get(taskType);
    }
}
