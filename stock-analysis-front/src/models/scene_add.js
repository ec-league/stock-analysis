import { addScene } from '@/services/scene';
import { message } from 'antd';

/**
 * model 存储state，model与service交互，service通过API与后台交互
 */
export default {
  namespace: 'scene_add',

  state: {
    data: {
      name: '',
      desc: '',
      modelId: [],
    },
  },


  effects: {
    * addScene({ payload }, { call, put }) {

      let response = yield call(addScene, payload);

      if (!response) {
        message.error('添加scene失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        console.log('添加场景成功');
      }

    },

    * setSceneName({ payload }, { call, put }) {
      yield put({
        type: 'saveSceneName',
        payload: payload,
      });
    },

    * setSceneDesc({ payload }, { call, put }) {
      yield put({
        type: 'saveSceneDesc',
        payload: payload,
      });
    },

    * setSceneModelId({ payload }, { call, put }) {
      yield put({
        type: 'saveSceneModelId',
        payload: payload,
      });
    }
  },


  reducers: {
    saveSceneReducer(state, action) {
      const s = state;
      s.current_scene_detail = action.payload.pageData;
      return { ...state };
    },

    saveSceneName(state, action) {
      const data = state.data;
      data.name = action.payload;
      return { ...state };
    },

    saveSceneDesc(state, action) {
      const data = state.data;
      data.desc = action.payload;
      return { ...state };
    },

    saveSceneModelId(state, action) {
      const data = state.data;
      data.modelId = action.payload;
      return { ...state };
    },

  },
};
