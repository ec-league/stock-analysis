package com.sapphire.stock.analysis.core.repo;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.sapphire.stock.analysis.common.dal.dao.StockDailyDigestDao;
import com.sapphire.stock.analysis.common.dal.dao.StockDailyWideDigestDao;
import com.sapphire.stock.analysis.common.dal.model.StockDailyDigestDO;
import com.sapphire.stock.analysis.common.dal.model.StockDailyWideDigestDO;
import com.sapphire.stock.analysis.core.converter.DbConverter;
import com.sapphire.stock.analysis.core.converter.DomainConverter;
import com.sapphire.stock.analysis.core.model.StockDailyDigest;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
@Repository
public class StockDailyDigestRepository {

    @Resource
    private StockDailyDigestDao     stockDailyDigestDao;

    @Resource
    private StockDailyWideDigestDao stockDailyWideDigestDao;

    public void save(StockDailyDigest stockDailyDigest) {
        StockDailyDigestDO dbEntity = DbConverter.toDbEntity(stockDailyDigest);

        StockDailyDigestDO stockDailyDigestDO = stockDailyDigestDao
            .selectByCodeAndPartitionDate(dbEntity.getCode(), dbEntity.getPartitionDate());

        StockDailyWideDigestDO stockDailyWideDigestDO = stockDailyWideDigestDao
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

    public StockDailyDigest selectByPartitionDate(String code, String partitionDate) {
        StockDailyDigestDO stockDailyDigestDO = stockDailyDigestDao
            .selectByCodeAndPartitionDate(code, partitionDate);

        if (stockDailyDigestDO == null) {
            return null;
        }

        return DomainConverter.toDomain(stockDailyDigestDO);
    }
}
