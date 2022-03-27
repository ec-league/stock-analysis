import { executeRecord, formatSql, querySchemasById, submitSql } from "@/services/data_workspace"
import { queryDataLinkList } from '@/services/data_link'
import { message } from 'antd';

export default {
  namespace: 'data_workspace',

  state: {
    dataSourceList: [],
    selectDataSourceId: -1,
    sqlJob: undefined,

    sqlText: '',
    jobList: [],

    jobRecord: '',
    executeRecord: '',
    dbTree: []
  },

  effects: {
    * fetch({ payload }, { call, put }) {
      const dataSourceListResponse = yield call(queryDataLinkList, payload);

      if (!dataSourceListResponse || !dataSourceListResponse.success) {

      } else {
        yield put({
          type: 'saveDataSourceList',
          payload: dataSourceListResponse.data,
        });

        const data = dataSourceListResponse.data;

        const map = {};
        for (let i = 0; i < data.length; i++) {
          const id = data[i].id;

          let resp = yield call(querySchemasById, id);

          if (!resp || !resp.success) {
            continue
          } else {
            map[id] = resp.data;
          }

          yield put({
            type: 'saveSchemas',
            payload: map,
          })
        }


      }
    },

    * selectDs({ payload }, { call, put }) {
      const response = yield call(querySchemasById, payload);

      if (!response || !response.success) {

      } else {
        yield put({
          type: 'saveSelectDs',
          payload: response.data,
        })
      }
    },

    * setSql({ payload }, { call, put }) {
      yield put({
        type: 'saveSql',
        payload: payload,
      });
    },

    * format({ payload }, { call, put }) {
      const response = yield call(formatSql, payload);

      if (!response || !response.success) {

      } else {
        yield put({
          type: 'saveSqlJob',
          payload: response.data,
        })
      }
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

    * executeRecord({ payload }, { call, put }) {
      const response = yield call(executeRecord, payload);

      if (!response || !response.success) {

      } else {
        yield put({
          type: 'saveExecuteRecord',
          payload: response.data,
        })
      }
    },
  },

  reducers: {
    saveDataSourceList(state, action) {
      const s = state;

      s.dataSourceList = action.payload;

      return {
        ...state
      }
    },

    saveJobList(state, action) {
      const s = state;

      s.jobList = action.payload;

      return {
        ...state
      }
    },

    saveSelectDs(state, action) {
      const s = state;

      s.dbTree = action.payload;

      return {
        ...state,
      }
    },

    saveSql(state, action) {
      const s = state;

      s.sqlText = action.payload;

      return {
        ...state,
      }
    },
    saveSqlJob(state, action) {
      const s = state;

      s.sqlText = action.payload;

      return {
        ...state
      }
    },

    saveSubmitSqlResult(state, action) {
      const s = state;
      s.jobRecord = action.payload;

      return {
        ...state
      };
    },

    saveExecuteRecord(state, action) {
      const s = state;
      s.executeRecord = action.payload;
      console.log("s.executeRecord", s.executeRecord);

      return {
        ...state
      };
    },

    saveSchemas(state, action) {
      const dataSourceList = state.dataSourceList;

      const map = action.payload;

      dataSourceList.forEach(ds => {
        ds.schemas = map[ds.id];
      });

      return {
        ...state,
      }
    }
  }
}
