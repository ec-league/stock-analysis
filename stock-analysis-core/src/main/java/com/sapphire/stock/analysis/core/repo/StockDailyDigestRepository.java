package com.sapphire.stock.analysis.core.repo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sapphire.stock.analysis.common.dal.dao.StockDailyDigestDao;
import com.sapphire.stock.analysis.common.dal.model.StockDailyDigestDO;
import com.sapphire.stock.analysis.core.converter.DbConverter;
import com.sapphire.stock.analysis.core.model.StockDailyDigest;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
@Repository
public class StockDailyDigestRepository {

    @Autowired
    private StockDailyDigestDao stockDailyDigestDao;

    public void save(StockDailyDigest stockDailyDigest) {
        StockDailyDigestDO dbEntity = DbConverter.toDbEntity(stockDailyDigest);

        StockDailyDigestDO stockDailyDigestDO = stockDailyDigestDao
            .selectByCodeAndPartitionDate(dbEntity.getCode(), dbEntity.getPartitionDate());

        if (stockDailyDigestDO != null) {
            stockDailyDigestDao.updateByCodeAndPartitionDate(dbEntity);
        } else if (dbEntity.getId() != null && dbEntity.getId() > 0L) {
            stockDailyDigestDao.updateById(dbEntity);
        } else {
            stockDailyDigestDao.insert(dbEntity);
            stockDailyDigest.setId(dbEntity.getId());
        }
    }
}