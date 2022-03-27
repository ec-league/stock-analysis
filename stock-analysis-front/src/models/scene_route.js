import { message } from "antd";
import { fetchSceneRouteById, querySceneRouteList, updateSceneRouteById } from "@/services/scene_route";

export default {
  namespace: 'scene_route',

  state: {
    data: [],
    selectSceneRouteById: {},
    result: '',
    newSceneRoute: {},
  },

  effects: {
    * fetch({ payload }, { call, put }) {
      const response = yield call(querySceneRouteList);

      if (!response) {
        message.error("查询任务列表源失败, 请稍后再试!");
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'saveSceneRouteList',
          payload: response.data,
        });
      }
    },

    * fetchSceneRouteById({ payload }, { call, put }) {
      const response = yield call(fetchSceneRouteById, payload);

      if (!response) {
        message.error("查询任务失败, 请稍后再试!");
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'getSceneRouteById',
          payload: response.data,
        });
      }
    },

    * setNewSceneRouteInfo({ payload }, { call, put }) {
      yield put({
        type: 'saveNewSceneRouteInfo',
        payload: payload,
      });
    },

    * updateSceneRouteById({ payload }, { call, put }) {
      let response = yield call(updateSceneRouteById, payload);
      if (!response) {
        message.error('更新配置失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'updateSceneRoute',
          payload: response.data,
        });
      }
    },

  },

  reducers: {
    saveSceneRouteList(state, action) {
      const s = state;

      s.data = action.payload;

      return { ...state };
    },

    getSceneRouteById(state, action) {
      const s = state;
      s.selectSceneRouteById = action.payload;
      return { ...state };
    },

    saveNewSceneRouteInfo(state, action) {
      const s = state;
      s.selectSceneRouteById = {
        ...action.payload,
      };
      return {
        ...state,
      };
    },

    updateSceneRoute(state, action) {
      const s = state;
      s.selectSceneRouteById = {};
      s.data = action.payload;
      return { ...state };
    },
  },
}
