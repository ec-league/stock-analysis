package com.sapphire.stock.analysis.core.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.function.Supplier;

import javax.annotation.PostConstruct;

import org.apache.calcite.config.Lex;
import org.apache.calcite.sql.parser.SqlParser;
import org.apache.commons.lang3.StringUtils;
import org.apache.flink.api.common.JobID;
import org.apache.flink.api.common.Plan;
import org.apache.flink.api.common.restartstrategy.RestartStrategies;
import org.apache.flink.api.common.typeinfo.TypeInformation;
import org.apache.flink.api.dag.Pipeline;
import org.apache.flink.api.java.ExecutionEnvironment;
import org.apache.flink.client.FlinkPipelineTranslationUtil;
import org.apache.flink.client.program.ClusterClient;
import org.apache.flink.client.program.rest.RestClusterClient;
import org.apache.flink.configuration.Configuration;
import org.apache.flink.configuration.JobManagerOptions;
import org.apache.flink.configuration.RestOptions;
import org.apache.flink.runtime.jobgraph.JobGraph;
import org.apache.flink.runtime.jobgraph.SavepointRestoreSettings;
import org.apache.flink.sql.parser.impl.FlinkSqlParserImpl;
import org.apache.flink.table.api.*;
import org.apache.flink.table.api.java.BatchTableEnvironment;
import org.apache.flink.table.calcite.CalciteConfig;
import org.apache.flink.table.calcite.CalciteConfigBuilder;
import org.apache.flink.table.sinks.TableSink;
import org.apache.flink.table.sources.CsvTableSource;
import org.apache.flink.table.sources.TableSource;
import org.apache.flink.table.types.AtomicDataType;
import org.apache.flink.table.types.DataType;
import org.apache.flink.table.types.logical.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.sapphire.stock.analysis.core.exception.AthenaException;
import com.sapphire.stock.analysis.core.model.*;
import com.sapphire.stock.analysis.core.repo.FlinkGeneralSourceRepository;

import lombok.extern.slf4j.Slf4j;

/**
 * Author: 柏云鹏 Date: 2022/4/6.
 */
@Slf4j
@Service
public class FlinkService {

    @Autowired
    private FlinkGeneralSourceRepository flinkGeneralSourceRepository;

    private ClusterClient                clusterClient;

    @Value("${flink.host:127.0.0.1:8081}")
    private String                       flinkHost;

    @PostConstruct
    public void init() {
        String[] strings = flinkHost.split(":");

        Configuration configuration = new Configuration();
        String address = strings[0];
        int port = Integer.parseInt(strings[1]);

        configuration.setString(JobManagerOptions.ADDRESS, address);
        configuration.setInteger(JobManagerOptions.PORT, port);
        configuration.setInteger(RestOptions.PORT, port);

        try {
            clusterClient = new RestClusterClient<>(configuration, "RemoteExecutor");
        } catch (Exception e) {
            throw new AthenaException("flink链接建立失败! flinkHost=" + flinkHost);
        }
    }

    public Response<String> submitSync(SubmitFlinkRequest request) {
        log.info("start submit sql request,jobName:{},sql:{}", request.getJobName(),
            request.getSqls().toArray());

        validateRequest(request);

        final ExecutionEnvironment execEnv = ExecutionEnvironment.createLocalEnvironment();
        BatchTableEnvironment env;

        TableConfig tableConfig = new TableConfig();
        SqlParser.ConfigBuilder builder = SqlParser.configBuilder()
            .setParserFactory(FlinkSqlParserImpl.FACTORY).setLex(Lex.MYSQL);

        SqlParser.Config config = builder.build();

        CalciteConfig calciteConfig = new CalciteConfigBuilder().replaceSqlParserConfig(config)
            .build();

        tableConfig.setPlannerConfig(calciteConfig);
        env = BatchTableEnvironment.create(execEnv, tableConfig);

        try {
            setBaseInfo(execEnv, request);
            registerSource(env, request);
            List<String> sqls = request.getSqls();
            for (int i = 0; i < sqls.size(); i++) {
                Table table = registerSql(env, sqls.get(i));
                registerSink(table, request.getSinks().get(i), env);
            }

            Plan plan = execEnv.createProgramPlan(request.getJobName());
            CompletableFuture<Response<String>> submitFlinkResponseCompletableFuture = CompletableFuture
                .supplyAsync(new Supplier<Response<String>>() {
                    @Override
                    public Response<String> get() {
                        try {
                            JobGraph jobGraph = getJobGraph(clusterClient.getFlinkConfiguration(),
                                plan, request.getFlinkConfig().getParallelism());

                            CompletableFuture<JobID> jobIDCompletableFuture = clusterClient
                                .submitJob(jobGraph);

                            JobID jobID = jobIDCompletableFuture.get();

                            Response<String> response = new Response<>();

                            response.setSuccess(true);
                            response.setData(jobID.toString());

                            return response;
                        } catch (Exception e) {
                            log.error("submit sql request fail", e);
                            Response<String> response = new Response<>();
                            response.setSuccess(false);
                            response.setResultMsg(e.getMessage());
                            response.setResultCode("SUBMIT_ERROR");
                            return response;
                        }
                    }
                });
            return submitFlinkResponseCompletableFuture.get();
        } catch (Exception e) {
            log.error("submit sql failed", e);
            Response<String> response = new Response<>();
            response.setResultCode("SUBMIT_ERROR");
            response.setSuccess(false);
            response.setResultMsg(e.getMessage());

            return response;
        }
    }

    private void validateRequest(SubmitFlinkRequest request) {
        if (CollectionUtils.isEmpty(request.getSources())) {
            throw new AthenaException("数据源不能为空");
        }
        if (CollectionUtils.isEmpty(request.getSinks())) {
            throw new AthenaException("输出端不能为空");
        }
        if (CollectionUtils.isEmpty(request.getSqls())) {
            throw new AthenaException("sql不能为空");
        }
        if (request.getSqls().size() != request.getSinks().size()) {
            throw new AthenaException("sql不合法");
        }
    }

    private void setBaseInfo(ExecutionEnvironment execEnv, SubmitFlinkRequest request) {
        execEnv.setParallelism(request.getFlinkConfig().getParallelism());
        if (request.getFlinkConfig().getMaxParallelism() != null) {
            execEnv.setParallelism(request.getFlinkConfig().getMaxParallelism());
        }

        if (StringUtils.isEmpty(request.getFlinkConfig().getRestartStrategies())) {
            return;
        }

        execEnv.setRestartStrategy(RestartStrategies.noRestart());
    }

    private void registerSource(BatchTableEnvironment env, SubmitFlinkRequest request) {
        request.getSources().forEach(flinkGeneralSource -> {
            try {
                CsvTableSource.Builder csvBuilder = CsvTableSource.builder();
                FileSourceConfig sourceConfig = flinkGeneralSource.getSourceConfig();
                List<Field> schema = sourceConfig.getSchema();

                for (Field field : schema) {
                    csvBuilder.field(field.getName(), converterToDataType(field.getType()));
                }

                csvBuilder.path(sourceConfig.getPath());
                csvBuilder.fieldDelimiter(sourceConfig.getFieldDelim());
                TableSource tableSource = csvBuilder.build();
                env.registerTableSource(flinkGeneralSource.getTableName(), tableSource);
                log.info("register table, name:{}.{}, class:{}", flinkGeneralSource.getSchemaName(),
                    flinkGeneralSource.getTableName(), tableSource.getClass());
            } catch (Exception e) {
                log.error("register source exception!", e);
                throw new AthenaException(e.getClass().getSimpleName(), e.getMessage());
            }
        });
    }

    private DataType converterToDataType(String type) {
        switch (type) {
            case "BIGINT":
                return DataTypes.BIGINT();
            case "INT":
                return DataTypes.INT();
            case "DOUBLE":
                return DataTypes.DOUBLE();
            case "NUMBER":
                return DataTypes.DOUBLE();
            default:
                return DataTypes.STRING();
        }
    }

    private String getFieldType(DataType dataType) {
        if (dataType instanceof AtomicDataType) {
            LogicalType logicalType = dataType.getLogicalType();

            if (logicalType instanceof CharType || logicalType instanceof VarCharType) {
                return "STRING";
            } else if (logicalType instanceof IntType) {
                return "INT";
            } else if (logicalType instanceof BigIntType) {
                return "LONG";
            } else if (logicalType instanceof DoubleType) {
                return "DOUBLE";
            } else if (logicalType instanceof DecimalType) {
                return "NUMBER";
            } else {
                return "STRING";
            }
        } else {
            throw new IllegalArgumentException("data type not supported! dataType=" + dataType);
        }
    }

    private Table registerSql(BatchTableEnvironment env, String sql) throws Exception {
        return env.sqlQuery(sql);
    }

    private void registerSink(Table table, FlinkGeneralSource sinkDescriptor,
                              BatchTableEnvironment env) throws Exception {
        TableSchema tableSchema = table.getSchema();
        TableSink tableSink = sinkDescriptor.transform(tableSchema);

        String[] fieldNames = tableSchema.getFieldNames();

        TypeInformation[] fieldTypes = tableSchema.getFieldTypes();

        if (StringUtils.equals(sinkDescriptor.getType(), "FILE")) {
            FileSourceConfig sourceConfig = sinkDescriptor.getSourceConfig();

            List<Field> schema = new ArrayList<>();

            for (TableColumn tableColumn : tableSchema.getTableColumns()) {
                Field field = new Field();
                field.setName(tableColumn.getName().toUpperCase());
                field.setType(getFieldType(tableColumn.getType()));
                schema.add(field);
            }

            sourceConfig.setSchema(schema);

            flinkGeneralSourceRepository.save(sinkDescriptor);
        }

        String tableName = "Tmp" + sinkDescriptor.getTableName();

        env.registerTableSink(tableName, fieldNames, fieldTypes, tableSink);

        table.insertInto(tableName);

        log.info("register sink, name:{}, class:{}", sinkDescriptor.getName(),
            sinkDescriptor.getClass());
    }

    public JobGraph getJobGraph(Configuration flinkConfig, Pipeline pipeline, int parallelism) {

        JobGraph job = FlinkPipelineTranslationUtil.getJobGraph(pipeline, flinkConfig, parallelism);
        job.setSavepointRestoreSettings(SavepointRestoreSettings.none());

        return job;
    }
}
