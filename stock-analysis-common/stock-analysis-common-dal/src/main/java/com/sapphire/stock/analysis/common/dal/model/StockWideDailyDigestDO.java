package com.sapphire.stock.analysis.common.dal.model;

import lombok.Data;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

/**
 * STOCK_WIDE_DAILY_DIGEST
 *
 * @author
 */
@Data
public class StockWideDailyDigestDO implements Serializable {
    private Long id;

    private String code;

    private String partitionDate;

    private String extInfo;

    private Date gmtCreate;

    private Date gmtModified;

    private static final long serialVersionUID = 1L;
}