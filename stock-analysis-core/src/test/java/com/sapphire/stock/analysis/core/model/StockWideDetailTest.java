package com.sapphire.stock.analysis.core.model;

import com.alibaba.fastjson.JSON;
import org.junit.Assert;
import org.junit.Test;

import java.math.BigDecimal;

/**
 * @author 柏云鹏
 * @since 2023/2/27.
 */
public class StockWideDetailTest {

    @Test
    public void test_json() {
        StockWideDetail stockWideDetail = new StockWideDetail();
        stockWideDetail.setStartPrice(new BigDecimal(12.57));

        String s = JSON.toJSONString(stockWideDetail);

        StockWideDetail ss = JSON.parseObject(s, StockWideDetail.class);

        Assert.assertNotNull(ss);
    }
}
