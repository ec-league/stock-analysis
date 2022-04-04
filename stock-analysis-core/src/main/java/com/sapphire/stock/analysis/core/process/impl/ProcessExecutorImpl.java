package com.sapphire.stock.analysis.core.process.impl;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.core.process.*;
import com.sapphire.stock.analysis.core.process.exception.ProcessException;

import lombok.extern.slf4j.Slf4j;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Slf4j
@Service
public class ProcessExecutorImpl implements ProcessExecutor {
    private static final Router DEFAULT_ROUTER = new DefaultRouter();
    @Autowired
    private ApplicationContext  applicationContext;

    public ProcessExecutorImpl() {
    }

    public void execute(ProcessContext context) {
        if (log.isDebugEnabled()) {
            log.debug("[ProcessExecutor] start to process, context=" + context);
        }

        if (!"FINISH".equals(context.getStage())) {
            Router router = this.getRouter(context);
            String currentAction = null;
            String currentStage = context.getStage();

            try {
                ProcessConfig processConfig = context.getProcessConfig();
                List<String> actions = processConfig.getActions(context.getStage());
                Iterator var7 = actions.iterator();

                while (var7.hasNext()) {
                    String action = (String) var7.next();
                    BusinessAction a = this.applicationContext.getBean(action,
                        BusinessAction.class);
                    log.info("[ProcessExecutor] processing, action={}", action);
                    a.process(context);
                }

                router.route(context);
            } catch (ProcessException var14) {
                context.setErrorCode(var14.getErrorCode());
                context.setErrorMsg(var14.getErrorMsg());
                log.warn("[ProcessExecutor] process internal error! stage=" + context.getStage()
                         + ", errorAction=" + currentAction + ", context=" + context
                         + ", errorCode=" + var14.getErrorCode() + ", errorMsg="
                         + var14.getErrorMsg());
                router.routeError(context);
            } catch (Exception var15) {
                context.setErrorCode("SYS_ERROR");
                context.setErrorMsg(var15.getMessage());
                log.error("[ProcessExecutor] process error! stage=" + context.getStage()
                          + ", errorAction=" + currentAction + ", context=" + context,
                    var15);
                router.routeError(context);
            } finally {
                log.info(
                    String.format("[ProcessExecutor] process turn from [%s] to [%s], router=%s",
                        currentStage, context.getStage(), router.getClass().getSimpleName()));
            }

            this.execute(context);
        }
    }

    private Router getRouter(ProcessContext context) {
        ProcessConfig config = context.getProcessConfig();
        String routerBean = config.getRouter(context.getStage());
        if (routerBean != null && !routerBean.equals("")) {
            try {
                return (Router) this.applicationContext.getBean(routerBean, Router.class);
            } catch (Exception var5) {
                return DEFAULT_ROUTER;
            }
        } else {
            return DEFAULT_ROUTER;
        }
    }
}
