export default {
  'POST /api/config/task-manage/add-task.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
  },

  'GET /api/config/task-manage/support-data-sources.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: [{
      "dataSource": "tongdun",
      "dataSourceName": "同盾",
    }, {
      "dataSource": "bairong",
      "dataSourceName": "百荣",
    }, {
      "dataSource": "suanhua",
      "dataSourceName": "算话",
    }, {
      "dataSource": "pengyuan",
      "dataSourceName": "鹏元",
    }, {
      "dataSource": "bairongmonth",
      "dataSourceName": "百荣月度",
    }, {
      "dataSource": "人行",
      "dataSourceName": "人行",
    }, {
      "dataSource": "gaiya",
      "dataSourceName": "盖亚",
    }, {
      "dataSource": "titan",
      "dataSourceName": "泰坦",
    }]
  },

  'GET /api/config/task-manage/task-list.json': {
    "success": true,
    "resultCode": "SUCCESS",
    "resultMsg": "成功",
    "data": [{
      "id": 7,
      "modelId": 17,
      "taskName": "新增的单次任务",
      "taskDescription": "新增的单次任务",
      "taskConfigProfile": {
        "taskType": "single",
        "endDate": "20191031",
        "startDate": "20191001",
        "executeFrequencyType": "single"
      },
      "status": "INIT",
      "createBy": "admin",
      "gmtCreate": 1572595754000,
      "gmtModified": 1572595754000,
      "fireDate": 1572645600000,
      "regressionDos": null
    }, {
      "id": 8,
      "modelId": 17,
      "taskName": "新增的单次任务",
      "taskDescription": "新增的单次任务",
      "taskConfigProfile": {
        "cronExpression": "* * 6 * * ?",
        "endDate": "20191031",
        "recordNum": "10000",
        "startDate": "20191001",
        "executeFrequencyType": "single"
      },
      "status": "INIT",
      "createBy": "admin",
      "gmtCreate": 1572608403000,
      "gmtModified": 1572608403000,
      "fireDate": 1572645600000,
      "regressionDos": null
    }, {
      "id": 9,
      "modelId": 17,
      "taskName": "新增的单次任务",
      "taskDescription": "新增的单次任务",
      "taskConfigProfile": {
        "cronExpression": "* * 6 * * ?",
        "endDate": "20191031",
        "recordNum": "10000",
        "startDate": "20191001",
        "executeFrequencyType": "single"
      },
      "status": "INIT",
      "createBy": "admin",
      "gmtCreate": 1572609080000,
      "gmtModified": 1572609080000,
      "fireDate": 1572645600000,
      "regressionDos": null
    }]
  },

  'GET /api/config/task-manage/task-detail.json': {
    "success": true,
    "resultCode": "SUCCESS",
    "resultMsg": "成功",
    "data": {
      "id": 9,
      "modelId": 17,
      "taskName": "新增的单次任务",
      "taskDescription": "新增的单次任务",
      "taskConfigProfile": {
        "cronExpression": "* * 6 * * ?",
        "endDate": "20191031",
        "recordNum": "10000",
        "startDate": "20191001",
        "executeFrequencyType": "single"
      },
      "status": "INIT",
      "createBy": "admin",
      "gmtCreate": 1572609080000,
      "gmtModified": 1572609080000,
      "fireDate": 1572645600000,
      "regressionDos": null
    }
  },

  'GET /api/config/task-manage/regression-record.json': {
    "success": true,
    "resultCode": "SUCCESS",
    "resultMsg": "成功",
    "data": [
      {
        "id": 1,
        "status": "FINISH",
        "regressionProfile": {
          "regressed": 370,
          "finish": 1000,
          "total": 1000,
        },
        "gmtCreate": 1572595754000,
        "gmtModified": 1572595754000
      },
      {
        "id": 2,
        "status": "FINISH",
        "regressionProfile": {
          "regressed": 970,
          "finish": 1000,
          "total": 1000,
        },
        "gmtCreate": 1572595754000,
        "gmtModified": 1572595754000
      },
      {
        "id": 3,
        "status": "PROCESSING",
        "regressionProfile": {
          "finish": 380,
          "total": 1000,
        },
        "gmtCreate": 1572595754000,
        "gmtModified": 1572595754000
      },
      {
        "id": 4,
        "status": "INIT",
        "regressionProfile": {},
        "gmtCreate": 1572595754000,
        "gmtModified": 1572595754000
      },
      {
        "id": 5,
        "status": "INIT",
        "regressionProfile": {},
        "gmtCreate": 1572595754000,
        "gmtModified": 1572595754000
      }
    ]
  },
}
