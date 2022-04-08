package com.sapphire.stock.analysis.core.model;

import lombok.Data;

import java.util.Date;

/**
 * Author: 柏云鹏 Date: 2022/4/8.
 */
@Data
public class FlinkSQLVersion {
    private long        id;
    private long        sqlId;
    private FlinkConfig flinkConfig;
    private JobConfig   jobConfig;
    private String      extInfo;
    private String      status;
    private Date        gmtCreate;
    private Date        gmtModified;
}
