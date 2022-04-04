package com.sapphire.stock.analysis.biz.entity;

import lombok.Data;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Data
public abstract class BaseEntity implements Serializable {
    private String              serialNo;

    private String              externalSerialNo;

    private Map<String, String> extInfo = new HashMap<String, String>();

    private boolean             success;
}
