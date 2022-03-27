import { calcuateVariable } from "@/services/model";

export default {
  namespace: 'variable_calculate',

  state: {
    originValue: '',
    calculateValue: '',
  },

  effects: {
    *setOriginVariables({ payload }, { call, put }) {
      yield put({
        type: 'saveOriginValue',
        payload: payload,
      })
    },

    *calculateVariable({ payload }, { call, put }) {
      const response = yield call(calcuateVariable, payload);

      if (!response || !response.success) {
        return;
      }

      const temp = JSON.parse(response.data);

      yield put({
        type: 'saveCalculateValue',
        payload: JSON.stringify(temp, null, 2),
      });
    }
  },

  reducers: {
    saveOriginValue(state, action) {
      const s = state;

      s.originValue = action.payload;

      return {
        ...s,
      };
    },

    saveCalculateValue(state, action) {
      const s = state;

      s.calculateValue = action.payload;

      const origin = JSON.parse(s.originValue);

      s.originValue = JSON.stringify(origin, null, 2);

      return {
        ...s,
      };
    }
  },
}
