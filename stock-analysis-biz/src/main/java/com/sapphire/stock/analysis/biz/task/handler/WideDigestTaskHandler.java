package com.sapphire.stock.analysis.biz.task.handler;

import com.sapphire.stock.analysis.biz.entity.WideDigestEntity;
import com.sapphire.stock.analysis.core.model.Task;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.repo.PartitionDateRepository;
import com.sapphire.stock.analysis.core.repo.StockDailyDigestRepository;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * @author 柏云鹏
 * @since 2022/11/7.
 */
@Service
public class WideDigestTaskHandler extends BaseTaskHandler {

    @Resource
    private StockDailyDigestRepository stockDailyDigestRepository;

    @Resource
    private PartitionDateRepository partitionDateRepository;

    @Override
    public void handleInternal(Task task) {
        ProcessContext context = new ProcessContext();
        context.setProductCode("stock_wide_digest");
        context.setBusinessCode("history_regression");

        WideDigestEntity entity = new WideDigestEntity();

        String partitionDate = task.getExtInfo().get("partitionDate");


        if (StringUtils.isEmpty(partitionDate)) {
            dealFailure(task, "partition date is null!");
            return;
        }

        if (!partitionDateRepository.isTradingDay(partitionDate)) {
            dealSuccess(task);
            return;
        }

        // calculate last trading day
        String lastPartitionDate = partitionDateRepository.getLastPartitionDate(partitionDate);


    }

    @Override
    public String getTaskType() {
        return "WIDE_DIGEST_REGRESSION";
    }
}
