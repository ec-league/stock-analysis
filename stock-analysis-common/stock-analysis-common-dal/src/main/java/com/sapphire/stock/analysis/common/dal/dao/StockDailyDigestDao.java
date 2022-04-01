package com.sapphire.stock.analysis.common.dal.dao;

import com.sapphire.stock.analysis.common.dal.model.StockDailyDigestDO;

import java.util.List;

public interface StockDailyDigestDao {
    int deleteById(Long id);

    int insert(StockDailyDigestDO record);

    int insertAll(List<StockDailyDigestDO> records);

    StockDailyDigestDO selectById(Long id);

    int updateById(StockDailyDigestDO record);
}