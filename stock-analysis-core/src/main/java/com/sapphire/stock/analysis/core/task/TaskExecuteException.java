package com.sapphire.stock.analysis.core.task;

import lombok.Getter;

/**
 * Author: 柏云鹏
 * Date: 2022/2/24.
 */
public class TaskExecuteException extends RuntimeException {
    @Getter
    private boolean needRetry;

    @Getter
    private String  errorMsg;

    public TaskExecuteException(boolean needRetry, String errorMsg) {
        this.needRetry = needRetry;
        this.errorMsg = errorMsg;
    }
}
