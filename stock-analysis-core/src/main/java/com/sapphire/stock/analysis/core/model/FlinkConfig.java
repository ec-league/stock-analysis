package com.sapphire.stock.analysis.core.model;

import java.util.Map;

import lombok.Data;

/**
 * Author: 柏云鹏 Date: 2022/4/3.
 */
@Data
public class FlinkConfig {
    private static int          DEFAULT_PARALLELISM = 1;

    private int                 parallelism         = DEFAULT_PARALLELISM;
    private Integer             maxParallelism;
    private String              timeCharacteristic;
    private Long                bufferTimeout;
    private String              restartStrategies;

    private Map<String, Object> restartParams;

    // jar
    private String              programArgs;

    private String              entryClass;

    private String              savepointPath;

    private Boolean             allowNonRestoredState;

    private boolean             cache;

    private String              dependency;
}