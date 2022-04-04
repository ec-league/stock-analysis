package com.sapphire.stock.analysis.common.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

import lombok.extern.slf4j.Slf4j;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Slf4j
public class DateUtils {

    public static final String DEFAULT_TIMEZONE = "GMT+08:00";

    /**
     * date按格式转为String
     * @param date
     * @param pattern
     * @return
     */
    public static String formatDate(Date date, String pattern) {
        SimpleDateFormat dateFormat = new SimpleDateFormat(pattern);
        dateFormat.setTimeZone(TimeZone.getTimeZone(DEFAULT_TIMEZONE));
        return dateFormat.format(date);
    }

    /**
     * String类型装成Date
     * @param dateString
     * @param pattern
     * @return
     */
    public static Date parseStringToDate(String dateString, String pattern) {

        Date date = null;
        try {
            SimpleDateFormat sdf = new SimpleDateFormat(pattern);
            date = sdf.parse(dateString); // parse 转成日期的
            //  sdf.format(new Date());   format转成字符串的
        } catch (ParseException e) {
            log.error("parseStringToDate exception!", e);
        }
        return date;
    }
}
