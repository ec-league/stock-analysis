package com.sapphire.stock.analysis.web.dto;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
public class Response<T> {
    private boolean success    = true;
    private String  resultCode = "SUCCESS";
    private String  resultMsg  = "成功";
    private T       data;

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getResultCode() {
        return resultCode;
    }

    public void setResultCode(String resultCode) {
        this.resultCode = resultCode;
    }

    public String getResultMsg() {
        return resultMsg;
    }

    public void setResultMsg(String resultMsg) {
        this.resultMsg = resultMsg;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
