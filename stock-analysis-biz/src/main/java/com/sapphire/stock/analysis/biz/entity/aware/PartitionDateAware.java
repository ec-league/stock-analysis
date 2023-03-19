package com.sapphire.stock.analysis.biz.entity.aware;

/**
 * @author 柏云鹏
 * @since 2023/3/19.
 */
public interface PartitionDateAware {
    String getPartitionDate();

    String getLastTradingDay();

    void setLastTradingDay(String lastTradingDay);
}
