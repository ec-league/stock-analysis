
export default {
  namespace: 'regression_list',

  state: {
    data: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {

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
