package com.sapphire.stock.analysis.core.repo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.common.dal.dao.FlinkScheduleJobDao;
import com.sapphire.stock.analysis.common.dal.model.FlinkScheduleJobDo;
import com.sapphire.stock.analysis.core.converter.DbConverter;
import com.sapphire.stock.analysis.core.converter.DomainConverter;
import com.sapphire.stock.analysis.core.model.FlinkScheduleJob;

/**
 * Author: 柏云鹏 Date: 2022/4/3.
 */
@Service
public class FlinkScheduleJobRepository {

    @Autowired
    private FlinkScheduleJobDao flinkScheduleJobDao;

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
