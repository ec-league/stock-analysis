package com.sapphire.stock.analysis.core.process;

import lombok.Data;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Data
public class ProcessContext {
    private String        productCode;
    private String        businessCode;
    private String        stage     = "PRE_PROCESS";
    private Object        entity;
    private String        errorCode = "SUCCESS";
    private String        errorMsg  = "执行成功";
    private ProcessConfig processConfig;

    public <T> T getEntity() {
        return (T) this.entity;
    }
}