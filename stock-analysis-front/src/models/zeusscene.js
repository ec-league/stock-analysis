import { fetchDecisionFlowService } from '@/services/zeusdashboard';
import { message } from 'antd';

/**
 * model 存储state，model与service交互，service通过API与后台交互
 */
export default {
  namespace: 'zeusscene',

  state: {
    scene_list: [],
    //设置初始值
    pagination: {
      //"current": 1,
      //"pageSize": 2
    }
  },


  effects: {

    * fetchSceneListEffect({ payload }, { call, put }) {
      //debugger
      let response = yield call(fetchDecisionFlowService, payload);
      if (!response) {
        message.error('查询场景列表失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        console.log('查询场景列表成功');
        yield put({
          type: 'saveSceneListReducer',
          payload: response.data,
        });
      }

    },
  },


  reducers: {

    saveSceneListReducer(state, action) {
      const s = state;
      s.scene_list = action.payload.pageData;
      s.pagination = action.payload.pagination;
      return { ...state };
    },
  },
};
