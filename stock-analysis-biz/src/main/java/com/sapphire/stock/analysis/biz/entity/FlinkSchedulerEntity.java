package com.sapphire.stock.analysis.biz.entity;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.sapphire.stock.analysis.biz.entity.aware.CreateTaskAware;
import com.sapphire.stock.analysis.core.model.FlinkScheduleJob;
import com.sapphire.stock.analysis.core.model.FlinkSqlOrder;
import com.sapphire.stock.analysis.core.model.TaskSequenceFlow;

import lombok.Data;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Data
public class FlinkSchedulerEntity extends BaseEntity implements CreateTaskAware {

    private FlinkScheduleJob    flinkScheduleJob;

    private TaskSequenceFlow    lastSeq;

    private List<FlinkSqlOrder> flinkSqlOrderList;

    private long                parentFlowId;

    private String              partitionDate;

    private String              singleTimes = "F";

    private Map<String, String> taskProfile = new HashMap<>();

    @Override
    public String getTaskType() {
        return "FLINK_SCHEDULER_TASK";
    }
}
