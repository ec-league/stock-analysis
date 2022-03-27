import {
  queryDataSourceStatistics,
  queryModelCalcStatistics,
  queryModelStatistics,
  queryVariableStatistics
} from "@/services/dashboard";

export default {
  namespace: 'model_dashboard',

  state: {
    modelStatistics: {},
    dataSourceStatistics: {},
    dataSourceInvokeDigest: [],
    modelCalcStatistics: {},
    modelCalHourDigest: [],
    modelCalDayDigest: [],
    variableStatistics: {}
  },

  effects: {
    * fetch({ payload }, { call, put }) {
      const response = yield call(queryModelStatistics);

      if (!response || !response.success) {

      } else {
        yield put({
          type: 'saveModelStatistics',
          payload: response.data,
        });
      }

      const datasourceResponse = yield call(queryDataSourceStatistics);

      if (!datasourceResponse || !datasourceResponse.success) {

      } else {
        yield put({
          type: 'saveDataSourceStatistics',
          payload: datasourceResponse.data,
        });
      }

      const variableResponse = yield call(queryVariableStatistics);

      if (!variableResponse || !variableResponse.success) {

      } else {
        yield put({
          type: 'saveVariableStatistics',
          payload: variableResponse.data,
        });
      }

      const calcResponse = yield call(queryModelCalcStatistics);

      if (!calcResponse || !calcResponse.success) {

      } else {
        yield put({
          type: 'saveModelCalcStatistics',
          payload: calcResponse.data,
        });
      }
    }
  },

  reducers: {
    saveModelStatistics(state, action) {
      return {
        ...state,
        modelStatistics: action.payload,
      }
    },

    saveDataSourceStatistics(state, action) {
      const s = state;

      s.dataSourceStatistics = action.payload;

      const l = [];

      if (action.payload.list) {
        action.payload.list.forEach(item => {
          l.push({
            x: item.date,
            y: item.count,
          });
        });
      }

      s.dataSourceInvokeDigest = l;

      return {
        ...state,
      }
    },

    saveVariableStatistics(state, action) {
      return {
        ...state,
        variableStatistics: action.payload,
      }
    },

    saveModelCalcStatistics(state, action) {
      const s = state;

      s.modelCalcStatistics = action.payload;

      const l = [];

      if (action.payload.hourList) {
        action.payload.hourList.forEach(item => {
          l.push({
            x: item.date,
            y: item.count,
          });
        });
      }

      s.modelCalHourDigest = l;

      const ll = [];
      if (action.payload.dayList) {
        action.payload.dayList.forEach(item => {
          ll.push({
            x: item.date,
            y: item.count,
          });
        });
      }

      s.modelCalDayDigest = ll;

      return {
        ...state,
      }
    },
  }
}
