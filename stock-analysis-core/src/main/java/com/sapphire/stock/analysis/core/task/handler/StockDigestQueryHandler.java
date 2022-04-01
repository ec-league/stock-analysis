package com.sapphire.stock.analysis.core.task.handler;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.common.dal.dao.StockDailyDigestDao;
import com.sapphire.stock.analysis.common.dal.model.StockDailyDigestDO;
import com.sapphire.stock.analysis.common.integration.client.TencentStockClient;
import com.sapphire.stock.analysis.core.model.Task;
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
    private TencentStockClient  tencentStockClient;

    @Autowired
    private StockDailyDigestDao stockDailyDigestDao;

    @Override
    public void completeTask(Task task) {
        //
        Map<String, String> extInfo = task.getExtInfo();

        String code = extInfo.get("code");

        StockDailyDigestDO stockDailyDigestDO = tencentStockClient.queryStockDetail(code);

        stockDailyDigestDao.insert(stockDailyDigestDO);
    }

    @Override
    public String getTaskType() {
        return "STOCK_DAILY_QUERY";
    }
}
