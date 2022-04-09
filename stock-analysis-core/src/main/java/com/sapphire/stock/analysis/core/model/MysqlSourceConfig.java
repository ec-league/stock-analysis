package com.sapphire.stock.analysis.core.model;

import lombok.Data;

/**
 * Author: 柏云鹏 Date: 2022/4/9.
 */
@Data
public class MysqlSourceConfig extends SourceConfig {
    private String url = "jdbc:mysql://127.0.0.1:3306";
    private String username = "root";
    private String password = "abc123456";
}
