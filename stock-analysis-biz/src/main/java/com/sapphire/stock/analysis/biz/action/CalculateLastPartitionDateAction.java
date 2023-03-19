package com.sapphire.stock.analysis.biz.action;

import com.sapphire.stock.analysis.biz.entity.WideDigestEntity;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.process.exception.ProcessException;
import com.sapphire.stock.analysis.core.repo.PartitionDateRepository;

import javax.annotation.Resource;

/**
 * @author 柏云鹏
 * @since 2023/3/19.
 */
@Action("calculateLastPartitionDateAction")
public class CalculateLastPartitionDateAction implements BusinessAction {

    @Resource
    private PartitionDateRepository partitionDateRepository;

    @Override
    public void process(ProcessContext context) {
        WideDigestEntity entity = context.getEntity();

        String partitionDate = entity.getPartitionDate();

        String lastTradingDay = partitionDateRepository.getLastPartitionDate(partitionDate);

        if (lastTradingDay == null) {
            throw new ProcessException("LAST_TRADING_NOT_EXISTS", "上一个交易日不存在, 需要增加partitionDate");
        }

        entity.setLastTradingDay(lastTradingDay);
    }
}
