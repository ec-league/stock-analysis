import { dynamicResourceAdd } from '@/services/config';
import { message } from 'antd';


export default {

  namespace: 'dynamic_resource_add',

  state: {
    data: {},
    newDynamicResource: {},
  },

  effects: {
    * dynamicResourceAdd({ payload }, { call, put }) {
      let response = yield call(dynamicResourceAdd, payload);
      //debugger
      if (!response) {
        message.error('新增变量失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'addDynamicResource',
          payload: response.data,
        });
      }
    },

    * setNewDynamicResourceInfo({ payload }, { call, put }) {
      yield put({
        type: 'saveNewDynamicResourceInfo',
        payload: payload,
      });
    },
  },


  reducers: {

    adddDnamicResource(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },

    saveNewDynamicResourceInfo(state, action) {
      const s = state;
      s.newDynamicResource = {
        ...action.payload,
      };

      return {
        ...state,
      };
    },
  },
};
