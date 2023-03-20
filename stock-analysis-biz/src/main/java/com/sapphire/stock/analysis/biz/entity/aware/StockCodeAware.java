package com.sapphire.stock.analysis.biz.entity.aware;

import com.sapphire.stock.analysis.core.model.StockInfo;

/**
 * @author 柏云鹏
 * @since 2023/3/20.
 */
public interface StockCodeAware {
    String getCode();

    void setStockInfo(StockInfo stockInfo);

    StockInfo getStockInfo();
}
