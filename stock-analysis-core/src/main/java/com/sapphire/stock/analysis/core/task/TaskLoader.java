package com.sapphire.stock.analysis.core.task;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ScheduledFuture;

import javax.annotation.PostConstruct;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.scheduling.support.CronSequenceGenerator;
import org.springframework.scheduling.support.CronTrigger;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.sapphire.stock.analysis.common.dal.dao.SchedulerConfigDao;
import com.sapphire.stock.analysis.common.dal.model.SchedulerConfigDO;
import com.sapphire.stock.analysis.core.cache.ConfigCache;
import com.sapphire.stock.analysis.core.repo.TaskRepository;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
@Service
public class TaskLoader {
    private static final Logger             logger             = LoggerFactory
        .getLogger("TASK-DIGEST");

    @Autowired
    private TaskRepository                  taskRepository;

    @Autowired
    private SchedulerConfigDao              schedulerConfigDao;

    @Autowired
    private TaskConsumer                    taskConsumer;

    @Qualifier("taskScheduler")
    @Autowired
    private TaskScheduler                   taskScheduler;

    @Autowired
    private ConfigCache                     configCache;

    private Map<String, ScheduledFuture<?>> scheduledFutureMap = new ConcurrentHashMap<>();

    private static final String             SCHEDULER_OPEN     = "T";

    @Qualifier("taskLoaderExecutor")
    @Autowired
    private ThreadPoolTaskExecutor          taskLoaderExecutor;

    @PostConstruct
    public void reStartProcessingTask() {
        taskRepository.reStartProcessingTask();

        registerCronTrigger();
    }

    /**
     * 注册所有对应的cronTrigger
     */
    public void registerCronTrigger() {
        if (configCache.isMaster()) {
            List<SchedulerConfigDO> schedulerConfigs = schedulerConfigDao.selectAll();

            for (SchedulerConfigDO schedulerConfig : schedulerConfigs) {
                if (!StringUtils.equals(SCHEDULER_OPEN, schedulerConfig.getStatus())) {
                    continue;
                }
                if (!isValid(schedulerConfig.getCronExpression())) {
                    logger
                        .warn("Cron Expression is not correct! schedulerConfig=" + schedulerConfig);
                    continue;
                }

                registerScheduler(schedulerConfig);
            }
        }
    }

    private boolean isValid(String cronExpression) {
        return CronSequenceGenerator.isValidExpression(cronExpression);
    }

    /**
     * 调整主节点, 任务配置时进行触发
     */
    public void reloadScheduler() {
        for (Map.Entry<String, ScheduledFuture<?>> stringScheduledFutureEntry : scheduledFutureMap
            .entrySet()) {
            stringScheduledFutureEntry.getValue().cancel(false);
        }

        registerCronTrigger();
    }

    public void loadTasks(final String taskType, final int singleNum) {
        try {
            List<Long> taskIdList = taskRepository.selectFireTasks(taskType, singleNum);
            if (CollectionUtils.isEmpty(taskIdList)) {
                return;
            }
            for (final Long taskFlowId : taskIdList) {
                taskLoaderExecutor.execute(new Runnable() {
                    @Override
                    public void run() {
                        taskConsumer.consumeTask(taskFlowId);
                    }
                });
            }
        } catch (Exception e) {
            logger.info("consume task fail");
        }
    }

    public void modifyScheduler(SchedulerConfigDO schedulerConfig) {
        ScheduledFuture<?> scheduledFuture = scheduledFutureMap.get(schedulerConfig.getTaskType());

        if (scheduledFuture != null) {

            scheduledFuture.cancel(false);
            scheduledFutureMap.remove(schedulerConfig.getTaskType());
        }
        if (StringUtils.equals(SCHEDULER_OPEN, schedulerConfig.getStatus())) {
            registerScheduler(schedulerConfig);
        }
    }

    public void registerScheduler(SchedulerConfigDO schedulerConfig) {
        final String taskType = schedulerConfig.getTaskType();
        final int singleNum = schedulerConfig.getLimit();

        ScheduledFuture<?> scheduledFuture = taskScheduler.schedule(new Runnable() {
            @Override
            public void run() {
                loadTasks(taskType, singleNum);
            }
        }, new CronTrigger(schedulerConfig.getCronExpression()));

        scheduledFutureMap.put(taskType, scheduledFuture);
    }
}
