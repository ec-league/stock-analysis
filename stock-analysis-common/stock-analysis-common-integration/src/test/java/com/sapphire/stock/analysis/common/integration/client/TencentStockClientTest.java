package com.sapphire.stock.analysis.common.integration.client;

import com.sapphire.stock.analysis.common.integration.IntegrationSpringConfig;
import org.junit.Assert;
import org.junit.Test;

/**
 * Author: 柏云鹏
 * Date: 2022/2/24.
 */
public class TencentStockClientTest {

    @Test
    public void test_1() throws Exception {
        TencentStockClient tencentStockClient = new TencentStockClient();

        tencentStockClient.setRestTemplate(new IntegrationSpringConfig().getRestTemplate());

        String s = tencentStockClient.queryStockDetail("600159");

        Assert.assertNotNull(s);
    }

}
