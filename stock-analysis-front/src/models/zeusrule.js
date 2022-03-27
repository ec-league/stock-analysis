import {queryZeusTolStatistics} from '@/services/zeusdashboard';
import { message } from 'antd';
/**
 * model 存储state，model与service交互，service通过API与后台交互
 */
export default {
  namespace: 'zeusrule',
  state: {
    approvalStatistics: [],
    sceneList: []
  },
  effects: {
    * fetch({ payload,callback }, { call, put }) {
      let response = yield call(queryZeusTolStatistics, payload);
      if (response.success) {
        if (callback && typeof callback === 'function') {
          callback(response); // 返回结果
        }
      }

    }
  },
  reducers: {
    saveSceneListReducer(state, action) {
      console.log("查询场景列表得到的结果："+action.payload)
      return {
        ...state,
        sceneList: action.payload,
      }
    },
    saveApprovalStatistics(state, action) {

      return {
        ...state,
        approvalStatistics: action.payload,
      }
    },
  }
};
