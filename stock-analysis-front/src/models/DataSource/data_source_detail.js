import { ERROR_MSG } from "@/utils/CommonUtils";
import { message } from 'antd';
import { queryDataSourceDetail } from "@/services/DataSource/data_source_detail";

export default {
  namespace: 'data_source_detail',
  state: {
    detail: {}
  },

  effects: {
    * fetch({ payload }, { call, put }) {
      const resp = yield call(queryDataSourceDetail, payload);

      if (!resp || !resp.success) {
        message.error(resp ? resp.resultMsg : ERROR_MSG)
      } else {
        yield put({
          type: 'saveDetail',
          payload: resp.data,
        })
      }
    }
  },

  reducers: {
    saveDetail(state, action) {
      return {
        ...state,
        detail: action.payload,
      }
    }
  }
}
