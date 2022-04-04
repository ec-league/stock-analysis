package com.sapphire.stock.analysis.core.model;

import java.util.Date;

import lombok.Data;

/**
 * Author: 柏云鹏 Date: 2022/4/3.
 */
@Data
public class FlinkScheduleJob {
    private long                   id;
    private String                 name;
    private String                 description;
    private String                 cronExpression;
    private FlinkScheduleJobConfig extInfo = new FlinkScheduleJobConfig();
    private String                 status;
    private String                 tag;
    private Date                   gmtCreate;
    private Date                   gmtModified;
}
