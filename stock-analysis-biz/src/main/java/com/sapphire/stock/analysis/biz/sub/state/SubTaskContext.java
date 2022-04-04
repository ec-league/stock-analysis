package com.sapphire.stock.analysis.biz.sub.state;

import com.sapphire.stock.analysis.common.util.exception.ErrorCode;
import com.sapphire.stock.analysis.core.exception.AthenaException;
import com.sapphire.stock.analysis.core.model.FlinkSQLJob;
import com.sapphire.stock.analysis.core.model.FlinkScheduleJob;
import com.sapphire.stock.analysis.core.model.TaskSequenceFlow;

import lombok.extern.slf4j.Slf4j;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Slf4j
public class SubTaskContext {
    private SubTaskState     currentState;

    private SubTaskState     lastState;

    private TaskSequenceFlow taskSequenceFlow;

    private FlinkSQLJob      flinkSQLJob;

    private FlinkScheduleJob flinkScheduleJob;

    private String           partitionDate;

    private String           errorCode;

    private String           errorMsg;

    public SubTaskStatus process() {
        if (currentState != null && currentState.status() == SubTaskStatus.FINISH) {
            log.info("子任务已经执行过, 无需重复执行!");
            return SubTaskStatus.FINISH;
        }

        while (currentState != null) {
            SubTaskStatus status = currentState.status();

            log.info("start to process sub task, currentState={}, subTaskType={}", status,
                currentState.subTaskType());

            this.lastState = currentState;

            currentState.handle(this);

            if (currentState == null) {
                return this.lastState.status();
            }

            if (status == currentState.status()) {
                log.error("执行前后状态没有进行流转, 严重异常!");
                throw new AthenaException(ErrorCode.SYSTEM_ERROR, "执行前后状态没有进行流转, 严重异常!");
            }
        }

        return this.lastState.status();
    }

    public String getPartitionDate() {
        return partitionDate;
    }

    public void setPartitionDate(String partitionDate) {
        this.partitionDate = partitionDate;
    }

    public String getErrorCode() {
        return this.errorCode;
    }

    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }

    public String getErrorMsg() {
        return this.errorMsg;
    }

    public void setErrorMsg(String errorMsg) {
        this.errorMsg = errorMsg;
    }

    public SubTaskState getCurrentState() {
        return currentState;
    }

    public void setCurrentState(SubTaskState currentState) {
        this.currentState = currentState;
    }

    public TaskSequenceFlow getTaskSequenceFlow() {
        return taskSequenceFlow;
    }

    public void setTaskSequenceFlow(TaskSequenceFlow taskSequenceFlow) {
        this.taskSequenceFlow = taskSequenceFlow;
    }

    public FlinkSQLJob getFlinkSQLJob() {
        return flinkSQLJob;
    }

    public void setFlinkSQLJob(FlinkSQLJob flinkSQLJob) {
        this.flinkSQLJob = flinkSQLJob;
    }

    public FlinkScheduleJob getFlinkScheduleJob() {
        return flinkScheduleJob;
    }

    public void setFlinkScheduleJob(FlinkScheduleJob flinkScheduleJob) {
        this.flinkScheduleJob = flinkScheduleJob;
    }
}
