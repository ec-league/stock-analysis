package com.sapphire.stock.analysis.biz.sub.state.flink;

import static com.sapphire.stock.analysis.biz.sub.state.SubTaskStatus.POST_PROCESS;
import static com.sapphire.stock.analysis.biz.sub.state.SubTaskStatus.WAITING;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.biz.sub.state.common.ProcessingSubTaskState;
import com.sapphire.stock.analysis.biz.sub.state.SubTaskContext;
import com.sapphire.stock.analysis.common.integration.client.FlinkClient;
import com.sapphire.stock.analysis.common.integration.out.FlinkResponse;
import com.sapphire.stock.analysis.core.model.FlinkSQLJob;
import com.sapphire.stock.analysis.core.model.TaskSequenceFlow;
import com.sapphire.stock.analysis.core.model.enums.TaskSequenceFlowStatus;

import lombok.extern.slf4j.Slf4j;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Slf4j
@Service
public class FlinkSqlProcessingSubTaskState extends ProcessingSubTaskState {
    @Autowired
    private FlinkClient flinkClient;

    @Override
    public void handle(SubTaskContext context) {
        FlinkSQLJob flinkSQLJob = context.getFlinkSQLJob();
        TaskSequenceFlow childFlow = context.getTaskSequenceFlow();

        log.info("start process flink sql processing state! jobId={}, jobName={}, flowId={}",
            flinkSQLJob.getId(), flinkSQLJob.getName(), childFlow.getId());

        String jobId = flinkSQLJob.getFlinkJobId();

        try {
            FlinkResponse flinkResponse = flinkClient.queryJobStatus(jobId);

            if (flinkResponse == null || !flinkResponse.isSuccess()) {
                context.setCurrentState(subTaskStateFactory.getByTaskTypeAndStatus(subTaskType(),
                    TaskSequenceFlowStatus.RETRY.name()));
                context.setErrorCode("FLINK_ERROR");
                context.setErrorMsg("FLINK任务可能失败或者集群不可用, 需要进行重试!");
                return;
            }

            String flinkJobState = flinkResponse.getContext().get("state");

            switch (flinkJobState) {
                case "FINISHED":
                    context.setCurrentState(subTaskStateFactory
                        .getByTaskTypeAndStatus(subTaskType(), POST_PROCESS.name()));
                    return;
                case "CANCELED":
                    context.setErrorCode("FLINK_CANCEL");
                    context.setErrorMsg("FLINK任务手动取消, 任务不再重试");
                    context.setCurrentState(subTaskStateFactory
                        .getByTaskTypeAndStatus(subTaskType(), TaskSequenceFlowStatus.FAIL.name()));
                    return;
                case "FAILED":
                    context.setErrorCode("FLINK_FAILED");
                    context.setErrorMsg("FLINK任务执行失败, 可能是因为Flink SQL任务有问题, 需要进行重试!");
                    context.setCurrentState(subTaskStateFactory.getByTaskTypeAndStatus(
                        subTaskType(), TaskSequenceFlowStatus.RETRY.name()));
                    return;
                default:
                    context.setCurrentState(
                        subTaskStateFactory.getByTaskTypeAndStatus(subTaskType(), WAITING.name()));
            }
        } catch (Exception e) {
            log.error("查询Flink获取状态失败!", e);
            context.setCurrentState(subTaskStateFactory.getByTaskTypeAndStatus(subTaskType(),
                TaskSequenceFlowStatus.RETRY.name()));
        }
    }

    @Override
    public String subTaskType() {
        return FlinkSQLJob.FLINK_SQL_JOB_TYPE_ATOMIC;
    }
}
