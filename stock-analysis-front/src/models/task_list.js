import { message } from "antd";
import { queryTaskList } from "@/services/task";

export default {
  namespace: 'task_list',

  state: {
    data: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryTaskList);

      if (!response) {
        message.error("查询任务列表源失败, 请稍后再试!");
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'saveTaskList',
          payload: response.data,
        });
      }
    },
  },

  reducers: {
    saveTaskList(state, action) {
      const s = state;

      s.data = action.payload;

      return { ...state };
    }
  },
}
