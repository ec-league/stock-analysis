package com.sapphire.stock.analysis.common.dal.model;

import java.io.Serializable;
import java.util.Date;

import lombok.Data;

/**
 * STOCK_INFO
 * @author 
 */
@Data
public class StockInfoDo implements Serializable {
    private String            stockCode;

    private String            stockName;

    private String            extInfo;

    private Date              gmtCreate;

    private Date              gmtModified;

    private static final long serialVersionUID = 1L;
}