package com.sapphire.stock.analysis.core.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import lombok.Data;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Data
public class FlinkSqlExtInfo {
    private Map<String, String> replaceParams = new HashMap<>();

    private String              partitionDate;

    private List<String>        executeFactor = new ArrayList<>();

    private long                asyncTaskId;
}
