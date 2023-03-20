package com.sapphire.stock.analysis.biz.action;

import com.sapphire.stock.analysis.biz.entity.aware.TaskChainAware;
import com.sapphire.stock.analysis.common.util.DateUtils;
import com.sapphire.stock.analysis.core.model.Task;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.repo.TaskRepository;

import javax.annotation.Resource;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * @author 柏云鹏
 * @since 2023/3/19.
 */
@Action("createNextRegressionTaskAction")
public class CreateNextRegressionTaskAction implements BusinessAction {

    @Resource
    private TaskRepository taskRepository;

    @Override
    public void process(ProcessContext context) {
        TaskChainAware entity = context.getEntity();

        String endDate = entity.getNextDate();

        Date date = DateUtils.parseStringToDate(endDate, "yyyy-MM-dd");

        if (!date.after(new Date())) {
            createNextTask(entity);
        }
    }

    private void createNextTask(TaskChainAware entity) {
        Task nextTask = new Task();

        nextTask.setStatus("INIT");
        Map<String, String> nextTaskExtInfo = new HashMap<>();

        nextTaskExtInfo.put("code", entity.getCode());
        nextTaskExtInfo.put("partitionDate", entity.getNextDate());
        nextTask.setExtInfo(nextTaskExtInfo);
        nextTask.setFireDate(new Date());
        nextTask.setRetryTimes(0);
        nextTask.setTaskType(entity.getTaskType());

        taskRepository.save(nextTask);
    }
}
