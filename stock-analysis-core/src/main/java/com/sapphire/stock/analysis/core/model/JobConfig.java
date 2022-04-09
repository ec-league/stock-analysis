package com.sapphire.stock.analysis.core.model;

import lombok.Data;

/**
 * Author: 柏云鹏 Date: 2022/4/3.
 */
@Data
public class JobConfig {
    private String  sql;
    private String  partitionDate;

    //region 模型回溯相关使用
    private long    regressionTaskId;
    private String  marketTable;
    private long    modelId;
    //endregion

    private String  sinkSchemaName;
    private String  sinkTableName;

    private boolean finishDelete = false;
}
