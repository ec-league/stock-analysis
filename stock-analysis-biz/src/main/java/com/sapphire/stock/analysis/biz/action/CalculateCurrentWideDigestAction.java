package com.sapphire.stock.analysis.biz.action;

import com.sapphire.stock.analysis.biz.entity.WideDigestEntity;
import com.sapphire.stock.analysis.core.model.StockDailyDigest;
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
        StockDailyDigest currentDigest = entity.getCurrentDigest();

        StockWideDailyDigest current = new StockWideDailyDigest();

        current.setPartitionDate(entity.getPartitionDate());
        current.setCode(entity.getCode());
        current.setGmtCreate(new Date());
        current.setGmtModified(new Date());
        StockWideDetail stockWideDetail = new StockWideDetail();
        stockWideDetail.setStartPrice(currentDigest.getStartPrice());
        stockWideDetail.setEndPrice(currentDigest.getEndPrice());
        stockWideDetail.setCmv(currentDigest.getCirculationMarketValue());
        stockWideDetail.setBusinessVolume(currentDigest.getBusinessVolume());
        stockWideDetail.setHighestPrice(currentDigest.getHighestPrice());
        stockWideDetail.setLowestPrice(currentDigest.getLowestPrice());
        stockWideDetail.setTotalValue(currentDigest.getTotalValue());
        stockWideDetail.setTradingVolume(currentDigest.getTradingVolume());
        stockWideDetail.setTurnoverRate(currentDigest.getTurnoverRate() == null ? 0D : currentDigest.getTurnoverRate());
        stockWideDetail.setPe(currentDigest.getPe() != null ? currentDigest.getPe() : 0D);
        stockWideDetail.setPb(currentDigest.getPb() != null ? currentDigest.getPb() : 0D);

        StockWideDetail lastStockWideDetail = lastWideDigest != null ? lastWideDigest.getStockWideDetail() :  null;
        stockWideDetail.wrapLast(lastStockWideDetail);

        current.setStockWideDetail(stockWideDetail);

        entity.setCurrentWideDigest(current);
    }
}
