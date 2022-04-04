package com.sapphire.stock.analysis.core.model;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.sapphire.stock.analysis.core.model.enums.TaskSequenceFlowStatus;
import lombok.Data;
import org.springframework.util.CollectionUtils;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Data
public class TaskSequenceFlow {

    private long                   id;

    private long                   schedulerJobId;
    private TaskSequenceFlow       parent;
    private long                   parentId;

    private List<TaskSequenceFlow> children;

    private String                 taskFlowType;
    private Map<String, String>    taskInfo;

    private String                 status;

    private Date                   gmtCreate   = new Date();
    private Date                   gmtModified = new Date();

    public TaskSequenceFlowStatus currentStatus() {
        return TaskSequenceFlowStatus.valueOf(status);
    }

    public void setErrorCode(String code) {
        if (this.taskInfo == null) {
            this.taskInfo = new HashMap<>();
        }

        this.taskInfo.put("ERROR_CODE", code);
    }

    public void setErrorMsg(String msg) {
        if (this.taskInfo == null) {
            this.taskInfo = new HashMap<>();
        }

        this.taskInfo.put("ERROR_MSG", msg);
    }

    public void setErrorSubJobName(String jobName) {
        if (this.taskInfo == null) {
            this.taskInfo = new HashMap<>();
        }

        this.taskInfo.put("JOB_NAME", jobName);
    }

    public String getErrorSubJobName() {
        if (CollectionUtils.isEmpty(this.taskInfo)) {
            return null;
        }

        return this.taskInfo.get("JOB_NAME");
    }

    public String getErrorCode() {
        if (CollectionUtils.isEmpty(this.taskInfo)) {
            return null;
        }

        return this.taskInfo.get("ERROR_CODE");
    }

    public String getErrorMsg() {
        if (CollectionUtils.isEmpty(this.taskInfo)) {
            return null;
        }

        return this.taskInfo.get("ERROR_MSG");
    }
}
