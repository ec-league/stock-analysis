import { fetchExpressionParams, functorAdd } from '@/services/functor';
import { message } from 'antd';


export default {

  namespace: 'functor_add',

  state: {
    data: {},
    newFunctor: {},
    addResult: {
      loading: false,
      success: false,
    },
    expressionParams: []
  },

  effects: {
    * functorAdd({ payload }, { call, put }) {
      const response = yield call(functorAdd, payload);
      if (!response) {
        message.error('新增算子失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'addFunctor',
          payload: response.data,
        });
      }

      yield put({
        type: 'changeLoading',
      });
    },

    * setNewFunctorInfo({ payload }, { call, put }) {
      yield put({
        type: 'saveNewFunctorInfo',
        payload: payload,
      });
    },

    * fetchExpressionParams({ payload }, { call, put }) {
      const response = yield call(fetchExpressionParams, payload);
      if (!response) {
        message.error('获取表达式参数失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'getExpressionParams',
          payload: response.data,
        });
      }
    }
  },


  reducers: {

    addFunctor(state) {
      const result = state.addResult;
      result.success = true;
      return {
        ...state,
      }
    },

    changeLoading(state) {
      const result = state.addResult;
      result.loading = !result.loading;
      return {
        ...state,
      }
    },

    saveNewFunctorInfo(state, action) {
      const s = state;
      s.newFunctor = {
        ...action.payload,
      };
      return {
        ...state,
      };
    },

    getExpressionParams(state, action) {
      const s = state;
      for (let i = 0; i < action.payload.length; i++) {
        s.expressionParams.push({
          key: i,
          name: action.payload[i].name,
          description: '请输入参数描述',
          dataType: '请输入参数类型',
        });
      }
      return {
        ...state,
      };
    },
  },
};
