package com.sapphire.stock.analysis.biz.action;

import com.sapphire.stock.analysis.biz.entity.WideDigestEntity;
import com.sapphire.stock.analysis.core.model.StockWideDailyDigest;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.repo.StockDailyDigestRepository;

import javax.annotation.Resource;

/**
 * @author 柏云鹏
 * @since 2023/3/19.
 */
@Action("loadLastWideDigestAction")
public class LoadLastWideDigestAction implements BusinessAction {

    @Resource
    private StockDailyDigestRepository stockDailyDigestRepository;

    @Override
    public void process(ProcessContext context) {
        WideDigestEntity entity = context.getEntity();

        String lastTradingDay = entity.getLastTradingDay();

        String code = entity.getCode();

        StockWideDailyDigest stockWideDailyDigest =
                stockDailyDigestRepository.selectWideByCodeAndPartitionDate(code, lastTradingDay);

        entity.setLastWideDigest(stockWideDailyDigest);
    }
}
