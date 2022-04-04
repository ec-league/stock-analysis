package com.sapphire.stock.analysis.core.model.enums;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
public enum FlinkSqlStatus {

    INIT("初始化"),
    SUBMIT("提交"),
    PROCESSING("执行中"),
    FAILED("执行失败"),
    CANCELED("取消"),
    FINISH("执行完成"),
    RETRY("重试"),;

    private String msg;

    FlinkSqlStatus(String msg) {
        this.msg = msg;
    }

    public String getMsg() {
        return msg;
    }
}
