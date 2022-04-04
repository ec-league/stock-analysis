package com.sapphire.stock.analysis.biz.action;

import com.sapphire.stock.analysis.biz.entity.FlinkSchedulerEntity;
import com.sapphire.stock.analysis.common.util.exception.ErrorCode;
import com.sapphire.stock.analysis.core.exception.AthenaException;
import com.sapphire.stock.analysis.core.model.FlinkSQLJob;
import com.sapphire.stock.analysis.core.model.FlinkSqlOrder;
import com.sapphire.stock.analysis.core.model.TaskSequenceFlow;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.repo.FlinkSqlJobRepository;
import com.sapphire.stock.analysis.core.repo.TaskSequenceFlowRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Action("buildTaskSequenceFlowListAction")
public class BuildTaskSequenceFlowListAction implements BusinessAction {
    private static final Logger logger = LoggerFactory
            .getLogger(BuildTaskSequenceFlowListAction.class);

    private TaskSequenceFlowRepository taskSequenceFlowRepository;

    private FlinkSqlJobRepository flinkSqlJobRepository;

    @Override
    public void process(ProcessContext processContext) {

        FlinkSchedulerEntity entity = processContext.getEntity();

        //添加父节点
        TaskSequenceFlow parentFlow = new TaskSequenceFlow();
        parentFlow.setGmtCreate(new Date());
        parentFlow.setGmtModified(new Date());
        parentFlow.setStatus("INIT");
        parentFlow.setTaskFlowType("FLINK_SCHEDULER_PARENT");
        Map<String, String> parentFlowTaskInfo = new HashMap<>();
        parentFlowTaskInfo.put("flinkSchedulerId",
                String.valueOf(entity.getFlinkScheduleJob().getId()));
        parentFlow.setTaskInfo(parentFlowTaskInfo);
        parentFlow.setSchedulerJobId(entity.getFlinkScheduleJob().getId());
        boolean success = taskSequenceFlowRepository.insert(parentFlow);
        if (!success) {
            throw new AthenaException(ErrorCode.SAVE_DATA_FAILED, "存储任务流失败");
        }
        entity.setParentFlowId(parentFlow.getId());

        //添加父节点关联的子节点
        List<FlinkSqlOrder> flinkSqlOrderList = entity.getFlinkSqlOrderList();
        for (FlinkSqlOrder flinkSqlOrder : flinkSqlOrderList) {
            FlinkSQLJob job = flinkSqlJobRepository.selectById(flinkSqlOrder.getFlinkSqlId());
            TaskSequenceFlow taskSequenceFlow = new TaskSequenceFlow();
            taskSequenceFlow.setGmtCreate(new Date());
            taskSequenceFlow.setGmtModified(new Date());
            taskSequenceFlow.setStatus("INIT");
            taskSequenceFlow.setParent(parentFlow);
            Map<String, String> taskInfo = new HashMap<>();
            taskInfo.put("FLINK_SQL_JOB_ID", String.valueOf(flinkSqlOrder.getFlinkSqlId()));
            taskInfo.put("flinkSchedulerId", String.valueOf(entity.getFlinkScheduleJob().getId()));
            taskInfo.put("jobName", job.getName());
            taskSequenceFlow.setTaskInfo(taskInfo);
            taskSequenceFlow.setTaskFlowType("FLINK_SCHEDULER_SON_FLOW");
            taskSequenceFlow.setSchedulerJobId(entity.getFlinkScheduleJob().getId());
            if (!taskSequenceFlowRepository.insert(taskSequenceFlow)) {
                logger.warn("Create taskSequenceFlow failed!");
                throw new AthenaException(ErrorCode.SAVE_DATA_FAILED, "存储任务流失败");
            }
        }

    }

    @Autowired
    public void setTaskSequenceFlowRepository(TaskSequenceFlowRepository taskSequenceFlowRepository) {
        this.taskSequenceFlowRepository = taskSequenceFlowRepository;
    }

    @Autowired
    public void setFlinkSqlJobRepository(FlinkSqlJobRepository flinkSqlJobRepository) {
        this.flinkSqlJobRepository = flinkSqlJobRepository;
    }
}