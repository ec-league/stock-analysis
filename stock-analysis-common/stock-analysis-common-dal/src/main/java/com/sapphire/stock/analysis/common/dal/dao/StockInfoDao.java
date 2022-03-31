package com.sapphire.stock.analysis.common.dal.dao;

import com.sapphire.stock.analysis.common.dal.model.StockInfoDo;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StockInfoDao {
    int deleteByCode(String stockCode);

    int insert(StockInfoDo record);

    StockInfoDo selectByCode(String stockCode);

    int updateByCode(StockInfoDo record);

    List<StockInfoDo> selectAll();
}