package com.sapphire.stock.analysis.core.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import lombok.Data;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Data
public class SqlExecuteResult {
    private String[]                  header     = new String[0];
    private List<Map<String, String>> resultData = new ArrayList<>();
}
