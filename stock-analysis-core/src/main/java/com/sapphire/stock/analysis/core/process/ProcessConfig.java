package com.sapphire.stock.analysis.core.process;

import java.util.List;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
public interface ProcessConfig {
    List<String> getActions(String var1);

    String getRouter(String var1);
}
