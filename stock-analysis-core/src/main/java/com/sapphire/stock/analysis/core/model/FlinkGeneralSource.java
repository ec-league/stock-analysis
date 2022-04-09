package com.sapphire.stock.analysis.core.model;

import java.util.Date;

import org.apache.flink.core.fs.FileSystem;
import org.apache.flink.table.api.TableSchema;
import org.apache.flink.table.sinks.CsvTableSink;
import org.apache.flink.table.sinks.TableSink;

import lombok.Data;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Data
public class FlinkGeneralSource {
    private long             id;
    private String           schemaName;
    private String           tableName;
    private String           type;
    private FileSourceConfig sourceConfig;
    private Date             gmtCreate;
    private Date             gmtModified;

    public String getName() {
        return this.schemaName + "." + this.tableName;
    }

    public TableSink transform(TableSchema tableSchema) {
        FileSourceConfig fileSourceConfig = getSourceConfig();
        return new CsvTableSink(fileSourceConfig.getPath(), fileSourceConfig.getFieldDelim(), -1,
            FileSystem.WriteMode.OVERWRITE);
    }
}