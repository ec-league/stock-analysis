package com.sapphire.stock.analysis.biz.entity;

import java.util.List;
import java.util.Map;

import org.apache.calcite.sql.SqlNode;
import org.apache.calcite.sql.SqlNodeList;

import com.sapphire.stock.analysis.biz.entity.aware.CreateTaskAware;
import com.sapphire.stock.analysis.biz.entity.helper.SourceModel;
import com.sapphire.stock.analysis.core.model.FlinkGeneralSource;
import com.sapphire.stock.analysis.core.model.FlinkSQLJob;
import com.sapphire.stock.analysis.core.model.TaskSequenceFlow;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
public class FlinkTaskEntity extends BaseEntity implements CreateTaskAware {

    private FlinkSQLJob                     flinkSQLJob;

    private SqlNode                         sqlNode;
    private transient SqlNodeList           sqlNodeList;
    private transient List<String>          mysqlLocalSqls;

    private Map<String, SourceModel>        sourceModelMap;
    private Map<String, SourceModel>        sinkModelMap;

    private Map<String, FlinkGeneralSource> sourceMap;
    private Map<String, FlinkGeneralSource> sinkMap;

    private TaskSequenceFlow                taskSequenceFlow;

    private Map<String, String>             taskProfile;
    private String                          jobId;

    private List<String>                    udfs;

    private String                          replacedSql;

    // 取值来自于调度任务的替换参数,
    private Map<String, String>             replaceParams;

    private boolean                         enoughSlot = true;

    public boolean isEnoughSlot() {
        return enoughSlot;
    }

    public void setEnoughSlot(boolean enoughSlot) {
        this.enoughSlot = enoughSlot;
    }

    /**
     * 获取替换参数, 优先取自调度任务的替换参数, 如果没有, 取自单个任务的替换参数
     * @return
     */
    public Map<String, String> getReplaceParams() {
        return this.replaceParams;
    }

    public void setReplaceParams(Map<String, String> replaceParams) {
        this.replaceParams = replaceParams;
    }

    @Override
    public String getTaskType() {
        return "TASK_SEQUENCE_FLOW_PROCESS";
    }

    public void setTaskProfile(Map<String, String> taskProfile) {
        this.taskProfile = taskProfile;
    }

    @Override
    public Map<String, String> getTaskProfile() {
        return this.taskProfile;
    }

    public FlinkSQLJob getFlinkSQLJob() {
        return flinkSQLJob;
    }

    public void setFlinkSQLJob(FlinkSQLJob flinkSQLJob) {
        this.flinkSQLJob = flinkSQLJob;
    }

    public Map<String, SourceModel> getSourceModelMap() {
        return sourceModelMap;
    }

    public void setSourceModelMap(Map<String, SourceModel> sourceModelMap) {
        this.sourceModelMap = sourceModelMap;
    }

    public Map<String, SourceModel> getSinkModelMap() {
        return sinkModelMap;
    }

    public void setSinkModelMap(Map<String, SourceModel> sinkModelMap) {
        this.sinkModelMap = sinkModelMap;
    }

    public Map<String, FlinkGeneralSource> getSourceMap() {
        return sourceMap;
    }

    public void setSourceMap(Map<String, FlinkGeneralSource> sourceMap) {
        this.sourceMap = sourceMap;
    }

    public Map<String, FlinkGeneralSource> getSinkMap() {
        return sinkMap;
    }

    public void setSinkMap(Map<String, FlinkGeneralSource> sinkMap) {
        this.sinkMap = sinkMap;
    }

    public TaskSequenceFlow getTaskSequenceFlow() {
        return taskSequenceFlow;
    }

    public void setTaskSequenceFlow(TaskSequenceFlow taskSequenceFlow) {
        this.taskSequenceFlow = taskSequenceFlow;
    }

    public String getJobId() {
        return jobId;
    }

    public void setJobId(String jobId) {
        this.jobId = jobId;
    }

    public List<String> getUdfs() {
        return udfs;
    }

    public void setUdfs(List<String> udfs) {
        this.udfs = udfs;
    }

    public SqlNode getSqlNode() {
        return sqlNode;
    }

    public void setSqlNode(SqlNode sqlNode) {
        this.sqlNode = sqlNode;
    }

    public String getReplacedSql() {
        return replacedSql;
    }

    public void setReplacedSql(String originSql) {
        this.replacedSql = originSql;
    }

    public SqlNodeList getSqlNodeList() {
        return sqlNodeList;
    }

    public void setSqlNodeList(SqlNodeList sqlNodeList) {
        this.sqlNodeList = sqlNodeList;
    }

    public List<String> getMysqlLocalSqls() {
        return mysqlLocalSqls;
    }

    public void setMysqlLocalSqls(List<String> mysqlLocalSqls) {
        this.mysqlLocalSqls = mysqlLocalSqls;
    }
}
