import {
  deleteRelationModel,
  fetchSceneDetailService,
  fetchSceneListService,
  updateSceneDetailService
} from '@/services/scene';
import { message } from 'antd';

/**
 * model 存储state，model与service交互，service通过API与后台交互
 */
export default {
  namespace: 'scene_detail',

  state: {
    //当前查询的回溯记录详情
    current_scene_detail: {
      'id': null,
      'sceneName': '',
      'description': '',
      'modelExtsDto': [],
      'extInfo': '',
      'gmtCreate': null,
      'gmtModified': null,
    },
  },


  effects: {
    * fetchSceneDetail({ payload }, { call, put }) {
      let response = yield call(fetchSceneDetailService, payload);

      if (!response) {
        message.error('查询场景详情失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'saveCurrentSceneReducer',
          payload: response.data,
        });
      }
    },

    //修改后台数据
    * updateScene({ payload }, { call, put }) {
      let response = yield call(updateSceneDetailService, payload);

      if (!response) {
        message.error('更新场景详情失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'fetchSceneDetail',
          payload: payload.id,
        });

      }
    },

    //删除场景关联的模型
    * deleteRelationModel({ payload }, { call, put }) {
      let response = yield call(deleteRelationModel, payload);

      if (!response) {
        message.error('删除场景关联模型失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'fetchSceneDetail',
          payload: payload.id,
        });

      }
    },

    //修改本地数据
    * updateCurrentModels({ payload }, { call, put }) {


      yield put({
        type: 'saveCurrentSceneReducer',
        payload: payload,
      });
    },

  },


  reducers: {
    saveCurrentSceneReducer(state, action) {
      const s = state;
      s.current_scene_detail = action.payload;
      return { ...state };
    },
  },
};
