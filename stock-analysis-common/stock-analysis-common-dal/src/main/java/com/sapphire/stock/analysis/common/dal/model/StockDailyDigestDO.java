package com.sapphire.stock.analysis.common.dal.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import lombok.Data;

/**
 * STOCK_DAILY_DIGEST
 * @author 
 */
@Data
public class StockDailyDigestDO implements Serializable {
    private Long              id;

    private String            code;

    private String            name;

    private BigDecimal        startPrice;

    private BigDecimal        endPrice;

    private BigDecimal        highestPrice;

    private BigDecimal        lowestPrice;

    private String            partitionDate;

    private BigDecimal        tradingVolume;

    private BigDecimal        businessVolume;

    private Double            turnoverRate;

    private Double            pe;

    private Double            pb;

    private BigDecimal        totalValue;

    private BigDecimal        circulationMarketValue;

    private Date              gmtCreate;

    private Date              gmtModified;

    private static final long serialVersionUID = 1L;
}