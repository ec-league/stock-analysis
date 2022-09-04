package com.sapphire.stock.analysis.common.dal.dao;

public interface PartitionDateDao {
    int insert(String partitionDate);

    String selectByPartitionDate(String partitionDate);

    String selectMaxPartitionDate(String partitionDate);
}