package com.sapphire.stock.analysis.core.model;

import java.util.List;

import lombok.Data;

/**
 * Author: 柏云鹏 Date: 2022/4/3.
 */
@Data
public class JobConfig {
    private List<Long> sourceIds;
    private List<Long> sinkIds;
    private String     sql;
    private long       sinkDbId;
    private long       sourceDbId;
    private String     partitionDate;

    //region 模型回溯相关使用
    private long       regressionTaskId;
    private String     marketTable;
    private long       modelId;
    //endregion

    private String     sourcePath;

    private String     targetPath;

    private String     sinkSchemaName;
    private String     sinkTableName;

    private boolean    finishDelete = false;
}
