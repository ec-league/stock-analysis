import { queryDerivedVariableList } from "../services/variable";

export default {
  namespace: 'derived_variable_list',

  state: {
    data: [],
  },

  effects: {
    * fetch({ payload }, { call, put }) {
      const response = yield call(queryDerivedVariableList, payload);
      if (!response || !response.success) {
        return;
      }
      yield put({
        type: 'queryList',
        payload: response.data,
      });
    },
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};
