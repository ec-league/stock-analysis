package com.sapphire.stock.analysis.common.dal.dao;

import com.sapphire.stock.analysis.common.dal.model.StockDailyDigestDO;

public interface StockDailyDigestDao {
    int deleteById(Long id);

    int insert(StockDailyDigestDO record);

    StockDailyDigestDO selectById(Long id);

    int updateById(StockDailyDigestDO record);
}