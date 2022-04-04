package com.sapphire.stock.analysis.core.model;

import java.util.List;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
public class SourceConfig {
    private List<Field> schema;

    public List<Field> getSchema() {
        return schema;
    }

    public void setSchema(List<Field> schema) {
        this.schema = schema;
    }

    public String[] toTypes() {
        String[] result = new String[schema != null ? schema.size() : 0];

        if (schema != null) {
            for (int i = 0; i < schema.size(); i++) {
                Field field = schema.get(i);
                result[i] = field.getType();
            }
        }

        return result;
    }

    public String[] queryFieldNames() {
        String[] result = new String[schema != null ? schema.size() : 0];
        if (schema != null) {
            for (int i = 0; i < schema.size(); i++) {
                Field field = schema.get(i);
                result[i] = field.getName();
            }
        }
        return result;
    }
}
