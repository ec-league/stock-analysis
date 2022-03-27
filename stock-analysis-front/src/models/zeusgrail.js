import {
  queryZeusApprovalStatistics,
  queryZeusCallVolumeStatistics,
  queryPercentVolumeStatistics,
  queryZeusRejectedStatistics,
  queryZeusTolStatistics,
  queryZeusNewRuleStatistics,
  queryZeusPackageStatistics,
  queryZeusCustGroupStatistics,
  queryZeusCustLevelStatistics,
  queryZeusRiskStatistics
} from "@/services/zeusdashboard";

export default {
  namespace: 'zeusgrail',
  state: {
    approvalStatistics: [],
    callVolumeStatistics:[],
    rejectedStatistics:[],
    tolStatistics:[],
    percentVolumeStatistics:{},
    newRuleStatistics:[],
    packageStatistics:[],
    custGroupStatistics:[],
    custLevelStatistics:[],
    riskStatistics:[]
  },
  effects: {
    * fetch({ payload }, { call, put }) {
      //批核率
      const response = yield call(queryZeusApprovalStatistics,payload);
      if (!response || !response.success) {
      } else {
        yield put({
          type: 'saveApprovalStatistics',
          payload: response.data,
        });
      }
      //zeus大盘基本数据
      const rulePercentResponse = yield call(queryZeusCallVolumeStatistics);
      if (!rulePercentResponse || !rulePercentResponse.success) {
      } else {
        yield put({
          type: 'saveCallVolumeStatistics',
          payload: rulePercentResponse.data,
        });
      }
      //zeus大盘比率
      const percentVolumeResponse = yield call(queryPercentVolumeStatistics);
      if (!percentVolumeResponse || !percentVolumeResponse.success) {
      } else {
        yield put({
          type: 'savePercentVolumeStatistics',
          payload: percentVolumeResponse.data,
        });
      }
      //zeus大盘top
      const rejectedResponse = yield call(queryZeusRejectedStatistics);
      if (!rejectedResponse || !rejectedResponse.success) {
      } else {
        yield put({
          type: 'saveZeusRejectedStatistics',
          payload: rejectedResponse.data,
        });
      }
      //zeus四条流
      const tolResponse = yield call(queryZeusTolStatistics,payload);
      if (!tolResponse || !tolResponse.success) {
      } else {
        yield put({
          type: 'saveTolResponseStatistics',
          payload: tolResponse.data,
        });
      }
      //zeus最新规则
      const newRuleResponse = yield call(queryZeusNewRuleStatistics);
      if (!newRuleResponse || !newRuleResponse.success) {
      } else {
        yield put({
          type: 'saveZeusNewRuleStatistics',
          payload: newRuleResponse.data,
        });
      }
      //zeus最新拉取的包
      const newPackageResponse=yield call(queryZeusPackageStatistics);
      if (!newPackageResponse || !newPackageResponse.success) {
      } else {
        yield put({
          type: 'saveZeusPackageStatistics',
          payload: newPackageResponse.data,
        });
      }
      //zeus客群分布
      const newCustGroupResponse=yield call(queryZeusCustGroupStatistics);
      if (!newCustGroupResponse || !newCustGroupResponse.success) {
      } else {
        yield put({
          type: 'saveZeusCustGroupStatistics',
          payload: newCustGroupResponse.data,
        });
      }
      //zeus客户等级
      const newCustLevelResponse=yield call(queryZeusCustLevelStatistics);
      if (!newCustLevelResponse || !newCustLevelResponse.success) {
      } else {
        yield put({
          type: 'saveZeusCustLevelStatistics',
          payload: newCustLevelResponse.data,
        });
      }
      //zeus客户风险
      const newRiskResponse=yield call(queryZeusRiskStatistics);
      if (!newRiskResponse || !newRiskResponse.success) {
      } else {
        yield put({
          type: 'saveZeusRiskStatistics',
          payload: newRiskResponse.data,
        });
      }

    }
  },
  reducers: {
    saveApprovalStatistics(state, action) {
      const s = state;
      s.approvalStatistics = action.payload;
      return {
        ...state,
      }
    },
    //zeus大盘基本数据
    saveCallVolumeStatistics(state, action) {
      return {
        ...state,
        callVolumeStatistics: action.payload,
      }
    },
    //zeus大盘top
    saveZeusRejectedStatistics(state, action) {
      return {
        ...state,
        rejectedStatistics: action.payload,
      }
    },
    saveTolResponseStatistics(state, action) {
      return {
        ...state,
        tolStatistics: action.payload,
      }
    },
    //zeus最新规则
    saveZeusNewRuleStatistics(state, action) {
      return {
        ...state,
        newRuleStatistics: action.payload,
      }
    },
    //zeus最新包
    saveZeusPackageStatistics(state, action){
      return {
        ...state,
        packageStatistics: action.payload,
      }
    },
    //zeus比率数据
    savePercentVolumeStatistics(state, action){
      return {
        ...state,
        percentVolumeStatistics: action.payload,
      }
    },
    //zeus客群分布
    saveZeusCustGroupStatistics(state, action){
      return {
        ...state,
        custGroupStatistics: action.payload,
      }
    },
    //zeus客户等级
    saveZeusCustLevelStatistics(state, action){
      return {
        ...state,
        custLevelStatistics: action.payload,
      }
    },
    //zeus客户风险
    saveZeusRiskStatistics(state, action){
      return {
        ...state,
        riskStatistics: action.payload,
      }
    }
  }
}
