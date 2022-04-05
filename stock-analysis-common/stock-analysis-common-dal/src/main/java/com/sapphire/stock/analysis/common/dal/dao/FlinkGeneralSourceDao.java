package com.sapphire.stock.analysis.common.dal.dao;

import java.util.List;

import com.sapphire.stock.analysis.common.dal.model.FlinkGeneralSourceDo;
import org.apache.ibatis.annotations.Param;

public interface FlinkGeneralSourceDao {
    FlinkGeneralSourceDo selectById(long id);

    int insert(FlinkGeneralSourceDo flinkGeneralSourceDo);

    List<FlinkGeneralSourceDo> selectAll();

    List<FlinkGeneralSourceDo> findByName(@Param("name") String name);

    FlinkGeneralSourceDo findBySchemaAndTableName(@Param("schemaName") String schemaName, @Param("tableName") String tableName);

    List<FlinkGeneralSourceDo> selectByType(String type);

    int updateById(FlinkGeneralSourceDo flinkGeneralSourceDo);

    int deleteById(long id);
}
