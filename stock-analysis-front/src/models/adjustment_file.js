import { adjustFileAdd } from "@/services/adjustment";
import { message } from "antd";

export default {
  namespace: 'adjustment_file',

  state: {
    validateSuccess: false,
    batchId: 0,
  },

  effects: {
    * submitAdjustFile({ payload }, { call, put }) {

    },

    * setBatchId({ payload }, { call, put }) {
      yield put({
        type: 'saveBatchId',
        payload: payload,
      });
    },

    * adjustFileAdd({ payload }, { call, put }) {
      let response = yield call(adjustFileAdd, payload);
      if (!response) {
        message.error('新增调额文件, 请稍后再试!');
      } else {
        yield put({
          type: 'addAdjustFile',
          payload: response,
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

    addAdjustFile(state, action) {
      const s = state;
      s.validateSuccess = action.payload.success;

      return {
        ...state,
      }
    },
  },
};
