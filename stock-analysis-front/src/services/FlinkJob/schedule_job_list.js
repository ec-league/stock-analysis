import request from '@/utils/request'

export async function queryJobList() {
  return request(`/api/flink-schedule/job-list.json`)
}
