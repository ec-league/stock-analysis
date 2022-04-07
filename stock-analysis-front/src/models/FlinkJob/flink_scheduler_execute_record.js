import { fetchSonFlow, queryExecuteRecord, restartTaskSequenceFlow } from '@/services/FlinkJob/schedule_job_detail'
import { message } from 'antd'

export default {
  namespace: 'flink_scheduler_execute_record',
  state: {
    taskSequenceList: [],
    sonFlow: []
  },

  effects: {
    * queryExecuteRecord({ payload }, { call, put }) {
      const response = yield call(queryExecuteRecord, payload)

      if (!response) {
        message.error('获取执行列表失败')
      } else if (!response.success) {
        message.error(response.resultMsg)
      } else {
        yield put({
          type: 'saveInfo',
          payload: response.data
        })
      }
    },

    * restartTaskSequenceFlow({ payload }, { call, put }) {
      const response = yield call(restartTaskSequenceFlow, payload)
      if (!response) {
        message.error('重新执行失败')
      } else if (!response.success) {
        message.error(response.resultMsg)
      } else {
        location.reload(false)
      }
    },

    * fetchSonFlow({ payload }, { call, put }) {
      const response = yield call(fetchSonFlow, payload)
      if (!response) {
        message.error('获取子任务流失败')
      } else if (!response.success) {
        message.error(response.resultMsg)
      } else {
        yield put({
          type: 'saveSonFlow',
          payload: response.data
        })
      }
    }
  },

  reducers: {
    saveInfo(state, action) {
      const s = state
      s.taskSequenceList = action.payload
      return {
        ...s
      }
    },

    saveSonFlow(state, action) {
      const s = state
      s.sonFlow = action.payload
      s.taskSequenceList.forEach(ts => {
        if (ts.id === s.sonFlow[0].parentId) {
          ts.children = s.sonFlow
        }
      })
      return {
        ...s
      }
    }
  }
}
