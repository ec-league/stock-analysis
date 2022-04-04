package com.sapphire.stock.analysis.core.model;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
public class FileSourceConfig extends SourceConfig {
    private String  path;
    private Long    batchSize        = 1273741424L;
    private String  fieldDelim       = ",;,";
    private boolean ignoreParseError = false;
    private boolean ignoreHead       = false;
    private String  lineDelim        = System.lineSeparator();

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public Long getBatchSize() {
        return batchSize;
    }

    public void setBatchSize(Long batchSize) {
        this.batchSize = batchSize;
    }

    public String getFieldDelim() {
        return fieldDelim;
    }

    public void setFieldDelim(String fieldDelim) {
        this.fieldDelim = fieldDelim;
    }

    public boolean isIgnoreHead() {
        return ignoreHead;
    }

    public void setIgnoreHead(boolean ignoreHead) {
        this.ignoreHead = ignoreHead;
    }

    public boolean isIgnoreParseError() {
        return ignoreParseError;
    }

    public void setIgnoreParseError(boolean ignoreParseError) {
        this.ignoreParseError = ignoreParseError;
    }

    public String getLineDelim() {
        return lineDelim;
    }

    public void setLineDelim(String lineDelim) {
        this.lineDelim = lineDelim;
    }
}
