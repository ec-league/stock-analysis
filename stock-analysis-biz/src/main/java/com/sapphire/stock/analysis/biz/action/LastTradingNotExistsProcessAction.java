package com.sapphire.stock.analysis.biz.action;

import com.sapphire.stock.analysis.biz.entity.WideDigestEntity;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.repo.StockDailyDigestRepository;

import javax.annotation.Resource;

/**
 * @author 柏云鹏
 * @since 2023/3/19.
 */
@Action("lastTradingNotExistsProcessAction")
public class LastTradingNotExistsProcessAction implements BusinessAction {

    @Resource
    private StockDailyDigestRepository stockDailyDigestRepository;

    @Override
    public void process(ProcessContext context) {
        WideDigestEntity entity = context.getEntity();

        switch (context.getErrorCode()) {
            case "LAST_TRADING_NOT_EXISTS":

                return;
        }

        entity.setSuccess(false);
    }
}
