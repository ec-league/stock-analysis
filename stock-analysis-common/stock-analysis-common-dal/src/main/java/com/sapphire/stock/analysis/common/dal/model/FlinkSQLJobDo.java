package com.sapphire.stock.analysis.common.dal.model;

import java.util.Date;

import lombok.Data;

/**
 * Author: 柏云鹏 Date: 2022/4/3.
 */
@Data
public class FlinkSQLJobDo {
    private long   id;
    private String flinkConfig;
    private String jobConfig;
    private String flinkJobId;
    private String name;
    private long   taskSeqId;
    private String type;
    private String resultMsg;
    private String extInfo;
    private String status;
    private Date   gmtCreate;
    private Date   gmtModified;
}
