import { whiteFileAdd } from "@/services/white";
import { message } from "antd";

export default {
  namespace: 'white_file',

  state: {
    validateSuccess: false,
    batchId: 0,
  },

  effects: {
    * submitWhiteFile({ payload }, { call, put }) {

    },

    * setBatchId({ payload }, { call, put }) {
      yield put({
        type: 'saveBatchId',
        payload: payload,
      });
    },

    * whiteFileAdd({ payload }, { call, put }) {
      let response = yield call(whiteFileAdd, payload);
      if (!response) {
        message.error('新增调额文件, 请稍后再试!');
      } else {
        yield put({
          type: 'addWhiteFile',
          payload: response.data,
        });
      }
    },
  },

  reducers: {

    saveBatchId(state, action) {
      const s = state;

      s.batchId = action.payload;

      return {
        ...state,
      }
    },

    addWhiteFile(state, action) {
      const s = state;
      s.validateSuccess = action.payload;

      return {
        ...state,
      }
    },
  },
};
