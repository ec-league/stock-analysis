import { message } from "antd";
import { addTask, querySupportDataSources } from "@/services/task";
import { queryModelFileList } from "@/services/model";

export default {
  namespace: 'task_add',

  state: {
    newTask: {
      taskName: '',
      taskDesc: '',
      taskType: 'single',
      recordNum: 1000,
      cronExpression: '',
      dataSource: '',
      modelId: 0,
      startDate: '',
      endDate: '',
    },
    dataSources: {},
    models: {},
    addResult: {
      loading: false,
      success: false,
    }
  },

  effects: {
    *setTaskInfo({ payload }, { call, put }) {
      yield put({
        type: "saveTaskInfo",
        payload: payload,
      });
    },

    *fetchModels({ payload }, { call, put }) {
      const response = yield call(queryModelFileList);

      if (!response) {
        message.error("查询支持数据源失败, 请稍后再试!");
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'saveModels',
          payload: response.data,
        });
      }
    },

    *addTask({ payload }, { call, put }) {
      yield put({
        type: 'changeLoading',
      });

      const response = yield call(addTask, payload);

      if (!response) {
        message.error("新增任务失败, 请稍后再试!");
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'saveResult',
        });
      }

      yield put({
        type: 'changeLoading',
      });
    },
  },

  reducers: {
    saveTaskInfo(state, action) {
      const s = state;
      s.newTask = { ...action.payload };

      return { ...state };
    },

    saveResult(state, action) {
      const result = state.addResult;

      result.success = true;

      return {
        ...state,
      }
    },

    changeLoading(state, action) {
      const result = state.addResult;

      result.loading = !result.loading;

      return {
        ...state,
      }
    },

    saveDataSources(state, action) {
      const d = state.dataSources;

      action.payload.forEach(ds => {
        d[ds.dataSource] = ds.dataSourceName;
      });

      return {
        ...state
      }
    },

    saveModels(state, action) {
      const models = state.models;

      action.payload.forEach(item => {
        models[item.id] = item.name;
      });

      return { ...state };
    }
  },
}
