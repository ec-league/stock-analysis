package com.sapphire.stock.analysis.core.model;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
public class Field {

    private String name;

    private String type;

    public Field() {
    }

    public Field(String name, String type) {
        this.name = name;
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Object formatValue(String val) {
        if (this.type == null) {
            return null;
        }
        if (val.startsWith("\uFEFF")) {
            val = val.replace("\uFEFF", "");
        }

        if ("BIGINT".equals(this.type) || "INT".equals(this.type) || "TINYINT".equals(this.type)
            || "SMALLINT".equals(this.type)) {
            return Integer.parseInt(val);
        } else if ("DOUBLE".equals(this.type) || "FLOAT".equals(this.type)
                   || "DECIMAL".equals(this.type)) {
            return Double.parseDouble(val);
        }
        return String.valueOf(val);
    }
}
