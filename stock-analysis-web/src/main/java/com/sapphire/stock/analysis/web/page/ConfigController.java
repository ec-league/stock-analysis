package com.sapphire.stock.analysis.web.page;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.sapphire.stock.analysis.common.dal.dao.SchedulerConfigDao;
import com.sapphire.stock.analysis.common.dal.model.SchedulerConfigDO;
import com.sapphire.stock.analysis.web.dto.Response;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
@RestController
@RequestMapping("/api/config")
public class ConfigController {

    @Autowired
    private SchedulerConfigDao schedulerConfigDao;

    @GetMapping("/scheduler-config/list.json")
    public Response<List<SchedulerConfigDO>> selectAllSchedulerConfigs() {
        List<SchedulerConfigDO> schedulerConfigDOS = schedulerConfigDao.selectAll();

        Response<List<SchedulerConfigDO>> response = new Response<>();
        response.setSuccess(true);

        response.setData(schedulerConfigDOS);

        return response;
    }

    @PostMapping("/scheduler-config/update.json")
    public Response<Boolean> update(@RequestBody SchedulerConfigDO schedulerConfigDO) {
        schedulerConfigDao.updateById(schedulerConfigDO);

        Response<Boolean> response = new Response<>();
        response.setSuccess(true);

        return response;
    }
}
