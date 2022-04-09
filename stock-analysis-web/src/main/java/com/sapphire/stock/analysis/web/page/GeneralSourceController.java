package com.sapphire.stock.analysis.web.page;

import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.sapphire.stock.analysis.core.model.FlinkGeneralSource;
import com.sapphire.stock.analysis.core.model.Response;
import com.sapphire.stock.analysis.core.repo.FlinkGeneralSourceRepository;

import lombok.extern.slf4j.Slf4j;

/**
 * Author: 柏云鹏 Date: 2022/4/9.
 */
@Slf4j
@RestController
public class GeneralSourceController {

    @Autowired
    private FlinkGeneralSourceRepository flinkGeneralSourceRepository;

    @GetMapping("/api/data-source/list.json")
    public Response<List<FlinkGeneralSource>> queryGeneralSourceList() {
        List<FlinkGeneralSource> flinkGeneralSources = flinkGeneralSourceRepository.selectAll();

        Response<List<FlinkGeneralSource>> response = new Response<>();

        response.setSuccess(true);
        response.setData(flinkGeneralSources);

        return response;
    }

    @ResponseBody
    @PostMapping("/api/data-source/add.json")
    public Response<Long> addTable(@RequestBody FlinkGeneralSource riskTableDto) {
        try {
            if (StringUtils.isEmpty(riskTableDto.getSchemaName())) {
                riskTableDto.setSchemaName("FILE");
            }

            riskTableDto.setType("FILE");

            flinkGeneralSourceRepository.save(riskTableDto);

            Response<Long> response = new Response<>();
            response.setSuccess(true);
            response.setData(riskTableDto.getId());

            return response;

        } catch (Exception e) {
            log.error("addTable failed!", e);
            return Response.errorResponse(e.getClass().getSimpleName(), e.getMessage());
        }
    }

    @GetMapping("/api/data-source/detail.json")
    public Response<FlinkGeneralSource> queryDetail(@RequestParam("id") Long id) {
        FlinkGeneralSource flinkGeneralSource = flinkGeneralSourceRepository.selectById(id);

        return Response.successResponse(flinkGeneralSource);
    }
}
