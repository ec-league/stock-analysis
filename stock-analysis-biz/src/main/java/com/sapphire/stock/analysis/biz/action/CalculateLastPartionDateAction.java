package com.sapphire.stock.analysis.biz.action;

import com.sapphire.stock.analysis.biz.entity.aware.PartitionDateAware;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.repo.PartitionDateRepository;

import javax.annotation.Resource;

/**
 * @author 柏云鹏
 * @since 2023/3/19.
 */
@Action("calculateLastPartionDateAction")
public class CalculateLastPartionDateAction implements BusinessAction {

    @Resource
    private PartitionDateRepository partitionDateRepository;

    @Override
    public void process(ProcessContext context) {
        PartitionDateAware entity = context.getEntity();

        String partitionDate = entity.getPartitionDate();

        String lastTradingDay = partitionDateRepository.getLastPartitionDate(partitionDate);

        entity.setLastTradingDay(lastTradingDay);
    }
}
