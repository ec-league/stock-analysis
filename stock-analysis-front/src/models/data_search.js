import { fetchSearch } from '@/services/data_search';
import { message } from 'antd';


export default {
  namespace: 'data_search',

  state: {
    param: {},
    searchResult: {},
  },

  effects: {
    * fetchSearch({ payload }, { call, put }) {
      let response = yield call(fetchSearch, payload);

      if (!response) {
        message.error('数据搜索失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'getSearchResult',
          payload: response.data,
        });
      }
    },

    * setSearchInfo({ payload }, { call, put }) {
      yield put({
        type: 'saveSearchInfo',
        payload: payload,
      });
    },

    * resetSearchInfo({ payload }, { call, put }) {
      yield put({
        type: 'cleanSearchInfo',
        payload: payload,
      });
    },
  },


  reducers: {
    getSearchResult(state, action) {
      return {
        ...state,
        searchResult: action.payload,
      };
    },

    saveSearchInfo(state, action) {
      const s = state;
      s.param = {
        ...action.payload,
      };

      return {
        ...state,
      };
    },

    cleanSearchInfo(state, action) {

      const s = state;
      s.param = {};

      return {
        ...state,
      };
    },
  },
};
