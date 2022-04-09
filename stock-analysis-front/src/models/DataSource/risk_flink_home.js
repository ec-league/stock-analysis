import {
  addFlinkTable,
  cleanFlinkFile,
  copyFileListAction,
  deleteFlinkTableById,
  exportFlinkTableConfigs,
  fetchColumnsByTableId,
  queryFilePreviewDataByPage,
  queryTableList,
  searchFlinkTableByName,
  updateFlinkTable,
  uploadFlinkFile
} from '@/services/DataSource/risk_flink_service';
import { message } from 'antd';

export default {
  namespace: 'risk_flink_home',

  state: {
    tableFromFlink: [],
    tables: [],
    replaceFileDir: '',
    targetKeys: [],
    fileCopyDir: '',
    copyTargetKeys: [],
    baseFileDir: '',
    previewFileVisible: false,
    previewFileInfo: {
      id: '',
      tableName: '',
      columnList: [],
      previewFileData: [],
      isEllipsis: false,
      pagination: {
        pageIndex: '',
        pageSize: 100,
        total: '',
        showQuickJumper: true,
      }
    }
  },

  effects: {
    * fetch({ payload }, { call, put, select }) {
      const response = yield call(queryTableList, payload);
      if (!response || !response.success) {
        return;
      }
      yield put({
        type: 'queryList',
        payload: Array.isArray(response.data) ? response.data : [],
      });
    },

    * fetchPreviewFile({ payload }, { call, put, select }) {

      if (typeof payload == 'undefined') {
        return
      }

      var previewFileInfo = yield select((state) => state.risk_flink_home.previewFileInfo)
      if (previewFileInfo.tableId != payload.tableId) {
        //update columnList && tableId
        const columnResponse = yield call(fetchColumnsByTableId, payload.tableId)
        if (!columnResponse || !columnResponse.success) {
          message.error('预览数据查询失败，原因：' + columnResponse.resultMsg)
          return
        }

        previewFileInfo = {
          ...previewFileInfo,
          id: payload.id,
          tableId: payload.tableId,
          tableName: payload.tableName,
          columnList: columnResponse.data,
        }
      }

      var pageParam = {
        id: payload.id,
        pageIndex: payload.pageIndex,
        pageSize: 100,
      }

      const response = yield call(queryFilePreviewDataByPage, pageParam)
      if (!response || !response.success) {
        message.error('预览数据查询失败，原因：' + response.resultMsg)
        return
      }
      if (!response.data) {
        message.error('预览数据为空')
        return;
      }

      const totalNum = response.data.totalNum;
      const previewFileData = response.data.previewFileData;
      if (typeof previewFileData == "undefined" || previewFileData == null) {
        return;
      }

      var previewFileVisible = yield select((state) => state.risk_flink_home.previewFileVisible)
      if (!previewFileVisible) {
        yield put({
          type: 'updatePreviewFileVisible',
          payload: true,
        })
      }

      yield put({
        type: 'setPreviewFileInfo',
        payload: {
          ...previewFileInfo,
          previewFileData: previewFileData,
          pagination: {
            pageIndex: payload.pageIndex,
            pageSize: 100,
            total: totalNum,
            showQuickJumper: true,
          },
        }
      })
    },

    * updatePreviewFileVisible({ payload }, { call, put }) {
      // 调用接口，payload是请求参数
      yield put({
        type: 'setPreviewFileVisible',
        payload: payload,
      })
    },

    * updateEllipsis({ payload }, { call, put, select }) {
      var previewFileInfo = yield select((state) => state.risk_flink_home.previewFileInfo)
      yield put({
        type: 'setPreviewFileInfo',
        payload: {
          ...previewFileInfo,
          isEllipsis: payload,
        }
      })
    },

    * updateFlinkTable({ payload }, { call, put }) {
      // 调用接口，payload是请求参数
      const response = yield call(updateFlinkTable, payload);
      if (!response || !response.success) {
        message.error("更新失败" + response.resultMsg)
      }
    },

    * deleteById({ payload }, { call, put }) {
      // 调用接口，payload是请求参数
      const response = yield call(deleteFlinkTableById, payload);
      if (!response || !response.success) {
        message.error("删除失败" + response.resultMsg)
        return;
      }
      // 弹框提示成功
      message.success("删除成功")
    },

    * insertFlinkTable({ payload }, { call, put, select }) {
      // 调用接口，payload是请求参数
      const response = yield call(addFlinkTable, payload);
      if (!response || !response.success) {
        message.error("添加失败" + response.resultMsg)
        return;
      }
      message.success("添加成功")
      location.reload(false);
      const newState = yield select(state => state.riskSchemaTable.tables)
      newState.push(payload);
      yield put({
        type: 'queryTables', //与reducers中的名称一致
        payload: newState, //这里将返回json中的data赋值给了payload
      });
    },

    * cleanFlinkFile({ payload }, { call, put, select }) {
      // 调用接口，payload是请求参数
      const response = yield call(cleanFlinkFile, payload);
      if (!response || !response.success) {
        message.error("清理失败" + response.resultMsg)
        return false;
      }
      message.success("清理成功")
      return true;
    },

    * searchFlink({ payload }, { call, put, select }) {
      // 调用接口，payload是请求参数
      const response = yield call(searchFlinkTableByName, payload);
      if (!response || !response.success) {
        return
      }
      yield put({
        type: 'queryList',
        payload: Array.isArray(response.data) ? response.data : [],
      })
    },

    * uploadFile({ payload }, { call, put }) {
      const response = yield call(uploadFlinkFile, payload)
      if (!response) {
        return
      } else if (!response.success) {
        message.error(response.resultMsg)
        return
      }
      message.success(response.resultMsg)
      return response
    },

    * updateReplaceFileDir({ payload }, { call, put }) {
      yield put({
        type: 'setReplaceFileDir',
        payload: payload,
      })
    },

    * updateFileCopyDir({ payload }, { call, put }) {
      yield put({
        type: 'setFileCopyDir',
        payload: payload,
      })
    },

    * updateTargetKeys({ payload }, { call, put }) {
      yield put({
        type: 'setTargetKeys',
        payload: payload,
      })
    },

    * updateCopyTargetKeys({ payload }, { call, put }) {
      yield put({
        type: 'setCopyTargetKeys',
        payload: payload,
      })
    },

    * downloadFileConfig({ payload, callback }, { call, put }) {
      const response = yield call(exportFlinkTableConfigs, payload);
      if (response instanceof Blob) {
        if (callback && typeof callback === 'function') {
          callback(response);
        }
      } else {
        message.warning('配置下载失败');
      }
    },

    * copyFileAction({ payload, callback }, { call, put }) {
      const response = yield call(copyFileListAction, payload);
      if (!response || !response.success) {
        message.error("拷贝失败：" + response.resultMsg)
      } else {
        message.success("拷贝成功")
      }
      return response;
    }
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        tableFromFlink: action.payload,
      };
    },

    queryTables(state, action) {
      return {
        ...state,
        tables: action.payload,  //将payload赋值给schema
      };
    },

    setReplaceFileDir(state, action) {
      return {
        ...state,
        replaceFileDir: action.payload,
      }
    },

    setFileCopyDir(state, action) {
      return {
        ...state,
        fileCopyDir: action.payload,
      }
    },

    setTargetKeys(state, action) {
      return {
        ...state,
        targetKeys: action.payload,
      }
    },

    setCopyTargetKeys(state, action) {
      return {
        ...state,
        copyTargetKeys: action.payload,
      }
    },

    setPreviewFileInfo(state, action) {
      return {
        ...state,
        previewFileInfo: action.payload,
      }
    },

    setPreviewFileVisible(state, action) {
      return {
        ...state,
        previewFileVisible: action.payload,
      }
    }
  },
};
