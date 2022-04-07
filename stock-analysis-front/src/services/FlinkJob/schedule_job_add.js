import request from '@/utils/request'

export async function saveScheduleJobDetail (job) {
  return request(`/api/flink-schedule/new-schedule-job.json`, {
    method: 'POST',
    data: {
      ...job
    }
  })
}
