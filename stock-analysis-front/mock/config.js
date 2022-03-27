export default {
  'GET /api/config/scheduler-config-list.json': {
    "success": true,
    "resultCode": "SUCCESS",
    "resultMsg": "成功",
    "data": [{
      "id": 1,
      "taskType": "VARIABLE_DIGEST",
      "cronExpression": "0/10 * * * * ?",
      "limit": 100,
      "status": "T",
      "gmtCreate": 1574722499000,
      "gmtModified": 1574722499000
    }, {
      "id": 2,
      "taskType": "REGRESSION_EXECUTE",
      "cronExpression": "0 0/2 * * * ?",
      "limit": 10,
      "status": "T",
      "gmtCreate": 1574722499000,
      "gmtModified": 1574806119000
    }, {
      "id": 3,
      "taskType": "INVOKE_STATISTICS_HOUR",
      "cronExpression": "0 5/5 * * * ?",
      "limit": 1,
      "status": "F",
      "gmtCreate": 1574722499000,
      "gmtModified": 1574805701000
    }, {
      "id": 4,
      "taskType": "INVOKE_STATISTICS_DAILY",
      "cronExpression": "0 0 1/1 * * ?",
      "limit": 1,
      "status": "T",
      "gmtCreate": 1574722499000,
      "gmtModified": 1574722499000
    }, {
      "id": 5,
      "taskType": "DATASOURCE_STATISTICS_HOUR",
      "cronExpression": "0 5/5 * * * ?",
      "limit": 100,
      "status": "T",
      "gmtCreate": 1574722499000,
      "gmtModified": 1574806435000
    }, {
      "id": 6,
      "taskType": "VARIABLE_STATISTICS",
      "cronExpression": "0 0/2 * * * ?",
      "limit": 51,
      "status": "T",
      "gmtCreate": 1574722499000,
      "gmtModified": 1574805112000
    }, {
      "id": 7,
      "taskType": "VARIABLE_STATISTICS_DETAIL",
      "cronExpression": "0/10 * * * * ?",
      "limit": 10,
      "status": "T",
      "gmtCreate": 1574722499000,
      "gmtModified": 1574722499000
    }, {
      "id": 8,
      "taskType": "INVOKE_STATISTICS_DAILY",
      "cronExpression": "0 0 1/1 * * ?",
      "limit": 1,
      "status": "T",
      "gmtCreate": 1574722499000,
      "gmtModified": 1574722499000
    }, {
      "id": 9,
      "taskType": "DATASOURCE_STATISTICS_HOUR",
      "cronExpression": "0 5/5 * * * ?",
      "limit": 100,
      "status": "T",
      "gmtCreate": 1574722499000,
      "gmtModified": 1574806435000
    }, {
      "id": 10,
      "taskType": "VARIABLE_STATISTICS",
      "cronExpression": "0 0/2 * * * ?",
      "limit": 51,
      "status": "T",
      "gmtCreate": 1574722499000,
      "gmtModified": 1574805112000
    }, {
      "id": 11,
      "taskType": "VARIABLE_STATISTICS_DETAIL",
      "cronExpression": "0/10 * * * * ?",
      "limit": 10,
      "status": "F",
      "gmtCreate": 1574722499000,
      "gmtModified": 1574722499000
    }]
  },

  'GET /api/config/select-config-by-id.json': {
    "success": true,
    "resultCode": "SUCCESS",
    "resultMsg": "成功",
    "data": {
      "id": 3,
      "taskType": "VARIABLE_DIGEST",
      "cronExpression": "0/30 * * * * ?",
      "status": "T",
      "limit": 100,
      "gmtCreate": 1572818790000,
      "gmtModified": 1572818790000
    }
  },

  'POST /api/config/update-config-by-id.json': {
    "success": true,
    "resultCode": "SUCCESS",
    "resultMsg": "成功",
    "data": [{
      "id": 1,
      "taskType": "VARIABLE_DIGEST",
      "cronExpression": "0/10 * * * * ?",
      "limit": 100,
      "status": "T",
      "gmtCreate": 1574722499000,
      "gmtModified": 1574722499000
    }, {
      "id": 2,
      "taskType": "REGRESSION_EXECUTE",
      "cronExpression": "0 0/2 * * * ?",
      "limit": 10,
      "status": "T",
      "gmtCreate": 1574722499000,
      "gmtModified": 1574806119000
    }, {
      "id": 3,
      "taskType": "INVOKE_STATISTICS_HOUR",
      "cronExpression": "0 5/5 * * * ?",
      "limit": 1,
      "status": "T",
      "gmtCreate": 1574722499000,
      "gmtModified": 1574805701000
    }, {
      "id": 4,
      "taskType": "INVOKE_STATISTICS_DAILY",
      "cronExpression": "0 0 1/1 * * ?",
      "limit": 1,
      "status": "T",
      "gmtCreate": 1574722499000,
      "gmtModified": 1574722499000
    }, {
      "id": 5,
      "taskType": "DATASOURCE_STATISTICS_HOUR",
      "cronExpression": "0 5/5 * * * ?",
      "limit": 100,
      "status": "T",
      "gmtCreate": 1574722499000,
      "gmtModified": 1574806435000
    }, {
      "id": 6,
      "taskType": "VARIABLE_STATISTICS",
      "cronExpression": "0 0/2 * * * ?",
      "limit": 51,
      "status": "T",
      "gmtCreate": 1574722499000,
      "gmtModified": 1574805112000
    }, {
      "id": 7,
      "taskType": "VARIABLE_STATISTICS_DETAIL",
      "cronExpression": "0/10 * * * * ?",
      "limit": 10,
      "status": "T",
      "gmtCreate": 1574722499000,
      "gmtModified": 1574722499000
    }]
  },

  'GET /api/config/dynamic-resource-list.json': {
    "success": true,
    "resultCode": "SUCCESS",
    "resultMsg": "成功",
    "data": [
      {
        "id": 1,
        "name": "主节点开关",
        "description": "用于判断调度节点",
        "dataKey": "task.master.info",
        "value": "10.252.23.215",
        "gmtCreate": 1572817989000,
        "gmtModified": 1572817989000
      }
    ]
  },

  'GET /api/config/select-resource-by-id.json': {
    "success": true,
    "resultCode": "SUCCESS",
    "resultMsg": "成功",
    "data":
      {
        "id": 3,
        "name": "主节点开关",
        "description": "用于判断调度节点",
        "dataKey": "task.master.info",
        "value": "10.252.23.3",
        "gmtCreate": 1572817989000,
        "gmtModified": 1572817989000
      }

  },

  'POST /api/config/update-resource-by-id.json': {
    "success": true,
    "resultCode": "SUCCESS",
    "resultMsg": "成功",
    "data": [{
      "id": 1,
      "name": "主节点开关",
      "description": "用于判断调度节点",
      "dataKey": "task.master.info",
      "value": "10.252.23.1",
      "gmtCreate": 1572817989000,
      "gmtModified": 1572817989000
    }, {
      "id": 2,
      "name": "主节点开关",
      "description": "用于判断调度节点",
      "dataKey": "task.master.info",
      "value": "10.252.23.2",
      "gmtCreate": 1572817989000,
      "gmtModified": 1572817989000
    }, {
      "id": 3,
      "name": "主节点开关",
      "description": "用于判断调度节点",
      "dataKey": "task.master.info",
      "value": "10.252.23.2",
      "gmtCreate": 1572817989000,
      "gmtModified": 1572817989000
    }]
  },

  'POST /api/config/update-resource-add.json': {
    "success": true,
    "resultCode": "SUCCESS",
    "resultMsg": "成功",
    "data": {}
  },
}
