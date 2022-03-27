export default {
  'POST /api/adjust/file-upload.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: 1,
  },

  'GET /api/adjust/by-file.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
  },

  'POST /api/adjust/fetchReadyList.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: [
      {
        "id":"1",
        "name": "11.csv",
        "stopStep": null,
        "status": "INIT",
        "recordNum": "200",
        "successNum": "190",
        "failNum": "10",
        "gmtCreate": "2019-08-19 12:08:09",
        "uploadUser": "三皇",
        "gmtModified": "2019-08-19 12:08:09",
        "remarks": "备注"
      },
      {
        "id":"2",
        "name": "11.csv",
        "stopStep": "1",
        "status": "SUCCESS",
        "recordNum": "200",
        "successNum": "190",
        "failNum": "10",
        "gmtCreate": "2019-08-19 12:08:09",
        "uploadUser": "三皇",
        "gmtModified": "2019-08-19 12:08:09",
        "remarks": "备注"
      },
      {
        "id":"3",
        "name": "11.csv",
        "stopStep": null,
        "status": "SUCCESS",
        "recordNum": "200",
        "successNum": "190",
        "failNum": "10",
        "gmtCreate": "2019-08-19 12:08:09",
        "uploadUser": "三皇",
        "gmtModified": "2019-08-19 12:08:09",
        "remarks": "备注"
      },
    ]
  },

  'POST /api/adjust/fetchSqlList.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: [
      {
        "id":"1",
        "name": "11.csv",
        "stopStep": null,
        "status": "INIT",
        "recordNum": "200",
        "successNum": "190",
        "failNum": "10",
        "gmtCreate": "2019-08-19 12:08:09",
        "uploadUser": "三皇",
        "gmtModified": "2019-08-19 12:08:09",
        "remarks": "备注"
      },
      {
        "id":"2",
        "name": "11.csv",
        "stopStep": "1",
        "status": "SUCCESS",
        "recordNum": "200",
        "successNum": "190",
        "failNum": "10",
        "gmtCreate": "2019-08-19 12:08:09",
        "uploadUser": "三皇",
        "gmtModified": "2019-08-19 12:08:09",
        "remarks": "备注"
      },
      {
        "id":"3",
        "name": "11.csv",
        "stopStep": null,
        "status": "SUCCESS",
        "recordNum": "200",
        "successNum": "190",
        "failNum": "10",
        "gmtCreate": "2019-08-19 12:08:09",
        "uploadUser": "三皇",
        "gmtModified": "2019-08-19 12:08:09",
        "remarks": "备注"
      },
    ]
  },

  'GET /api/adjust/downLoadFile.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
  },

  'POST /api/adjust/fetchFinishList.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: [
      {
        "name": "11.csv",
        "status": "INIT",
        "stopStep": null,
        "recordNum": "200",
        "successNum": "190",
        "failNum": "10",
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
        "stopStep": "1",
        "status": "PROCESSING",
        "recordNum": "200",
        "successNum": "190",
        "failNum": "10",
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

  'GET /api/adjust/downLoadResultFile.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',

  },

}

