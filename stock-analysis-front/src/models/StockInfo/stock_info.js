import { message } from 'antd';
import { fetchStockInfoList, saveStockInfo, startRegression } from "@/services/StockInfo/stock_info";

export default {
  namespace: 'stock_info',

  state: {
    stock_info_list: [],
  },

  effects: {
    * fetchList({ payload }, { call, put }) {
      const response = yield call(fetchStockInfoList);

      if (response && response.success) {
        yield put({
          type: 'saveList',
          payload: response.data,
        });
      } else {
        message.error("系统异常, 请稍后重试!");
      }
    },
    * saveStock({ payload }, { call }) {
      const resp = yield call(saveStockInfo, payload);

      if (resp && resp.success) {
        message.success("成功");
      } else {
        message.error("系统异常, 请稍后重试!");
      }
    },
    * startRegression({ payload }, { call }) {
      const resp= yield call(startRegression, payload);

      if (resp && resp.success) {
        message.success("开始回溯中");
      } else {
        message.error("系统异常, 请稍后重试!");
      }
    }
  },

  reducers: {
    saveList(state, action) {
      return {
        ...state,
        stock_info_list: action.payload,
      }
    }
  }
}
