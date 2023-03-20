package com.sapphire.stock.analysis.biz.action;

import com.sapphire.stock.analysis.biz.entity.WideDigestEntity;
import com.sapphire.stock.analysis.core.model.StockWideDailyDigest;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.repo.StockDailyDigestRepository;

import javax.annotation.Resource;

/**
 * @author 柏云鹏
 * @since 2023/3/20.
 */
@Action("saveCurrentWideDigestAction")
public class SaveCurrentWideDigestAction implements BusinessAction {

    @Resource
    private StockDailyDigestRepository stockDailyDigestRepository;

    @Override
    public void process(ProcessContext context) {
        WideDigestEntity entity = context.getEntity();

        StockWideDailyDigest currentWideDigest = entity.getCurrentWideDigest();

        stockDailyDigestRepository.save(currentWideDigest);
    }
}
