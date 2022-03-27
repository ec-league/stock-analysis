import { derivedVariableAdd, varifyParams } from '@/services/variable';
import { fetchFunctorByName } from '@/services/functor';
import { message } from 'antd';


export default {

  namespace: 'derived_variable_add',

  state: {
    data: {},
    newVariable: {},
    addResult: {
      success: false,
    },
    functor: {},
    functorParams: [],
    dataSource: [],
  },

  effects: {
    * derivedVariableAdd({ payload }, { call, put }) {
      let response = yield call(derivedVariableAdd, payload);
      //debugger
      if (!response) {
        message.error('新增衍生变量失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'addDerived',
          payload: response.data,
        });
      }
    },

    * setNewVariableInfo({ payload }, { call, put }) {
      yield put({
        type: 'saveNewVariableInfo',
        payload: payload,
      });
    },

    * fetchFunctor({ payload }, { call, put }) {
      const response = yield call(fetchFunctorByName, payload);
      if (!response) {
        message.error('新增衍生变量失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'queryFunctor',
          payload: response.data,
        });
      }
    },

    * varifyParams({ payload }, { call, put }) {
      const response = yield call(varifyParams, payload);
      if (!response) {
        message.error('新增衍生变量失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'queryDetailByName',
          payload: response.data,
        });
      }
    },
  },


  reducers: {

    addDerived(state) {
      const dataSource = [];
      return {
        ...state,
        dataSource: dataSource,
      };
    },

    saveNewVariableInfo(state, action) {
      const s = state;
      s.newVariable = {
        ...action.payload,
      };
      return {
        ...state,
      };
    },

    queryFunctor(state, action) {
      const functorParams = action.payload.functorParams;
      const dataSource = [];
      for (let i = 0; i < functorParams.length; i++) {
        dataSource.push({
          key: i,
          functorId: functorParams[i].functorId,
          name: functorParams[i].name,
          description: functorParams[i].description,
          paramSource: '请输入变量来源',
          paramValue: '参数对应变量',
        })
      }
      return {
        ...state,
        functor: action.payload,
        functorParams: functorParams,
        dataSource: dataSource,
      };
    },
  },
};
