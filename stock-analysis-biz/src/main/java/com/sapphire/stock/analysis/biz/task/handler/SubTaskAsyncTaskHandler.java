package com.sapphire.stock.analysis.biz.task.handler;

import java.util.Calendar;
import java.util.Date;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.common.integration.client.FlinkClient;
import com.sapphire.stock.analysis.common.integration.out.FlinkResponse;
import com.sapphire.stock.analysis.core.constant.TaskStatus;
import com.sapphire.stock.analysis.core.model.AsyncTask;
import com.sapphire.stock.analysis.core.model.FlinkSQLJob;
import com.sapphire.stock.analysis.core.model.Task;
import com.sapphire.stock.analysis.core.repo.AsyncTaskRepository;
import com.sapphire.stock.analysis.core.repo.FlinkSqlJobRepository;
import com.sapphire.stock.analysis.core.repo.TaskRepository;
import com.sapphire.stock.analysis.core.task.TaskHandler;

import lombok.extern.slf4j.Slf4j;

import javax.annotation.Resource;

/**
 * Author: 柏云鹏
 * Date: 2021/11/3.
 */
@Slf4j
@Service("subTaskAsyncTaskHandler")
public class SubTaskAsyncTaskHandler implements TaskHandler {

    @Resource
    private FlinkSqlJobRepository flinkSqlJobRepository;

    @Resource
    private TaskRepository        taskRepository;

    @Resource
    private FlinkClient           flinkClient;

    @Resource
    private AsyncTaskRepository   asyncTaskRepository;

    @Override
    public void completeTask(Task task) {
        String flinkSqlJobId = task.getExtInfo().get("FLINK_SQL_JOB_ID");

        long id = Long.parseLong(flinkSqlJobId);

        FlinkSQLJob flinkSQLJob = flinkSqlJobRepository.selectById(id);

        if (flinkSQLJob == null) {
            task.setStatus(TaskStatus.FAIL.name());
            task.setResultMsg("FlinkSqlJob已经被移除!");
            taskRepository.save(task);
            return;
        }

        if (!StringUtils.equals(flinkSQLJob.getType(), FlinkSQLJob.FLINK_SQL_JOB_TYPE_ATOMIC)) {
            task.setStatus("NOT_SUPPORT");
            task.setResultMsg("任务对应的flinksqljob类型不支持!");
            taskRepository.save(task);
            return;
        }

        String flinkJobId = flinkSQLJob.getFlinkJobId();

        long asyncTaskId = flinkSQLJob.getAsyncTaskId();

        if (asyncTaskId == 0L) {
            task.setStatus(TaskStatus.FAIL.name());
            task.setResultMsg("没有初始化异步任务, 无需轮训!");
            taskRepository.save(task);
            return;
        }

        AsyncTask asyncTask = asyncTaskRepository.selectById(asyncTaskId);

        if (asyncTask == null) {
            task.setStatus(TaskStatus.FAIL.name());
            task.setResultMsg("没有初始化异步任务, 无需轮训!");
            taskRepository.save(task);
            return;
        }

        try {
            FlinkResponse flinkResponse = flinkClient.queryJobStatus(flinkJobId);

            if (flinkResponse == null || !flinkResponse.isSuccess()) {
                task.setResultMsg("调用FLINK异常, 可能需要重试!");
                Calendar calendar = Calendar.getInstance();
                calendar.setTime(new Date());
                calendar.add(Calendar.MINUTE, 3);
                task.setFireDate(calendar.getTime());
                task.setStatus(TaskStatus.RETRY.name());
                return;
            }

            String flinkJobState = flinkResponse.getContext().get("state");

            switch (flinkJobState) {
                case "FINISHED":
                    asyncTask.setStatus(AsyncTask.SUCCESS);
                    asyncTaskRepository.save(asyncTask);
                    task.setStatus(TaskStatus.SUCCESS.name());
                    taskRepository.save(task);
                    return;
                case "CANCELED":
                    asyncTask.setErrorCode("FLINK_CANCEL");
                    asyncTask.setErrorMsg("FLINK任务手动取消, 任务不再重试");
                    asyncTask.setStatus(AsyncTask.FAILED);
                    asyncTaskRepository.save(asyncTask);
                    task.setStatus(TaskStatus.FAIL.name());
                    taskRepository.save(task);
                    return;
                case "FAILED":
                    asyncTask.setErrorCode("FLINK_FAILED");
                    asyncTask.setErrorMsg("FLINK任务执行失败, 可能是因为Flink SQL任务有问题, 需要进行重试!");
                    asyncTask.setStatus(AsyncTask.FLINK_RETRY);
                    asyncTaskRepository.save(asyncTask);
                    // 失败重试, 由异步任务触发阶段重试, 不是由鲁迅重试
                    task.setStatus(TaskStatus.FAIL.name());
                    taskRepository.save(task);
                    return;
                default:
                    asyncTask.setStatus(AsyncTask.PROCESSING);
                    asyncTaskRepository.save(asyncTask);
                    task.setStatus(TaskStatus.RETRY.name());
                    taskRepository.save(task);
            }
        } catch (Exception e) {
            log.error("查询Flink获取状态失败!", e);
            asyncTask.setStatus(AsyncTask.PROCESSING);
            asyncTask.setErrorCode(e.getClass().getSimpleName());
            asyncTask.setErrorMsg(e.getMessage());
            asyncTaskRepository.save(asyncTask);

            task.setStatus(TaskStatus.RETRY.name());
            task.setResultMsg(e.getMessage());
            taskRepository.save(task);
        }
    }

    @Override
    public String getTaskType() {
        return "SUB_TASK_ASYNC_TASK";
    }
}
