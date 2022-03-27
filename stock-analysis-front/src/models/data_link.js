import { message } from "antd";
import {
  fetchDataLinkById,
  queryDataLinkList,
  resetSynDatabseStruct,
  synDatabseStruct,
  updateDataLinkById
} from "@/services/data_link";

export default {
  namespace: 'data_link',

  state: {
    data: [],
    selectDataLinkById: {},
    result: '',
    newDataLink: {},
  },

  effects: {
    * fetch({ payload }, { call, put }) {
      const response = yield call(queryDataLinkList);
      if (!response) {
        message.error("查询数据库连接表失败, 请稍后再试!");
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'saveDataLinkList',
          payload: response.data,
        });
      }
    },

    * fetchDataLinkById({ payload }, { call, put }) {
      const response = yield call(fetchDataLinkById, payload);

      if (!response) {
        message.error("查询数据库连接失败, 请稍后再试!");
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'getDataLinkById',
          payload: response.data,
        });
      }
    },

    * setNewDataLinkInfo({ payload }, { call, put }) {
      yield put({
        type: 'saveNewDataLinkInfo',
        payload: payload,
      });
    },

    * updateDataLinkById({ payload }, { call, put }) {
      let response = yield call(updateDataLinkById, payload);
      if (!response) {
        message.error('更新数据库了连接配置失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'updateDataLink',
          payload: response.data,
        });
      }
    },

    * synDatabseStruct({ payload }, { call, put }) {
      const response = yield call(synDatabseStruct, payload);
      if (!response) {
        message.error("同步数据库表结构失败, 请稍后再试!");
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'synStruct',
          payload: response.data,
        });
      }
    },

    * resetSynDatabseStruct({ payload }, { call, put }) {
      const response = yield call(resetSynDatabseStruct, payload);
      if (!response) {
        message.error("重置同步数据库表结构失败, 请稍后再试!");
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'resetSynStruct',
          payload: response.data,
        });
      }
    },

  },

  reducers: {
    saveDataLinkList(state, action) {
      const s = state;

      s.data = action.payload;

      return { ...state };
    },

    getDataLinkById(state, action) {
      const s = state;
      s.selectDataLinkById = action.payload;
      return { ...state };
    },

    saveNewDataLinkInfo(state, action) {
      const s = state;
      s.selectDataLinkById = {
        ...action.payload,
      };
      return {
        ...state,
      };
    },

    updateDataLink(state, action) {
      const s = state;
      s.selectDataLinkById = {};
      s.data = action.payload;
      return { ...state };
    },

    synStruct(state, action) {
      const s = state;

      s.data = action.payload;

      return { ...state };
    },

    resetSynStruct(state, action) {
      const s = state;

      s.data = action.payload;

      return { ...state };
    },
  },
}
