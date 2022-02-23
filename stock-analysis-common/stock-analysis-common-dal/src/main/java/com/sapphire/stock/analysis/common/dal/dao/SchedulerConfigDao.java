package com.sapphire.stock.analysis.common.dal.dao;

import com.sapphire.stock.analysis.common.dal.model.SchedulerConfigDO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
public interface SchedulerConfigDao {
    List<SchedulerConfigDO> selectAll();

    void updateById(SchedulerConfigDO schedulerConfig);

    SchedulerConfigDO selectById(long configId);

    SchedulerConfigDO selectByType(@Param("taskType") String taskType);
}
