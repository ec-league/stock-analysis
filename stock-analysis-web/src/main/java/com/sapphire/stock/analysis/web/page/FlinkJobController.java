package com.sapphire.stock.analysis.web.page;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.sapphire.stock.analysis.biz.entity.SubTaskEntity;
import com.sapphire.stock.analysis.common.integration.client.FlinkClient;
import com.sapphire.stock.analysis.common.integration.out.FlinkResponse;
import com.sapphire.stock.analysis.core.exception.AthenaException;
import com.sapphire.stock.analysis.core.model.*;
import com.sapphire.stock.analysis.core.model.enums.FlinkSqlStatus;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.process.ProcessExecutor;
import com.sapphire.stock.analysis.core.process.cache.ProcessConfigCache;
import com.sapphire.stock.analysis.core.repo.FlinkGeneralSourceRepository;
import com.sapphire.stock.analysis.core.repo.FlinkScheduleJobRepository;
import com.sapphire.stock.analysis.core.repo.FlinkSqlJobRepository;
import com.sapphire.stock.analysis.core.repo.FlinkSqlVersionRepository;

import lombok.extern.slf4j.Slf4j;

/**
 * Author: 柏云鹏 Date: 2022/4/8.
 */
@Slf4j
@RestController
public class FlinkJobController {

    @Autowired
    private FlinkScheduleJobRepository   flinkScheduleJobRepository;

    @Autowired
    private FlinkSqlJobRepository        flinkSqlJobRepository;

    @Autowired
    private FlinkSqlVersionRepository    flinkSqlVersionRepository;

    @Autowired
    private FlinkGeneralSourceRepository flinkGeneralSourceRepository;

    @Autowired
    private ProcessExecutor              processExecutor;
    @Autowired
    private ProcessConfigCache           processConfigCache;

    @Autowired
    private FlinkClient                  flinkClient;

    @GetMapping("/api/flink/job-list.json")
    public Response<List<FlinkSQLJob>> getAllJobs() {

        try {
            Response<List<FlinkSQLJob>> response = new Response<>();

            response.setData(flinkSqlJobRepository.selectAll());
            response.setSuccess(true);

            return response;
        } catch (Exception e) {
            log.error("query flinkJob list failed!", e);
            return Response.errorResponse(e.getClass().getSimpleName(), e.getMessage());
        }
    }

    @GetMapping("/api/flink/job-list-by-parent.json")
    public Response<List<FlinkSQLJob>> getJobsByParent(@RequestParam("jobId") String jobId) {

        try {
            long id = Long.parseLong(jobId);

            FlinkScheduleJob flinkScheduleJob = flinkScheduleJobRepository.selectById(id);

            FlinkScheduleJobConfig extInfo = flinkScheduleJob.getExtInfo();
            Response<List<FlinkSQLJob>> response = new Response<>();

            if (extInfo == null) {
                response.setSuccess(true);
                return response;
            } else {
                List<FlinkSQLJob> flinkSQLJobs = flinkSqlJobRepository.selectByScheduleJobId(id);

                response.setSuccess(true);
                response.setData(flinkSQLJobs);
                return response;
            }
        } catch (Exception e) {
            log.error("query flinkJob list by parent failed!", e);
            return Response.errorResponse(e.getClass().getSimpleName(), e.getMessage());
        }
    }

    @ResponseBody
    @PostMapping("/api/flink-job/new-schedule-sql-job.json")
    public Response<Long> newScheduleSqlJob(@RequestParam("scheduleId") String scheduleId,
                                            @RequestBody FlinkSQLJob flinkSQLJob) {
        try {
            if (StringUtils.isEmpty(scheduleId)) {
                return Response.errorResponse("params_error", "参数有问题");
            }

            long id = Long.parseLong(scheduleId);
            flinkSQLJob.setGmtCreate(new Date());
            flinkSQLJob.setGmtModified(new Date());
            flinkSQLJob.setScheduleJobId(id);
            boolean success = flinkSqlJobRepository.save(flinkSQLJob);

            boolean successSaveVersion = flinkSqlVersionRepository.save(flinkSQLJob);

            if (success && successSaveVersion) {
                FlinkScheduleJob flinkScheduleJob = flinkScheduleJobRepository
                    .selectById(id);
                FlinkScheduleJobConfig extInfo = new FlinkScheduleJobConfig();
                if (flinkScheduleJob.getExtInfo() != null) {
                    extInfo = flinkScheduleJob.getExtInfo();
                }
                flinkScheduleJob.setExtInfo(extInfo);
                if (flinkScheduleJobRepository.save(flinkScheduleJob)) {
                    return Response.successResponse(flinkSQLJob.getId());
                }
            }
            return Response.errorResponse("新增失败!");

        } catch (Exception e) {
            log.error("New schedule flinkSQLJob  failed!", e);
            return Response.errorResponse(e.getClass().getSimpleName(), e.getMessage());
        }
    }

    @ResponseBody
    @GetMapping("/api/flink-job/execute-result.json")
    public Response<String> executeResult(@RequestParam("sqlId") String sqlId) {

        try {
            long id = Long.parseLong(sqlId);

            FlinkSQLJob flinkSQLJob = flinkSqlJobRepository.selectById(id);

            if (flinkSQLJob == null) {
                log.error("FLINK_JOB_NOT_EXIST: Flink SQL JOB不存在");
                return Response.errorResponse("FLINK_JOB_NOT_EXIST", "Flink SQL JOB不存在");
            }

            if (!StringUtils.equals(flinkSQLJob.getType(), FlinkSQLJob.FLINK_SQL_JOB_TYPE_ATOMIC)
                && !StringUtils.equals(flinkSQLJob.getType(), FlinkSQLJob.FLINK_MYSQL_TO_FILE)) {
                log.info("Not flinkSql: 不是flinkSql类型");
                return Response.successResponse(new SqlExecuteResult());
            }

            String schemaName = flinkSQLJob.getJobConfig().getSinkSchemaName();
            String tableName = flinkSQLJob.getJobConfig().getSinkTableName();

            if (StringUtils.isEmpty(tableName)) {
                return Response.successResponse(new SqlExecuteResult());
            }

            FlinkGeneralSource sink = flinkGeneralSourceRepository
                .findBySchemaAndTableName(schemaName, tableName);

            if (sink == null) {
                log.info("File not exist", "文件不存在");
                return Response.successResponse(new SqlExecuteResult());
            }
            if (!StringUtils.equals(sink.getType(), "FILE")) {
                return Response.successResponse(new SqlExecuteResult());
            }
            SqlExecuteResult sqlExecuteResult = flinkSqlJobRepository
                .executeRecord(sink.getSourceConfig());

            return Response.successResponse(sqlExecuteResult);

        } catch (Exception e) {
            log.error("Query executeResult failed!", e);
            return Response.errorResponse("SYS_ERROR", e.getMessage());
        }
    }

    @ResponseBody
    @PostMapping("/api/flink-job/submit.json")
    public Response<Long> submitSqlJob(@RequestBody FlinkSQLJob flinkSQLJob) {
        try {
            flinkSQLJob.setStatus(FlinkSqlStatus.INIT.name());
            boolean save = flinkSqlJobRepository.save(flinkSQLJob);
            if (!save) {
                return Response.errorResponse("SAVE_SQL_FAIL", "sql初始化失败");
            }

            ProcessContext processContext = new ProcessContext();
            processContext.setProductCode("sub_task");
            processContext.setBusinessCode(flinkSQLJob.getType());

            SubTaskEntity entity = new SubTaskEntity();
            entity.setFlinkSQLJob(flinkSQLJob);

            processContext.setEntity(entity);

            processContext.setProcessConfig(processConfigCache.getProcessConfig(processContext));

            processExecutor.execute(processContext);

            if (entity.isSuccess()) {
                return Response.successResponse(flinkSQLJob.getId());
            } else {
                return Response.errorResponse(processContext.getErrorCode(),
                    processContext.getErrorMsg());
            }
        } catch (AthenaException e) {
            log.error("submitSqlJob exception!", e);
            return Response.errorResponse("SQL_EXECUTE_ERROR", e.getErrorMsg());
        } catch (Exception e) {
            log.error("submitSqlJob execute exception!", e);
            return Response.errorResponse("SYS_ERROR", e.getMessage());
        }
    }

    @GetMapping("/api/flink-job/execute-log.json")
    public Response<String> executeLog(@RequestParam("sqlId") String sqlId) {
        try {
            long id = Long.parseLong(sqlId);

            FlinkSQLJob flinkSQLJob = flinkSqlJobRepository.selectById(id);

            if (flinkSQLJob == null) {
                return Response.errorResponse("FLINK_JOB_NOT_EXIST", "Flink SQL JOB没有创建");
            }

            if (!StringUtils.equals(flinkSQLJob.getType(), FlinkSQLJob.FLINK_SQL_JOB_TYPE_ATOMIC)) {
                return Response.successResponse(flinkSQLJob.getStatus());
            }

            String flinkJobId = flinkSQLJob.getFlinkJobId();

            FlinkResponse flinkResponse = flinkClient.queryJobStatus(flinkJobId);

            if (flinkResponse == null || !flinkResponse.isSuccess()) {
                return Response.errorResponse("查询Flink状态失败!");
            }
            String status = flinkResponse.getContext().get("state");

            if (StringUtils.equals("FINISHED", status) || StringUtils.equals("FAILED", status)) {
                return Response.successResponse(status);
            } else {
                return Response.successResponse(flinkResponse.getContext().get("msg"));
            }
        } catch (Exception e) {
            log.error("Query executeLog failed!", e);
            return Response.errorResponse("SYS_ERROR", e.getMessage());
        }
    }

}
