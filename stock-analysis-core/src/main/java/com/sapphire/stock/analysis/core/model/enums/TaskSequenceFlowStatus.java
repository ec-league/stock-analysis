package com.sapphire.stock.analysis.core.model.enums;

import com.sapphire.stock.analysis.core.exception.AthenaException;
import org.apache.commons.lang.StringUtils;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
public enum TaskSequenceFlowStatus {
    /**/
    INIT("初始状态"),
    /** */
    CREATE("子任务创建"),
    /**/
    PROCESSING("执行中"),

    /**/
    WAITING("等待中"),
    /**/
    FAIL("失败"),
    POST_PROCESS("后置处理"),
    /**/
    FINISH("成功"),
    /**/
    RETRY("重试"),;

    private String msg;

    TaskSequenceFlowStatus(String msg) {
        this.msg = msg;
    }

    public String getMsg() {
        return msg;
    }

    public static TaskSequenceFlowStatus getByName(String name) {
        for (TaskSequenceFlowStatus value : TaskSequenceFlowStatus.values()) {
            if (StringUtils.equals(name, value.name())) {
                return value;
            }
        }

        throw new AthenaException("TaskSequenceFlowStatus not supported!, name=" + name);
    }
}
