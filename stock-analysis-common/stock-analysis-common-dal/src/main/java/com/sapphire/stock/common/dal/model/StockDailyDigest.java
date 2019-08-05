package com.sapphire.stock.common.dal.model;

import java.util.Date;

/**
 * 每日摘要信息, 为每天更新的价格, 买入卖出等信息
 * Author: 柏云鹏
 * Date: 2019/7/29.
 */
public class StockDailyDigest {
    private Long id;
    /**
     * 股票信息相关
     */
    private Long stockInfoId;

    /**
     * 交易日期
     */
    private Date date;

    /**
     * 昨日收盘价
     */
    private Integer yestdayPrice;

    /**
     * 开盘价
     */
    private Integer startPrice;

    /**
     * 收盘价
     */
    private Integer endPrice;

    /**
     * 当日最高价
     */
    private Integer highestPrice;

    /**
     * 当日最低价
     */
    private Integer lowestPrice;

    /**
     * 成交量(手)
     */
    private Integer tradeNum;

}
