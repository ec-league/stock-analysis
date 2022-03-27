import {
  downAdjustResult,
  downSqlResult,
  executeSqlAdjust,
  fetchFinishList,
  fetchReadyList,
  fetchSearch,
  fetchSqlList
} from "@/services/adjustment";
import { message } from "antd";

export default {
  namespace: 'adjustment_list',

  state: {
    readyData: [],
    sqlData: [],
    finishData: [],
    param: {},

  },

  effects: {

    * fetchReadyList({ payload }, { call, put }) {
      let response = yield call(fetchReadyList, payload);
      if (!response) {
        message.error('获取待处理调额列表失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'getReadyList',
          payload: Array.isArray(response.data) ? response.data : [],
        });
      }
    },

    * fetchSqlList({ payload }, { call, put }) {
      let response = yield call(fetchSqlList, payload);
      if (!response) {
        message.error('获取sql执行的调额列表失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'getSqlList',
          payload: Array.isArray(response.data) ? response.data : [],
        });
      }
    },

    * downSqlResult({ payload }, { call, put }) {
      let response = yield call(downSqlResult, payload);
      console.log("response", response);

      if (!response) {
        message.error('下载sql执行结果失败, 请稍后再试!');
      } else {
        yield put({ type: 'saveFile', payload: { blob: response } })
      }
    },
    * downAdjustResult({ payload }, { call, put }) {
      let response = yield call(downAdjustResult, payload);
      console.log("response", response);

      if (!response) {
        message.error('下载调额执行结果失败, 请稍后再试!');
      } else {
        yield put({ type: 'saveFile', payload: { blob: response } })
      }
    },
    * saveFile({ payload: { blob } }, { call }) {
      let fileName = "resultFile.csv";
      if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, fileName);
      } else {
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        //此写法兼容可火狐浏览器
        document.body.appendChild(link);
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", false, false);
        link.dispatchEvent(evt);
        document.body.removeChild(link);
      }
    },

    * executeSqlAdjust({ payload }, { call, put }) {
      let response = yield call(executeSqlAdjust, payload);
      if (!response) {
        message.error('执行脚本调额失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'getFinishList',
          payload: Array.isArray(response.data) ? response.data : [],
        });
      }
    },

    * fetchFinishList({ payload }, { call, put }) {
      let response = yield call(fetchFinishList, payload);
      if (!response) {
        message.error('获取调额结果列表失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'getFinishList',
          payload: Array.isArray(response.data) ? response.data : [],
        });
      }
    },

    * fetchSearch({ payload }, { call, put }) {
      let response = yield call(fetchSearch, payload);

      if (!response) {
        message.error('搜索调额文件失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'getSearchResult',
          payload: response.data,
        });
      }
    },

    * setSearchInfo({ payload }, { call, put }) {
      yield put({
        type: 'saveSearchInfo',
        payload: payload,
      });
    },

    * resetSearchInfo({ payload }, { call, put }) {
      yield put({
        type: 'cleanSearchInfo',
        payload: payload,
      });
    },
  },

  reducers: {

    getReadyList(state, action) {
      return {
        ...state,
        readyData: action.payload,
      };
    },

    getSqlList(state, action) {
      return {
        ...state,
        sqlData: action.payload,
      };
    },

    getSearchResult(state, action) {
      return {
        ...state,
        searchResult: action.payload,
      };
    },

    getFinishList(state, action) {
      return {
        ...state,
        finishData: action.payload,
      };
    },

    saveSearchInfo(state, action) {
      const s = state;
      s.param = {
        ...action.payload,
      };

      return {
        ...state,
      };
    },

    cleanSearchInfo(state, action) {

      const s = state;
      s.param = {};

      return {
        ...state,
      };
    },
  },
};
