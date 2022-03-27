import { submitSql } from "@/services/adjustment"

import { message } from 'antd';

export default {
  namespace: 'adjustment_sql',

  state: {
    dataSourceList: [],
    selectDataSourceId: -1,
    sqlJob: undefined,

    sqlText: '',
    jobList: [],

    jobRecord: '',
    executeRecord: '',
    dbTree: [],
    needStop: [],
    bizType: ''
  },

  effects: {
    * setSql({ payload }, { call, put }) {
      yield put({
        type: 'saveSql',
        payload: payload,
      });
    },

    * setNeedStop({ payload }, { call, put }) {
      yield put({
        type: 'saveNeedStop',
        payload: payload,
      });
    },

    * setAdjustType({ payload }, { call, put }) {
      yield put({
        type: 'saveAdjustType',
        payload: payload,
      });
    },

    * submitSql({ payload }, { call, put }) {
      const response = yield call(submitSql, payload);

      if (!response) {
        message.error("查询服务器失败, 请稍后再试!");
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'saveSubmitSqlResult',
          payload: response.data,
        });
      }
    },
  },

  reducers: {

    saveSql(state, action) {
      const s = state;

      s.sqlText = action.payload;

      return {
        ...state,
      }
    },

    saveNeedStop(state, action) {
      const s = state;

      s.needStop = action.payload;

      return {
        ...state,
      }
    },

    saveAdjustType(state, action) {
      const s = state;

      s.bizType = action.payload;

      return {
        ...state,
      }
    },

    saveSubmitSqlResult(state, action) {
      const s = state;
      s.jobRecord = action.payload;

      return {
        ...state
      };
    },

  }
}
