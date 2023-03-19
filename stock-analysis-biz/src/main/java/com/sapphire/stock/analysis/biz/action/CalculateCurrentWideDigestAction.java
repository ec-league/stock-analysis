package com.sapphire.stock.analysis.biz.action;

import com.sapphire.stock.analysis.biz.entity.WideDigestEntity;
import com.sapphire.stock.analysis.core.model.StockWideDailyDigest;
import com.sapphire.stock.analysis.core.model.StockWideDetail;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;

import java.util.Date;

/**
 * @author 柏云鹏
 * @since 2023/3/19.
 */
@Action("calculateCurrentWideDigestAction")
public class CalculateCurrentWideDigestAction implements BusinessAction {
    @Override
    public void process(ProcessContext context) {
        WideDigestEntity entity = context.getEntity();

        StockWideDailyDigest lastWideDigest = entity.getLastWideDigest();

        StockWideDailyDigest current = new StockWideDailyDigest();

        current.setPartitionDate(entity.getPartitionDate());
        current.setCode(entity.getCode());
        current.setGmtCreate(new Date());
        current.setGmtModified(new Date());
        StockWideDetail stockWideDetail = new StockWideDetail();
        if (lastWideDigest != null) {
        }



        current.setStockWideDetail(stockWideDetail);

    }
}
