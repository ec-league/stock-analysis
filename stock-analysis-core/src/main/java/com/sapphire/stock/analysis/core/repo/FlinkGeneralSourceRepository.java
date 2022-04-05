package com.sapphire.stock.analysis.core.repo;

import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.common.dal.dao.FlinkGeneralSourceDao;
import com.sapphire.stock.analysis.common.dal.model.FlinkGeneralSourceDo;
import com.sapphire.stock.analysis.core.converter.DbConverter;
import com.sapphire.stock.analysis.core.converter.DomainConverter;
import com.sapphire.stock.analysis.core.model.FlinkGeneralSource;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Service
public class FlinkGeneralSourceRepository {

    @Autowired
    private FlinkGeneralSourceDao flinkGeneralSourceDao;

    public FlinkGeneralSource findBySchemaAndTableName(String schemaName, String tableName) {
        if (StringUtils.isEmpty(schemaName)) {
            List<FlinkGeneralSourceDo> byName = flinkGeneralSourceDao.findByName(tableName);

            if (byName.size() == 0) {
                // scan table
                return null;
            }

            if (byName.size() == 1) {
                FlinkGeneralSourceDo flinkGeneralSourceDo = byName.get(0);

                return DomainConverter.toDomain(flinkGeneralSourceDo);
            }
        }
        return null;
    }

    public void save(FlinkGeneralSource flinkGeneralSource) {
        FlinkGeneralSourceDo dbEntity = DbConverter.toDbEntity(flinkGeneralSource);

        if (dbEntity.getId() > 0) {
            flinkGeneralSourceDao.updateById(dbEntity);
            return;
        }

        FlinkGeneralSourceDo bySchemaAndTableName = flinkGeneralSourceDao
            .findBySchemaAndTableName(dbEntity.getSchemaName(), dbEntity.getTableName());

        if (bySchemaAndTableName != null) {
            dbEntity.setId(bySchemaAndTableName.getId());
            flinkGeneralSourceDao.updateById(dbEntity);
        } else {
            flinkGeneralSourceDao.insert(dbEntity);
        }
    }
}
