package com.sapphire.stock.analysis.core.repo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.common.dal.dao.FlinkSQLVersionDao;
import com.sapphire.stock.analysis.common.dal.model.FlinkSQLVersionDo;
import com.sapphire.stock.analysis.core.converter.DbConverter;
import com.sapphire.stock.analysis.core.converter.DomainConverter;
import com.sapphire.stock.analysis.core.model.FlinkSQLJob;
import com.sapphire.stock.analysis.core.model.FlinkSQLVersion;

/**
 * Author: 柏云鹏 Date: 2022/4/8.
 */
@Service
public class FlinkSqlVersionRepository {

    @Autowired
    private FlinkSQLVersionDao flinkSQLVersionDao;

    public boolean save(FlinkSQLJob flinkSQLJob) {
        FlinkSQLVersionDo dbEntity = DbConverter.toVersionEntity(flinkSQLJob);
        return flinkSQLVersionDao.insert(dbEntity) > 0;
    }

    public List<FlinkSQLVersion> selectSqlVersions(long sqlId) {
        List<FlinkSQLVersionDo> flinkSQLVersionDos = flinkSQLVersionDao.selectSqlVersions(sqlId);

        List<FlinkSQLVersion> result = new ArrayList<>(flinkSQLVersionDos.size());

        for (FlinkSQLVersionDo flinkSQLVersionDo : flinkSQLVersionDos) {
            result.add(DomainConverter.toDomain(flinkSQLVersionDo));
        }

        return result;
    }

    public FlinkSQLVersion selectById(long id) {
        FlinkSQLVersionDo flinkSQLVersionDo = flinkSQLVersionDao.selectById(id);
        return DomainConverter.toDomain(flinkSQLVersionDo);
    }

}
