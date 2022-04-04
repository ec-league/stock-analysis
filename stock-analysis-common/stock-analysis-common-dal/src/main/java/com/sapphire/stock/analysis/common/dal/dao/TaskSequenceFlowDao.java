package com.sapphire.stock.analysis.common.dal.dao;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.sapphire.stock.analysis.common.dal.model.TaskSequenceFlowDo;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
public interface TaskSequenceFlowDao {
    int insert(TaskSequenceFlowDo taskSequenceFlowDo);

    int update(TaskSequenceFlowDo taskSequenceFlowDo);

    List<TaskSequenceFlowDo> selectByParentId(long parentId);

    List<TaskSequenceFlowDo> selectBySchedulerJobId(long schedulerJobId);

    List<TaskSequenceFlowDo> selectParentBySchedulerJobId(long schedulerJobId);

    TaskSequenceFlowDo selectById(long id);

    List<TaskSequenceFlowDo> selectParentByTimeRange(@Param("start") Date start,
                                                     @Param("end") Date end);

    int insertAll(List<TaskSequenceFlowDo> flowDoList);

    TaskSequenceFlowDo selectExecuteFlow(long taskSequenceFlowId);

    int deleteScheduleFlow(long id);
}
