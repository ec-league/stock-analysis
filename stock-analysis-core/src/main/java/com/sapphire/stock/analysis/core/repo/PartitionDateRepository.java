package com.sapphire.stock.analysis.core.repo;

import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.common.dal.dao.PartitionDateDao;

import javax.annotation.Resource;

/**
 * @author 柏云鹏
 * @since 2022/9/4.
 */
@Service
public class PartitionDateRepository {

    @Resource
    private PartitionDateDao partitionDateDao;

    public boolean isTradingDay(String partitionDate) {
        return partitionDateDao.selectByPartitionDate(partitionDate) != null;
    }

    public String getLastPartitionDate(String partitionDate) {
        return partitionDateDao.selectMaxPartitionDate(partitionDate);
    }

    public void save(String partitionDate) {
        if (partitionDateDao.selectByPartitionDate(partitionDate) != null) {
            return;
        }

        partitionDateDao.insert(partitionDate);
    }
}
