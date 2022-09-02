package com.sapphire.stock.analysis.common.dal.model;

import java.io.Serializable;
import java.util.Date;

/**
 * ASYNC_TASK
 * @author 
 */
public class AsyncTaskDo implements Serializable {
    private Long              id;

    private String            asyncType;

    private String            processInfo;

    private String            status;

    private String            errorCode;
    private String            errorMsg;

    private Date              gmtCreate;

    private Date              gmtModified;

    private static final long serialVersionUID = 1L;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAsyncType() {
        return asyncType;
    }

    public void setAsyncType(String asyncType) {
        this.asyncType = asyncType;
    }

    public String getProcessInfo() {
        return processInfo;
    }

    public void setProcessInfo(String processInfo) {
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