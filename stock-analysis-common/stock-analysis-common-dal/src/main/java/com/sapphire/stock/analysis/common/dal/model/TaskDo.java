package com.sapphire.stock.analysis.common.dal.model;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;

/**
 * TASK
 * @author 
 */
@Data
public class TaskDo implements Serializable {
    private Long id;

    private String taskType;

    private String extInfo;

    private String status;

    private String resultMsg;

    private Integer retryTimes;

    private Date fireDate;

    private Date gmtCreate;

    private Date gmtModified;

    private static final long serialVersionUID = 1L;
}