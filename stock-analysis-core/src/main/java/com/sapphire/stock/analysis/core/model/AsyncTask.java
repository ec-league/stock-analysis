package com.sapphire.stock.analysis.core.model;

import java.util.Date;

/**
 * Author: 柏云鹏
 * Date: 2021/11/2.
 */
public class AsyncTask {

    public static final String INIT        = "INIT";
    // 这个retry是告诉 子任务需要重试!
    public static final String RETRY       = "RETRY";
    public static final String FLINK_RETRY = "FLINK_RETRY";
    public static final String PROCESSING  = "PROCESSING";
    public static final String SUCCESS     = "SUCCESS";
    public static final String FAILED      = "FAILED";

    private long               id;
    private String             asyncType;

    /**
     * 执行进度信息
     */
    private ProcessInfo        processInfo;

    private String             status;

    private String             errorCode;
    private String             errorMsg;

    private Date               gmtCreate;

    private Date               gmtModified;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAsyncType() {
        return asyncType;
    }

    public void setAsyncType(String asyncType) {
        this.asyncType = asyncType;
    }

    public ProcessInfo getProcessInfo() {
        return processInfo;
    }

    public void setProcessInfo(ProcessInfo processInfo) {
        this.processInfo = processInfo;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getGmtCreate() {
        return gmtCreate;
    }

    public void setGmtCreate(Date gmtCreate) {
        this.gmtCreate = gmtCreate;
    }

    public Date getGmtModified() {
        return gmtModified;
    }

    public void setGmtModified(Date gmtModified) {
        this.gmtModified = gmtModified;
    }

    public String getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }

    public String getErrorMsg() {
        return errorMsg;
    }

    public void setErrorMsg(String errorMsg) {
        this.errorMsg = errorMsg;
    }
}
