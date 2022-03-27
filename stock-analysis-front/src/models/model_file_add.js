import { modelAdd } from "@/services/model";
import { message } from "antd";

export default {
  namespace: 'model_file_add',

  state: {
    data: {
      name: '',
      description: '',
      fileName: '',
      validateSuccess: false,
      fileId: 0,
    },
  },

  effects: {
    * submitModelFile({ payload }, { call, put }) {

    },

    * setModelFileName({ payload }, { call, put }) {
      yield put({
        type: 'saveModelFileName',
        payload: payload,
      });
    },

    * setModelName({ payload }, { call, put }) {
      yield put({
        type: 'saveModelName',
        payload: payload,
      });
    },

    * setModelDesc({ payload }, { call, put }) {
      yield put({
        type: 'saveModelFileDesc',
        payload: payload,
      });
    },

    * setFileId({ payload }, { call, put }) {
      yield put({
        type: 'saveFileId',
        payload: payload,
      });
    },

    * modelAdd({ payload }, { call, put }) {
      let response = yield call(modelAdd, payload);
      if (!response) {
        message.error('新增模型失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'addModel',
          payload: response.data,
        });
      }
    },
  },

  reducers: {
    saveModelName(state, action) {
      const data = state.data;
      data.name = action.payload;

      return {
        ...state,
      };
    },

    saveModelFileName(state, action) {
      const data = state.data;
      data.fileName = action.payload;

      return {
        ...state,
      };
    },

    saveModelFileDesc(state, action) {
      const data = state.data;
      data.description = action.payload;
      return {
        ...state,
      }
    },

    saveFileId(state, action) {
      const data = state.data;

      data.fileId = action.payload;

      return {
        ...state,
      }
    },

    addModel(state, action) {
      const data = state.data;
      data.validateSuccess = action.payload;

      return {
        ...state,
      }
    },
  },
};
