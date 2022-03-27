import { sceneRouteAdd } from '@/services/scene_route';
import { message } from 'antd';


export default {

  namespace: 'scene_route_add',

  state: {
    data: {},
    newSceneRoute: {},
  },

  effects: {
    * sceneRouteAdd({ payload }, { call, put }) {
      let response = yield call(sceneRouteAdd, payload);
      //debugger
      if (!response) {
        message.error('新增变量失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'addSceneRoute',
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
  },


  reducers: {

    addSceneRoute(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },

    saveNewSceneRouteInfo(state, action) {
      const s = state;
      s.newSceneRoute = {
        ...action.payload,
      };

      return {
        ...state,
      };
    },
  },
};
