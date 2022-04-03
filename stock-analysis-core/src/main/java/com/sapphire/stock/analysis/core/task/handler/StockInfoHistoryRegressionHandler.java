package com.sapphire.stock.analysis.core.task.handler;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.common.dal.model.StockDailyDigestDO;
import com.sapphire.stock.analysis.common.integration.client.HistoryStockClient;
import com.sapphire.stock.analysis.core.converter.DomainConverter;
import com.sapphire.stock.analysis.core.model.StockDailyDigest;
import com.sapphire.stock.analysis.core.model.Task;
import com.sapphire.stock.analysis.core.repo.StockDailyDigestRepo;
import com.sapphire.stock.analysis.core.repo.TaskRepository;
import com.sapphire.stock.analysis.core.task.TaskExecuteException;
import com.sapphire.stock.analysis.core.task.TaskHandler;

import lombok.extern.slf4j.Slf4j;

/**
 * Author: 柏云鹏 Date: 2022/4/3.
 */
@Slf4j
@Service
public class StockInfoHistoryRegressionHandler implements TaskHandler {

    @Autowired
    private TaskRepository       taskRepository;

    @Autowired
    private HistoryStockClient   historyStockClient;

    @Autowired
    private StockDailyDigestRepo stockDailyDigestRepo;

    @Override
    public void completeTask(Task task) {
        Map<String, String> extInfo = task.getExtInfo();

        String startDate = extInfo.get("partitionDate");
        String code = extInfo.get("code");

        try {
            Date start = new SimpleDateFormat("yyyy-MM-dd").parse(startDate);
            Calendar instance = Calendar.getInstance();
            instance.setTime(start);
            instance.add(Calendar.YEAR, 1);

            String endDate = new SimpleDateFormat("yyyy-MM-dd").format(instance.getTime());

            List<StockDailyDigestDO> stockDailyDigestDOS = historyStockClient
                .queryStockHistory(code, startDate, endDate);

            for (StockDailyDigestDO stockDailyDigestDO : stockDailyDigestDOS) {
                StockDailyDigest domain = DomainConverter.toDomain(stockDailyDigestDO);
                stockDailyDigestRepo.save(domain);
            }

            // 只回溯到当前
            if (instance.getTime().after(new Date())) {
                return;
            }

            // 创建下一次的任务
            createNextTask(code, endDate);
        } catch (ParseException pe) {
            log.error("任务执行异常! 时间解析异常", pe);
            throw new TaskExecuteException(false, pe.getMessage());
        } catch (Exception e) {
            log.error("任务执行异常!", e);
            throw new TaskExecuteException(true, e.getMessage());
        }
    }

    private void createNextTask(String code, String startDate) {
        Task nextTask = new Task();

        nextTask.setStatus("INIT");
        Map<String, String> nextTaskExtInfo = new HashMap<>();

        nextTaskExtInfo.put("code", code);
        nextTaskExtInfo.put("partitionDate", startDate);
        nextTask.setExtInfo(nextTaskExtInfo);
        nextTask.setFireDate(new Date());
        nextTask.setRetryTimes(0);
        nextTask.setTaskType("STOCK_INFO_REGRESSION");

        taskRepository.save(nextTask);
    }

    @Override
    public String getTaskType() {
        return "STOCK_INFO_REGRESSION";
    }
}
