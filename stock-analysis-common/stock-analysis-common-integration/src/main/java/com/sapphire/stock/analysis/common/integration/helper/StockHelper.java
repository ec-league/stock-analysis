package com.sapphire.stock.analysis.common.integration.helper;

import org.springframework.stereotype.Service;

/**
 * Author: 柏云鹏 Date: 2022/4/2.
 */
@Service
public class StockHelper {

    public String getPrefix(String code) {
        if (code.startsWith("600")) {
            return "sh";
        } else {
            return "sz";
        }
    }
}
