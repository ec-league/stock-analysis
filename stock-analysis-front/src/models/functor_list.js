import { fetchFunctorList } from '@/services/functor';
import { message } from 'antd';


export default {
  namespace: 'functor_list',

  state: {
    data: [],
  },

  effects: {
    * fetchFunctorList({ payload }, { call, put }) {
      const response = yield call(fetchFunctorList, payload);

      if (!response) {
        message.error('查询基础变量列表失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'getFunctorList',
          payload: response.data,
        });
      }
    },
  },


  reducers: {
    getFunctorList(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};
