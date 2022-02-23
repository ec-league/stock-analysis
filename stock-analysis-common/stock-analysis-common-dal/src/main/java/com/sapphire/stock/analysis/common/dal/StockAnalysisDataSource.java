package com.sapphire.stock.analysis.common.dal;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
@Configuration
@MapperScan(basePackages = "com.sapphire.stock.analysis.common.dal.dao", sqlSessionFactoryRef = "sqlSessionFactory")
public class StockAnalysisDataSource {

}
