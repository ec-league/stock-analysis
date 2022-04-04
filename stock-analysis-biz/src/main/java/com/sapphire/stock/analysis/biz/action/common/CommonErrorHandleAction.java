package com.sapphire.stock.analysis.biz.action.common;

import com.sapphire.stock.analysis.biz.action.Action;
import com.sapphire.stock.analysis.biz.entity.BaseEntity;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Action("commonErrorHandleAction")
public class CommonErrorHandleAction implements BusinessAction {

    @Override
    public void process(ProcessContext processContext) {
        BaseEntity entity = processContext.getEntity();

        entity.setSuccess(false);

    }
}
