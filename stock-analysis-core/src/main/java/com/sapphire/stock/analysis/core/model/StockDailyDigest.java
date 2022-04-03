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
    private Long       id;

    private String     tradingAgency;

    private String     code;

    private String     name;

    private BigDecimal startPrice;

    private BigDecimal endPrice;

    private BigDecimal highestPrice;

    private BigDecimal lowestPrice;

    private String     partitionDate;

    /**
     * 成交量(单位手)
     */
    private BigDecimal tradingVolume;

    /**
     * 成交量(金额)
     */
    private BigDecimal businessVolume;

    /**
     * 换手率
     */
    private Double     turnoverRate;

    private Double     pe;

    private Double     pb;

    private BigDecimal totalValue;

    private BigDecimal circulationMarketValue;

    private Date       gmtCreate;

    private Date       gmtModified;
}
