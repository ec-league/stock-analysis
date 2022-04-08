package com.sapphire.stock.analysis.biz.action.sub.flink;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.biz.entity.FlinkTaskEntity;
import com.sapphire.stock.analysis.core.model.FlinkSQLJob;
import com.sapphire.stock.analysis.core.model.enums.FlinkSqlStatus;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.repo.FlinkSqlJobRepository;

/**
 * Author: 潘超杰
 * Date: 2021/3/15.
 */
@Service("flinkTaskFailAction")
public class FlinkTaskFailAction implements BusinessAction {

    @Autowired
    private FlinkSqlJobRepository flinkSqlJobRepository;

    @Override
    public void process(ProcessContext processContext) {
        FlinkTaskEntity entity = processContext.getEntity();
        FlinkSQLJob flinkSQLJob = entity.getFlinkSQLJob();
        flinkSQLJob.setStatus(FlinkSqlStatus.FAILED.name());
        flinkSqlJobRepository.save(flinkSQLJob);
    }
}
