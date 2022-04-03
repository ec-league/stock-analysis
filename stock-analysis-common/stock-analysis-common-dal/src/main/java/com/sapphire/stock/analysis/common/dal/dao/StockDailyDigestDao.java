package com.sapphire.stock.analysis.common.dal.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.sapphire.stock.analysis.common.dal.model.StockDailyDigestDO;

public interface StockDailyDigestDao {
    int deleteById(Long id);

    int insert(StockDailyDigestDO record);

    int insertAll(List<StockDailyDigestDO> records);

    StockDailyDigestDO selectById(Long id);

    StockDailyDigestDO selectByCodeAndPartitionDate(@Param("code") String code,
                                                    @Param("partitionDate") String partitionDate);

    int updateById(StockDailyDigestDO record);

    int updateByCodeAndPartitionDate(StockDailyDigestDO record);
}