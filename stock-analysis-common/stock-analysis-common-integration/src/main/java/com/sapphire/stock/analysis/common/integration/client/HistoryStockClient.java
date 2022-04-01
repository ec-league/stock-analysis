package com.sapphire.stock.analysis.common.integration.client;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.sapphire.stock.analysis.common.dal.model.StockDailyDigestDO;
import com.sapphire.stock.analysis.common.integration.helper.StockHelper;

import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

/**
 * Author: 柏云鹏 Date: 2022/4/2.
 */
@Slf4j
@Service
public class HistoryStockClient {
    private static final String URL_PREFIX = "https://web.ifzq.gtimg.cn/appstock/app/fqkline/get?param=%s,day,%s,%s,500,qfq";

    @Setter
    @Autowired
    private StockHelper         stockHelper;

    @Setter
    @Autowired
    private RestTemplate        restTemplate;

    public List<StockDailyDigestDO> queryStockHistory(String code, String startDate,
                                                      String endDate) {
        String key = stockHelper.getPrefix(code) + code;

        String url = String.format(URL_PREFIX, key, startDate, endDate);

        ResponseEntity<String> forEntity = restTemplate.getForEntity(url, String.class);

        if (!forEntity.getStatusCode().is2xxSuccessful()) {
            throw new RuntimeException("查询历史接口失败!");
        }

        String result = forEntity.getBody();

        JSONObject jsonObject = JSON.parseObject(result);


        List<List> array = jsonObject.getJSONObject("data").getJSONObject(key).getJSONArray("qfqday").toJavaList(List.class);

        List<StockDailyDigestDO> dos = new ArrayList<>(300);

        for (List list : array) {
            List<String> strList = (List<String>) list;

            StockDailyDigestDO stockDailyDigestDO = new StockDailyDigestDO();
            stockDailyDigestDO.setCode(code);
            stockDailyDigestDO.setPartitionDate(strList.get(0));
            stockDailyDigestDO.setStartPrice(new BigDecimal(strList.get(1)));
            stockDailyDigestDO.setEndPrice(new BigDecimal(strList.get(2)));
            stockDailyDigestDO.setHighestPrice(new BigDecimal(strList.get(3)));
            stockDailyDigestDO.setLowestPrice(new BigDecimal(strList.get(4)));
            stockDailyDigestDO.setTradingVolume(new BigDecimal(strList.get(5)));

            dos.add(stockDailyDigestDO);
        }

        return dos;
    }
}
