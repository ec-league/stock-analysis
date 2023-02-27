package com.sapphire.stock.analysis.common.dal.dao;

import com.sapphire.stock.analysis.common.dal.model.StockDailyDigestDO;
import com.sapphire.stock.analysis.common.dal.model.StockWideDailyDigestDO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface StockWideDailyDigestDao {
    int deleteById(Long id);

    int insert(StockWideDailyDigestDO record);

    int insertAll(List<StockWideDailyDigestDO> records);

    StockWideDailyDigestDO selectById(Long id);

    StockWideDailyDigestDO selectByCodeAndPartitionDate(@Param("code") String code,
                                                    @Param("partitionDate") String partitionDate);

    int updateById(StockWideDailyDigestDO record);

    int updateByCodeAndPartitionDate(StockWideDailyDigestDO record);
}