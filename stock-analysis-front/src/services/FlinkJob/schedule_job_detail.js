import request from '@/utils/request'

export async function queryFlinkScheduleJob(param) {
  return request(`/api/flink-job/schedule-job-detail.json?scheduleJobId=${param}`)
}

export async function queryFlinkSqlJobList() {
  return request('/api/flink/job-list.json')
}

export async function queryTaskSeqList(param) {
  return request(`/api/flink/job-list-by-parent.json?jobId=${param}`)
}

export async function queryJobList() {
  return request(`/api/flink-schedule/job-list.json`)
}

export async function deleteScheduleJobById(jobId) {
  return request(`/api/flink-job/delete-schedule-job.json?scheduleJobId=${jobId}`, {
    method: 'POST'
  })
}

export async function exportScheduleJob(jobId) {
  return request(`/api/flink-job/schedule-job-export.json?scheduleJobId=${jobId}`)
}

export async function saveScheduleJobDetail(job) {
  return request(`/api/flink-schedule/new-schedule-job.json`, {
    method: 'POST',
    data: {
      ...job
    }
  })
}

export async function updateScheduleJobDetail(params) {
  return request(`/api/flink-job/update-schedule-sql-job.json`, {
    method: 'POST',
    data: {
      ...params
    }
  })
}

export async function updateBatchPriority(params) {
  return request(`/api/flink-schedule/update-batch-job-priorty.json?id=${params.id}`, {
    method: 'POST',
    data: {
      ...params.job_child_list
    }
  })
}

export async function removeFlinkSqlJobList(params) {
  return request(`/api/flink-schedule/remove-sql-job.json`, {
    method: 'POST',
    data: {
      ...params
    }
  })
}

export async function addFlinkSqlJobList(params) {
  return request(`/api/flink-schedule/add-sql-jobs.json`, {
    method: 'POST',
    data: {
      ...params
    }
  })
}

export async function submitScheduleJob(params) {
  return request(`/api/flink-schedule/submit-schedule-job.json`, {
    method: 'POST',
    data: {
      ...params
    }
  })
}

export async function queryExecuteRecord(jobId) {
  return request(`/api/flink-schedule/execute-record.json?jobId=${jobId}`)
}

export async function invalidScheduleJob(params) {
  return request(`/api/flink-job/invalid-schedule-sql-job.json`, {
    method: 'POST',
    data: {
      ...params
    }
  })
}

export async function restartTaskSequenceFlow(params) {
  return request('/api/flink-schedule/restart-task-sequence-flow.json', {
    method: 'POST',
    data: {
      ...params
    }
  })
}

export async function fetchSonFlow(parentId) {
  return request(`/api/flink-schedule/get-son-flow.json?parentId=${parentId}`)
}

//执行结果
export async function queryExecuteResult(id) {
  return request(`/api/flink-job/execute-result.json?sqlId=${id}`)
}

//执行日志
export async function queryExecuteLogs(id) {
  return request(`/api/flink-job/execute-log.json?sqlId=${id}`)
}

export async function queryScheduleSinks(id) {
  return request(`/api/flink-schedule/schedule-sinks?scheduleId=${id}`)
}
