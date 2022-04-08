package com.sapphire.stock.analysis.common.dal.dao;

import java.util.List;

import com.sapphire.stock.analysis.common.dal.model.FlinkSQLVersionDo;

/**
 * Author: 柏云鹏 Date: 2022/4/8.
 */
public interface FlinkSQLVersionDao {
    int insert(FlinkSQLVersionDo submitJobDo);

    List<FlinkSQLVersionDo> selectSqlVersions(long sqlId);

    FlinkSQLVersionDo selectById(long id);
}
