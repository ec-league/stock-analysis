import { message } from 'antd'
import router from 'umi/router'
import { saveScheduleJobDetail } from "@/services/FlinkJob/schedule_job_add";

export default {
  namespace: 'schedule_job_add',

  state: {},

  effects: {
    * addScheduleJob({ payload }, { call, put }) {
      const resp = yield call(saveScheduleJobDetail, payload)
      if (!resp || !resp.success) {
        message.error('系统繁忙, 请稍后再试')
        return
      }

      router.push(`/stock-analysis/schedule-job-list`)
    }
  },

  reducers: {}
}
