package com.sapphire.stock.analysis.core.model;

import lombok.Data;

/**
 * Author: 柏云鹏 Date: 2022/4/3.
 */
@Data
public class FlinkSqlOrder {
    private Long flinkSqlId;
    private int  priority;
}
