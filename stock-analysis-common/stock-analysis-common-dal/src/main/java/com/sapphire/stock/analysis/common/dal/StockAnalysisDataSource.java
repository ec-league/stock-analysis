package com.sapphire.stock.analysis.common.dal;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

import com.alibaba.druid.pool.DruidDataSource;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
@Configuration
@MapperScan(basePackages = "com.sapphire.stock.analysis.common.dal.dao", sqlSessionFactoryRef = "sqlSessionFactory")
public class StockAnalysisDataSource {
    @Value("${stock.analysis.username}")
    private String username;

    @Value("${stock.analysis.password}")
    private String password;

    @Value("${stock.analysis.url}")
    private String url;

    @Value("${spring.datasource.driver-class-name:com.mysql.cj.jdbc.Driver}")
    private String driver;

    @Bean(name = "dataSource", initMethod = "init", destroyMethod = "close")
    @Primary
    public DataSource getDataSource() {
        DruidDataSource druidDataSource = new DruidDataSource();

        druidDataSource.setUrl(url);
        druidDataSource.setUsername(username);
        druidDataSource.setPassword(password);
        druidDataSource.setDriverClassName(driver);

        druidDataSource.setInitialSize(1);

        return druidDataSource;
    }

    @Bean(name = "sqlSessionFactory")
    @Primary
    public SqlSessionFactory getSqlSessionFactory(@Qualifier("dataSource") DataSource datasource) throws Exception {
        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();
        bean.setDataSource(datasource);
        bean.setMapperLocations(
            new PathMatchingResourcePatternResolver().getResources("classpath*:mapper/*.xml"));
        return bean.getObject();
    }

    @Bean("sqlSessionTemplate")
    @Primary
    public SqlSessionTemplate getSqlSessionTemplate(@Qualifier("sqlSessionFactory") SqlSessionFactory sessionFactory) {
        return new SqlSessionTemplate(sessionFactory);
    }
}
