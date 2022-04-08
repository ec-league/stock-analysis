package com.sapphire.stock.analysis.biz.action;

import java.lang.annotation.*;

import org.springframework.core.annotation.AliasFor;
import org.springframework.stereotype.Component;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Target({ ElementType.TYPE })
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Component
public @interface Action {
    @AliasFor(annotation = Component.class)
    String value() default "";
}
