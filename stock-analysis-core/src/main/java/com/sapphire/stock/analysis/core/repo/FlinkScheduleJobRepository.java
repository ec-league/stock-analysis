package com.sapphire.stock.analysis.core.repo;

import java.util.*;

import com.sapphire.stock.analysis.common.dal.dao.FlinkSQLJobDao;
import com.sapphire.stock.analysis.common.dal.model.FlinkSQLJobDo;
import com.sapphire.stock.analysis.common.util.JsonUtils;
import com.sapphire.stock.analysis.core.model.FlinkScheduleJobConfig;
import com.sapphire.stock.analysis.core.model.FlinkSqlOrder;
import com.sapphire.stock.analysis.core.model.JobConfig;
import org.apache.calcite.sql.SqlInsert;
import org.apache.calcite.sql.SqlKind;
import org.apache.calcite.sql.SqlNode;
import org.apache.calcite.sql.parser.SqlParseException;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.common.dal.dao.FlinkScheduleJobDao;
import com.sapphire.stock.analysis.common.dal.model.FlinkScheduleJobDo;
import com.sapphire.stock.analysis.core.converter.DbConverter;
import com.sapphire.stock.analysis.core.converter.DomainConverter;
import com.sapphire.stock.analysis.core.model.FlinkScheduleJob;
import org.springframework.util.CollectionUtils;

import static com.sapphire.stock.analysis.core.model.FlinkSQLJob.FLINK_SQL_JOB_TYPE_ATOMIC;

/**
 * Author: 柏云鹏 Date: 2022/4/3.
 */
@Service
public class FlinkScheduleJobRepository {

    @Autowired
    private FlinkScheduleJobDao flinkScheduleJobDao;

    @Autowired
    private FlinkSQLJobDao flinkSQLJobDao;

    public List<FlinkScheduleJob> selectAll() {
        List<FlinkScheduleJobDo> flinkScheduleJobDos = flinkScheduleJobDao.selectAll();

        List<FlinkScheduleJob> result = new ArrayList<>();
        for (FlinkScheduleJobDo flinkScheduleJobDo : flinkScheduleJobDos) {
            FlinkScheduleJob flinkScheduleJob = DomainConverter.toDomain(flinkScheduleJobDo);
            if (flinkScheduleJob == null)
                continue;
            result.add(flinkScheduleJob);
        }

        return result;
    }

    public FlinkScheduleJob selectById(long id) {
        FlinkScheduleJobDo flinkScheduleJobDo = flinkScheduleJobDao.selectById(id);

        if (flinkScheduleJobDo == null) {
            return null;
        }

        return DomainConverter.toDomain(flinkScheduleJobDo);
    }

    public boolean save(FlinkScheduleJob job) {
        FlinkScheduleJobDo flinkScheduleJobDo = DbConverter.toDbEntity(job);
        if (flinkScheduleJobDo.getId() > 0) {
            return flinkScheduleJobDao.update(flinkScheduleJobDo) > 0;
        } else {
            boolean success = flinkScheduleJobDao.insert(flinkScheduleJobDo) > 0;
            if (success) {
                job.setId(flinkScheduleJobDo.getId());
            }
            return success;
        }
    }

    public boolean updateStatusSuccess(FlinkScheduleJob job) {
        return flinkScheduleJobDao.updateStatusEnable(job.getId()) > 0;
    }

}
