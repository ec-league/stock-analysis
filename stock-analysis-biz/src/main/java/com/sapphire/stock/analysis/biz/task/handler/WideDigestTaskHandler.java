package com.sapphire.stock.analysis.biz.task.handler;

import com.sapphire.stock.analysis.biz.entity.WideDigestEntity;
import com.sapphire.stock.analysis.core.model.Task;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.process.ProcessExecutor;
import com.sapphire.stock.analysis.core.process.cache.ProcessConfigCache;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * @author 柏云鹏
 * @since 2022/11/7.
 */
@Service
public class WideDigestTaskHandler extends BaseTaskHandler {

    @Resource
    private ProcessExecutor processExecutor;

    @Resource
    private ProcessConfigCache processConfigCache;

    @Override
    public void handleInternal(Task task) {
        ProcessContext context = new ProcessContext();
        context.setProductCode("stock_wide_digest");
        context.setBusinessCode("history_regression");

        WideDigestEntity entity = new WideDigestEntity();

        String partitionDate = task.getExtInfo().get("partitionDate");
        String code = task.getExtInfo().get("code");
        entity.setCode(code);
        entity.setPartitionDate(partitionDate);

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
        return "WIDE_DIGEST_REGRESSION";
    }
}
