package com.sapphire.stock.analysis.core.repo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sapphire.stock.analysis.common.dal.dao.StockInfoDao;
import com.sapphire.stock.analysis.common.dal.model.StockInfoDo;
import com.sapphire.stock.analysis.core.converter.DbConverter;
import com.sapphire.stock.analysis.core.converter.DomainConverter;
import com.sapphire.stock.analysis.core.model.StockInfo;

/**
 * Author: 柏云鹏 Date: 2022/3/31.
 */
@Repository
public class StockInfoRepository {

    @Autowired
    private StockInfoDao stockInfoDao;

    public List<StockInfo> selectAll() {
        List<StockInfoDo> stockInfoDos = stockInfoDao.selectAll();

        List<StockInfo> result = new ArrayList<>(stockInfoDos.size());
        for (StockInfoDo stockInfoDo : stockInfoDos) {
            result.add(DomainConverter.toDomain(stockInfoDo));
        }

        return result;
    }

    public boolean save(StockInfo stockInfo) {
        StockInfoDo dbEntity = DbConverter.toDbEntity(stockInfo);

        StockInfoDo stockInfoDo = stockInfoDao.selectByCode(dbEntity.getStockCode());

        if (stockInfoDo == null) {
            return stockInfoDao.insert(dbEntity) > 0;
        } else {
            return stockInfoDao.updateByCode(dbEntity) > 0;
        }
    }

    public StockInfo selectByCode(String code) {
        StockInfoDo stockInfoDo = stockInfoDao.selectByCode(code);

        return DomainConverter.toDomain(stockInfoDo);
    }
}
