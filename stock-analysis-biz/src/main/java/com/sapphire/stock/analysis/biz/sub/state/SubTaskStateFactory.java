package com.sapphire.stock.analysis.biz.sub.state;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.common.util.JsonUtils;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Service
public class SubTaskStateFactory {
    private static final Logger       logger   = LoggerFactory.getLogger(SubTaskStateFactory.class);
    private Map<String, SubTaskState> cacheMap = new HashMap<>();

    @Autowired
    private ApplicationContext        applicationContext;

    @PostConstruct
    private void init() {
        Map<String, SubTaskState> beansOfType = applicationContext
            .getBeansOfType(SubTaskState.class);

        for (SubTaskState value : beansOfType.values()) {
            cacheMap.put(value.subTaskType() + "_" + value.status(), value);
        }
    }

    public SubTaskState getByTaskTypeAndStatus(String subTaskType, String status) {
        SubTaskState state = null;
        try {
            String key = subTaskType + "_" + status;

            if (cacheMap.containsKey(key)) {
                state = cacheMap.get(key);
                return state;
            }

            state = cacheMap.get("default_" + status);
            return state;
        } finally {
            logger.info("cacheMap={}", JsonUtils.toJsonStr(cacheMap));
            logger.info("state={}", JsonUtils.toJsonStr(state));
            if (state != null) {
                logger.info("SubTaskState Factory, subTaskType={}, status={}", state.subTaskType(),
                    state.status());
            }
        }
    }
}
