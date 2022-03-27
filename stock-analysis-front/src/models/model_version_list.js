import { modelVersionAdd, modelVersionDelete, queryModelVersionList, validateModel } from '@/services/model_version';
import { message } from 'antd';


export default {
  namespace: 'model_version',

  state: {
    data: [],
    fileId: '',
    validateSuccess: false,
  },

  effects: {
    * fetchList({ payload }, { call, put }) {
      const response = yield call(queryModelVersionList, payload.fileId);
      if (!response || !response.success) {
        return;
      }

      yield put({
        type: 'queryList',
        payload: Array.isArray(response.data) ? response.data : [],
      });
    },

    * validate({ payload }, { call, put }) {
      const response = yield call(validateModel, payload);

      if (!response || !response.success) {
        message.warn("该版本模型生效失败");
        return;
      }

      message.success("该版本模型生效成功!");
    },

    * submitModelVersion({ payload }, { call, put }) {

    },

    * modelVersionAdd({ payload }, { call, put }) {
      let response = yield call(modelVersionAdd, payload);
      if (!response) {
        message.error('新增模型版本失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'addModelVersion',
          payload: response.data,
        });
      }
    },

    * deleteVersion({ payload }, { call, put }) {
      const response = yield call(modelVersionDelete, payload);

      if (!response || !response.success) {
        message.warn("该版本模型删除失败");
        return;
      }

      message.success("该版本模型删除成功!");
    },

  },

  reducers: {
    queryList(state, action) {

      return {
        ...state,
        data: action.payload,
        fileId: action.payload[0].fileId
      };
    },

    addModelVersion(state, action) {
      const data = state.data;
      data.validateSuccess = action.payload;

      return {
        ...state,
      }
    },
  },
};
