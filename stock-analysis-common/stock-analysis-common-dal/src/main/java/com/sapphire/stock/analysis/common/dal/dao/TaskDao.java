package com.sapphire.stock.analysis.common.dal.dao;

import java.util.List;

import com.sapphire.stock.analysis.common.dal.model.TaskDo;
import org.apache.ibatis.annotations.Param;

public interface TaskDao {
    int deleteById(Long id);

    int insert(TaskDo record);

    TaskDo selectById(Long id);

    List<Long> selectFireTasks(@Param("taskType") String taskType, @Param("limit") int limit);

    int updateById(TaskDo record);

    void reStartProcessingTask();
}