package com.sapphire.stock.analysis.biz.sub.state.mysql2file;

import com.sapphire.stock.analysis.biz.entity.Mysql2TaskEntity;
import com.sapphire.stock.analysis.biz.sub.state.SubTaskContext;
import com.sapphire.stock.analysis.biz.sub.state.SubTaskStatus;
import com.sapphire.stock.analysis.biz.sub.state.common.SubmitSubTaskState;
import com.sapphire.stock.analysis.core.model.AsyncTask;
import com.sapphire.stock.analysis.core.model.FlinkSQLJob;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.process.ProcessExecutor;
import com.sapphire.stock.analysis.core.process.cache.ProcessConfigCache;
import org.apache.commons.lang.exception.ExceptionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
 * Author:王诗璠
 * Date:2021/11/4
 */
@Service
public class Mysql2FileSubmitSubTaskState extends SubmitSubTaskState {
    private static final Logger logger = LoggerFactory
        .getLogger(Mysql2FileSubmitSubTaskState.class);

    private ProcessConfigCache processConfigCache;

    private ProcessExecutor processExecutor;

    @Override
    public void handle(SubTaskContext context) {
        AsyncTask asyncTask = context.getAsyncTask();

        FlinkSQLJob flinkSQLJob = context.getFlinkSQLJob();

        try {
            asyncTaskManager.submitTask(asyncTask.getId(), new Runnable() {
                @Override
                public void run() {
                    asyncTask.setStatus(AsyncTask.PROCESSING);
                    asyncTask.getProcessInfo().getInfos().add("mysql2file任务开始执行！");
                    asyncTaskRepository.save(asyncTask);

                    ProcessContext processContext = new ProcessContext();

                    Mysql2TaskEntity entity = new Mysql2TaskEntity();

                    entity.setFlinkSQLJob(flinkSQLJob);
                    entity.setTaskSequenceFlow(context.getTaskSequenceFlow());

                    processContext.setEntity(entity);

                    processContext.setProductCode("sub_task");
                    processContext.setBusinessCode(subTaskType());

                    processContext
                        .setProcessConfig(processConfigCache.getProcessConfig(processContext));

                    processExecutor.execute(processContext);

                    asyncTask.setErrorCode(processContext.getErrorCode());
                    asyncTask.setErrorMsg(processContext.getErrorMsg());

                    if (entity.isSuccess()) {
                        asyncTask.setStatus(AsyncTask.SUCCESS);
                        asyncTask.getProcessInfo().getInfos()
                            .add("Mysql表导文件任务执行成功！cost="
                                 + (System.currentTimeMillis()
                                    - asyncTask.getProcessInfo().getStartTime().getTime())
                                 + "ms");
                    } else {
                        asyncTask.setStatus(AsyncTask.RETRY);
                        asyncTask.getProcessInfo().getInfos().add("Mysql2FileSubmit执行失败，进行重试！");
                    }
                    asyncTaskRepository.save(asyncTask);
                }
            });
        } catch (Exception e) {
            logger.error("Mysql2FileSubmitSubTaskState.handle fail,e.message={}",
                ExceptionUtils.getStackTrace(e));
            context.setErrorCode(e.getClass().getSimpleName());
            context.setErrorMsg(e.getMessage());
            context.setCurrentState(subTaskStateFactory
                .getByTaskTypeAndStatus(flinkSQLJob.getType(), SubTaskStatus.RETRY.name()));

        }
        context.setCurrentState(subTaskStateFactory.getByTaskTypeAndStatus(flinkSQLJob.getType(),
            SubTaskStatus.PROCESSING.name()));
    }

    @Override
    public String subTaskType() {
        return FlinkSQLJob.FLINK_MYSQL_TO_FILE;
    }

    @Autowired
    public void setProcessConfigCache(ProcessConfigCache processConfigCache) {
        this.processConfigCache = processConfigCache;
    }

    @Autowired
    public void setProcessExecutor(ProcessExecutor processExecutor) {
        this.processExecutor = processExecutor;
    }
}
