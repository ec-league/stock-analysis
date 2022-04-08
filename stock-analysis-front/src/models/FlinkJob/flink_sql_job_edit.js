import { queryFlinkJobDetail, rerunJob, updateFlinkSqlJob } from '@/services/FlinkJob/flink_job_list'
import { message } from 'antd'

export default {
  namespace: 'flink_sql_job_edit',

  state: {
    flinkSqlJobInfo: {
      name: '',
      type: '',
      status: '',
      priority: '',
      extInfo: '',
      jobConfig: {
        sourceIds: [],
        sinkIds: [],
        selectDbId: '',
        sql: '',
      },
      flinkConfig: {
        parallelism: 1
      }
    },
  },

  effects: {
    * querySqlJobDetail({ payload }, { call, put }) {
      const response = yield call(queryFlinkJobDetail, payload);

      if (!response) {
        message.error("获取Sql任务详情失败")
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'saveInfo',
          payload: response.data
        });
      }
    },

    * updateFlinkSqlJob({ payload }, { call, put }) {
      const response = yield call(updateFlinkSqlJob, payload);
      if (!response) {
        message.error("保存Sql失败")
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        message.success("保存成功")
      }
    },

    * saveSqlJobInfo({ payload }, { call, put }) {
      yield put({
        type: 'saveInfo',
        payload: payload,
      });
    },

    * rerunJob({ payload }, { call }) {
      console.log(payload)
      const response = yield call(rerunJob, payload);
      console.log(response)
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

    saveSqlJob(state, action) {
      const s = state
      s.flinkSqlJobInfo = action.payload
      return { ...state }
    }
  }
}
