package com.sapphire.stock.analysis.core.model;

import java.math.BigDecimal;
import java.util.Date;

import lombok.Data;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
@Data
public class StockDailyDigest {
    private long       id;

    private String     code;

    private String     name;

    private BigDecimal startPrice;

    private BigDecimal endPrice;

    private BigDecimal highestPrice;

    private BigDecimal lowestPrice;

    private String     partitionDate;

    private BigDecimal tradingVolume;

    private BigDecimal businessVolume;

    private double     turnoverRate;

    private double     pe;

    private double     pb;

    private BigDecimal totalValue;

    private BigDecimal circulationMarketValue;

    private Date       gmtCreate;

    private Date       gmtModified;
}
