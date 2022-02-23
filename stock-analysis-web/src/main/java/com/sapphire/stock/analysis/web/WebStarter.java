package com.sapphire.stock.analysis.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Import;

import com.sapphire.stock.analysis.core.CoreSpringConfig;

/**
 * Author: 柏云鹏
 * Date: 2019/7/29.
 */
@Import(CoreSpringConfig.class)
@SpringBootApplication
public class WebStarter extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(WebStarter.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(WebStarter.class, args);
    }
}
