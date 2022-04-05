package com.sapphire.stock.analysis.common.dal.model;

import java.util.Date;

import lombok.Data;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Data
public class FlinkGeneralSourceDo {
    private long   id;
    private String schemaName;
    private String tableName;
    private String type;
    private String sourceConfig;
    private Date   gmtCreate;
    private Date   gmtModified;
}
