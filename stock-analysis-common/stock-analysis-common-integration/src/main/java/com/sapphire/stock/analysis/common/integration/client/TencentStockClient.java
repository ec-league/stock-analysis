package com.sapphire.stock.analysis.common.integration.client;

import java.math.BigDecimal;
import java.util.Date;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.sapphire.stock.analysis.common.dal.model.StockDailyDigestDO;
import com.sapphire.stock.analysis.common.integration.helper.StockHelper;

import lombok.Setter;

/**
 * Author: 柏云鹏
 * Date: 2022/2/24.
 */
@Service
public class TencentStockClient {

    private static final String TENCENT_URL_PREFIX = "http://qt.gtimg.cn/q=%s%s";

    @Setter
    @Autowired
    private StockHelper         stockHelper;

    @Setter
    @Autowired
    private RestTemplate        restTemplate;

    public StockDailyDigestDO queryStockDetail(String code) {
        String url = String.format(TENCENT_URL_PREFIX, stockHelper.getPrefix(code), code);

        ResponseEntity<String> forEntity = restTemplate.getForEntity(url, String.class);

        if (forEntity.getStatusCode().is2xxSuccessful()) {
            return buildDigest(forEntity.getBody());
        } else {
            return null;
        }
    }

    private StockDailyDigestDO buildDigest(String tencentResp) {
        StockDailyDigestDO stockDailyDigest = new StockDailyDigestDO();

        String[] split = StringUtils.split(tencentResp, "~");

        stockDailyDigest.setName(split[1]);
        stockDailyDigest.setCode(split[2]);
        stockDailyDigest.setEndPrice(new BigDecimal(split[3]));
        stockDailyDigest.setStartPrice(new BigDecimal(split[5]));
        stockDailyDigest.setHighestPrice(new BigDecimal(split[32]));
        stockDailyDigest.setLowestPrice(new BigDecimal(split[33]));
        String partitionDate = split[29].substring(0, 4) + "-" + split[29].substring(4, 6) + "-" + split[29].substring(6,8);
        stockDailyDigest.setPartitionDate(partitionDate);
        stockDailyDigest.setTradingVolume(new BigDecimal(split[35]));
        stockDailyDigest.setBusinessVolume(new BigDecimal(split[36]));
        stockDailyDigest.setTurnoverRate(Double.parseDouble(split[37]));
        stockDailyDigest.setPe(Double.parseDouble(split[51]));
        stockDailyDigest.setPb(Double.parseDouble(split[45]));
        stockDailyDigest.setTotalValue(new BigDecimal(split[44]));
        stockDailyDigest.setCirculationMarketValue(new BigDecimal(split[43]));
        stockDailyDigest.setGmtCreate(new Date());
        stockDailyDigest.setGmtModified(new Date());
        return stockDailyDigest;
    }

    public String getTradingAgency(String code) {
        switch (code) {
            case "1":
                return "sh";
            case "51":
                return "sz";
            case "100":
                return "hk";
            case "200":
                return "us";
            default:
                return null;
        }
    }
}
