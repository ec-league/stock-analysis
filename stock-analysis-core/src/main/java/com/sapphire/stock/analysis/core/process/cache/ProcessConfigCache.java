package com.sapphire.stock.analysis.core.process.cache;

import com.sapphire.stock.analysis.core.process.ProcessConfig;
import com.sapphire.stock.analysis.core.process.ProcessContext;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
public interface ProcessConfigCache {
    ProcessConfig getProcessConfig(ProcessContext context);
}
