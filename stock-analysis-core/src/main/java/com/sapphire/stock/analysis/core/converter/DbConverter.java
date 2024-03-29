package com.sapphire.stock.analysis.core.converter;

import com.alibaba.druid.support.json.JSONUtils;
import com.sapphire.stock.analysis.common.dal.model.*;
import com.sapphire.stock.analysis.common.util.JsonUtils;
import com.sapphire.stock.analysis.core.model.*;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.BeanUtils;

import java.util.Date;
import java.util.Locale;

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
        stockInfoDo.setExtInfo(JsonUtils.toJsonStr(stockInfo.getExtInfo()));
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
        dbEntity.setScheduleJobId(domain.getScheduleJobId());
        dbEntity.setPriority(domain.getPriority());
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
        dbEntity.setTableName(flinkGeneralSource.getTableName().toUpperCase(Locale.ROOT));
        dbEntity.setSchemaName(flinkGeneralSource.getSchemaName().toUpperCase(Locale.ROOT));
        dbEntity.setType(flinkGeneralSource.getType());
        dbEntity.setGmtCreate(flinkGeneralSource.getGmtCreate() == null ? new Date()
            : flinkGeneralSource.getGmtCreate());
        dbEntity.setGmtModified(flinkGeneralSource.getGmtModified() == null ? new Date()
            : flinkGeneralSource.getGmtModified());
        if (StringUtils.equals(flinkGeneralSource.getType(), "FILE")) {
            dbEntity.setSourceConfig(JsonUtils.toJsonStr(flinkGeneralSource.getSourceConfig()));
        } else if (StringUtils.equals(flinkGeneralSource.getType(), "MYSQL")) {
            dbEntity
                .setSourceConfig(JsonUtils.toJsonStr(flinkGeneralSource.getMysqlSourceConfig()));
        }
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

    public static AsyncTaskDo toDbEntity(AsyncTask asyncTask) {
        AsyncTaskDo asyncTaskDo = new AsyncTaskDo();
        asyncTaskDo.setId(asyncTask.getId());
        asyncTaskDo.setAsyncType(asyncTask.getAsyncType());
        asyncTaskDo.setProcessInfo(JsonUtils.toJsonStr(asyncTask.getProcessInfo()));
        asyncTaskDo.setStatus(asyncTask.getStatus());
        asyncTaskDo.setErrorCode(asyncTask.getErrorCode());
        asyncTaskDo.setErrorMsg(asyncTask.getErrorMsg());
        asyncTaskDo.setGmtCreate(asyncTask.getGmtCreate());
        asyncTaskDo.setGmtModified(asyncTask.getGmtModified());
        return asyncTaskDo;
    }

    public static StockWideDailyDigestDO toDbEntity(StockWideDailyDigest currentWideDigest) {
        StockWideDailyDigestDO dbEntity = new StockWideDailyDigestDO();

        dbEntity.setCode(currentWideDigest.getCode());
        dbEntity.setPartitionDate(currentWideDigest.getPartitionDate());
        dbEntity.setExtInfo(JsonUtils.toJsonStr(currentWideDigest.getStockWideDetail()));
        dbEntity.setGmtCreate(currentWideDigest.getGmtCreate());
        dbEntity.setGmtModified(new Date());

        return dbEntity;
    }
}
