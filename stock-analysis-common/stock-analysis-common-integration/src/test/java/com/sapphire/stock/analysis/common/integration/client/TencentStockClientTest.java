package com.sapphire.stock.analysis.common.integration.client;

import com.sapphire.stock.analysis.common.dal.model.StockDailyDigestDO;
import com.sapphire.stock.analysis.common.integration.IntegrationSpringConfig;
import com.sapphire.stock.analysis.common.integration.helper.StockHelper;
import org.junit.Assert;
import org.junit.Test;

import java.util.List;

/**
 * Author: 柏云鹏
 * Date: 2022/2/24.
 */
public class TencentStockClientTest {

    @Test
    public void test_1() throws Exception {
        TencentStockClient tencentStockClient = new TencentStockClient();

        tencentStockClient.setRestTemplate(new IntegrationSpringConfig().getRestTemplate());

        tencentStockClient.setStockHelper(new StockHelper());

        StockDailyDigestDO s = tencentStockClient.queryStockDetail("300059");

        Assert.assertNotNull(s);
    }

    @Test
    public void test_2() throws Exception {
        HistoryStockClient historyStockClient = new HistoryStockClient();
        historyStockClient.setRestTemplate(new IntegrationSpringConfig().getRestTemplate());

        historyStockClient.setStockHelper(new StockHelper());

        List<StockDailyDigestDO> list = historyStockClient.queryStockHistory("300059", "2021-03-01", "2022-03-01");

        Assert.assertNotNull(list);
    }

}
