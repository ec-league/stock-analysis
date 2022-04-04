package com.sapphire.stock.analysis.biz.entity.aware;

import java.util.Date;
import java.util.Map;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
public interface CreateTaskAware {
    /**
     * 获取要新增的任务类型
     * @return
     */
    String getTaskType();

    /**
     * 获取任务执行细节
     * @return
     */
    Map<String, String> getTaskProfile();

    /**
     * 获取执行最早时间, 默认返回当前时间
     * 1.8后 可以加default标记为普通方法 实现类会继承此方法
     * @return
     */
    default Date getFireDate() {
        return new Date();
    }
}
