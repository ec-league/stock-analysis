import { queryModelFileList, invalidateFile,fuzzyQueryModelList } from '@/services/model';
import { message } from 'antd';


export default {
  namespace: 'model_file_list',

  state: {
    data: [],
    //以name前缀模糊匹配的model
    fuzzyModels: []
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryModelFileList, payload);
      if (!response || !response.success) {
        return;
      }

      yield put({
        type: 'queryList',
        payload: Array.isArray(response.data) ? response.data : [],
      });
    },

    *fuzzyQuery({ payload }, { call, put }) {
      //console.log("modelItemsEffect: ", payload)
      const response = yield call(fuzzyQueryModelList, payload);
      if (!response || !response.success) {
        return;
      }

      yield put({
        type: 'fuzzyQueryList',
        payload: Array.isArray(response.data) ? response.data : [],
      });
    },

    *invalidate({ payload }, { call, put }) {
      const response = yield call(invalidateFile, payload);

      if (!response || !response.success) {
        message.warn("文件无法去使能");
        return;
      }

      message.success("文件去使能成功!");
    }
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
    fuzzyQueryList(state, action) {
      return {
        ...state,
        fuzzyModels: action.payload,
      };
    },
  },
};
