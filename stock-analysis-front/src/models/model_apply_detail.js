import { queryModelFileDetail, queryModelParams, queryModelUseDetail } from "@/services/model";
import { queryStatistics, queryStatisticsByInterval } from "@/services/variable";

export default {
  namespace: 'model_apply_detail',

  state: {
    // 展示对应变量
    inputVariables: [],
    outputVariables: [],
    selectVariableId: -1,
    selectGraph: [],
    statistics: {},
    loading: false,
    basicInfo: {},
    modelUseStatics: []
  },

  effects: {
    * fetch({ payload }, { call, put }) {
      yield put({
        type: 'changeLoading',
      });

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

      const modelUseResponse = yield call(queryModelUseDetail, payload);

      if (!modelUseResponse || !modelUseResponse.success) {
        return;
      }

      yield put({
        type: 'queryModelUse',
        payload: modelUseResponse.data,
      });

      yield put({
        type: 'changeLoading',
      });

      return paramResponse;
    },

    * fetchStatistics({ payload }, { call, put }) {
      yield put({
        type: 'changeLoading',
      });

      yield put({
        type: 'saveSelectVariableId',
        payload: payload,
      });

      yield put({
        type: 'changeLoading',
      });

      yield put({
        type: 'changeLoading',
      });


      console.log('model apply js service:,', payload);

      const variableStatisticResp = yield call(queryStatisticsByInterval, payload);

      if (!variableStatisticResp || !variableStatisticResp.success) {
        return;
      }

      yield put({
        type: 'queryStatistics',
        payload: variableStatisticResp.data
      });

      yield put({
        type: 'changeLoading',
      });
    },
  },

  reducers: {
    queryParam(state, action) {
      const s = state;

      s.inputVariables = action.payload.inputParams;
      s.outputVariables = action.payload.outputParams;

      return {
        ...state,
      };
    },

    queryModelUse(state, action) {
      const s = state;

      s.modelUseStatics = action.payload;

      return {
        ...state,
      };
    },

    saveSelectVariableId(state, action) {
      return {
        ...state,
        selectVariableId: action.payload,
      }
    },

    queryStatistics(state, action) {
      const s = state;

      s.statistics = action.payload;

      const graph = [];

      if (action.payload.statisticsInfo && action.payload.statisticsInfo.ranges) {
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

      if (pie.length > 0) {
        s.selectGraph = pie;
      } else if (graph.length > 0) {
        s.selectGraph = graph;
      }

      return {
        ...s,
      }
    },

    changeLoading(state, action) {
      const s = state;
      if (state.loading) {
        s.loading = false;
      } else {
        s.loading = true;
      }

      return {
        ...s,
      }
    },

    queryDetail(state, action) {
      return {
        ...state,
        basicInfo: action.payload,
      };
    },
  }
}
