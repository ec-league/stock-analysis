package com.sapphire.stock.analysis.common.dal;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
@Configuration
@ImportResource("classpath:/dao-config.xml")
@SpringBootApplication
public class DalSpringConfig {

}
