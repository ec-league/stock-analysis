package com.sapphire.stock.analysis.core.repo;

import com.sapphire.stock.analysis.common.dal.dao.StockDailyDigestDao;
import com.sapphire.stock.analysis.common.dal.dao.StockWideDailyDigestDao;
import com.sapphire.stock.analysis.common.dal.model.StockDailyDigestDO;
import com.sapphire.stock.analysis.common.dal.model.StockWideDailyDigestDO;
import com.sapphire.stock.analysis.core.converter.DbConverter;
import com.sapphire.stock.analysis.core.converter.DomainConverter;
import com.sapphire.stock.analysis.core.model.StockDailyDigest;
import com.sapphire.stock.analysis.core.model.StockWideDailyDigest;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;

/**
 * Author: 柏云鹏 Date: 2022/2/23.
 */
@Repository
public class StockDailyDigestRepository {

    @Resource
    private StockDailyDigestDao stockDailyDigestDao;

    @Resource
    private StockWideDailyDigestDao stockWideDailyDigestDao;

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

    public StockDailyDigest selectByPartitionDate(String code, String partitionDate) {
        StockDailyDigestDO stockDailyDigestDO = stockDailyDigestDao
                .selectByCodeAndPartitionDate(code, partitionDate);

        if (stockDailyDigestDO == null) {
            return null;
        }

        return DomainConverter.toDomain(stockDailyDigestDO);
    }

    public StockWideDailyDigest selectWideByCodeAndPartitionDate(String code, String partitionDate) {
        StockWideDailyDigestDO stockWideDailyDigestDO = stockWideDailyDigestDao.selectByCodeAndPartitionDate(code, partitionDate);

        if (stockWideDailyDigestDO == null) {
            return null;
        }

        return DomainConverter.toDomain(stockWideDailyDigestDO);
    }

    public void save(StockWideDailyDigest currentWideDigest) {
        StockWideDailyDigestDO dbEntity = DbConverter.toDbEntity(currentWideDigest);


        StockWideDailyDigestDO stockWideDailyDigestDO =
                stockWideDailyDigestDao.selectByCodeAndPartitionDate(currentWideDigest.getCode(),
                        currentWideDigest.getPartitionDate());

        if (stockWideDailyDigestDO == null) {
            stockWideDailyDigestDao.insert(dbEntity);
        } else {
            dbEntity.setId(stockWideDailyDigestDO.getId());
            stockWideDailyDigestDao.updateById(dbEntity);
        }
    }
}
