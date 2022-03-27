import { fetchAllBasicVariables } from '@/services/variable';
import { message } from 'antd';


export default {
  namespace: 'basic_variable_list',

  state: {
    data: [],
  },

  effects: {
    * fetchBasicVariableList({ payload }, { call, put }) {
      let response = yield call(fetchAllBasicVariables, payload);

      if (!response) {
        message.error('查询基础变量列表失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'saveBasicVariableList',
          payload: response.data,
        });
      }
    },
  },


  reducers: {
    saveBasicVariableList(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};
