import { addVariable } from '@/services/variable';
import { message } from 'antd';


export default {

  namespace: 'variable_add',

  state: {
    data: {},
    newVariable: {},
  },

  effects: {
    * addVariableInfo({ payload }, { call, put }) {
      let response = yield call(addVariable, payload);
      //debugger
      if (!response) {
        message.error('新增变量失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'addVariable',
          payload: response.data,
        });
      }
    },

    * setNewVariableInfo({ payload }, { call, put }) {
      yield put({
        type: 'saveNewVariableInfo',
        payload: payload,
      });
    },
  },


  reducers: {

    addVariable(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },

    saveNewVariableInfo(state, action) {
      const s = state;
      s.newVariable = {
        ...action.payload,
      };

      return {
        ...state,
      };
    },
  },
};
