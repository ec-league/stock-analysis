package com.sapphire.stock.analysis.common.dal.dao;

import java.util.List;

import com.sapphire.stock.analysis.common.dal.model.TaskDo;

public interface TaskDao {
    int deleteByPrimaryKey(Long id);

    int insert(TaskDo record);

    TaskDo selectById(Long id);

    List<TaskDo> selectFireTasks();

    int updateById(TaskDo record);
}