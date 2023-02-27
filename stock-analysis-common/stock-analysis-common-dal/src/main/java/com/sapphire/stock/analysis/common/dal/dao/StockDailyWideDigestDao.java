package com.sapphire.stock.analysis.common.dal.dao;

import com.sapphire.stock.analysis.common.dal.model.StockDailyWideDigestDO;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface StockDailyWideDigestDao {
    int deleteByPrimaryKey(Long id);

    int insert(StockDailyWideDigestDO record);

    int insertSelective(StockDailyWideDigestDO record);

    StockDailyWideDigestDO selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(StockDailyWideDigestDO record);

    int updateByPrimaryKey(StockDailyWideDigestDO record);

    StockDailyWideDigestDO selectByCodeAndPartitionDate(@Param("code") String code, @Param("partitionDate") String partitionDate);
}