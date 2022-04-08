import { message } from "antd";
import { queryFlinkJobDetail, querySqlVersions, versionRollback } from "@/services/FlinkJob/flink_console_service";

export default {
  namespace: 'flink_sql_job_detail',

  state: {
    flinkSqlJobInfo: {},
    oldVersionList: []
  },

  effects: {
    * querySqlJobDetail({ payload }, { call, put }) {
      const response = yield call(queryFlinkJobDetail, payload)

      if (!response) {
        message.error('获取Sql任务详情失败')
      } else if (!response.success) {
        message.error(response.resultMsg)
      } else {
        yield put({
          type: 'saveInfo',
          payload: response.data
        })
      }
    },

    * querySqlVersions({ payload }, { call, put }) {
      const response = yield call(querySqlVersions, payload);

      if (!response) {
        message.error("获取Sql历史版本失败")
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'saveVersions',
          payload: response.data
        });
      }
    },

    * versionRollback({ payload }, { call, put }) {
      const response = yield call(versionRollback, payload);

      if (!response) {
        message.error("回滚Sql历史版本失败")
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        location.reload();
      }
    },
  },

  reducers: {
    saveInfo(state, action) {
      const s = state
      s.flinkSqlJobInfo = action.payload
      return {
        ...s
      }
    },

    saveVersions(state, action) {
      const s = state;
      s.oldVersionList = action.payload;
      return {
        ...s
      }
    }
  }
}
