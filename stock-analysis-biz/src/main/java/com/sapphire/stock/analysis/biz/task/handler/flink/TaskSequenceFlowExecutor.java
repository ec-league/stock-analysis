package com.sapphire.stock.analysis.biz.task.handler.flink;

import java.util.List;
import java.util.Map;

import com.sapphire.stock.analysis.biz.entity.FlinkSchedulerEntity;
import com.sapphire.stock.analysis.common.util.exception.ErrorCode;
import com.sapphire.stock.analysis.core.exception.AthenaException;
import com.sapphire.stock.analysis.core.model.FlinkScheduleJobConfig;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.biz.sub.state.SubTaskContext;
import com.sapphire.stock.analysis.biz.sub.state.SubTaskStateFactory;
import com.sapphire.stock.analysis.biz.sub.state.SubTaskStatus;
import com.sapphire.stock.analysis.core.model.FlinkSQLJob;
import com.sapphire.stock.analysis.core.model.FlinkScheduleJob;
import com.sapphire.stock.analysis.core.model.TaskSequenceFlow;
import com.sapphire.stock.analysis.core.model.enums.TaskSequenceFlowStatus;
import com.sapphire.stock.analysis.core.process.ProcessExecutor;
import com.sapphire.stock.analysis.core.process.cache.ProcessConfigCache;
import com.sapphire.stock.analysis.core.repo.FlinkScheduleJobRepository;
import com.sapphire.stock.analysis.core.repo.FlinkSqlJobRepository;
import com.sapphire.stock.analysis.core.repo.TaskSequenceFlowRepository;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Service
public class TaskSequenceFlowExecutor {
    private static final Logger        logger = LoggerFactory
        .getLogger(TaskSequenceFlowExecutor.class);

    private TaskSequenceFlowRepository taskSequenceFlowRepository;

    private SubTaskStateFactory        subTaskStateFactory;

    private FlinkSqlJobRepository      flinkSqlJobRepository;

    private FlinkScheduleJobRepository flinkScheduleJobRepository;

    private ProcessExecutor            processExecutor;

    private ProcessConfigCache         processConfigCache;

    public void execute(TaskSequenceFlow parent, boolean singleExecution) {
        logger.info("开始执行任务! 父任务id={}", parent.getId());
        // 前置, 修改父节点状态
        parent.setStatus(TaskSequenceFlowStatus.PROCESSING.name());
        taskSequenceFlowRepository.updateFlow(parent);

        String partitionDate = parent.getTaskInfo().get("partitionDate");

        FlinkScheduleJob flinkScheduleJob = flinkScheduleJobRepository
            .selectById(parent.getSchedulerJobId());

        if (flinkScheduleJob == null) {
            parent.setErrorCode("JOB_NOT_EXIST");
            parent.setErrorMsg("调度任务丢失, 可能已经被移除!");
            parent.setStatus(TaskSequenceFlowStatus.FAIL.name());
            taskSequenceFlowRepository.updateFlow(parent);
            return;
        }

        List<TaskSequenceFlow> children = parent.getChildren();

        for (TaskSequenceFlow child : children) {
            Map<String, String> taskInfo = child.getTaskInfo();
            String flinkSqlJobId = taskInfo.get("FLINK_SQL_JOB_ID");
            FlinkSQLJob flinkSQLJob = flinkSqlJobRepository
                .selectById(Long.parseLong(flinkSqlJobId));

            SubTaskContext subTaskContext = new SubTaskContext();
            subTaskContext.setFlinkSQLJob(flinkSQLJob);
            subTaskContext.setTaskSequenceFlow(child);
            subTaskContext.setFlinkScheduleJob(flinkScheduleJob);
            subTaskContext.setPartitionDate(partitionDate);
            subTaskContext.setCurrentState(subTaskStateFactory
                .getByTaskTypeAndStatus(flinkSQLJob.getType(), child.getStatus()));

            SubTaskStatus status = subTaskContext.process();

            // processing 与 retry 状态, 任务仍在执行中.
            if (status == SubTaskStatus.PROCESSING || status == SubTaskStatus.WAITING) {
                // 任务停掉 重试次数不动
                parent.setStatus(TaskSequenceFlowStatus.PROCESSING.name());
                return;
            } else if (status == SubTaskStatus.RETRY) {
                // 重试次数 + 1
                parent.setStatus(TaskSequenceFlowStatus.RETRY.name());
                return;
            } else if (status == SubTaskStatus.FINISH) {
                continue;
            } else if (status == SubTaskStatus.FAIL) {
                // 修改父节点状态为失败, 子任务失败信息, 存储到父节点内. 用于页面展示使用
                parent.setStatus(TaskSequenceFlowStatus.FAIL.name());
                parent.setErrorCode(child.getErrorCode());
                parent.setErrorMsg(child.getErrorMsg());
                taskSequenceFlowRepository.updateFlow(parent);
                return;
            } else {
                logger.error("返回状态不正确! TaskSeqFlow: id={}, taskType={}, status={}", child.getId(),
                    flinkSQLJob.getType(), status.name());
                throw new AthenaException(ErrorCode.SYSTEM_ERROR,
                    "返回状态不正确! status=" + status.name());
            }
        }

        // 后置 结束前清理任务等信息
        postProcess(parent);

        boolean success = true;

        // 后置 创建下一次执行任务
        if (!singleExecution) {
            success = createNextTime(flinkScheduleJob, parent);
        } else {
            flinkScheduleJob.getExtInfo().setSingTimeTaskId(0L);
            flinkScheduleJobRepository.save(flinkScheduleJob);
            parent.setStatus(TaskSequenceFlowStatus.FINISH.name());
            taskSequenceFlowRepository.updateFlow(parent);
            return;
        }

        if (success) {
            parent.setStatus(TaskSequenceFlowStatus.FINISH.name());
            taskSequenceFlowRepository.updateFlow(parent);
        } else {
            parent.setStatus(TaskSequenceFlowStatus.FAIL.name());
            parent.setErrorMsg("创建下次执行任务失败!");
            parent.setErrorCode(ErrorCode.CREATE_FIRE_TASK_ERROR.name());
            taskSequenceFlowRepository.updateFlow(parent);
        }
    }

    private void postProcess(TaskSequenceFlow parent) {
        FlinkScheduleJob flinkScheduleJob = flinkScheduleJobRepository
            .selectById(parent.getSchedulerJobId());

        if (flinkScheduleJob == null) {
            logger.warn("调度任务丢失, 可能是因为调度任务被人工删除!");
            return;
        }

        try {
            // 计算文件大小

            // 保存到调度任务

            // 持久化
            flinkScheduleJobRepository.save(flinkScheduleJob);
        } catch (Exception e) {
            // 后置处理非必须, 可降级, 异常不必抛出!
            logger.error("后置处理异常", e);
        }
    }

    private boolean createNextTime(FlinkScheduleJob flinkScheduleJob, TaskSequenceFlow parent) {
        ProcessContext context = new ProcessContext();
        context.setProductCode("flink_scheduler");
        context.setBusinessCode("build_new");

        FlinkSchedulerEntity flinkSchedulerEntity = new FlinkSchedulerEntity();
        FlinkScheduleJobConfig extInfo = flinkScheduleJob.getExtInfo();
        flinkSchedulerEntity.setFlinkScheduleJob(flinkScheduleJob);
        flinkSchedulerEntity.setLastSeq(parent);
        flinkSchedulerEntity.setPartitionDate(extInfo.getPartitionDate());
        flinkSchedulerEntity.setExtInfo(flinkScheduleJob.getExtInfo().getReplaceParams());

        context.setEntity(flinkSchedulerEntity);
        context.setProcessConfig(processConfigCache.getProcessConfig(context));

        processExecutor.execute(context);
        return flinkSchedulerEntity.isSuccess();
    }

    @Autowired
    public void setTaskSequenceFlowRepository(TaskSequenceFlowRepository taskSequenceFlowRepository) {
        this.taskSequenceFlowRepository = taskSequenceFlowRepository;
    }

    @Autowired
    public void setSubTaskStateFactory(SubTaskStateFactory subTaskStateFactory) {
        this.subTaskStateFactory = subTaskStateFactory;
    }

    @Autowired
    public void setFlinkSqlJobRepository(FlinkSqlJobRepository flinkSqlJobRepository) {
        this.flinkSqlJobRepository = flinkSqlJobRepository;
    }

    @Autowired
    public void setFlinkScheduleJobRepository(FlinkScheduleJobRepository flinkScheduleJobRepository) {
        this.flinkScheduleJobRepository = flinkScheduleJobRepository;
    }

    @Autowired
    public void setProcessExecutor(ProcessExecutor processExecutor) {
        this.processExecutor = processExecutor;
    }

    @Autowired
    public void setProcessConfigCache(ProcessConfigCache processConfigCache) {
        this.processConfigCache = processConfigCache;
    }
}