package com.sapphire.stock.analysis.common.util;

/**
 * Author: 柏云鹏 Date: 2022/4/5.
 */
public class PathUtils {
    public static String append(String prefix, String detail) {
        if (prefix.endsWith("/")) {
            return prefix + detail;
        } else {
            return prefix + "/" + detail;
        }
    }
}
