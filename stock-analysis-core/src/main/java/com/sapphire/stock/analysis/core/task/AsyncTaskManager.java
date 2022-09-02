package com.sapphire.stock.analysis.core.task;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.*;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.core.cache.ConfigCache;
import com.sapphire.stock.analysis.core.repo.AsyncTaskRepository;

/**
 * 1. 管理已经提交的任务, 对已经完成的任务, 定期清理掉.
 * Author: 柏云鹏
 * Date: 2021/11/2.
 */
@Service
public class AsyncTaskManager {
    // 用来管理已经提交的任务.
    private Map<Long, Future<?>>     futureMap = new ConcurrentHashMap<>();

    private ScheduledExecutorService ses       = Executors.newScheduledThreadPool(1);

    @Autowired
    private AsyncTaskRepository asyncTaskRepository;

    @Autowired
    private ConfigCache configCache;

    @PostConstruct
    public void init() {
        ses.scheduleAtFixedRate(new Runnable() {
            @Override
            public void run() {
                List<Long> ids = new ArrayList<>();

                for (Map.Entry<Long, Future<?>> entry : futureMap.entrySet()) {
                    Future<?> future = entry.getValue();
                    if (future.isDone() || future.isCancelled()) {
                        ids.add(entry.getKey());
                    }
                }

                for (Long id : ids) {
                    futureMap.remove(id);
                }
            }
        }, 120, 120, TimeUnit.SECONDS);

        if (configCache.isMaster()) {
            asyncTaskRepository.resetToRetry();
        }
    }

    // 需要autowire
    @Autowired
    private ThreadPoolTaskExecutor pollTaskExecutor;

    // 取消对应的任务.
    public void cancel(long id) {
        Future<?> future = futureMap.get(id);

        if (future == null) {
            return;
        }

        future.cancel(true);

        futureMap.remove(id);
    }

    public void submitTask(long id, Runnable runnable) {
        Future<?> future = pollTaskExecutor.submit(runnable);
        futureMap.put(id, future);
    }
}
