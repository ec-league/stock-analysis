package com.sapphire.stock.analysis.biz.action;

import org.springframework.stereotype.Component;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Component
public @interface Action {
    String value() default "";
}
