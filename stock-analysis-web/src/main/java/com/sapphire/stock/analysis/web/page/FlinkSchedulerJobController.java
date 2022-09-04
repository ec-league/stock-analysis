package com.sapphire.stock.analysis.web.page;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;

import com.sapphire.stock.analysis.biz.entity.FlinkSchedulerEntity;
import com.sapphire.stock.analysis.common.util.DateUtils;
import com.sapphire.stock.analysis.common.util.exception.ErrorCode;
import com.sapphire.stock.analysis.core.constant.TaskStatus;
import com.sapphire.stock.analysis.core.exception.AthenaException;
import com.sapphire.stock.analysis.core.model.*;
import com.sapphire.stock.analysis.core.model.enums.TaskSequenceFlowStatus;
import com.sapphire.stock.analysis.core.process.ProcessConfig;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.process.ProcessExecutor;
import com.sapphire.stock.analysis.core.process.cache.ProcessConfigCache;
import com.sapphire.stock.analysis.core.repo.FlinkScheduleJobRepository;
import com.sapphire.stock.analysis.core.repo.FlinkSqlJobRepository;
import com.sapphire.stock.analysis.core.repo.TaskRepository;
import com.sapphire.stock.analysis.core.repo.TaskSequenceFlowRepository;

import lombok.extern.slf4j.Slf4j;

/**
 * Author: 柏云鹏 Date: 2022/4/3.
 */
@Slf4j
@RestController
public class FlinkSchedulerJobController {

    @Autowired
    private ProcessExecutor            processExecutor;

    @Autowired
    private ProcessConfigCache         processConfigCache;

    @Autowired
    private FlinkScheduleJobRepository flinkScheduleJobRepository;

    @Autowired
    private FlinkSqlJobRepository      flinkSqlJobRepository;

    @Autowired
    private TaskSequenceFlowRepository taskSequenceFlowRepository;

    @Autowired
    private TaskRepository             taskRepository;

    @GetMapping("/api/flink-schedule/job-list.json")
    public Response<List<FlinkScheduleJob>> queryJobList() {
        try {
            List<FlinkScheduleJob> flinkScheduleJobs = flinkScheduleJobRepository.selectAll();

            Response<List<FlinkScheduleJob>> response = new Response<>();

            response.setSuccess(true);
            response.setData(flinkScheduleJobs);

            return response;
        } catch (Exception e) {
            log.error("queryJobList exception!", e);
            return Response.errorResponse(ErrorCode.SYSTEM_ERROR.name(), "请稍后再试");
        }
    }

    @GetMapping("/api/flink-job/schedule-job-detail.json")
    public Response<FlinkScheduleJob> queryJobDetail(@RequestParam("scheduleJobId") String jobId) {
        try {
            long id = Long.parseLong(jobId);

            FlinkScheduleJob flinkScheduleJob = flinkScheduleJobRepository.selectById(id);

            Response<FlinkScheduleJob> response = new Response<>();

            response.setSuccess(true);
            response.setData(flinkScheduleJob);

            return response;
        } catch (Exception e) {
            log.error("queryJobDetail exception", e);
            return Response.errorResponse(ErrorCode.SYSTEM_ERROR.name(), "请稍后再试");
        }
    }

    @PostMapping("/api/flink-schedule/new-schedule-job.json")
    public Response<Long> newScheduleJob(@RequestBody FlinkScheduleJob flinkScheduleJob) {
        try {
            flinkScheduleJob.setStatus("F");
            flinkScheduleJob.setGmtCreate(new Date());
            flinkScheduleJob.setGmtModified(new Date());
            boolean success = flinkScheduleJobRepository.save(flinkScheduleJob);
            if (success) {
                return Response.successResponse(flinkScheduleJob.getId());
            } else {
                return Response.errorResponse("insert schedule job failed!");
            }
        } catch (Exception e) {
            log.error("new flink schedule job failed!", e);
            return Response.errorResponse(e.getClass().getSimpleName(), e.getMessage());
        }
    }

    @ResponseBody
    @PostMapping("/api/flink-job/update-schedule-sql-job.json")
    public Response<Long> updateScheduleJob(@RequestBody FlinkSQLJob flinkSQLJob) {
        try {
            flinkSqlJobRepository.save(flinkSQLJob);

            return Response.successResponse(flinkSQLJob.getId());
        } catch (Exception e) {
            log.error("update flinkSQLJob  failed!", e);
            return Response.errorResponse(e.getClass().getSimpleName(), e.getMessage());
        }
    }

    @PostMapping("/api/flink-schedule/submit-schedule-job.json")
    public Response<Long> submitScheduleJob(@RequestBody FlinkScheduleJob flinkScheduleJob) {
        try {
            if (flinkScheduleJob.getId() == 0L) {
                log.warn("任务编辑不生效，调度任务尚未新增！");
                Response<Long> response = new Response<>();
                response.setSuccess(false);
                response.setResultCode("CONFIG_ERROR");
                response.setResultMsg("任务编辑不生效，调度任务尚未新增！");
                return response;
            }

            //判断任务是否已生效，若生效则直接返回
            boolean success = flinkScheduleJobRepository.updateStatusSuccess(flinkScheduleJob);
            if (!success) {
                Response<Long> response = new Response<>();
                response.setSuccess(true);
                response.setResultMsg("任务已生效！");
                return response;
            }

            ProcessContext context = new ProcessContext();
            context.setProductCode("flink_scheduler");
            context.setBusinessCode("build");

            FlinkSchedulerEntity flinkSchedulerEntity = new FlinkSchedulerEntity();
            flinkSchedulerEntity.setFlinkScheduleJob(flinkScheduleJob);
            String partitionDate = flinkScheduleJob.getExtInfo().getType().equals(
                FlinkScheduleJobConfig.HISTORY_TYPE) ? flinkScheduleJob.getExtInfo().getStartDate()
                    : DateUtils.formatDate(new Date(), "yyyy-MM-dd");

            Map<String, String> extInfo = new HashMap<>(
                flinkScheduleJob.getExtInfo().getReplaceParams() != null
                    ? flinkScheduleJob.getExtInfo().getReplaceParams()
                    : new HashMap<>());
            extInfo.put("partitionDate", partitionDate);
            flinkSchedulerEntity.setExtInfo(extInfo);
            flinkScheduleJob.getExtInfo().setPartitionDate(partitionDate);
            flinkScheduleJob.getExtInfo().setReplaceParams(extInfo);
            flinkScheduleJob.setStatus("T");

            context.setEntity(flinkSchedulerEntity);
            ProcessConfig processConfig = processConfigCache.getProcessConfig(context);
            context.setProcessConfig(processConfig);
            processExecutor.execute(context);
            if (!flinkSchedulerEntity.isSuccess()) {
                throw new AthenaException(context.getErrorCode(), context.getErrorMsg());
            }

            Response<Long> response = new Response<>();
            response.setSuccess(true);
            return response;
        } catch (Exception e) {
            log.error("submitScheduleJob exception", e);
            return Response.errorResponse(ErrorCode.SYSTEM_ERROR.name(), "请稍后再试");
        }
    }

    @ResponseBody
    @PostMapping("/api/flink-schedule/update-batch-job-priorty.json")
    public Response<Long> updateSqlJobBatch(@RequestParam("id") long id,
                                            @RequestParam int priority) {
        try {
            FlinkSQLJob flinkSQLJob = flinkSqlJobRepository.selectById(id);
            flinkSQLJob.setPriority(priority);

            flinkSqlJobRepository.save(flinkSQLJob);

            return Response.successResponse(id);
        } catch (Exception e) {
            log.error("batch update flinkSQLJob priority failed!", e);
            return Response.errorResponse(e.getClass().getSimpleName(), e.getMessage());
        }
    }

    @GetMapping("/api/flink-schedule/execute-record.json")
    public Response<List<TaskSequenceFlow>> queryExecuteRecord(@RequestParam("jobId") String jobId) {
        try {

            List<TaskSequenceFlow> taskSequenceFlowList = taskSequenceFlowRepository
                .selectParentBySchedulerJobId(Long.parseLong(jobId));

            Response<List<TaskSequenceFlow>> response = new Response<>();
            response.setSuccess(true);
            response.setData(taskSequenceFlowList);

            return response;
        } catch (Exception e) {
            log.error("queryExecuteRecord exception", e);
            return Response.errorResponse(ErrorCode.SYSTEM_ERROR.name(), "请稍后再试");
        }
    }

    @PostMapping("/api/flink-schedule/remove-sql-job.json")
    public Response removeJobDetail(@RequestParam("id") Long id) {
        try {
            Response response = new Response();

            response.setSuccess(flinkSqlJobRepository.deleteByName(id));
            return response;
        } catch (Exception e) {
            log.error("removeJobDetail exception", e);
            return Response.errorResponse(ErrorCode.SYSTEM_ERROR.name(), "请稍后再试");
        }
    }

    @ResponseBody
    @PostMapping("/api/flink-schedule/submit-job-single.json")
    public Response<Long> submitScheduleJobSingleTimes(@RequestBody FlinkScheduleJob flinkScheduleJob) {

        try {

            if (StringUtils.equals(flinkScheduleJob.getStatus(), "T")) {
                return Response.errorResponse("调度任务正在运行，请先失效调度");
            }

            ProcessContext context = new ProcessContext();
            context.setProductCode("flink_scheduler");
            context.setBusinessCode("build");
            FlinkSchedulerEntity flinkSchedulerEntity = new FlinkSchedulerEntity();
            flinkSchedulerEntity.setSingleTimes("T");
            flinkSchedulerEntity.setFlinkScheduleJob(flinkScheduleJob);

            String partitionDate = DateUtils.formatDate(new Date(), "yyyy-MM-dd");
            if (!StringUtils.isEmpty(flinkScheduleJob.getExtInfo().getType())) {
                if (flinkScheduleJob.getExtInfo().getType()
                    .equals(FlinkScheduleJobConfig.HISTORY_TYPE))
                    partitionDate = flinkScheduleJob.getExtInfo().getStartDate();
            }
            Map<String, String> extInfo = new HashMap<>(
                flinkScheduleJob.getExtInfo().getReplaceParams() != null
                    ? flinkScheduleJob.getExtInfo().getReplaceParams()
                    : new HashMap<>());
            extInfo.put("partitionDate", partitionDate);
            flinkSchedulerEntity.setExtInfo(extInfo);
            flinkScheduleJob.getExtInfo().setPartitionDate(partitionDate);
            flinkScheduleJob.getExtInfo().setReplaceParams(extInfo);

            context.setEntity(flinkSchedulerEntity);
            ProcessConfig processConfig = processConfigCache.getProcessConfig(context);
            context.setProcessConfig(processConfig);
            processExecutor.execute(context);
            if (!flinkSchedulerEntity.isSuccess()) {
                throw new AthenaException(context.getErrorCode(), context.getErrorMsg());
            }

            Response<Long> response = new Response<>();
            response.setData(flinkSchedulerEntity.getParentFlowId());
            response.setSuccess(true);
            return response;
        } catch (Exception e) {
            log.error("submitScheduleJob exception", e);
            return Response.errorResponse(ErrorCode.SYSTEM_ERROR.name(), "请稍后再试");
        }
    }

    @GetMapping("/api/flink-schedule/get-son-flow.json")
    public Response<List<TaskSequenceFlow>> querySonFlow(@RequestParam("parentId") String parentId) {
        try {

            List<TaskSequenceFlow> taskSequenceFlowList = taskSequenceFlowRepository
                .selectByParentId(Long.parseLong(parentId));

            Response<List<TaskSequenceFlow>> response = new Response<>();
            response.setSuccess(true);
            response.setData(taskSequenceFlowList);

            return response;
        } catch (Exception e) {
            log.error("querySonFlow exception", e);
            return Response.errorResponse(ErrorCode.SYSTEM_ERROR.name(), "请稍后再试");
        }
    }

    @ResponseBody
    @PostMapping("/api/flink-schedule/restart-task-sequence-flow.json")
    public Response<Long> restartTaskSequenceFlow(@RequestBody Map<String, String> params) {
        try {
            String taskSequenceFlowId = params.get("taskSequenceFlowId");
            String schedulerId = params.get("schedulerId");
            if (schedulerId.isEmpty() || taskSequenceFlowId.isEmpty()) {
                return Response.errorResponse("参数有误");
            }
            TaskSequenceFlow taskSequenceFlow = taskSequenceFlowRepository
                .selectById(Long.parseLong(taskSequenceFlowId));
            taskSequenceFlow.setStatus(TaskSequenceFlowStatus.RETRY.name());
            taskSequenceFlowRepository.updateFlow(taskSequenceFlow);

            FlinkScheduleJob flinkScheduleJob = flinkScheduleJobRepository
                .selectById(Long.parseLong(schedulerId));
            FlinkScheduleJobConfig extInfo = flinkScheduleJob.getExtInfo();
            Long taskId = extInfo.getTaskId();
            Task task = taskRepository.selectTaskById(taskId);
            task.setRetryTimes(0);
            task.setStatus(TaskStatus.RETRY.name());
            taskRepository.save(task);

            return Response.successResponse(schedulerId);
        } catch (Exception e) {
            log.error("restart TaskSequenceFlow failed!", e);
            return Response.errorResponse(e.getClass().getSimpleName(), e.getMessage());
        }
    }
}
