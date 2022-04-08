import { message } from 'antd'
import { queryFileSourceList, submit } from "@/services/FlinkJob/flink_console_service";

export default {
  namespace: 'data_sync',

  state: {
    data: [],
    jobId: -1
  },

  effects: {
    * fetch({ payload }, { call, put }) {
      const response = yield call(queryFileSourceList, payload)
      if (!response || !response.success) {
        return
      }

      yield put({
        type: 'queryList',
        payload: Array.isArray(response.data) ? response.data : []
      })
    },

    * submitSql({ payload }, { call, put }) {
      let response = yield call(submit, payload);
      if (!response) {
        message.error('执行失败, 请稍后再试!')
      } else if (!response.success) {
        message.error(response.resultMsg)
        return response
      } else {
        message.success('执行成功，编号:' + response.data)
        yield put({
          type: 'updateJobId',
          payload: response.data
        })
        return response
      }
    }
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        data: action.payload
      }
    },
    updateJobId(state, action) {
      return {
        ...state,
        jobId: action.payload
      }
    }
  }
}
