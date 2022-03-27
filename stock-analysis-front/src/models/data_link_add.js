import { dataLinkAdd } from '@/services/data_link';
import { message } from 'antd';


export default {

  namespace: 'data_link_add',

  state: {
    data: {},
    newDataLink: {},
  },

  effects: {
    * dataLinkAdd({ payload }, { call, put }) {
      let response = yield call(dataLinkAdd, payload);
      //debugger
      if (!response) {
        message.error('新增变量失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'addDataLink',
          payload: response.data,
        });
      }
    },

    * setNewDataLinkInfo({ payload }, { call, put }) {
      yield put({
        type: 'saveNewDataLinkInfo',
        payload: payload,
      });
    },
  },


  reducers: {

    addDataLink(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },

    saveNewDataLinkInfo(state, action) {
      const s = state;
      s.newDataLink = {
        ...action.payload,
      };

      return {
        ...state,
      };
    },
  },
};
