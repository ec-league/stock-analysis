package com.sapphire.stock.analysis.web.page;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sapphire.stock.analysis.core.model.FlinkSQLVersion;
import com.sapphire.stock.analysis.core.model.Response;
import com.sapphire.stock.analysis.core.repo.FlinkSqlVersionRepository;

import lombok.extern.slf4j.Slf4j;

/**
 * Author: 柏云鹏 Date: 2022/4/8.
 */
@Slf4j
@RestController
public class FlinkSqlVersionController {

    @Autowired
    private FlinkSqlVersionRepository flinkSqlVersionRepository;

    @GetMapping("/api/flink-sql-version/list.json")
    public Response<List<FlinkSQLVersion>> getSqlVersionList(@RequestParam("sqlId") String sqlId) {

        try {
            Response<List<FlinkSQLVersion>> response = new Response<>();

            if (StringUtils.isEmpty(sqlId)) {
                return Response.errorResponse("sqlId参数错误");
            }
            response.setData(flinkSqlVersionRepository.selectSqlVersions(Long.parseLong(sqlId)));
            response.setSuccess(true);

            return response;
        } catch (Exception e) {
            log.error("query flinkSqlVersion list failed!", e);
            return Response.errorResponse(e.getClass().getSimpleName(), e.getMessage());
        }
    }

}
