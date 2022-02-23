package com.sapphire.stock.analysis.core.task.handler;

import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.core.model.Task;
import com.sapphire.stock.analysis.core.task.TaskHandler;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
@Service
public class StockDigestQueryHandler implements TaskHandler {

    @Override
    public void completeTask(Task task) {

    }

    @Override
    public String getTaskType() {
        return "STOCK_DAILY_QUERY";
    }
}
