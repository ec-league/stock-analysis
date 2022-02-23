package com.sapphire.stock.analysis.core.converter;

import org.springframework.beans.BeanUtils;

import com.alibaba.druid.support.json.JSONUtils;
import com.sapphire.stock.analysis.common.dal.model.StockDailyDigestDO;
import com.sapphire.stock.analysis.common.dal.model.TaskDo;
import com.sapphire.stock.analysis.core.model.StockDailyDigest;
import com.sapphire.stock.analysis.core.model.Task;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
public class DbConverter {
    public static StockDailyDigestDO toDbEntity(StockDailyDigest domain) {
        StockDailyDigestDO dbEntity = new StockDailyDigestDO();

        BeanUtils.copyProperties(domain, dbEntity);

        return dbEntity;
    }

    public static TaskDo toDbEntity(Task task) {
        TaskDo dbEntity = new TaskDo();

        BeanUtils.copyProperties(task, dbEntity);

        dbEntity.setExtInfo(JSONUtils.toJSONString(task.getExtInfo()));

        return dbEntity;
    }
}
