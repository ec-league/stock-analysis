package com.sapphire.stock.analysis.biz.sub.state.common;

import com.sapphire.stock.analysis.biz.sub.state.SubTaskState;
import com.sapphire.stock.analysis.biz.sub.state.SubTaskStateFactory;
import com.sapphire.stock.analysis.biz.sub.state.SubTaskStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Service
public abstract class ProcessingSubTaskState implements SubTaskState {

    protected SubTaskStateFactory subTaskStateFactory;

    @Override
    public SubTaskStatus status() {
        return SubTaskStatus.PROCESSING;
    }

    @Autowired
    public void setSubTaskStateFactory(SubTaskStateFactory subTaskStateFactory) {
        this.subTaskStateFactory = subTaskStateFactory;
    }
}
