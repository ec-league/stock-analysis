export default {
  'POST /api/white/file-upload.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: 1,
  },

  'GET /api/white/by-file.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
  },

  'POST /api/white/fetchWhiteList.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: [
      {
        "id":1,
        "name": "11.csv",
        "status": "SUCCESS",
        "totalRecord": "200",
        "successRecord": "190",
        "failRecord": "10",
        "gmtCreate": "2019-08-19 12:08:09",
        "uploadUser": "三皇",
        "gmtModified": "2019-08-19 12:08:09",
        "remarks": "备注"
      },
      {
        "id":2,
        "name": "11.csv",
        "status": "PROCESSING",
        "totalRecord": "200",
        "successRecord": "190",
        "failRecord": "10",
        "gmtCreate": "2019-08-19 12:08:09",
        "uploadUser": "三皇",
        "gmtModified": "2019-08-19 12:08:09",
        "remarks": "备注"
      }
    ]
  },

  'GET /api/white/downLoadFile.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
  },

  'POST /api/white/fetchFinishList.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: [
      {
        "fileName": "11.csv",
        "status": "INIT",
        "totalRecord": "200",
        "successRecord": "190",
        "failRecord": "10",
        "result": "SUCCESS",
        "gmtCreate": "2019-08-19 12:08:09",
        "uploadUser": "三皇",
        "gmtDeal": "2019-08-19 12:08:09",
        "dealUser": "三皇",
        "gmtModified": "2019-08-19 12:08:09",
        "remarks": "备注"
      },
      {
        "fileName": "11.csv",
        "status": "PROCESSING",
        "totalRecord": "200",
        "successRecord": "190",
        "failRecord": "10",
        "result": "FAIL",
        "gmtCreate": "2019-08-19 12:08:09",
        "uploadUser": "三皇",
        "gmtDeal": "2019-08-19 12:08:09",
        "dealUser": "三皇",
        "gmtModified": "2019-08-19 12:08:09",
        "remarks": "备注"
      }
    ]
  },

  'GET /api/white/downLoadResultFile.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',

  },

}

