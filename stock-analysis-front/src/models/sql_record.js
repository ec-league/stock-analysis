import { downResultFile, fetchByUserId } from '@/services/sql_record';
import { message } from 'antd';


export default {
  namespace: 'sql_record',

  state: {
    recordByUser: [],
  },

  effects: {
    * fetchByUserId({ payload }, { call, put }) {
      let response = yield call(fetchByUserId, payload);

      if (!response) {
        message.error('读取sql记录失败, 请稍后再试!');
      } else if (!response.success) {
        message.error(response.resultMsg);
      } else {
        yield put({
          type: 'getSqlRecord',
          payload: response.data,
        });
      }
    },

    * downResultFile({ payload }, { call, put }) {
      let response = yield call(downResultFile, payload);
      console.log("response", response);

      if (!response) {
        message.error('下载sql执行结果失败, 请稍后再试!');
      } else {
        yield put({ type: 'saveFile', payload: { blob: response } })
      }
    },
    * saveFile({ payload: { blob } }, { call }) {
      let fileName = "output.csv";
      if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, fileName);
      } else {
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        //此写法兼容可火狐浏览器
        document.body.appendChild(link);
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", false, false);
        link.dispatchEvent(evt);
        document.body.removeChild(link);
      }
    }
    ,
  },


  reducers: {
    getSqlRecord(state, action) {
      return {
        ...state,
        recordByUser: action.payload,
      };
    },

  }
}
