package com.sapphire.stock.analysis.biz.action.sub.flink;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.nio.charset.StandardCharsets;
import java.sql.*;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.sapphire.stock.analysis.biz.action.Action;
import com.sapphire.stock.analysis.biz.entity.SubTaskEntity;
import com.sapphire.stock.analysis.common.util.exception.ErrorCode;
import com.sapphire.stock.analysis.core.exception.AthenaException;
import com.sapphire.stock.analysis.core.model.FileSourceConfig;
import com.sapphire.stock.analysis.core.model.MysqlSourceConfig;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;

import lombok.extern.slf4j.Slf4j;

/**
 * Author: 柏云鹏 Date: 2022/4/9.
 */
@Slf4j
@Action("mysqlWriteFileAction")
public class MysqlWriteFileAction implements BusinessAction {
    private static Logger logger = LoggerFactory.getLogger(MysqlWriteFileAction.class);

    @Override
    public void process(ProcessContext processContext) {

        SubTaskEntity entity = processContext.getEntity();
        MysqlSourceConfig mysqlSourceConfig = entity.getSource().getMysqlSourceConfig();

        String sqlTemp = entity.getReplacedSql().toUpperCase();
        int selectPos = sqlTemp.indexOf("SELECT");
        String sql = entity.getReplacedSql().substring(selectPos);
        long start = System.currentTimeMillis();

        ResultSet rs = null;

        try (Connection connection = DriverManager
            .getConnection(mysqlSourceConfig.getUrl() + "/" + entity.getSource().getSchemaName()
                           + "?useCursorFetch=true&rewriteBatchedStatements=true&useUnicode=true&characterEncoding=utf8&useTimezone=true&serverTimezone=GMT%2B8&autoReconnect=true&failOverReadOnly=false",
                mysqlSourceConfig.getUsername(), mysqlSourceConfig.getPassword())) {

            try (PreparedStatement preparedStatement = connection.prepareStatement(sql,
                ResultSet.TYPE_FORWARD_ONLY, ResultSet.CONCUR_READ_ONLY)) {

                preparedStatement.setFetchSize(Integer.MIN_VALUE);

                preparedStatement.setFetchDirection(ResultSet.FETCH_REVERSE);

                rs = preparedStatement.executeQuery();

                int cols = rs.getMetaData().getColumnCount();

                logger.info("查询: end-结束查询 sql语句：{},columnCount={}", sql, cols);

                int interval = 0;
                FileSourceConfig fileSourceConfig = entity.getSink().getSourceConfig();

                //清除文件内容
                File file = new File(fileSourceConfig.getPath());
                if (!file.exists()) {
                    if (!file.getParentFile().exists()) {
                        file.getParentFile().mkdirs();
                    }
                } else {
                    file.deleteOnExit();
                }
                file.createNewFile();

                try (OutputStreamWriter outputStreamWriter = new OutputStreamWriter(
                    new FileOutputStream(fileSourceConfig.getPath(), true),
                    StandardCharsets.UTF_8)) {
                    while (rs.next()) {

                        for (int i = 0; i < cols; i++) {
                            String columnValue = rs.getString(i + 1);

                            if (!StringUtils.isEmpty(columnValue)) {
                                outputStreamWriter.append(columnValue.replaceAll("\n", "  "));
                            }
                            if (i < cols - 1)
                                outputStreamWriter.append(fileSourceConfig.getFieldDelim());
                        }

                        outputStreamWriter.append(fileSourceConfig.getLineDelim());

                        interval += 1;
                        if (interval == 1000) {
                            logger.info("分批-写入csv动作-每批写入{} 条数据", interval);
                            outputStreamWriter.flush();
                            interval = 0;
                        }
                    }
                    outputStreamWriter.flush();

                    logger.info("处理mysql table={} 表数据导文件成功 ,表最后一批剩余{}条", entity.getSink().getName(),
                        interval);
                    logger.info("处理mysql table={} 表数据导文件成功, cost={}ms", entity.getSink().getName(),
                        System.currentTimeMillis() - start);
                }
            }
        } catch (SQLException e) {
            log.error("处理Mysql表写文件失败，SQLException!", e);
            throw new AthenaException(ErrorCode.SYSTEM_ERROR, e.getMessage());
        } catch (Exception e) {
            log.error("处理Mysql表写文件失败!", e);
            throw new AthenaException(ErrorCode.SYSTEM_ERROR, e.getMessage());
        }
    }
}
