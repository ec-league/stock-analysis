export default {
  'POST /api/model/model-file-upload.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: 1,
  },

  'GET /api/model/model-file-invalidate.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: {
      "fileId": 34,
      "name": "test",
      "desc": "test",
      "status": "NOT_USE",
      "createUserName": "三皇",
      "updateUserName": "三皇",
    }
  },

  'GET /api/model/model-file-validate.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: {
      "fileId": 34,
      "name": "test",
      "desc": "test",
      "status": "VERIFY_SUCCESS",
      "createUserName": "三皇",
      "updateUserName": "三皇",
    }
  }
}

