import { addVarConfig, fetchVariableConfigByPage, fetchVariableConfigByVarId } from '@/services/variable_config';
import { message } from 'antd';

/**
 * model 存储state，model与service交互，service通过API与后台交互
 */
export default {
  namespace: 'variable_config',

  state: {
    //当前查询的回溯记录详情
    variable_config_list: [],
    currentVariableConfig: {
      id: null,
      variableId: null,
      variableName: '',
      interval: '',
    },
    pagination: {
      current: 0,
      page: 1,
      pageSize: 10,
    },

  },

  effects: {
    * fetchVariableConfigList({ payload }, { call, put }) {
      let response = yield call(fetchVariableConfigByPage, payload);

      if (!response) {
        message.error('查询变量配置列表失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        console.log('查询变量配置列表成功');
        yield put({
          type: 'saveVariableConfigList',
          payload: response.data,
        });
      }

    },

    * fetchVariableConfigByVarId(action, effects) {
      const { payload } = action;
      const { call, put } = effects;

      let response = yield call(fetchVariableConfigByVarId, payload);

      if (!response) {
        message.error('查询变量配置失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'saveCurrentVariableConfig',
          payload: response.data,
        });
      }

    },

    * addVariableInterval(action, effects) {
      const { payload } = action;
      const { call, put } = effects;

      let response = yield call(addVarConfig, payload);

      if (!response) {
        message.error('添加变量interval失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'fetchVariableConfigByVarId',
          payload: payload.variableId,
        });
      }
    },

    * updateLocalCurrentVariableInterval(action, effects) {
      const { payload } = action;
      const { put } = effects;

      yield put({
        type: 'saveCurrentVariableConfig',
        payload: payload,
      });

    },
  },


  reducers: {
    saveVariableConfigList(state, action) {
      const s = state;
      s.variable_config_list = action.payload.pageData;
      return { ...state };
    },

    saveCurrentVariableConfig(state, action) {
      const s = state;
      //变量配置不为null
      if (action.payload) {
        s.currentVariableConfig = action.payload;
      }
      return { ...state };
    },

  },
};
