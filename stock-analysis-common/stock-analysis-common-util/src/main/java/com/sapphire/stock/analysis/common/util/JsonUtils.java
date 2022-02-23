package com.sapphire.stock.analysis.common.util;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
public class JsonUtils {
    public static String toJsonStr(Object o) {
        return new Gson().toJson(o);
    }

    public static <T> T fromJson(String jsonStr, Class<T> tClass) {
        return new Gson().fromJson(jsonStr, tClass);
    }

    public static Map<String, String> toStringMap(String jsonStr) {
        if (StringUtils.isEmpty(jsonStr)) {
            return new HashMap<>();
        }

        Type type = new TypeToken<Map<String, String>>() {
        }.getType();

        return new Gson().fromJson(jsonStr, type);
    }
}
