import request from "@/utils/request";

//执行日志
export async function queryExecuteLogs(id) {
  return request(`/api/flink-job/execute-log.json?sqlId=${id}`);
}

//执行结果
export async function queryExecuteResult(id) {
  return request(`/api/flink-job/execute-result.json?sqlId=${id}`);
}

//sql新增
export async function addScheduleSql(payload) {
  return request(`/api/flink-job/new-schedule-sql-job.json?scheduleId=${payload.id}`, {
    method: 'POST',
    data: {
      ...payload.obj,
    },
  });
}

//flink源搜索
export async function searchFlink(payload) {
  return request(`/api/risk-market/flink/fetchAllTablesByFuzzyName?tableName=${payload}`);
}

//单次执行
export async function executeOnce(payload) {
  return request(`/api/flink-schedule/submit-job-single.json?`, {
    method: 'POST',
    data: {
      ...payload,
    },
  });
}

//停止单次执行
export async function stopSingleTime(id) {
  return request(`/api/flink-job/invalid-singleTime-schedule-job.json?scheduleJobId=${id}`);
}

export async function submit(params) {
  return request(`/api/flink-job/submit.json`, {
    method: 'POST',
    data: {
      ...params
    }
  })
}

/**
 * 查询的是文件与对应schema的全部信息, 访问速度较慢
 * @returns {Promise<any>}
 */
export async function queryFileSourceList() {
  return request(`/api/flink/file-source-list.json`)
}

export async function queryFlinkJobDetail(jobId) {
  return request(`/api/flink/job-detail.json?jobId=${jobId}`)
}

export async function querySqlVersions(sqlId) {
  return request(`/api/flink-sql-version/list.json?sqlId=${sqlId}`);
}

export async function versionRollback(versionId) {
  return request(`/api/flink-sql-version/version-rollback.json?versionId=${versionId}`);
}

export async function executeRecord(params) {
  return request('/api/data/execute-record.json', {
    method: 'POST',
    data: {
      ...params
    }
  })
}

export async function formatSql(sql) {
  return request('/api/data/format-sql.json', {
    method: 'POST',
    data: {
      sqlText: sql
    }
  })
}

export async function querySchemasById(params) {
  return request(`/api/data/query-schemas-by-id.json?id=${params}`)
}

export async function submitSql(params) {
  return request('/api/data/submit-sql.json', {
    method: 'POST',
    data: {
      ...params
    }
  })
}

export async function queryDataLinkList() {
  return request(`/api/database/database-resource-list.json`, {
    method: 'GET'
  })
}


