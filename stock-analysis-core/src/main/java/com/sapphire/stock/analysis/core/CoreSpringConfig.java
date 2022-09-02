package com.sapphire.stock.analysis.core;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;

import com.sapphire.stock.analysis.common.dal.DalSpringConfig;
import com.sapphire.stock.analysis.common.integration.IntegrationSpringConfig;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
@Import({ DalSpringConfig.class, IntegrationSpringConfig.class })
@SpringBootApplication
public class CoreSpringConfig {

    @Bean("taskScheduler")
    public TaskScheduler getTaskScheduler() {
        ThreadPoolTaskScheduler taskExecutor = new ThreadPoolTaskScheduler();

        taskExecutor.setThreadNamePrefix("scheduler-");

        taskExecutor.initialize();

        return taskExecutor;
    }

    @Bean("pollTaskExecutor")
    public ThreadPoolTaskExecutor getPollTaskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setQueueCapacity(100);
        executor.setCorePoolSize(10);

        executor.initialize();
        return executor;
    }

    @Bean("taskLoaderExecutor")
    public ThreadPoolTaskExecutor getThreadPoolTaskExecutor() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();

        taskExecutor.setCorePoolSize(10);
        taskExecutor.setQueueCapacity(100);
        taskExecutor.setThreadNamePrefix("task-consume-");

        taskExecutor.initialize();

        return taskExecutor;
    }
}
