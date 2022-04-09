package com.sapphire.stock.analysis.web.page;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sapphire.stock.analysis.core.model.Field;
import com.sapphire.stock.analysis.core.model.FlinkGeneralSource;
import com.sapphire.stock.analysis.core.model.MysqlSourceConfig;
import com.sapphire.stock.analysis.core.model.Response;
import com.sapphire.stock.analysis.core.repo.FlinkGeneralSourceRepository;

/**
 * Author: 柏云鹏 Date: 2022/4/9.
 */
@RestController
public class SyncController {

    @Autowired
    private FlinkGeneralSourceRepository flinkGeneralSourceRepository;

    @GetMapping("/api/db-datasource-sync.json")
    public Response sync() throws Exception {
        MysqlSourceConfig mysqlSourceConfig = new MysqlSourceConfig();

        try (Connection connect = DriverManager.getConnection(mysqlSourceConfig.getUrl(),
            mysqlSourceConfig.getUsername(), mysqlSourceConfig.getPassword())) {
            DatabaseMetaData metaData = connect.getMetaData();
            handleMysql(metaData);
        }

        return Response.successResponse(null);
    }

    private void handleMysql(DatabaseMetaData metaData) throws SQLException {
        ResultSet catalogs = metaData.getCatalogs();
        while (catalogs.next()) {
            String schemaName = catalogs.getString(1);

            ResultSet tableRs = metaData.getTables(schemaName, "root", null,
                new String[] { "TABLE" });

            while (tableRs.next()) {
                String tableName = tableRs.getString(3);

                FlinkGeneralSource flinkGeneralSource = new FlinkGeneralSource();
                flinkGeneralSource.setSchemaName(schemaName.toUpperCase(Locale.ROOT));
                flinkGeneralSource.setTableName(tableName.toUpperCase(Locale.ROOT));
                flinkGeneralSource.setType("MYSQL");
                flinkGeneralSource.setMysqlSourceConfig(new MysqlSourceConfig());

                ResultSet columnRs = metaData.getColumns(schemaName, "root", tableName, null);

                List<Field> schema = new ArrayList<>();
                while (columnRs.next()) {
                    Field field = new Field();
                    field.setName(columnRs.getString(4));
                    field.setType(getType(columnRs.getString(6)));
                    schema.add(field);
                }

                flinkGeneralSource.getMysqlSourceConfig().setSchema(schema);

                flinkGeneralSourceRepository.save(flinkGeneralSource);
            }
        }
    }

    private String getType(String dbType) {
        switch (dbType) {
            case "BIGINT":
            case "LONG":
                return "BIGINT";
            case "INT":
            case "TINYINT":
            case "SMALLINT":
                return "INT";
            case "DOUBLE":
            case "FLOAT":
                return "DOUBLE";
            case "DECIMAL":
                return "NUMBER";
            default:
                return "STRING";
        }
    }
}
