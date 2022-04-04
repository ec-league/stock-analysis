package com.sapphire.stock.analysis.biz;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.ImportResource;

import com.sapphire.stock.analysis.common.integration.IntegrationSpringConfig;
import com.sapphire.stock.analysis.core.CoreSpringConfig;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Configuration
@Import({ CoreSpringConfig.class, IntegrationSpringConfig.class })
@ImportResource(locations = { "classpath:/stock-analysis-biz.xml" })
@SpringBootApplication
public class BizSpringConfig {

}
