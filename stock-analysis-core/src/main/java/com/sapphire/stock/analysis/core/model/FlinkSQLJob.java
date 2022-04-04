package com.sapphire.stock.analysis.core.model;

import java.util.Date;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

/**
 * Author: 柏云鹏 Date: 2022/4/3.
 */
public class FlinkSQLJob {
    // FLINK SQL
    public static final String FLINK_SQL_JOB_TYPE_ATOMIC        = "atomic";
    // 复合SQL
    public static final String FLINK_SQL_JOB_TYPE_COMPLEX       = "complex";
    // 原生SQL
    public static final String FLINK_SQL_JOB_TYPE_ATOMIC_DELETE = "delete";
    public static final String FLINK_SQL_JOB_TYPE_AB_TABLE      = "abTable";
    public static final String DATA_CLEAN_JOB_TYPE              = "dataClean";
    public static final String FLINK_SQL_JOB_TYPE_SYNC_FILE     = "syncFile";
    public static final String FLINK_SQL_JOB_RCS_VARS           = "rcsVars";
    public static final String FLINK_SQL_JOB_TYPE_BLINK         = "blink";
    public static final String FLINK_MYSQL_TO_FILE              = "mysql2file";
    public static final String FLINK_FILE_TO_MYSQL              = "file2mysql";
    public static final String MODEL_REGRESSION_TASK            = "modelregressiontask";

    private long               id;
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
    private String             name;
    private String             status;
    private String             resultMsg;
    private FlinkSqlExtInfo    extInfo                          = new FlinkSqlExtInfo();
    private Date               gmtCreate;
    private Date               gmtModified;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public FlinkConfig getFlinkConfig() {
        return flinkConfig;
    }

    public void setFlinkConfig(FlinkConfig flinkConfig) {
        this.flinkConfig = flinkConfig;
    }

    public JobConfig getJobConfig() {
        return jobConfig;
    }

    public void setJobConfig(JobConfig jobConfig) {
        this.jobConfig = jobConfig;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getGmtCreate() {
        return gmtCreate;
    }

    public void setGmtCreate(Date gmtCreate) {
        this.gmtCreate = gmtCreate;
    }

    public Date getGmtModified() {
        return gmtModified;
    }

    public void setGmtModified(Date gmtModified) {
        this.gmtModified = gmtModified;
    }

    public String getFlinkJobId() {
        return flinkJobId;
    }

    public void setFlinkJobId(String flinkJobId) {
        this.flinkJobId = flinkJobId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getResultMsg() {
        return resultMsg;
    }

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

    public long getTaskSeqId() {
        return taskSeqId;
    }

    public void setTaskSeqId(long taskSeqId) {
        this.taskSeqId = taskSeqId;
    }

    public FlinkSqlExtInfo getExtInfo() {
        return extInfo;
    }

    public void setExtInfo(FlinkSqlExtInfo extInfo) {
        this.extInfo = extInfo;
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
