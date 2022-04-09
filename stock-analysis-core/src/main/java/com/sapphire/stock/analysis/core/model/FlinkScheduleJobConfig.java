package com.sapphire.stock.analysis.core.model;

import lombok.Data;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Author: 柏云鹏 Date: 2022/4/3.
 */
@Data
public class FlinkScheduleJobConfig {
    public static final String  HISTORY_TYPE        = "history";
    public static final String  YESTERDAY_TYPE      = "partition";

    private String              startDate;

    private String              type;

    private String              partitionDate;

    private Map<String, String> replaceParams       = new HashMap<>();

    private Long                taskId;

    private Long                singTimeTaskId      = 0L;

    private int                 parallelism         = 1;

    private List<String>        deleteSinksFinished = new ArrayList<>();

    private String              ownerName;

    private Long                fileSize;

    private String              needEndNotice;

    private String              configVersion;

    private String              executeCycleSelect;

    private List<String>        executeDate         = new ArrayList<>();

    private String              executeTime;

    private String              currentRunningJob;
}
