package com.sapphire.stock.analysis.core.model;

import java.util.Date;

import org.apache.commons.lang.StringUtils;
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
    private long         id;
    private String       schemaName;
    private String       tableName;
    private String       type;
    private SourceConfig sourceConfig;
    private Date         gmtCreate;
    private Date         gmtModified;

    public <T extends SourceConfig> T getSourceConfig() {
        return (T) this.sourceConfig;
    }

    public String getName() {
        return this.schemaName + "." + this.tableName;
    }

    public TableSink transform(TableSchema tableSchema) {
        if (StringUtils.equals("FILE", type)) {
            FileSourceConfig fileSourceConfig = getSourceConfig();
            return new CsvTableSink(fileSourceConfig.getPath(), fileSourceConfig.getFieldDelim(),
                -1, FileSystem.WriteMode.OVERWRITE);
        } else if (StringUtils.equals("MYSQL", type)) {
            return null;
        }

        return null;
    }
}