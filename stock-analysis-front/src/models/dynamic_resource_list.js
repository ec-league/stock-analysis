import { message } from "antd";
import { fetchResourceById, queryDynamicResourceList, updateResourceById } from "@/services/config";

export default {
  namespace: 'dynamic_resource_list',

  state: {
    data: [],
    selectResourceById: {},
    result: '',
  },

  effects: {
    * fetch({ payload }, { call, put }) {
      const response = yield call(queryDynamicResourceList);

      if (!response) {
        message.error("查询任务列表源失败, 请稍后再试!");
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'saveResourceList',
          payload: response.data,
        });
      }
    },

    * fetchResourceById({ payload }, { call, put }) {
      const response = yield call(fetchResourceById, payload);

      if (!response) {
        message.error("查询任务失败, 请稍后再试!");
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'getResourceById',
          payload: response.data,
        });
      }
    },

    * setNewResourceInfo({ payload }, { call, put }) {
      yield put({
        type: 'saveNewResourceInfo',
        payload: payload,
      });
    },

    * updateResourceById({ payload }, { call, put }) {
      let response = yield call(updateResourceById, payload);
      if (!response) {
        message.error('更新配置失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'updateResource',
          payload: response.data,
        });
      }
    },
  },

  reducers: {
    saveResourceList(state, action) {
      const s = state;

      s.data = action.payload;

      return { ...state };
    },

    getResourceById(state, action) {
      const s = state;
      s.selectResourceById = action.payload;
      return { ...state };
    },

    saveNewResourceInfo(state, action) {
      const s = state;
      s.selectResourceById = {
        ...action.payload,
      };
      return {
        ...state,
      };
    },

    updateResource(state, action) {
      const s = state;
      s.selectResourceById = {};
      s.data = action.payload;
      return { ...state };
    },
  },
}
