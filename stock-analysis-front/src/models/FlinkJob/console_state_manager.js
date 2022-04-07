import { message } from 'antd';
import {
  addScheduleSql,
  executeOnce,
  queryExecuteLogs,
  queryExecuteResult,
  searchFlink,
  stopSingleTime
} from "@/services/FlinkJob/flink_console_service"

export default {
  namespace: 'console_state_manager',

  state: {
    rowInfo: null,
    logs: [],
    executeRecord: {
      header: [],
      resultData: null
    },
    searchSource: null
  },

  effects: {
    * rowInfo({ payload }, { put }) {
      yield put({
        type: 'queryList',
        payload: payload
      })
    },
    * createLogs({ payload }, { call, put, select }) {
      const data = yield select(state => state.console_state_manager.logs)
      const resp = yield call(queryExecuteLogs, payload)
      if (!resp) {
        message.error("系统异常, 请稍后再试!");
      } else if (!resp.success) {
        message.error(resp.resultMsg);
      } else {
        data.unshift(resp.data)
        yield put({
          type: 'queryLogs',
          payload: data
        })
        return resp.data
      }
    },
    * resetLogs({}, { put }) {
      yield put({
        type: 'queryLogs',
        payload: []
      })
      return null
    },
    * fetchExecuteResult({ payload }, { call, put }) {
      const resp = yield call(queryExecuteResult, payload)
      if (!resp) {
        message.error("系统异常, 请稍后再试!");
      } else if (!resp.success) {
        message.error(resp.resultMsg);
      } else {
        yield put({
          type: 'queryResult',
          payload: resp.data
        })
      }
    },
    * searchFlinkSource({ payload }, { call, put }) {
      const resp = yield call(searchFlink, payload)
      if (!resp) {
        message.error("系统异常, 请稍后再试!");
      } else if (!resp.success) {
        message.error(resp.resultMsg);
      } else {
        yield put({
          type: 'querySearchSource',
          payload: resp.data
        })
        return resp.data
      }
    },
    * addScheduleSqlJob({ payload }, { call }) {
      const resp = yield call(addScheduleSql, payload)
      if (!resp) {
        message.error("系统异常, 请稍后再试!");
      } else if (!resp.success) {
        message.error(resp.resultMsg);
      } else {
        message.success(resp.resultMsg);
        return resp.data
      }
    },
    * flinkExecuteOnce({ payload }, { call }) {
      const resp = yield call(executeOnce, payload)
      if (!resp) {
        message.error("系统异常, 请稍后再试!");
      } else if (!resp.success) {
        message.error(resp.resultMsg);
      } else {
        message.success("单次调度成功");
      }
      return resp.data
    },

    * stopSingleTime({ payload }, { call }) {
      const resp = yield call(stopSingleTime, payload)
      if (!resp) {
        message.error("系统异常, 请稍后再试!");
      } else if (!resp.success) {
        message.error(resp.resultMsg);
      } else {
        message.success("停止单次调度成功");
      }
      return resp.data
    },
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        rowInfo: action.payload
      }
    },
    queryLogs(state, action) {
      return {
        ...state,
        logs: action.payload
      }
    },
    queryResult(state, action) {
      return {
        ...state,
        executeRecord: action.payload
      }
    },
    querySearchSource(state, action) {
      return {
        ...state,
        searchSource: action.payload
      }
    },
  }
}
