package com.sapphire.stock.analysis.core.constant;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
public enum TaskStatus {
                        INIT("初始化"), PROCESSING("执行中"), RETRY("重试"),
                        /** 回溯任务特别使用 */
                        NOT_REGRESSED("无法回溯"), END("执行完成"), INVALID("失效"), SUCCESS("任务流执行成功"), FAIL("任务流执行失败"),
                        /* 调额列表暂停功能 */
                        STOP("暂停");

    private String msg;

    TaskStatus(String msg) {
        this.msg = msg;
    }

    public String getMsg() {
        return msg;
    }
}
