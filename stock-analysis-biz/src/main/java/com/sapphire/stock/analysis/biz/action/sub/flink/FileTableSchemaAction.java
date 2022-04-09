package com.sapphire.stock.analysis.biz.action.sub.flink;

import java.util.ArrayList;
import java.util.Deque;
import java.util.List;
import java.util.Map;

import org.apache.calcite.sql.SqlKind;
import org.apache.calcite.sql.SqlNode;
import org.apache.calcite.sql.SqlNodeList;
import org.apache.calcite.sql.SqlSelect;
import org.apache.calcite.sql.parser.SqlParseException;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.sapphire.stock.analysis.biz.action.Action;
import com.sapphire.stock.analysis.biz.entity.SubTaskEntity;
import com.sapphire.stock.analysis.biz.sql.SqlParseHelper;
import com.sapphire.stock.analysis.core.exception.AthenaException;
import com.sapphire.stock.analysis.core.model.*;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.repo.FlinkGeneralSourceRepository;
import com.sapphire.stock.analysis.core.repo.FlinkSqlJobRepository;

/**
 * Author: 潘超杰
 * Date: 2021/3/15.
 */
@Action("fileTableSchemaAction")
public class FileTableSchemaAction implements BusinessAction {
    private static Logger                logger = LoggerFactory
        .getLogger(FileTableSchemaAction.class);

    private FlinkGeneralSourceRepository flinkGeneralSourceRepository;

    private FlinkSqlJobRepository        flinkSqlJobRepository;

    @Override
    public void process(ProcessContext processContext) {
        SubTaskEntity entity = processContext.getEntity();
        FlinkSQLJob flinkSQLJob = entity.getFlinkSQLJob();

        Map<String, FlinkGeneralSource> sinkMap = entity.getSinkMap();
        FlinkGeneralSource sink = null;
        for (FlinkGeneralSource value : sinkMap.values()) {
            sink = value;
            entity.setSink(sink);
        }

        Map<String, FlinkGeneralSource> sourceMap = entity.getSourceMap();
        FlinkGeneralSource source = null;
        for (FlinkGeneralSource value : sourceMap.values()) {
            source = value;
            entity.setSource(source);
        }

        //解析sql，保存搜索字段
        saveSelectList(entity, source, sink);

        flinkSqlJobRepository.save(flinkSQLJob);
    }

    private void saveSelectList(SubTaskEntity entity, FlinkGeneralSource source,
                                FlinkGeneralSource sink) {
        //解析select字段
        List<String> parseList = new ArrayList<>();

        try {
            // 解析sql
            Deque<SqlNode> deque = SqlParseHelper.parse(entity.getReplacedSql());
            SqlNode last;
            while ((last = deque.pollLast()) != null) {
                if (last.getKind() == SqlKind.SELECT) {
                    SqlSelect sqlSelect = (SqlSelect) last;
                    SqlNodeList selectList = sqlSelect.getSelectList();
                    List<SqlNode> sqlNodeList = selectList.getList();
                    for (SqlNode sqlNode : sqlNodeList) {
                        String nodeName = sqlNode.toString();
                        parseList.add(nodeName);
                    }
                }
            }

        } catch (SqlParseException e) {
            logger.error("解析sql获取select的字段出错。 sql={},e.message={}", entity.getReplacedSql(), e);
            return;
        }

        MysqlSourceConfig mysqlSourceConfig = source.getMysqlSourceConfig();
        List<Field> sourceSchema = mysqlSourceConfig.getSchema();

        FileSourceConfig fileSourceConfig = sink.getSourceConfig();
        List<Field> sinkSchema = new ArrayList<>();

        for (String field : parseList) {
            if (StringUtils.equals("*", field)) {
                sinkSchema = sourceSchema;
                break;
            }

            //判断是否存在select指定字段
            boolean isContains = false;
            for (Field sourceField : sourceSchema) {
                if (StringUtils.equalsIgnoreCase(sourceField.getName(), field)) {
                    sinkSchema.add(sourceField);
                    isContains = true;
                    break;
                }
            }

            if (!isContains) {
                logger.error("字段在源表不存在，fieldName={}", field);
                throw new AthenaException("Field not exist", "字段在源表不存在，fieldName=" + field);
            }
        }

        fileSourceConfig.setSchema(sinkSchema);
        sink.getSourceConfig().setSchema(sinkSchema);
        flinkGeneralSourceRepository.save(sink);
    }

    @Autowired
    public void setFlinkGeneralSourceRepository(FlinkGeneralSourceRepository flinkGeneralSourceRepository) {
        this.flinkGeneralSourceRepository = flinkGeneralSourceRepository;
    }

    @Autowired
    public void setFlinkSqlJobRepository(FlinkSqlJobRepository flinkSqlJobRepository) {
        this.flinkSqlJobRepository = flinkSqlJobRepository;
    }
}
