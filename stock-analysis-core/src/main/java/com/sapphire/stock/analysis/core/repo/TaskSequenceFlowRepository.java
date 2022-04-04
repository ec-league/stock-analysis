package com.sapphire.stock.analysis.core.repo;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sapphire.stock.analysis.common.dal.dao.TaskSequenceFlowDao;
import com.sapphire.stock.analysis.common.dal.model.TaskSequenceFlowDo;
import com.sapphire.stock.analysis.core.converter.DbConverter;
import com.sapphire.stock.analysis.core.converter.DomainConverter;
import com.sapphire.stock.analysis.core.model.TaskSequenceFlow;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Repository
public class TaskSequenceFlowRepository {

    @Autowired
    private TaskSequenceFlowDao taskSequenceFlowDao;

    public List<TaskSequenceFlow> selectByParentId(long parentId) {
        TaskSequenceFlowDo parentFlowDo = taskSequenceFlowDao.selectById(parentId);
        List<TaskSequenceFlowDo> sonDoList = taskSequenceFlowDao.selectByParentId(parentId);
        List<TaskSequenceFlow> sonList = new ArrayList<>(sonDoList.size());
        for (TaskSequenceFlowDo flowDo : sonDoList) {
            TaskSequenceFlow flow = DomainConverter.toDomain(flowDo);
            List<TaskSequenceFlow> flowsSon = selectByParentId(flowDo.getId());
            if (flowsSon.isEmpty()) {
                flow.setChildren(flowsSon);
            }
            flow.setParent(DomainConverter.toDomain(parentFlowDo));
            sonList.add(flow);
        }
        return sonList;
    }

    public List<TaskSequenceFlow> selectBySchedulerJobId(long schedulerJobId) {
        List<TaskSequenceFlowDo> executeRecordList = taskSequenceFlowDao
            .selectBySchedulerJobId(schedulerJobId);
        List<TaskSequenceFlow> taskSequenceFlowList = new ArrayList<>(executeRecordList.size());
        for (TaskSequenceFlowDo flowDo : executeRecordList) {
            TaskSequenceFlow flow = DomainConverter.toDomain(flowDo);
            taskSequenceFlowList.add(flow);
        }
        return taskSequenceFlowList;
    }

    public List<TaskSequenceFlow> selectParentBySchedulerJobId(long schedulerJobId) {
        List<TaskSequenceFlowDo> executeRecordList = taskSequenceFlowDao
            .selectParentBySchedulerJobId(schedulerJobId);
        List<TaskSequenceFlow> taskSequenceFlowList = new ArrayList<>(executeRecordList.size());
        for (TaskSequenceFlowDo flowDo : executeRecordList) {
            TaskSequenceFlow flow = DomainConverter.toDomain(flowDo);
            taskSequenceFlowList.add(flow);
        }
        return taskSequenceFlowList;
    }

    public TaskSequenceFlow selectById(long id) {
        TaskSequenceFlowDo flowDo = taskSequenceFlowDao.selectById(id);

        return DomainConverter.toDomain(flowDo);
    }

    /**
     * 删除id或者parentId为id的记录
     * @param id
     * @return
     */
    public boolean deleteScheduleFlow(long id) {
        return taskSequenceFlowDao.deleteScheduleFlow(id) > 0;
    }

    public boolean insert(TaskSequenceFlow taskSequenceFlow) {
        TaskSequenceFlowDo dbEntity = DbConverter.toDbEntity(taskSequenceFlow);

        boolean success = taskSequenceFlowDao.insert(dbEntity) > 0;

        if (success) {
            taskSequenceFlow.setId(dbEntity.getId());
        }

        return success;
    }

    public boolean insertAll(List<TaskSequenceFlow> taskSequenceFlows) {
        List<TaskSequenceFlowDo> flowDoList = new ArrayList<>(taskSequenceFlows.size());
        for (TaskSequenceFlow flow : taskSequenceFlows) {
            TaskSequenceFlowDo flowDo = DbConverter.toDbEntity(flow);
            flowDoList.add(flowDo);
        }

        int num = taskSequenceFlowDao.insertAll(flowDoList);
        return (num == taskSequenceFlows.size());
    }

    public TaskSequenceFlow selectExecuteFlow(long taskSequenceFlowId) {
        TaskSequenceFlowDo middleFlowDo = taskSequenceFlowDao.selectExecuteFlow(taskSequenceFlowId);
        TaskSequenceFlowDo flowDo = taskSequenceFlowDao.selectExecuteFlow(middleFlowDo.getId());

        return selectById(flowDo.getId());
    }

    public boolean updateFlow(TaskSequenceFlow taskSequenceFlow) {
        TaskSequenceFlowDo flowDo = DbConverter.toDbEntity(taskSequenceFlow);

        return taskSequenceFlowDao.update(flowDo) > 0;
    }

    public List<TaskSequenceFlow> selectByRange(Date start, Date end) {
        List<TaskSequenceFlowDo> flowDoList = taskSequenceFlowDao.selectParentByTimeRange(start,
            end);

        List<TaskSequenceFlow> result = new ArrayList<>();

        for (TaskSequenceFlowDo taskSequenceFlowDo : flowDoList) {
            TaskSequenceFlow flow = DomainConverter.toDomain(taskSequenceFlowDo);

            result.add(flow);
        }

        return result;
    }

    public boolean updateExecJobId(TaskSequenceFlow taskSequenceFlow, String jobId) {
        if (taskSequenceFlow != null) {
            Map<String, String> taskInfo = taskSequenceFlow.getTaskInfo();
            if (taskInfo == null) {
                taskInfo = new HashMap<>();
            }
            taskInfo.put("execJobId", jobId);
            taskSequenceFlow.setTaskInfo(taskInfo);
            return updateFlow(taskSequenceFlow);
        }
        return false;
    }
}
