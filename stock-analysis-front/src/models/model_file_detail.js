import { invalidateFile, queryModelFileDetail, queryModelParams, validateFile } from "@/services/model";
import { message } from "antd";

export default {
  namespace: 'model_file_detail',

  state: {
    basicInfo: {
      id: 0,
      name: '',
      desc: '',
      createUserName: '',
      updateUserName: '',
      gmtCreate: '',
      gmtModified: '',
      status: '',
      content: '',
    },
    variables: {},
  },

  effects: {
    * fetch({ payload }, { call, put }) {
      const response = yield call(queryModelFileDetail, payload);

      if (!response || !response.success) {
        return;
      }

      yield put({
        type: 'queryDetail',
        payload: response.data,
      });

      const paramResponse = yield call(queryModelParams, payload);

      if (!paramResponse || !paramResponse.success) {
        return;
      }

      yield put({
        type: 'queryParam',
        payload: paramResponse.data,
      });
    },

    * invalidate({ payload }, { call, put }) {
      const response = yield call(invalidateFile, payload);

      if (!response || !response.success) {
        message.error("文件去使能失败，请稍后重试！");
        return;
      }
      yield put({
        type: 'invalidateSuccess',
        payload: response.data,
      });
      message.success("文件去使能成功!");
    },

    * validateModelFile({ payload }, { call, put }) {
      const response = yield call(validateFile, payload);
      if (!response || !response.success) {
        if (response.resultCode === 'STATUS_IS_SUCCESS') {
          message.success(response.resultMsg);
          return;
        }

        yield put({
          type: 'saveValidateSuccess',
          payload: response.data,
        });
        message.error(response.resultMsg);
        return;
      }

      yield put({
        type: 'saveValidateSuccess',
        payload: response.data,
      });

      message.success("文件校验成功!");
    },
  },

  reducers: {
    queryDetail(state, action) {
      return {
        ...state,
        basicInfo: action.payload,
      };
    },

    queryParam(state, action) {
      return {
        ...state,
        variables: action.payload,
      };
    },

    saveValidateSuccess(state, action) {
      return {
        ...state,
        basicInfo: action.payload,
      };
    },

    invalidateSuccess(state, action) {
      return {
        ...state,
        basicInfo: action.payload,
      };
    },
  },
};
