import { queryStatistics, queryOfflineStatistics } from '@/services/variable';
import { message } from 'antd';

/**
 * model 存储state，model与service交互，service通过API与后台交互
 */
export default {
  namespace: 'variable_statics',

  state: {
    //当前查询的回溯记录详情
    id: null,
    variableId: null,
    onlineStatics: {
      statisticsInfo:
        {
          ranges: [],
          groups: [],
        },
      opType: "",
    },
    offlineStatics: {
      offlineStatisticsInfo:[
        {
          variableId: null,
          regressionId: null,
          statisticsInfo: {
            ranges: [],
            groups: []
          },
          total: null,
          type: '',
        }
        ],
      opType: "",
      taskType: "",
    },
  },

  effects: {
    //
    * fetchOnlineStaticsByVariableId({ payload }, { call, put }) {
      let response = yield call(queryStatistics, payload);

      if (!response) {
        message.error('查询变量线上统计信息失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        console.log('查询变量线上统计信息成功');
        yield put({
          type: 'saveOnlineStatics',
          payload: response.data,
        });
      }

    },

    * fetchOfflineStaticsByVariableId({ payload }, { call, put }) {
      let response = yield call(queryOfflineStatistics, payload);

      if (!response) {
        message.error('查询变量offline统计信息失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        console.log('查询变量offline统计信息成功');
        yield put({
          type: 'saveOfflineStatics',
          payload: response.data,
        });
      }

    },
  },

  reducers: {
    saveOnlineStatics(state, action) {
      const s = state;
      if (action.payload != null) {
        s.onlineStatics = action.payload;
      }
      return { ...state };
    },

    saveOfflineStatics(state, action) {
      const s = state;
      if (action.payload) {
        s.offlineStatics = action.payload;
      }
      return { ...state };
    },
  },
};
