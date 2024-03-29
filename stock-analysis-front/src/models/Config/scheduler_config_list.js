import { message } from "antd";
import { fetchConfigById, querySchedulerConfigList, updateConfigById } from "@/services/Config/SchedulerConfig";

export default {
  namespace: 'scheduler_config_list',

  state: {
    data: [],
    selectConfigById: {},
    result: '',
    loading: false,
  },

  effects: {
    * fetch({ payload }, { call, put }) {
      const response = yield call(querySchedulerConfigList);

      yield put({
        type: 'saveLoading',
        payload: true,
      });

      if (!response) {
        message.error("查询任务列表源失败, 请稍后再试!");
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'saveConfigList',
          payload: response.data,
        });
      }

      yield put({
        type: 'saveLoading',
        payload: false,
      });
    },

    * fetchConfigById({ payload }, { call, put }) {
      const response = yield call(fetchConfigById, payload);

      if (!response) {
        message.error("查询任务失败, 请稍后再试!");
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'getConfigById',
          payload: response.data,
        });
      }
    },

    * setNewConfigInfo({ payload }, { call, put }) {
      yield put({
        type: 'saveNewConfigInfo',
        payload: payload,
      });
    },

    * updateConfigById({ payload }, { call, put }) {
      let response = yield call(updateConfigById, payload);
      if (!response) {
        message.error('更新配置失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'updateConfig',
          payload: response.data,
        });
      }
    },
  },

  reducers: {
    saveLoading(state, action) {
      return {
        ...state,
        loading: action.payload,
      }
    },

    saveConfigList(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },

    getConfigById(state, action) {
      const s = state;
      s.selectConfigById = action.payload;
      return { ...state };
    },

    saveNewConfigInfo(state, action) {
      const s = state;
      s.selectConfigById = {
        ...action.payload,
      };
      return {
        ...state,
      };
    },

    updateConfig(state, action) {
      const s = state;
      s.selectConfigById = {};
      s.data = action.payload;
      return { ...state };
    },
  },
}
