package com.sapphire.stock.analysis.core.converter;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.BeanUtils;

import com.sapphire.stock.analysis.common.dal.model.*;
import com.sapphire.stock.analysis.common.util.JsonUtils;
import com.sapphire.stock.analysis.core.model.*;
import com.sapphire.stock.analysis.core.model.enums.FlinkSqlStatus;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
public class DomainConverter {
    public static Task toDomain(TaskDo taskDo) {
        Task task = new Task();

        BeanUtils.copyProperties(taskDo, task);
        task.setExtInfo(JsonUtils.toStringMap(taskDo.getExtInfo()));

        return task;
    }

    public static StockInfo toDomain(StockInfoDo stockInfoDo) {
        StockInfo stockInfo = new StockInfo();
        BeanUtils.copyProperties(stockInfoDo, stockInfo);

        return stockInfo;
    }

    public static FlinkScheduleJob toDomain(FlinkScheduleJobDo dbEntity) {
        FlinkScheduleJob domain = new FlinkScheduleJob();

        if (dbEntity == null) {
            return null;
        }

        domain.setId(dbEntity.getId());
        domain.setName(dbEntity.getName());
        domain.setCronExpression(dbEntity.getCronExpression());
        domain.setDescription(dbEntity.getDescription());
        domain.setGmtCreate(dbEntity.getGmtCreate());
        domain.setGmtModified(dbEntity.getGmtModified());
        domain.setStatus(dbEntity.getStatus());
        domain.setTag(dbEntity.getTag());
        domain.setExtInfo(JsonUtils.fromJson(dbEntity.getExtInfo(), FlinkScheduleJobConfig.class));
        return domain;
    }

    public static StockDailyDigest toDomain(StockDailyDigestDO stockDailyDigestDO) {
        StockDailyDigest stockDailyDigest = new StockDailyDigest();
        BeanUtils.copyProperties(stockDailyDigestDO, stockDailyDigest);
        return stockDailyDigest;
    }

    public static FlinkSQLJob toDomain(FlinkSQLJobDo dbEntity) {
        if (dbEntity == null) {
            return null;
        }

        FlinkSQLJob domain = new FlinkSQLJob();

        domain.setId(dbEntity.getId());
        domain.setFlinkConfig(JsonUtils.fromJson(dbEntity.getFlinkConfig(), FlinkConfig.class));
        if (StringUtils.isEmpty(dbEntity.getJobConfig())
            || dbEntity.getJobConfig().equals("null")) {
            domain.setJobConfig(new JobConfig());
        } else {
            domain.setJobConfig(JsonUtils.fromJson(dbEntity.getJobConfig(), JobConfig.class));
        }
        domain.setName(dbEntity.getName());
        domain.setFlinkJobId(dbEntity.getFlinkJobId());
        domain.setStatus(StringUtils.isEmpty(dbEntity.getStatus()) ? FlinkSqlStatus.INIT.name()
            : dbEntity.getStatus());
        domain.setGmtCreate(dbEntity.getGmtCreate());
        domain.setGmtModified(dbEntity.getGmtModified());
        domain.setTaskSeqId(dbEntity.getTaskSeqId());
        domain.setType(dbEntity.getType());
        domain.setResultMsg(dbEntity.getResultMsg());
        if (StringUtils.isEmpty(dbEntity.getExtInfo()) || dbEntity.getExtInfo().equals("null")) {
            domain.setExtInfo(new FlinkSqlExtInfo());
        } else {
            domain.setExtInfo(JsonUtils.fromJson(dbEntity.getExtInfo(), FlinkSqlExtInfo.class));
        }

        return domain;
    }

    public static TaskSequenceFlow toDomain(TaskSequenceFlowDo flowDo) {
        if (flowDo == null) {
            return null;
        }
        TaskSequenceFlow taskSequenceFlow = new TaskSequenceFlow();
        taskSequenceFlow.setId(flowDo.getId());
        taskSequenceFlow.setParentId(flowDo.getParentId() != null ? flowDo.getParentId() : -1L);
        taskSequenceFlow.setSchedulerJobId(flowDo.getSchedulerJobId());
        taskSequenceFlow.setTaskFlowType(flowDo.getTaskFlowType());
        taskSequenceFlow.setStatus(flowDo.getStatus());
        taskSequenceFlow.setTaskInfo(JsonUtils.toStringMap(flowDo.getTaskInfo()));
        taskSequenceFlow.setGmtCreate(flowDo.getGmtCreate());
        taskSequenceFlow.setGmtModified(flowDo.getGmtModified());
        return taskSequenceFlow;
    }

    public static FlinkGeneralSource toDomain(FlinkGeneralSourceDo dbEntity) {
        if (dbEntity == null) {
            return null;
        }

        FlinkGeneralSource domain = new FlinkGeneralSource();
        domain.setId(dbEntity.getId());
        domain.setTableName(dbEntity.getTableName());
        domain.setSchemaName(dbEntity.getSchemaName());
        domain.setType(dbEntity.getType());
        if (StringUtils.equals("FILE", dbEntity.getType())) {
            domain.setSourceConfig(
                JsonUtils.fromJson(dbEntity.getSourceConfig(), FileSourceConfig.class));
        } else if (StringUtils.equals("MYSQL", dbEntity.getType())) {
            domain.setMysqlSourceConfig(
                JsonUtils.fromJson(dbEntity.getSourceConfig(), MysqlSourceConfig.class));
        }

        domain.setGmtCreate(dbEntity.getGmtCreate());
        domain.setGmtModified(dbEntity.getGmtModified());
        return domain;
    }

    public static FlinkSQLVersion toDomain(FlinkSQLVersionDo dbEntity) {
        FlinkSQLVersion domain = new FlinkSQLVersion();

        domain.setId(dbEntity.getId());
        domain.setSqlId(dbEntity.getSqlId());
        domain.setFlinkConfig(JsonUtils.fromJson(dbEntity.getFlinkConfig(), FlinkConfig.class));
        domain.setJobConfig(JsonUtils.fromJson(dbEntity.getJobConfig(), JobConfig.class));
        domain.setStatus(dbEntity.getStatus());
        domain.setGmtCreate(dbEntity.getGmtCreate());
        domain.setGmtModified(dbEntity.getGmtModified());
        domain.setExtInfo(dbEntity.getExtInfo());

        return domain;
    }
}
