package com.sapphire.stock.analysis.core.model;

import lombok.Data;

import java.util.Date;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Data
public class FlinkGeneralSource {
    private long         id;
    private String       name;
    private String       type;
    private SourceConfig sourceConfig;
    private Date         gmtCreate;
    private Date         gmtModified;
}