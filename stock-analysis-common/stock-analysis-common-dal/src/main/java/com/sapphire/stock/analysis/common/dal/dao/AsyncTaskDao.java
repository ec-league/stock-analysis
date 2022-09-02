package com.sapphire.stock.analysis.common.dal.dao;

import com.sapphire.stock.analysis.common.dal.model.AsyncTaskDo;
import org.springframework.stereotype.Repository;


@Repository
public interface AsyncTaskDao {
    int deleteByPrimaryKey(Long id);

    int insert(AsyncTaskDo record);

    AsyncTaskDo selectByPrimaryKey(Long id);

    int updateByPrimaryKey(AsyncTaskDo record);

    int resetToRetry();
}