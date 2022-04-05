package com.sapphire.stock.analysis.core.model;

import lombok.Data;

import java.util.List;

/**
 * Author: 柏云鹏 Date: 2022/4/6.
 */
@Data
public class SubmitFlinkRequest {
    private String jobName;

    private List<FlinkGeneralSource> sources;

    private List<FlinkGeneralSource> sinks;

    private List<String> sqls;

    private FlinkConfig flinkConfig;
}
