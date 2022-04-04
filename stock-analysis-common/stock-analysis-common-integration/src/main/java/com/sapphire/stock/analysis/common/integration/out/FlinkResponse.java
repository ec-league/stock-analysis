package com.sapphire.stock.analysis.common.integration.out;

import java.util.Map;

import lombok.Data;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Data
public class FlinkResponse {
    private boolean             success;
    private String              errorCode = "SUCCESS";
    private String              errorMsg  = "查询成功";
    private Map<String, String> context;
}
