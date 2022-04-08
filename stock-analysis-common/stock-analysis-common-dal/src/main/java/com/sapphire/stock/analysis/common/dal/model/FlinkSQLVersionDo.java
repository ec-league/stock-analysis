package com.sapphire.stock.analysis.common.dal.model;

import java.util.Date;

import lombok.Data;

/**
 * Author: 柏云鹏 Date: 2022/4/8.
 */
@Data
public class FlinkSQLVersionDo {
    private long   id;
    private long   sqlId;
    private String flinkConfig;
    private String jobConfig;
    private String extInfo;
    private String status;
    private Date   gmtCreate;
    private Date   gmtModified;
}
