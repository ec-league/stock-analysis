package com.sapphire.stock.analysis.core.process;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
public interface Router {
    String PRE_PROCESS = "PRE_PROCESS";
    String PROCESS = "PROCESS";
    String POST_PROCESS = "POST_PROCESS";
    String ERROR_PROCESS = "ERROR_PROCESS";
    String FINISH = "FINISH";
    String DEFAULT_ROUTER = "defaultRouter";

    void route(ProcessContext var1);

    void routeError(ProcessContext var1);
}
