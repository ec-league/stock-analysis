package com.sapphire.stock.analysis.common.dal.interceptor;

import lombok.extern.slf4j.Slf4j;
import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;
import org.springframework.stereotype.Service;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
@Slf4j
@Service("daoInterceptor")
public class DaoInterceptor implements MethodInterceptor {

    @Override
    public Object invoke(MethodInvocation methodInvocation) throws Throwable {
        String className = methodInvocation.getThis().getClass().getInterfaces()[0].getSimpleName();

        String method = methodInvocation.getMethod().getName();

        long start = System.currentTimeMillis();

        boolean success = true;
        String exception = "-";
        String msg = "-";
        try {
            return methodInvocation.proceed();
        } catch (Exception e) {
            success = false;
            exception = e.getClass().getName();
            msg = e.getMessage();
            throw e;
        } finally {
            log.info("(class={},method={})(success={},cost={}ms,ex={},msg={})", className,
                    method, success, System.currentTimeMillis() - start, exception, msg);
        }
    }
}
