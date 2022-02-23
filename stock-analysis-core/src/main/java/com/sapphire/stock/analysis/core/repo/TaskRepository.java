package com.sapphire.stock.analysis.core.repo;

import com.sapphire.stock.analysis.core.model.Task;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
@Repository
public class TaskRepository {



    public Task selectTaskById(long taskId) {
        return null;
    }

    public boolean updateProcessing(Task task) {
        return false;
    }

    public List<Long> selectFireTasks(String taskType, long singleNum) {
        return null;

    }

    public void updateTask(Task task) {

    }

    public void reStartProcessingTask() {
    }
}
