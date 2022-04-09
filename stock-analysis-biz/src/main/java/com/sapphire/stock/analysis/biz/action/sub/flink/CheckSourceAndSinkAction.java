package com.sapphire.stock.analysis.biz.action.sub.flink;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.CollectionUtils;

import com.sapphire.stock.analysis.biz.action.Action;
import com.sapphire.stock.analysis.biz.entity.FlinkTaskEntity;
import com.sapphire.stock.analysis.biz.entity.helper.SourceModel;
import com.sapphire.stock.analysis.common.util.PathUtils;
import com.sapphire.stock.analysis.core.exception.AthenaException;
import com.sapphire.stock.analysis.core.model.FileSourceConfig;
import com.sapphire.stock.analysis.core.model.FlinkGeneralSource;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.repo.FlinkGeneralSourceRepository;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Action("checkSourceAndSinkAction")
public class CheckSourceAndSinkAction implements BusinessAction {
    @Autowired
    private FlinkGeneralSourceRepository flinkGeneralSourceRepository;

    @Value("${file.path.prefix}")
    private String                       prefix;

    @Override
    public void process(ProcessContext processContext) {
        FlinkTaskEntity entity = processContext.getEntity();

        Map<String, SourceModel> sourceModelMap = entity.getSourceModelMap();
        Map<String, FlinkGeneralSource> sourceMap = new HashMap<>();

        // source的逻辑, 如果source不存在, 去查询DB, 务必保证Mysql链接存在.
        for (Map.Entry<String, SourceModel> entry : sourceModelMap.entrySet()) {
            SourceModel model = entry.getValue();

            FlinkGeneralSource source = flinkGeneralSourceRepository
                .findBySchemaAndTableName(model.getSchemaName(), model.getTableName());

            if (source != null) {
                sourceMap.put(entry.getKey(), source);
            } else {
                // 查询本地表
                throw new AthenaException("原始表找不到!");
            }
        }

        entity.setSourceMap(sourceMap);

        Map<String, SourceModel> sinkModelMap = entity.getSinkModelMap();
        Map<String, FlinkGeneralSource> sinkMap = new HashMap<>();

        if (!CollectionUtils.isEmpty(sinkModelMap)) {
            for (Map.Entry<String, SourceModel> entry : sinkModelMap.entrySet()) {
                SourceModel model = entry.getValue();

                FlinkGeneralSource sink = flinkGeneralSourceRepository
                    .findBySchemaAndTableName(model.getSchemaName(), model.getTableName());

                if (sink != null) {
                    sinkMap.put(entry.getKey(), sink);
                } else {
                    // create file and general source
                    sink = new FlinkGeneralSource();
                    sink.setSchemaName(StringUtils.defaultString(model.getSchemaName(), "FILE"));
                    sink.setTableName(model.getTableName());

                    FileSourceConfig fileSourceConfig = new FileSourceConfig();
                    fileSourceConfig.setPath(
                        PathUtils.append(prefix, sink.getSchemaName() + "." + sink.getTableName()));

                    sink.setType("FILE");
                    sink.setSourceConfig(fileSourceConfig);
                    sink.setGmtModified(new Date());
                    sink.setGmtCreate(new Date());
                    flinkGeneralSourceRepository.save(sink);
                }

                entity.getFlinkSQLJob().getJobConfig().setSinkSchemaName(sink.getSchemaName());
                entity.getFlinkSQLJob().getJobConfig().setSinkTableName(sink.getTableName());
            }
        } else {
            throw new AthenaException("没有写入的表信息");
        }

        entity.setSinkMap(sinkMap);
    }
}
