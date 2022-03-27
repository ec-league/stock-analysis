import { fetchBasicVariableById, fetchBasicVariableByName, queryStatistics,  queryStatisticsByInterval} from "@/services/variable";
import { message } from "antd";


export default {
  namespace: 'basic_variable_detail',

  state: {
    data: {},
    statistics: {},
    graph: [],
    pie: []
  },

  effects: {

    * fetchBasicVariableDetailById({ payload }, { call, put }) {
      let response = yield call(fetchBasicVariableById, payload);
      //debugger
      if (!response) {
        message.error('查询变量详情列表失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'saveCurrentBasicVariable',
          payload: response.data,
        });
      }

      const statisticsResp = yield call(queryStatisticsByInterval, payload);

      if (!statisticsResp || !statisticsResp.success) {
        return;
      }

      yield put({
        type: 'queryStatistics',
        payload: statisticsResp.data
      });
    },

    * fetchBasicVariableDetailByName({ payload }, { call, put }) {
      let response = yield call(fetchBasicVariableDetailByName, payload);
      //debugger
      if (!response) {
        message.error('查询变量详情列表失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'saveCurrentBasicVariableByName',
          payload: response.data,
        });
      }
    },
  },


  reducers: {

    saveCurrentBasicVariable(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },

    saveCurrentBasicVariableByName(state, action) {
      return {
        ...state,
        data: action.payload,
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
    },
  },
};
