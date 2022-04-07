package com.sapphire.stock.analysis.web.page;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sapphire.stock.analysis.core.model.*;
import com.sapphire.stock.analysis.core.repo.FlinkScheduleJobRepository;
import com.sapphire.stock.analysis.core.repo.FlinkSqlJobRepository;

import lombok.extern.slf4j.Slf4j;

/**
 * Author: 柏云鹏 Date: 2022/4/8.
 */
@Slf4j
@RestController
public class FlinkJobController {

    @Autowired
    private FlinkScheduleJobRepository flinkScheduleJobRepository;

    @Autowired
    private FlinkSqlJobRepository      flinkSqlJobRepository;

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

            if (extInfo == null || CollectionUtils.isEmpty(extInfo.getFlinkSqlOrderList())) {
                response.setSuccess(true);
                return response;
            } else {
                List<FlinkSqlOrder> flinkSqlOrderList = extInfo.getFlinkSqlOrderList();

                List<FlinkSQLJob> flinkSQLJobs = new ArrayList<>(flinkSqlOrderList.size());

                for (FlinkSqlOrder flinkSqlOrder : flinkSqlOrderList) {
                    FlinkSQLJob flinkSQLJob = flinkSqlJobRepository
                        .selectById(flinkSqlOrder.getFlinkSqlId());
                    flinkSQLJobs.add(flinkSQLJob);
                }

                response.setSuccess(true);
                response.setData(flinkSQLJobs);
                return response;
            }
        } catch (Exception e) {
            log.error("query flinkJob list by parent failed!", e);
            return Response.errorResponse(e.getClass().getSimpleName(), e.getMessage());
        }
    }
}
