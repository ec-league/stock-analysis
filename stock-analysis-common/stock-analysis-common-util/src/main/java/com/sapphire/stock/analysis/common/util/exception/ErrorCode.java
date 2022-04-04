package com.sapphire.stock.analysis.common.util.exception;

/**
 * Author: 柏云鹏 Date: 2022/4/3.
 */
public enum ErrorCode {
    /**
     * 校验失败
     */
    VALIDATE_ERROR("校验失败"),
    /**
     * 参数为NULL
     */
    PARAM_NULL("参数为NULL"),
    /**
     * 参数不合法
     */
    PARAM_ILLEGAL("参数不合法"),
    /**
     * 数据不存在
     */
    DATA_NOT_EXIST("数据不存在"), FLINK_NOT_AVAILABLE("FLINK集群不可用"),
    /**
     * 配置不存在
     */
    CONFIG_NOT_EXIST("配置不存在"), CONFIG_ERROR("配置错误"),
    /** */
    UPDATE_STATUS_FAILED("更新数据失败"),
    /** */
    SAVE_DATA_FAILED("存储数据失败"),
    /** */
    MODEL_LOAD_ERROR("模型加载错误"),
    /** */
    CREATE_FIRE_TASK_ERROR("创建任务流水失败"),
    /** */
    SYSTEM_ERROR("系统异常"),
    /** */
    STATUS_IS_SUCCESS("已成功校验过"),
    /** */
    TARGETS_NOT_EQUAL("模型输出不一致，升级版本失败，请新增模型!"),
    /** */
    SYN_DB_CONFIG_FAIL("同步数据库失败!"),
    /** */
    UPDATE_SPLIT_TABLE_STATUS_ERROR("更新数据拆表状态任务失败！"),

    UPDATE_INLOAN_BASIC_TABLE_STATUS_ERROR("贷中基础表拆表状态任务失败！"),
    /** */
    ADJUST_FILE_UPLOAD_APS_ERROR("批量文件上传aps失败！"),
    /** */
    SAVE_RESPONSE_RESULT_FAIL("保存请求结果失败！"),
    /** */
    UPDATE_REGRESSION_PBC_TASK_ERROR("更新回溯人行状态任务失败"),

    MODEL_VERIFICATION_PRECHECK_FAIL("模型验证文件预校验失败"),

    MODEL_VERIFICATION_BATCH_CALCULATION_FAIL("模型验证批量计算处理失败"),
    /** */
    SQL_ERROR("SQL错误"),;

    private String msg;

    ErrorCode(String msg) {
        this.msg = msg;
    }

    public String getMsg() {
        return msg;
    }
}
