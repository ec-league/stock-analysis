package com.sapphire.stock.analysis.core.converter;

import org.springframework.beans.BeanUtils;

import com.sapphire.stock.analysis.common.dal.model.StockDailyDigestDO;
import com.sapphire.stock.analysis.core.model.StockDailyDigest;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
public class DbConverter {
    public static StockDailyDigestDO toDbEntity(StockDailyDigest domain) {
        StockDailyDigestDO dbEntity = new StockDailyDigestDO();

        BeanUtils.copyProperties(domain, dbEntity);

        return dbEntity;
    }
}
