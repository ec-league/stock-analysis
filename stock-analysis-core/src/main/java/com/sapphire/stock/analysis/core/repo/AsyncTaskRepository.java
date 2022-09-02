package com.sapphire.stock.analysis.core.repo;

import com.sapphire.stock.analysis.common.dal.dao.AsyncTaskDao;
import com.sapphire.stock.analysis.common.dal.model.AsyncTaskDo;
import com.sapphire.stock.analysis.core.converter.DbConverter;
import com.sapphire.stock.analysis.core.converter.DomainConverter;
import com.sapphire.stock.analysis.core.model.AsyncTask;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


/**
 * Author: 柏云鹏
 * Date: 2021/11/2.
 */
@Repository
public class AsyncTaskRepository {

    @Autowired
    private AsyncTaskDao asyncTaskDao;

    public void save(AsyncTask asyncTask) {
        AsyncTaskDo dbEntity = DbConverter.toDbEntity(asyncTask);

        if (asyncTask.getId() > 0L) {
            asyncTaskDao.updateByPrimaryKey(dbEntity);
        } else {
            asyncTaskDao.insert(dbEntity);
            asyncTask.setId(dbEntity.getId());
        }
    }

    public AsyncTask selectById(long id) {
        AsyncTaskDo asyncTaskDo = asyncTaskDao.selectByPrimaryKey(id);

        return DomainConverter.toDomain(asyncTaskDo);
    }

    public void resetToRetry() {
        asyncTaskDao.resetToRetry();
    }
}
