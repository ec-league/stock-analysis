package com.sapphire.stock.analysis.core.model;

import java.util.Date;
import java.util.Map;

import lombok.Data;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
@Data
public class Task {
    private long                id;

    private String              taskType;

    private Map<String, String> extInfo;

    private String              status;

    private String              resultMsg;

    private int                 retryTimes;

    private Date                fireDate;

    private Date                gmtCreate;

    private Date                gmtModified;
}
