package com.sapphire.stock.analysis.common.dal.dao;

import com.sapphire.stock.analysis.common.dal.model.FlinkScheduleJobDo;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Author: 柏云鹏 Date: 2022/4/3.
 */
public interface FlinkScheduleJobDao {
    int insert(FlinkScheduleJobDo flinkScheduleJob);

    int update(FlinkScheduleJobDo flinkScheduleJob);

    int updateStatusEnable(@Param("id") long id);

    List<FlinkScheduleJobDo> selectAll();

    FlinkScheduleJobDo selectById(long id);

    List<FlinkScheduleJobDo> selectByTag(@Param("tag") String tag);

    int deleteById(long id);

    /**
     * 根据job名称获取fink调度任务
     * @param name
     * @return
     */
    FlinkScheduleJobDo selectByName(String name);
}
