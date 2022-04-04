package com.sapphire.stock.analysis.common.dal.model;

import lombok.Data;

import java.util.Date;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Data
public class TaskSequenceFlowDo {
    private Long   id;
    private Long   parentId;
    private String taskFlowType;
    private String taskInfo;
    private String status;
    private Date   gmtCreate;
    private Date   gmtModified;
    private Long   schedulerJobId;
}