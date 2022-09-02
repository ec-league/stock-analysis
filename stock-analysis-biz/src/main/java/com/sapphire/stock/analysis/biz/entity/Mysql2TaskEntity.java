package com.sapphire.stock.analysis.biz.entity;

import com.sapphire.stock.analysis.core.model.FileSourceConfig;
import com.sapphire.stock.analysis.core.model.MysqlSourceConfig;
import lombok.Getter;
import lombok.Setter;

/**
 * Author: 柏云鹏
 * Date: 2020/9/1.
 */
@Getter
@Setter
public class Mysql2TaskEntity extends SubTaskEntity {

    private MysqlSourceConfig mysqlSourceConfig;

    private FileSourceConfig fileSourceConfig;

    private String fileName;
}
