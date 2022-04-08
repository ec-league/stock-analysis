package com.sapphire.stock.analysis.core.converter;

import java.util.Date;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.BeanUtils;

import com.alibaba.druid.support.json.JSONUtils;
import com.sapphire.stock.analysis.common.dal.model.*;
import com.sapphire.stock.analysis.common.util.JsonUtils;
import com.sapphire.stock.analysis.core.model.*;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
public class DbConverter {
    public static StockDailyDigestDO toDbEntity(StockDailyDigest domain) {
        StockDailyDigestDO dbEntity = new StockDailyDigestDO();

        BeanUtils.copyProperties(domain, dbEntity);

        return dbEntity;
    }

    public static TaskDo toDbEntity(Task task) {
        TaskDo dbEntity = new TaskDo();

        BeanUtils.copyProperties(task, dbEntity);

        dbEntity.setExtInfo(JSONUtils.toJSONString(task.getExtInfo()));

        return dbEntity;
    }

    public static StockInfoDo toDbEntity(StockInfo stockInfo) {
        StockInfoDo stockInfoDo = new StockInfoDo();
        BeanUtils.copyProperties(stockInfo, stockInfoDo);
        return stockInfoDo;
    }

    public static FlinkScheduleJobDo toDbEntity(FlinkScheduleJob domain) {
        FlinkScheduleJobDo dbEntity = new FlinkScheduleJobDo();

        dbEntity.setId(domain.getId());
        dbEntity.setName(domain.getName());
        dbEntity.setCronExpression(domain.getCronExpression());
        dbEntity.setDescription(domain.getDescription());
        dbEntity.setGmtCreate(domain.getGmtCreate());
        dbEntity.setGmtModified(domain.getGmtModified());
        dbEntity.setStatus(domain.getStatus());
        dbEntity.setTag(domain.getTag());
        dbEntity.setExtInfo(JsonUtils.toJsonStr(domain.getExtInfo()));
        return dbEntity;
    }

    public static FlinkSQLJobDo toDbEntity(FlinkSQLJob domain) {
        FlinkSQLJobDo dbEntity = new FlinkSQLJobDo();

        dbEntity.setId(domain.getId());
        dbEntity.setFlinkConfig(JsonUtils.toJsonStr(domain.getFlinkConfig()));
        dbEntity.setJobConfig(JsonUtils.toJsonStr(domain.getJobConfig()));
        dbEntity.setName(domain.getName());
        dbEntity.setFlinkJobId(domain.getFlinkJobId());
        dbEntity.setStatus(StringUtils.isEmpty(domain.getStatus()) ? "INIT" : domain.getStatus());
        dbEntity.setGmtCreate(domain.getGmtCreate() == null ? new Date() : domain.getGmtCreate());
        dbEntity
            .setGmtModified(domain.getGmtModified() == null ? new Date() : domain.getGmtModified());
        dbEntity.setTaskSeqId(domain.getTaskSeqId());
        dbEntity.setType(domain.getType());
        dbEntity.setResultMsg(domain.getResultMsg());
        dbEntity.setExtInfo(JsonUtils.toJsonStr(domain.getExtInfo()));

        return dbEntity;
    }

    public static TaskSequenceFlowDo toDbEntity(TaskSequenceFlow taskSequenceFlow) {
        TaskSequenceFlowDo dbEntity = new TaskSequenceFlowDo();
        dbEntity.setId(taskSequenceFlow.getId());
        if (taskSequenceFlow.getParent() != null) {
            dbEntity.setParentId(taskSequenceFlow.getParent().getId());
        }
        dbEntity.setSchedulerJobId(taskSequenceFlow.getSchedulerJobId());
        dbEntity.setGmtCreate(taskSequenceFlow.getGmtCreate());
        dbEntity.setGmtModified(taskSequenceFlow.getGmtModified());
        dbEntity.setTaskFlowType(taskSequenceFlow.getTaskFlowType());
        dbEntity.setTaskInfo(JsonUtils.toJsonStr(taskSequenceFlow.getTaskInfo()));
        dbEntity.setStatus(taskSequenceFlow.getStatus());
        return dbEntity;
    }

    public static FlinkGeneralSourceDo toDbEntity(FlinkGeneralSource flinkGeneralSource) {
        FlinkGeneralSourceDo dbEntity = new FlinkGeneralSourceDo();
        dbEntity.setId(flinkGeneralSource.getId());
        dbEntity.setTableName(flinkGeneralSource.getTableName());
        dbEntity.setSchemaName(flinkGeneralSource.getSchemaName());
        dbEntity.setType(flinkGeneralSource.getType());
        dbEntity.setGmtCreate(flinkGeneralSource.getGmtCreate() == null ? new Date()
            : flinkGeneralSource.getGmtCreate());
        dbEntity.setGmtModified(flinkGeneralSource.getGmtModified() == null ? new Date()
            : flinkGeneralSource.getGmtModified());
        dbEntity.setSourceConfig(JsonUtils.toJsonStr(flinkGeneralSource.getSourceConfig()));
        return dbEntity;
    }

    public static FlinkSQLVersionDo toVersionEntity(FlinkSQLJob domain) {
        FlinkSQLVersionDo dbEntity = new FlinkSQLVersionDo();

        dbEntity.setSqlId(domain.getId());
        dbEntity.setFlinkConfig(JsonUtils.toJsonStr(domain.getFlinkConfig()));
        dbEntity.setJobConfig(JsonUtils.toJsonStr(domain.getJobConfig()));
        dbEntity.setStatus(domain.getStatus());
        dbEntity.setGmtCreate(domain.getGmtCreate() == null ? new Date() : domain.getGmtCreate());
        dbEntity
            .setGmtModified(domain.getGmtModified() == null ? new Date() : domain.getGmtModified());
        dbEntity.setExtInfo(JsonUtils.toJsonStr(domain.getExtInfo()));
        return dbEntity;
    }
}
