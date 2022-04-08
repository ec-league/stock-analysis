package com.sapphire.stock.analysis.core.repo;

import java.io.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sapphire.stock.analysis.common.dal.dao.FlinkSQLJobDao;
import com.sapphire.stock.analysis.common.dal.model.FlinkSQLJobDo;
import com.sapphire.stock.analysis.core.converter.DbConverter;
import com.sapphire.stock.analysis.core.converter.DomainConverter;
import com.sapphire.stock.analysis.core.model.FileSourceConfig;
import com.sapphire.stock.analysis.core.model.FlinkSQLJob;
import com.sapphire.stock.analysis.core.model.SqlExecuteResult;

import lombok.extern.slf4j.Slf4j;

/**
 * Author: 柏云鹏 Date: 2022/4/3.
 */
@Slf4j
@Repository
public class FlinkSqlJobRepository {

    @Autowired
    private FlinkSQLJobDao flinkSQLJobDao;

    public boolean save(FlinkSQLJob flinkSQLJob) {
        FlinkSQLJobDo dbEntity = DbConverter.toDbEntity(flinkSQLJob);

        boolean success = false;
        if (dbEntity.getId() > 0) {
            success = flinkSQLJobDao.update(dbEntity) > 0;
        } else {
            success = flinkSQLJobDao.insert(dbEntity) > 0;
            flinkSQLJob.setId(dbEntity.getId());
        }

        return success;
    }

    public List<FlinkSQLJob> selectAll() {
        List<FlinkSQLJobDo> flinkSQLJobDos = flinkSQLJobDao.selectAll();

        List<FlinkSQLJob> result = new ArrayList<>(flinkSQLJobDos.size());

        for (FlinkSQLJobDo flinkSQLJobDo : flinkSQLJobDos) {
            result.add(DomainConverter.toDomain(flinkSQLJobDo));
        }

        return result;
    }

    public FlinkSQLJob selectById(long id) {
        FlinkSQLJobDo flinkSQLJobDo = flinkSQLJobDao.selectById(id);

        return DomainConverter.toDomain(flinkSQLJobDo);
    }

    public SqlExecuteResult executeRecord(FileSourceConfig config) {
        List<File> fileList = new ArrayList<>();
        File sinkFile = new File(config.getPath()); // CSV文件路径
        if (!sinkFile.exists()) {
            log.warn("文件不存在，filePath={}", config.getPath());
            return new SqlExecuteResult();
        }
        if (sinkFile.isFile()) {
            fileList.add(sinkFile);
        } else {
            for (File fileItem : sinkFile.listFiles()) {
                if (fileItem.isFile()) {
                    fileList.add(fileItem);
                }
            }
        }
        BufferedReader br = null;
        try {
            int lineNum = 1;
            SqlExecuteResult sqlExecuteResult = new SqlExecuteResult();
            List<Map<String, String>> data = new ArrayList<>(500);
            for (File file : fileList) {
                br = new BufferedReader(new FileReader(file));
                String[] header = config.queryFieldNames();
                sqlExecuteResult.setHeader(header);
                String line = br.readLine();
                while (line != null) // 读取到的内容给line变量
                {
                    if (lineNum > 500) {
                        sqlExecuteResult.setResultData(data);
                        return sqlExecuteResult;
                    }
                    String[] lineData = line.split(config.getFieldDelim());
                    Map<String, String> map = new HashMap<String, String>();
                    for (int i = 0; i < lineData.length; i++) {
                        map.put(header[i], lineData[i]);
                    }
                    data.add(map);
                    lineNum++;
                    line = br.readLine();

                }
            }
            sqlExecuteResult.setResultData(data);
            return sqlExecuteResult;
        } catch (FileNotFoundException e) {
            log.error("文件不存在，filePath={}", config.getPath());
            return new SqlExecuteResult();
        } catch (IOException e) {
            log.error("读取文件错误，filePath={}", config.getPath());
            return new SqlExecuteResult();
        }

    }

    public FlinkSQLJob selectByName(String name) {
        FlinkSQLJobDo flinkSQLJobDo = flinkSQLJobDao.selectByName(name);

        return DomainConverter.toDomain(flinkSQLJobDo);
    }

    public boolean deleteByPrimaryKey(Long id) {
        return flinkSQLJobDao.deleteByPrimaryKey(id) > 0;
    }
}