package com.sapphire.stock.analysis.common.dal.model;

import lombok.Data;

import java.util.Date;

/**
 * Author: 柏云鹏 Date: 2022/4/3.
 */
@Data
public class FlinkScheduleJobDo {
    private long   id;
    private String name;
    private String description;
    private String cronExpression;
    private String extInfo;
    private String status;
    private String tag;
    private Date   gmtCreate;
    private Date   gmtModified;
}
