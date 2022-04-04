package com.sapphire.stock.analysis.core.process.exception;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
public class ProcessException extends RuntimeException {
    private String errorCode;
    private String errorMsg;

    public ProcessException(String errorCode, String errorMsg) {
        this.errorCode = errorCode;
        this.errorMsg = errorMsg;
    }

    public ProcessException(String errorCode, String errorMsg, Throwable t) {
        super(t);
        this.errorCode = errorCode;
        this.errorMsg = errorMsg;
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
}
