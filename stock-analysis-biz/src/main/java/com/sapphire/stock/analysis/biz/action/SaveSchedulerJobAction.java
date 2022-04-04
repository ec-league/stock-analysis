package com.sapphire.stock.analysis.biz.action;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.sapphire.stock.analysis.biz.entity.FlinkSchedulerEntity;
import com.sapphire.stock.analysis.common.util.exception.ErrorCode;
import com.sapphire.stock.analysis.core.exception.AthenaException;
import com.sapphire.stock.analysis.core.model.FlinkScheduleJob;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.repo.FlinkScheduleJobRepository;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Action("saveSchedulerJobAction")
public class SaveSchedulerJobAction implements BusinessAction {

    private static final Logger        logger = LoggerFactory
        .getLogger(SaveSchedulerJobAction.class);

    private FlinkScheduleJobRepository flinkScheduleJobRepository;

    @Override
    public void process(ProcessContext processContext) {
        FlinkSchedulerEntity entity = processContext.getEntity();
        FlinkScheduleJob flinkScheduleJob = entity.getFlinkScheduleJob();
        flinkScheduleJob.setGmtCreate(new Date());
        flinkScheduleJob.setGmtModified(new Date());
        boolean success = flinkScheduleJobRepository.save(flinkScheduleJob);

        if (!success) {
            logger.warn("SaveSchedulerJobAction task failed!");
            throw new AthenaException(ErrorCode.SAVE_DATA_FAILED);
        }

        entity.setFlinkScheduleJob(flinkScheduleJob);
    }

    @Autowired
    public void setFlinkScheduleJobRepository(FlinkScheduleJobRepository flinkScheduleJobRepository) {
        this.flinkScheduleJobRepository = flinkScheduleJobRepository;
    }
}
