import {
  queryZeusModelStatistics,
  queryZeusRuleStatistics,
  queryZeusFactorStatistics,
  queryZeusHitRuleStatistics
} from "@/services/zeusdashboard";

export default {
  namespace: 'zeus_dashboard',

  state: {
    modelStatistics: {},
    zeusRuleStatistics:[],
    zeusFactorStatistics:[],
    hitRulesStatistics:[]
  },
  effects: {
    * fetch({ payload }, { call, put }) {

      const zeusHitRuleResponse = yield call(queryZeusHitRuleStatistics);

      if (!zeusHitRuleResponse || !zeusHitRuleResponse.success) {

      } else {
        yield put({
          type: 'saveZeusHitRuleStatistics',
          payload: zeusHitRuleResponse.data,
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
    saveZeusFactorStatistics(state, action) {
      return {
        ...state,
        zeusFactorStatistics: action.payload,
      }
    },
    saveZeusRuleStatistics(state, action) {
      return {
        ...state,
        zeusRuleStatistics: action.payload,
      }
    },
    saveZeusHitRuleStatistics(state, action) {
      return {
        ...state,
        hitRulesStatistics: action.payload,
      }
    }
  }
}
