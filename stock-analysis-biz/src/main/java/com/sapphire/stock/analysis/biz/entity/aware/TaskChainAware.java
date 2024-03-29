package com.sapphire.stock.analysis.biz.entity.aware;

/**
 * @author 柏云鹏
 * @since 2023/3/19.
 */
public interface TaskChainAware {
    String getNextDate();

    String getCode();

    String getTaskType();
}
