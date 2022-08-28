package com.sapphire.stock.analysis.core.model;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import lombok.Data;

/**
 * Author: 柏云鹏 Date: 2022/3/31.
 */
@Data
public class StockInfo {
    private String stockCode;
    private String stockName;
    private Map<String, String> extInfo = new HashMap<>();

    private Date   gmtCreate;
    private Date   gmtModified;
}
