import {
  addFlinkSqlJobList,
  invalidScheduleJob,
  queryFlinkScheduleJob,
  queryFlinkSqlJobList,
  queryScheduleSinks,
  queryTaskSeqList,
  removeFlinkSqlJobList,
  submitScheduleJob,
  updateBatchPriority,
  updateScheduleJobDetail
} from '@/services/FlinkJob/schedule_job_detail'
import { message } from 'antd'

export default {
  namespace: 'schedule_job_detail',

  state: {
    current_job: {},
    flink_sql_job_list: [],
    job_child_list: [],
    editable: false,
    singTimeTaskId: 0,
    scheduleSinks: []
  },

  effects: {
    * fetch ({payload}, {call, put}) {
      const resp = yield call(queryFlinkScheduleJob, payload)

      if (!resp || !resp.success) {
        message.error('系统异常, 请稍后再试')
      } else {
        yield put({
          type: 'saveCurrentJob',
          payload: resp.data
        })
      }

      const listResp = yield call(queryFlinkSqlJobList)

      if (!listResp || !listResp.success) {
        message.error('系统异常, 请稍后再试')
      } else {
        yield put({
          type: 'saveJobList',
          payload: listResp.data
        })
      }

      const jobListResp = yield call(queryTaskSeqList, payload)

      if (!jobListResp || !jobListResp.success) {
        message.error('系统异常, 请稍后再试')
      } else {
        yield put({
          type: 'saveCurrentJobList',
          payload: jobListResp.data
        })
      }
    },

    * submitScheduleJob ({payload}, {call, put}) {
      const resp = yield call(submitScheduleJob, payload)
      if (!resp || !resp.success) {
        message.error('系统异常, 请稍后再试')
      } else {
        message.success('提交成功，已生效')
      }
    },

    * subTaskSqlJobDelete ({payload}, {call, put}) {
      const resp = yield call(removeFlinkSqlJobList, payload)
      if (!resp || !resp.success) {
        message.error('系统异常, 请稍后再试')
      } else {
        const listResp = yield call(queryFlinkSqlJobList)
        if (!listResp || !listResp.success) {
          message.error('系统异常, 请稍后再试')
        } else {
          yield put({
            type: 'saveJobList',
            payload: listResp.data
          })
          // location.reload(false)
        }
      }
    },

    * subTaskSqlJobAdd ({payload}, {call, put}) {
      const resp = yield call(addFlinkSqlJobList, payload)
      if (!resp || !resp.success) {
        message.error('系统异常, 请稍后再试')
      } else {
        const listResp = yield call(queryFlinkSqlJobList)
        if (!listResp || !listResp.success) {
          message.error('系统异常, 请稍后再试')
        } else {
          yield put({
            type: 'saveJobList',
            payload: listResp.data
          })
          message.success('添加成功')
          // location.reload(false)
        }
      }
    },

    * saveScheduleJob ({payload}, {call, put}) {
      yield put({
        type: 'saveCurrentJob',
        payload: payload
      })
    },

    * updateScheduleJob ({payload}, {call, put}) {
      const response = yield call(updateScheduleJobDetail, payload)

      if (!response || !response.success) {
        message.error('系统异常, 请稍后再试')
      } else {
      }
      return response
    },
    * updatePriority ({payload}, {call, put}) {
      const response = yield call(updateBatchPriority, payload)
      if (!response || !response.success) {
        message.error('系统异常, 请稍后再试')
      } else {
        const jobListResp = yield call(queryTaskSeqList, payload.id)
        if (!jobListResp || !jobListResp.success) {
          message.error('系统异常, 请稍后再试')
        } else {
          yield put({
            type: 'saveCurrentJobList',
            payload: jobListResp.data
          })
          // location.reload(false)
        }
      }
    },
    * invalidScheduleJob ({payload}, {call, put}) {
      const resp = yield call(invalidScheduleJob, payload)
      if (!resp || !resp.success) {
        message.error('系统异常, 请稍后再试')
      } else {
        message.success('停止成功')
      }
    },

    * setEditable ({payload}, {call, put}) {
      yield put({
        type: 'setEditableValue',
        payload: payload
      })
    },

    * queryScheduleSinks ({payload}, {call, put}) {
      const resp = yield call(queryScheduleSinks, payload)

      if (!resp) {
        message.error('系统异常, 请稍后再试')
      } else if (!resp.success) {
        message.error(resp.resultMsg)
      } else {
        yield put({
          type: 'saveScheduleSinks',
          payload: resp.data
        })
      }
      return resp
    }
  },

  reducers: {
    saveCurrentJob (state, action) {
      const s = state
      s.current_job = action.payload
      s.singTimeTaskId = action.payload.extInfo.singTimeTaskId
      return {...state}
    },

    saveJobList (state, action) {
      const s = state
      s.flink_sql_job_list = action.payload
      return {...state}
    },

    saveCurrentJobList (state, action) {
      const s = state
      s.job_child_list = action.payload

      return {...state}
    },

    setEditableValue (state, action) {
      const s = state
      s.editable = action.payload
      return {...state}
    },

    saveScheduleSinks (state, action) {
      const s = state
      s.scheduleSinks = action.payload
      return {...state}
    },

  }
}
