package com.sapphire.stock.analysis.core.service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.common.util.DateUtils;
import com.sapphire.stock.analysis.core.model.StockInfo;
import com.sapphire.stock.analysis.core.model.Task;
import com.sapphire.stock.analysis.core.repo.StockInfoRepository;
import com.sapphire.stock.analysis.core.repo.TaskRepository;

/**
 * Author: 柏云鹏 Date: 2022/4/3.
 */
@Service
public class StockRegressionService {
    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private StockInfoRepository stockInfoRepository;

    public void startStockInfoRegression(String code) {
        Task task = new Task();

        task.setStatus("INIT");
        Map<String, String> extInfo = new HashMap<>();

        extInfo.put("code", code);

        StockInfo stockInfo = stockInfoRepository.selectByCode(code);

        if (stockInfo == null) {
            return;
        }

        String partitionDate = stockInfo.getExtInfo().get("partitionDate");

        extInfo.put("partitionDate", partitionDate);
        task.setExtInfo(extInfo);
        task.setFireDate(new Date());
        task.setRetryTimes(0);
        task.setTaskType("STOCK_INFO_REGRESSION");

        taskRepository.save(task);
    }
}
