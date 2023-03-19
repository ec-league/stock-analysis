package com.sapphire.stock.analysis.biz.action;

import com.sapphire.stock.analysis.biz.entity.WideDigestEntity;
import com.sapphire.stock.analysis.core.model.StockDailyDigest;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.repo.StockDailyDigestRepository;

import javax.annotation.Resource;

/**
 * @author 柏云鹏
 * @since 2023/3/19.
 */
@Action("loadDailyDigestAction")
public class LoadDailyDigestAction implements BusinessAction {

    @Resource
    private StockDailyDigestRepository stockDailyDigestRepository;

    @Override
    public void process(ProcessContext context) {
        WideDigestEntity entity = context.getEntity();

        String code = entity.getCode();
        String lastTradingDay = entity.getLastTradingDay();

        StockDailyDigest stockDailyDigest =
                stockDailyDigestRepository.selectByPartitionDate(code, lastTradingDay);

        entity.setCurrentDigest(stockDailyDigest);

    }
}
