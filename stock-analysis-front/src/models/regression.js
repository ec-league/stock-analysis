import { fetchOneRegressionRecord } from '@/services/regression';
import { message } from 'antd';

/**
 * model 存储state，model与service交互，service通过API与后台交互
 */
export default {
  namespace: 'regression_detail',

  state: {
    //当前查询的回溯记录详情
    current_regression_record_detail: {},
  },

  effects: {
    * fetchRegressionRecordDetail({ payload }, { call, put }) {
      let response = yield call(fetchOneRegressionRecord, payload);

      if (!response) {
        message.error('查询回溯详情失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        console.log('查询回溯详情成功');
        yield put({
          type: 'saveCurrentRegressionRecordDetail',
          payload: response.data,
        });
      }

    },
  },

  reducers: {
    saveCurrentRegressionRecordDetail(state, action) {
      const s = state;
      s.current_regression_record_detail = action.payload;
      return { ...state };
    },

  },
};
