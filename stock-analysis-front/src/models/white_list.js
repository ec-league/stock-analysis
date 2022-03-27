import { fetchSearch, fetchWhiteList ,downResultFile} from "@/services/white";
import { message } from "antd";

export default {
  namespace: 'white_list',

  state: {
    whiteListData: [],
    param: {},

  },

  effects: {

    * fetchWhiteList({ payload }, { call, put }) {
      let response = yield call(fetchWhiteList, payload);
      if (!response) {
        message.error('获取待处理白名单列表失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'getWhiteList',
          payload: Array.isArray(response.data) ? response.data : [],
        });
      }
    },

    * downResultFile({ payload }, { call, put }) {
      console.log("payload", payload);

      let response = yield call(downResultFile, payload);
      console.log("response", response);

      if (!response) {
        message.error('下载白名单执行结果失败, 请稍后再试!');
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
    }
    ,

    * fetchSearch({ payload }, { call, put }) {
      let response = yield call(fetchSearch, payload);

      if (!response) {
        message.error('搜索白名单文件失败, 请稍后再试!');
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

    getWhiteList(state, action) {
      return {
        ...state,
        whiteListData: action.payload,
      };
    },

    getSearchResult(state, action) {
      return {
        ...state,
        searchResult: action.payload,
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
