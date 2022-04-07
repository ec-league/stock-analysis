import { message } from 'antd'
import { queryJobList } from "@/services/FlinkJob/schedule_job_list";

export default {
  namespace: 'schedule_job_list',

  state: {
    job_list: []
  },

  effects: {
    * fetch({ payload }, { call, put }) {
      const resp = yield call(queryJobList)

      if (!resp || !resp.success) {
        message.error('系统繁忙, 请稍后再试')
      } else {
        yield put({
          type: 'saveJobList',
          payload: resp.data
        })
      }
    },
  },

  reducers: {
    saveJobList(state, action) {
      const s = state
      s.job_list = action.payload

      return {
        ...s
      }
    }
  }
}
