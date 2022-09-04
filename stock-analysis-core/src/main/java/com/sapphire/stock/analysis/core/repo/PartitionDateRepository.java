package com.sapphire.stock.analysis.core.repo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.common.dal.dao.PartitionDateDao;

/**
 * @author 柏云鹏
 * @since 2022/9/4.
 */
@Service
public class PartitionDateRepository {

    @Autowired
    private PartitionDateDao partitionDateDao;

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
