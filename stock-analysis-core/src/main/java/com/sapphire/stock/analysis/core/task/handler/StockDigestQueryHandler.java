package com.sapphire.stock.analysis.core.task.handler;

import java.util.Map;

import com.sapphire.stock.analysis.core.converter.DomainConverter;
import com.sapphire.stock.analysis.core.model.StockDailyDigest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.common.dal.model.StockDailyDigestDO;
import com.sapphire.stock.analysis.common.integration.client.TencentStockClient;
import com.sapphire.stock.analysis.core.model.Task;
import com.sapphire.stock.analysis.core.repo.StockDailyDigestRepository;
import com.sapphire.stock.analysis.core.task.TaskHandler;

import lombok.extern.slf4j.Slf4j;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
@Slf4j
@Service
public class StockDigestQueryHandler implements TaskHandler {

    @Autowired
    private TencentStockClient   tencentStockClient;

    @Autowired
    private StockDailyDigestRepository stockDailyDigestRepo;

    @Override
    public void completeTask(Task task) {
        Map<String, String> extInfo = task.getExtInfo();

        String code = extInfo.get("code");

        StockDailyDigestDO stockDailyDigestDO = tencentStockClient.queryStockDetail(code);

        StockDailyDigest stockDailyDigest = DomainConverter.toDomain(stockDailyDigestDO);

        stockDailyDigestRepo.save(stockDailyDigest);
    }

    @Override
    public String getTaskType() {
        return "STOCK_DAILY_QUERY";
    }
}
