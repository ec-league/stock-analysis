package com.sapphire.stock.analysis.core.repo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sapphire.stock.analysis.common.dal.dao.TaskDao;
import com.sapphire.stock.analysis.common.dal.model.TaskDo;
import com.sapphire.stock.analysis.core.converter.DbConverter;
import com.sapphire.stock.analysis.core.converter.DomainConverter;
import com.sapphire.stock.analysis.core.model.Task;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
@Repository
public class TaskRepository {

    @Autowired
    private TaskDao taskDao;

    public Task selectTaskById(long taskId) {
        TaskDo taskDo = taskDao.selectById(taskId);

        return DomainConverter.toDomain(taskDo);
    }

    public List<Long> selectFireTasks(String taskType, int limit) {
        return taskDao.selectFireTasks(taskType, limit);
    }

    public boolean save(Task task) {
        TaskDo taskDo = DbConverter.toDbEntity(task);
        if (task.getId() > 0) {
            return taskDao.updateById(taskDo) > 0;
        } else {
            return taskDao.insert(taskDo) > 0;
        }
    }

    public void reStartProcessingTask() {
        taskDao.reStartProcessingTask();
    }
}
