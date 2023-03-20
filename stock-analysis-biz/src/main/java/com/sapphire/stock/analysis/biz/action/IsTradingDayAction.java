package com.sapphire.stock.analysis.biz.action;

import com.sapphire.stock.analysis.biz.entity.WideDigestEntity;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.process.exception.ProcessException;
import com.sapphire.stock.analysis.core.repo.PartitionDateRepository;

import javax.annotation.Resource;

/**
 * @author 柏云鹏
 * @since 2023/3/20.
 */
@Action("isTradingDayAction")
public class IsTradingDayAction implements BusinessAction {

    @Resource
    private PartitionDateRepository partitionDateRepository;

    @Override
    public void process(ProcessContext context) {
        WideDigestEntity entity = context.getEntity();

        String partitionDate = entity.getPartitionDate();

        if (!partitionDateRepository.isTradingDay(partitionDate)) {
            throw new ProcessException("NOT_TRADING_DAY", "非交易日");
        }
    }
}
