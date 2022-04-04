package com.sapphire.stock.analysis.core.repo;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import com.sapphire.stock.analysis.core.converter.DbConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.sapphire.stock.analysis.common.dal.dao.FlinkScheduleJobDao;
import com.sapphire.stock.analysis.common.dal.model.FlinkScheduleJobDo;
import com.sapphire.stock.analysis.core.converter.DomainConverter;
import com.sapphire.stock.analysis.core.model.FlinkScheduleJob;
import com.sapphire.stock.analysis.core.model.FlinkScheduleJobConfig;
import com.sapphire.stock.analysis.core.model.FlinkSqlOrder;

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

        FlinkScheduleJob flinkScheduleJob = DomainConverter.toDomain(flinkScheduleJobDo);

        if (flinkScheduleJob == null) {
            return null;
        }

        FlinkScheduleJobConfig extInfo = flinkScheduleJob.getExtInfo();
        if (extInfo != null) {
            List<FlinkSqlOrder> flinkSqlOrderList = extInfo.getFlinkSqlOrderList();
            if (!CollectionUtils.isEmpty(flinkSqlOrderList)) {
                flinkSqlOrderList.sort(new Comparator<FlinkSqlOrder>() {
                    @Override
                    public int compare(FlinkSqlOrder o1, FlinkSqlOrder o2) {
                        return -Integer.compare(o1.getPriority(), o2.getPriority());
                    }
                });
            }
        }
        return flinkScheduleJob;
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
