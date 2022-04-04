package com.sapphire.stock.analysis.biz.sub.state;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
public enum SubTaskStatus {
    INIT,
    PROCESSING,
    POST_PROCESS,
    RETRY,
    WAITING,
    FAIL,
    FINISH
}
