import { queryModelFileDetail } from "@/services/model";
import { queryRegressionRecord, queryTaskDetail } from "@/services/task";
import { message } from "antd";

export default {
  namespace: 'task_detail',

  state: {
    taskInfo: {
      modelId: 0,
    },
    modelInfo: {},
    regressions: [],
  },

  effects: {
    * fetch({ payload }, { call, put }) {
      let response = yield call(queryTaskDetail, payload);

      if (!response) {
        message.error("查询任务列表源失败, 请稍后再试!");
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'saveTaskDetail',
          payload: response.data,
        });
      }

      const modelId = response.data.modelId;

      response = yield call(queryModelFileDetail, modelId);

      if (!response) {
        message.error("查询回溯模型失败, 请稍后再试!");
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'saveModelInfo',
          payload: response.data,
        });
      }

      response = yield call(queryRegressionRecord, payload);

      if (!response) {
        message.error("查询回溯记录失败, 请稍后再试!");
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'saveRegressionRecord',
          payload: response.data,
        });
      }
    }
  },

  reducers: {
    saveTaskDetail(state, action) {
      const s = state;

      s.taskInfo = action.payload;

      return { ...state };
    },

    saveModelInfo(state, action) {
      const s = state;

      s.modelInfo = action.payload;

      return { ...state };
    },

    saveRegressionRecord(state, action) {
      const s = state;

      s.regressions = action.payload;

      return { ...state };
    },
  }
}
