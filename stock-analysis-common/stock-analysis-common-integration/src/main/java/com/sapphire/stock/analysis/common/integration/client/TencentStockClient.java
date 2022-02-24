package com.sapphire.stock.analysis.common.integration.client;

import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

/**
 * Author: 柏云鹏
 * Date: 2022/2/24.
 */
@Service
public class TencentStockClient {

    private static final String TENCENT_URL_PREFIX = "http://qt.gtimg.cn/q=%s%s";

    @Setter
    @Autowired
    private RestTemplate        restTemplate;

    public String queryStockDetail(String code) {
        String url = String.format(TENCENT_URL_PREFIX, "sh", code);

        ResponseEntity<String> forEntity = restTemplate.getForEntity(url, String.class);

        if (forEntity.getStatusCode().is2xxSuccessful()) {
            return forEntity.getBody();
        } else {
            return null;
        }
    }
}
