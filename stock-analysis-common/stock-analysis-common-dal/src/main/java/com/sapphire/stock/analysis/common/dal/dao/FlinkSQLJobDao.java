package com.sapphire.stock.analysis.common.dal.dao;

import com.sapphire.stock.analysis.common.dal.model.FlinkSQLJobDo;

import java.util.List;

/**
 * Author: 柏云鹏 Date: 2022/4/3.
 */
public interface FlinkSQLJobDao {
    int insert(FlinkSQLJobDo submitJobDo);

    List<FlinkSQLJobDo> selectAll();

    FlinkSQLJobDo selectById(long id);

    int update(FlinkSQLJobDo submitJobDo);

    FlinkSQLJobDo selectByName(String name);

    int deleteByPrimaryKey(Long id);
}
