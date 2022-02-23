package com.sapphire.stock.analysis.common.dal.dao;

import com.sapphire.stock.analysis.common.dal.model.StockDailyDigestDO;

public interface StockDailyDigestDao {
    int deleteByPrimaryKey(Long id);

    int insert(StockDailyDigestDO record);

    int insertSelective(StockDailyDigestDO record);

    StockDailyDigestDO selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(StockDailyDigestDO record);

    int updateByPrimaryKey(StockDailyDigestDO record);
}