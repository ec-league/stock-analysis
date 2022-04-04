package com.sapphire.stock.analysis.biz.action;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.support.CronSequenceGenerator;

import com.sapphire.stock.analysis.biz.entity.FlinkSchedulerEntity;
import com.sapphire.stock.analysis.biz.entity.aware.CreateTaskAware;
import com.sapphire.stock.analysis.common.util.DateUtils;
import com.sapphire.stock.analysis.common.util.exception.ErrorCode;
import com.sapphire.stock.analysis.core.constant.TaskStatus;
import com.sapphire.stock.analysis.core.exception.AthenaException;
import com.sapphire.stock.analysis.core.model.FlinkScheduleJob;
import com.sapphire.stock.analysis.core.model.FlinkScheduleJobConfig;
import com.sapphire.stock.analysis.core.model.Task;
import com.sapphire.stock.analysis.core.model.TaskSequenceFlow;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.repo.FlinkScheduleJobRepository;
import com.sapphire.stock.analysis.core.repo.TaskRepository;
import com.sapphire.stock.analysis.core.repo.TaskSequenceFlowRepository;

import lombok.extern.slf4j.Slf4j;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Slf4j
@Action("buildFlinkSchedulerTaskAction")
public class BuildFlinkSchedulerTaskAction implements BusinessAction {

    private static final String        DATE_PATTERN              = "yyyy-MM-dd";
    public static final String         DEFAULT_DATETIMEFORMATTER = "yyyy-MM-dd HH:mm:ss";

    private FlinkScheduleJobRepository flinkScheduleJobRepository;
    private TaskRepository             taskRepository;
    private TaskSequenceFlowRepository taskSequenceFlowRepository;

    @Override
    public void process(ProcessContext processContext) {
        FlinkSchedulerEntity entity = processContext.getEntity();
        CreateTaskAware createTaskAware = processContext.getEntity();
        Task task = new Task();

        task.setStatus(TaskStatus.INIT.name());
        task.setRetryTimes(0);
        task.setGmtCreate(new Date());
        task.setGmtModified(new Date());

        FlinkScheduleJob flinkScheduleJob = entity.getFlinkScheduleJob();
        FlinkScheduleJobConfig extInfo = flinkScheduleJob.getExtInfo();

        String cronExpression = flinkScheduleJob.getCronExpression();

        if (StringUtils.equals(entity.getSingleTimes(), "T")) {
            task.setFireDate(new Date());
        } else {
            Date nextTimePoint;
            Calendar date = Calendar.getInstance();
            if (StringUtils.isEmpty(entity.getPartitionDate())) {
                String partitionDate = extInfo.getPartitionDate();
                CronSequenceGenerator cronSequenceGenerator = new CronSequenceGenerator(
                    cronExpression);
                nextTimePoint = cronSequenceGenerator
                    .next(DateUtils.parseStringToDate(partitionDate, DATE_PATTERN));
                String fireDateStr = DateUtils.formatDate(nextTimePoint, DATE_PATTERN);
                if (fireDateStr.equals(partitionDate)) {
                    nextTimePoint = cronSequenceGenerator.next(nextTimePoint);
                }
            } else {
                //非首次执行
                Long lastTaskId = extInfo.getTaskId();
                Task lastTask = taskRepository.selectTaskById(lastTaskId);
                Date lastFireDate = lastTask.getFireDate();
                CronSequenceGenerator cronSequenceGenerator = new CronSequenceGenerator(
                    cronExpression);
                nextTimePoint = cronSequenceGenerator.next(lastFireDate);
            }
            task.setFireDate(nextTimePoint);
            //TODO 非首次执行依赖于executeTimePoint，而非fireDate
            task.setExtInfo(new HashMap<>());
            task.getExtInfo().put("executeTimePoint",
                DateUtils.formatDate(nextTimePoint, DEFAULT_DATETIMEFORMATTER));
            date.setTime(nextTimePoint);

            date.set(Calendar.DATE, date.get(Calendar.DATE) - 1);
            SimpleDateFormat dateFormat = new SimpleDateFormat(DATE_PATTERN);
            try {
                Date newPartitionDate = dateFormat.parse(dateFormat.format(date.getTime()));
                extInfo.setPartitionDate(DateUtils.formatDate(newPartitionDate, DATE_PATTERN));
                flinkScheduleJob.setExtInfo(extInfo);
                Map<String, String> replaceParams = flinkScheduleJob.getExtInfo()
                    .getReplaceParams();
                replaceParams.put("partitionDate", extInfo.getPartitionDate());
                flinkScheduleJob.getExtInfo().setReplaceParams(replaceParams);
                flinkScheduleJobRepository.save(flinkScheduleJob);
            } catch (ParseException e) {
                throw new AthenaException(ErrorCode.CREATE_FIRE_TASK_ERROR, e.getMessage());
            }
        }

        task.setTaskType(createTaskAware.getTaskType());
        Map<String, String> taskProfile = createTaskAware.getTaskProfile();
        taskProfile.put("taskParentFlowId", String.valueOf(entity.getParentFlowId()));
        taskProfile.put("flinkSchedulerId", String.valueOf(flinkScheduleJob.getId()));
        taskProfile.put("partitionDate", extInfo.getPartitionDate());
        taskProfile.put("singleTime", entity.getSingleTimes());
        task.setExtInfo(taskProfile);

        if (!taskRepository.save(task)) {
            log.warn("BuildFlinkSchedulerTaskAction failed!");
            throw new AthenaException(ErrorCode.CREATE_FIRE_TASK_ERROR);
        }

        //将partitionDate保存到父节点中
        long parentFlowId = entity.getParentFlowId();
        TaskSequenceFlow taskSequenceFlow = taskSequenceFlowRepository.selectById(parentFlowId);
        Map<String, String> taskInfo = taskSequenceFlow.getTaskInfo();
        taskInfo.put("partitionDate", extInfo.getPartitionDate());
        taskSequenceFlowRepository.updateFlow(taskSequenceFlow);

        if (StringUtils.equals(entity.getSingleTimes(), "T")) {
            extInfo.setSingTimeTaskId(task.getId());
        } else {
            extInfo.setTaskId(task.getId());
        }

        flinkScheduleJobRepository.save(flinkScheduleJob);
        log.info("BuildFlinkSchedulerTaskAction end,taskId={}", task.getId());

    }

    @Autowired
    public void setFlinkScheduleJobRepository(FlinkScheduleJobRepository flinkScheduleJobRepository) {
        this.flinkScheduleJobRepository = flinkScheduleJobRepository;
    }

    @Autowired
    public void setTaskRepository(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Autowired
    public void setTaskSequenceFlowRepository(TaskSequenceFlowRepository taskSequenceFlowRepository) {
        this.taskSequenceFlowRepository = taskSequenceFlowRepository;
    }
}
