import { modifyVariable } from '@/services/variable';
import { message } from 'antd';


export default {
  namespace: 'variable_modify',

  state: {
    modifyVariable: {},
  },

  effects: {

    * modifyVariableInfo({ payload }, { call, put }) {
      const response = yield call(modifyVariable, payload);
      if (response === null || !response.success) {
        message.error("更新变量信息失败, " + response.resultMsg);
        return;
      }
      message.success("更新变量信息成功");
    },

    * setVariableInfo({ payload }, { call, put }) {
      yield put({
        type: 'saveVariableInfo',
        payload: payload,
      })
    },

  },


  reducers: {

    modifyVariable(state, action) {
      const s = state;
      s.modifyVariable = {
        ...action.payload,
      };

      return {
        ...state,
      };
    },
    saveVariableInfo(state, action) {
      const s = state;
      s.modifyVariable = {
        ...action.payload,
      };

      return {
        ...state,
      };
    },
  },
};
