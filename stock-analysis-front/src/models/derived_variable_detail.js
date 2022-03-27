import { queryDerivedVariableByName, queryDerivedVariableDetail, queryStatistics, queryStatisticsByInterval } from "../services/variable";

export default {
  namespace: 'derived_variable_detail',

  state: {
    basicInfo: {},
    statistics: {},
    graph: [],
    pie: [],
  },

  effects: {
    * fetch({ payload }, { call, put }) {
      const response = yield call(queryDerivedVariableDetail, payload);

      if (!response || !response.success) {
        return;
      }
      yield put({
        type: 'queryDetail',
        payload: response.data,
      });

      const statisticsResp = yield call(queryStatisticsByInterval, payload);

      if (!statisticsResp || !statisticsResp.success) {
        return;
      }

      yield put({
        type: 'queryStatistics',
        payload: statisticsResp.data
      })
    },
    * queryByName({ payload }, { call, put }) {
      const response = yield call(queryDerivedVariableByName, payload);

      if (!response || !response.success) {
        return;
      }
      yield put({
        type: 'queryDetailByName',
        payload: response.data,
      });
    },


  },

  reducers: {
    queryDetail(state, action) {
      return {
        ...state,
        basicInfo: action.payload,
      };
    },

    queryDetailByName(state, action) {
      return {
        ...state,
        basicInfo: action.payload,
      };
    },

    queryStatistics(state, action) {
      const s = state;

      s.statistics = action.payload;

      const graph = [];

      if (action.payload.statisticsInfo.ranges) {
        action.payload.statisticsInfo.ranges.forEach(r => {
          graph.push({
            x: `${r.start.toFixed(2)} - ${r.end.toFixed(2)}`,
            y: r.count
          })
        });
      }


      const pie = [];

      if (action.payload.statisticsInfo.groups) {
        action.payload.statisticsInfo.groups.forEach(r => {
          pie.push({
            item: r.category,
            count: r.count
          })
        });
      }

      s.graph = graph;
      s.pie = pie;

      return {
        ...state,
        statistics: action.payload,
      }
    }
  },
};
