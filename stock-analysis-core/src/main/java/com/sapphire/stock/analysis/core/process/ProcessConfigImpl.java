package com.sapphire.stock.analysis.core.process;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.builder.ToStringBuilder;

import lombok.Data;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Data
public class ProcessConfigImpl implements ProcessConfig {
    private Map<String, ProcessStage> processStageMap;

    public ProcessConfigImpl() {
    }

    public List<String> getActions(String stage) {
        ProcessStage processStage = this.processStageMap.get(stage);
        return processStage == null ? new ArrayList() : processStage.getActions();
    }

    public String getRouter(String stage) {
        ProcessStage processStage = this.processStageMap.get(stage);
        return processStage == null ? "" : processStage.getRouter();
    }

    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }
}
