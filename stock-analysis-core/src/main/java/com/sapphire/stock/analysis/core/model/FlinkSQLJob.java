package com.sapphire.stock.analysis.core.model;

import java.util.Date;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

import lombok.Data;

/**
 * Author: 柏云鹏 Date: 2022/4/3.
 */
@Data
public class FlinkSQLJob {
    // FLINK SQL
    public static final String FLINK_SQL_JOB_TYPE_ATOMIC        = "atomic";
    // 复合SQL
    public static final String FLINK_SQL_JOB_TYPE_COMPLEX       = "complex";
    // 原生SQL
    public static final String FLINK_SQL_JOB_TYPE_ATOMIC_DELETE = "delete";
    public static final String FLINK_MYSQL_TO_FILE              = "mysql2file";
    public static final String FLINK_FILE_TO_MYSQL              = "file2mysql";

    private long               id;
    private long               scheduleJobId;
    private FlinkConfig        flinkConfig                      = new FlinkConfig();
    private long               taskSeqId;
    /**
     * 用于判断FLinkSqlJob的类型,
     * atomic类型为原子任务, 可以直接触发, 重新触发执行
     * complex类型为符合任务, 需要通过TaskSequenceFlow来进行串联, 完成全部任务执行
     */
    private String             type                             = FLINK_SQL_JOB_TYPE_ATOMIC;
    private JobConfig          jobConfig                        = new JobConfig();
    private String             flinkJobId;
    private int                priority;
    private String             name;
    private String             status;
    private String             resultMsg;
    private FlinkSqlExtInfo    extInfo                          = new FlinkSqlExtInfo();
    private Date               gmtCreate;
    private Date               gmtModified;

    public void setResultMsg(String resultMsg) {
        if (StringUtils.isEmpty(resultMsg)) {
            return;
        }

        if (resultMsg.length() > 1000) {
            this.resultMsg = resultMsg.substring(0, 1000);
        } else {
            this.resultMsg = resultMsg;
        }
    }

    public void addReplaceParams(String key, String val) {
        Map<String, String> temp = this.extInfo.getReplaceParams();
        temp.put(key, val);
        this.extInfo.setReplaceParams(temp);
    }

    public String getReplaceParamsVal(String key) {
        Map<String, String> temp = this.extInfo.getReplaceParams();
        return temp.get(key);
    }
}
