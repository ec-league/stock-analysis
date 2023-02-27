package com.sapphire.stock.analysis.core.model;

import java.util.Date;

/**
 * @author 柏云鹏
 * @since 2023/2/27.
 */
public class StockWideDailyDigest {
    private long id;

    private String code;

    private String partitionDate;

    private StockWideDetail stockWideDetail;

    private Date gmtCreate;

    private Date gmtModified;
}
