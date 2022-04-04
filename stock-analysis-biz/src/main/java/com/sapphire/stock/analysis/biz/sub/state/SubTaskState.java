package com.sapphire.stock.analysis.biz.sub.state;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
public interface SubTaskState {
    void handle(SubTaskContext context);

    SubTaskStatus status();

    default String subTaskType() {
        return "default";
    }
}
