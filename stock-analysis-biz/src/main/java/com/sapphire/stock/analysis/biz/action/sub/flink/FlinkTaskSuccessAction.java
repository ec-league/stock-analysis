package com.sapphire.stock.analysis.biz.action.sub.flink;

import org.springframework.beans.factory.annotation.Autowired;

import com.sapphire.stock.analysis.biz.action.Action;
import com.sapphire.stock.analysis.biz.entity.FlinkTaskEntity;
import com.sapphire.stock.analysis.core.model.FlinkSQLJob;
import com.sapphire.stock.analysis.core.model.enums.FlinkSqlStatus;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.repo.FlinkSqlJobRepository;

/**
 * Author: 柏云鹏 Date: 2022/4/9.
 */
@Action("flinkTaskSuccessAction")
public class FlinkTaskSuccessAction implements BusinessAction {
    @Autowired
    private FlinkSqlJobRepository flinkSqlJobRepository;

    @Override
    public void process(ProcessContext processContext) {

        FlinkTaskEntity entity = processContext.getEntity();
        FlinkSQLJob flinkSQLJob = entity.getFlinkSQLJob();
        flinkSQLJob.setStatus(FlinkSqlStatus.FINISH.name());
        flinkSqlJobRepository.save(flinkSQLJob);
    }
}
