package com.sapphire.stock.analysis.core.model;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

/**
 * @author 柏云鹏
 * @since 2023/2/27.
 */
@Getter
@Setter
public class StockWideDailyDigest {
    private long id;

    private String code;

    private String partitionDate;

    private StockWideDetail stockWideDetail;

    private Date gmtCreate;

    private Date gmtModified;
}
