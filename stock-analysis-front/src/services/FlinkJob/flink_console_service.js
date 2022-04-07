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
