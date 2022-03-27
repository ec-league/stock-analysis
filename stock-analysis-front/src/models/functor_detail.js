import { calculatorFunctor, fetchFunctorById } from '@/services/functor';
import { message } from 'antd';


export default {
  namespace: 'functor_detail',

  state: {
    data: {},
    newParams: {},
    result: ''
  },

  effects: {

    * fetchFunctorById({ payload }, { call, put }) {
      const response = yield call(fetchFunctorById, payload);
      if (!response) {
        message.error('查询算子详情列表失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'getFunctorById',
          payload: response.data,
        });
      }
    },

    * setNewParams({ payload }, { call, put }) {
      yield put({
        type: 'saveNewParams',
        payload: payload,
      });
    },

    * calculatorFunctor({ payload }, { call, put }) {
      const response = yield call(calculatorFunctor, payload);
      if (!response) {
        message.error('算子计算失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'calculateFunctor',
          payload: response.data,
        });
      }
    },
  },


  reducers: {
    getFunctorById(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },

    saveNewParams(state, action) {
      const s = state;
      s.newParams = {
        ...action.payload,
      };
      return {
        ...state,
      };
    },

    calculateFunctor(state, action) {
      return {
        ...state,
        result: action.payload,
      };
    },

  },
};
