import { queryAllLocalDataSourceConfigs, queryLocalDataSourceConfigBySceneCode } from "@/services/local_data_source_config"

export default {
  namespace: 'local_data_source_config',

  state: {
    localDataSourceConfigs: [],
  },

  effects: {
    * fetch({ payload }, { call, put }) {
      const response = yield call(queryAllLocalDataSourceConfigs);

      if (!response) {

      } else if (!response.success) {

      } else {
        yield put({
          'type': 'saveAll',
          'payload': response.data,
        })
      }
    },

    * fetchBySceneCode({ payload }, { call, put }) {
      const response = yield call(queryLocalDataSourceConfigBySceneCode, payload);

      if (!response) {

      } else if (!response.success) {

      } else {
        yield put({
          'type': 'saveAll',
          'payload': response.data,
        })
      }
    },
  },

  reducers: {
    saveAll(state, action) {
      const s = state;

      s.localDataSourceConfigs = action.payload;

      const list = [];
      s.localDataSourceConfigs.forEach(config => {
        const tableName = config.table;
        const sceneCode = config.sceneCode;

        const variables = config.variables;

        const ll = [];

        variables.forEach(v => {
          ll.push({
            id: config.id,
            sceneCode: sceneCode,
            table: tableName,
            variableName: v
          });
        });

        const item = {
          id: config.id,
          sceneCode: sceneCode,
          table: tableName,
          variableName: '...',
          children: ll,
        };

        list.push(item);

      });

      s.localDataSourceConfigs = list;

      return { ...state }
    }
  }
}
