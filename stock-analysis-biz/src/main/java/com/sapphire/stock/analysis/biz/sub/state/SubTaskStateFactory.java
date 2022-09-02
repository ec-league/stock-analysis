package com.sapphire.stock.analysis.biz.sub.state;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Slf4j
@Service
public class SubTaskStateFactory {
    private Map<String, SubTaskState> cacheMap = new ConcurrentHashMap<>();

    @Autowired
    private ApplicationContext        applicationContext;

    private synchronized void init() {
        Map<String, SubTaskState> beansOfType = applicationContext
            .getBeansOfType(SubTaskState.class);

        for (SubTaskState value : beansOfType.values()) {
            cacheMap.put(value.subTaskType() + "_" + value.status(), value);
        }
    }

    public SubTaskState getByTaskTypeAndStatus(String subTaskType, String status) {
        return getByTaskTypeAndStatus(subTaskType, status, false);
    }

    private SubTaskState getByTaskTypeAndStatus(String subTaskType, String status,
                                                boolean isRecall) {
        SubTaskState state = null;
        try {
            String key = subTaskType + "_" + status;

            if (cacheMap.containsKey(key)) {
                state = cacheMap.get(key);
                return state;
            }

            state = cacheMap.get("default_" + status);

            if (state == null && !isRecall) {
                this.init();
                return getByTaskTypeAndStatus(subTaskType, status, true);
            }

            return state;
        } finally {
            if (state != null) {
                log.info("SubTaskState Factory, subTaskType={}, status={}, state={}",
                    state.subTaskType(), state.status(), state.getClass().getSimpleName());
            }
        }
    }
}
