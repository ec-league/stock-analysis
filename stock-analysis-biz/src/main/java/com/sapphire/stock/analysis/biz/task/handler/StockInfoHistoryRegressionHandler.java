package com.sapphire.stock.analysis.biz.task.handler;

import com.sapphire.stock.analysis.biz.entity.DigestEntity;
import com.sapphire.stock.analysis.common.dal.model.StockDailyDigestDO;
import com.sapphire.stock.analysis.common.integration.client.HistoryStockClient;
import com.sapphire.stock.analysis.core.constant.TaskStatus;
import com.sapphire.stock.analysis.core.converter.DomainConverter;
import com.sapphire.stock.analysis.core.model.StockDailyDigest;
import com.sapphire.stock.analysis.core.model.StockInfo;
import com.sapphire.stock.analysis.core.model.Task;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.process.ProcessExecutor;
import com.sapphire.stock.analysis.core.process.cache.ProcessConfigCache;
import com.sapphire.stock.analysis.core.repo.PartitionDateRepository;
import com.sapphire.stock.analysis.core.repo.StockDailyDigestRepository;
import com.sapphire.stock.analysis.core.repo.StockInfoRepository;
import com.sapphire.stock.analysis.core.repo.TaskRepository;
import com.sapphire.stock.analysis.core.task.TaskExecuteException;
import com.sapphire.stock.analysis.core.task.TaskHandler;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Author: 柏云鹏 Date: 2022/4/3.
 */
@Slf4j
@Service
public class StockInfoHistoryRegressionHandler extends BaseTaskHandler {

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private HistoryStockClient historyStockClient;

    @Autowired
    private StockDailyDigestRepository stockDailyDigestRepo;

    @Autowired
    private StockInfoRepository stockInfoRepository;

    @Autowired
    private PartitionDateRepository partitionDateRepository;

    @Resource
    private ProcessConfigCache processConfigCache;

    @Resource
    private ProcessExecutor processExecutor;

    @Override
    protected void handleInternal(Task task) {
        Map<String, String> extInfo = task.getExtInfo();

        String startDate = extInfo.get("partitionDate");
        String code = extInfo.get("code");

        ProcessContext context = new ProcessContext();
        context.setProductCode("stock_info");
        context.setBusinessCode("history_regression");

        DigestEntity entity = new DigestEntity();
        entity.setCode(code);
        entity.setPartitionDate(startDate);
        entity.setStartDate(startDate);

        context.setEntity(entity);

        context.setProcessConfig(processConfigCache.getProcessConfig(context));

        processExecutor.execute(context);

        if (entity.isSuccess()) {
            dealSuccess(task);
        } else {
            dealFailure(task, context.getErrorMsg());
        }
    }

    @Override
    public String getTaskType() {
        return "STOCK_INFO_REGRESSION";
    }
}
