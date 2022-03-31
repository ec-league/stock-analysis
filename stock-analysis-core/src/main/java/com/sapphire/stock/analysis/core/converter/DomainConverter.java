package com.sapphire.stock.analysis.core.converter;

import com.sapphire.stock.analysis.common.dal.model.StockInfoDo;
import com.sapphire.stock.analysis.common.util.JsonUtils;
import com.sapphire.stock.analysis.core.model.StockInfo;
import org.springframework.beans.BeanUtils;

import com.sapphire.stock.analysis.common.dal.model.TaskDo;
import com.sapphire.stock.analysis.core.model.Task;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
public class DomainConverter {
    public static Task toDomain(TaskDo taskDo) {
        Task task = new Task();

        BeanUtils.copyProperties(taskDo, task);
        task.setExtInfo(JsonUtils.toStringMap(taskDo.getExtInfo()));

        return task;
    }

    public static StockInfo toDomain(StockInfoDo stockInfoDo) {
        StockInfo stockInfo = new StockInfo();
        BeanUtils.copyProperties(stockInfoDo, stockInfo);

        return stockInfo;
    }
}
