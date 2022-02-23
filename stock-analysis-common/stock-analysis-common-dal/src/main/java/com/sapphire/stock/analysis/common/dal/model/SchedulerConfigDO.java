package com.sapphire.stock.analysis.common.dal.model;

import java.util.Date;

import lombok.Data;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
@Data
public class SchedulerConfigDO {
    private Long    id;
    private String  taskType;

    private String  cronExpression;
    private Integer limit;
    private String  status;

    private Date    gmtCreate;
    private Date    gmtModified;
}
