package com.sapphire.stock.analysis.core.model;

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

    public static Response errorResponse(String resultCode, String resultMsg) {
        Response response = new Response();
        response.setSuccess(false);
        response.setResultCode(resultCode);
        response.setResultMsg(resultMsg);
        return response;
    }

    public static Response errorResponse(String resultMsg) {
        Response response = new Response();
        response.setSuccess(false);
        response.setResultCode("ERROR");
        response.setResultMsg(resultMsg);
        return response;
    }

    public static <T> Response successResponse(T t) {
        Response response = new Response();
        response.setSuccess(true);
        response.setResultCode("SUCCESS");
        response.setResultMsg("成功");
        response.setData(t);
        return response;
    }
}
