package com.sapphire.stock.analysis.core.task.handler;

import java.math.BigDecimal;
import java.util.Date;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.common.integration.client.TencentStockClient;
import com.sapphire.stock.analysis.core.model.StockDailyDigest;
import com.sapphire.stock.analysis.core.model.Task;
import com.sapphire.stock.analysis.core.repo.StockDailyDigestRepo;
import com.sapphire.stock.analysis.core.task.TaskExecuteException;
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
    private StockDailyDigestRepo stockDailyDigestRepo;

    @Override
    public void completeTask(Task task) {
        //
        Map<String, String> extInfo = task.getExtInfo();

        String code = extInfo.get("code");

        String respStr = tencentStockClient.queryStockDetail(code);

        if (StringUtils.isEmpty(respStr)) {
            log.error("query failed! code={}", code);
            throw new TaskExecuteException(true, "查询股票结果失败!");
        }

        StockDailyDigest digest = buildDigest(respStr);

        stockDailyDigestRepo.save(digest);
    }

    private StockDailyDigest buildDigest(String tencentResp) {
        StockDailyDigest stockDailyDigest = new StockDailyDigest();

        String[] split = StringUtils.split(tencentResp, "~");

        stockDailyDigest.setTradingAgency(getTradingAgency(split[0]));
        stockDailyDigest.setName(split[1]);
        stockDailyDigest.setCode(split[2]);
        stockDailyDigest.setEndPrice(new BigDecimal(split[3]));
        stockDailyDigest.setStartPrice(new BigDecimal(split[5]));
        stockDailyDigest.setHighestPrice(new BigDecimal(split[32]));
        stockDailyDigest.setLowestPrice(new BigDecimal(split[33]));
        stockDailyDigest.setPartitionDate(split[29].substring(0, 8));
        stockDailyDigest.setTradingVolume(new BigDecimal(split[35]));
        stockDailyDigest.setBusinessVolume(new BigDecimal(split[36]));
        stockDailyDigest.setTurnoverRate(Double.parseDouble(split[37]));
        stockDailyDigest.setPe(Double.parseDouble(split[51]));
        stockDailyDigest.setPb(Double.parseDouble(split[45]));
        stockDailyDigest.setTotalValue(new BigDecimal(split[44]));
        stockDailyDigest.setCirculationMarketValue(new BigDecimal(split[43]));
        stockDailyDigest.setGmtCreate(new Date());
        stockDailyDigest.setGmtModified(new Date());
        return stockDailyDigest;
    }

    public String getTradingAgency(String code) {
        switch (code) {
            case "1":
                return "sh";
            case "51":
                return "sz";
            case "100":
                return "hk";
            case "200":
                return "us";
            default:
                return null;
        }
    }

    @Override
    public String getTaskType() {
        return "STOCK_DAILY_QUERY";
    }
}
