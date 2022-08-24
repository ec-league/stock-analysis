import request from '@/utils/request'

export async function queryFlinkJobList() {
  return request(`/api/flink/job-list.json`)
}

export async function queryFlinkJobDetail(jobId) {
  return request(`/api/flink/job-detail.json?jobId=${jobId}`)
}

export async function newFlinkSqlJob(params) {
  return request(`/api/flink-job/new-sql-job.json`, {
    method: 'POST',
    data: {
      ...params
    }
  })
}

export async function updateFlinkSqlJob(params) {
  return request(`/api/flink-job/update-schedule-sql-job.json`, {
    method: 'POST',
    data: {
      ...params
    }
  })
}

export async function rerunJob(jobId) {
  return request(`/api/flink-job/submit-by-id.json?jobId=${jobId}`)
}

export async function querySqlVersions(sqlId) {
  return request(`/api/flink-sql-version/list.json?sqlId=${sqlId}`);
}

export async function versionRollback(versionId) {
  return request(`/api/flink-sql-version/version-rollback.json?versionId=${versionId}`);
}
