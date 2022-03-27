export default {

  'GET /api/database/database-resource-list.json': {
    "success": true,
    "resultCode": "SUCCESS",
    "resultMsg": "成功",
    "data": [
      {
        "id": 1,
        "name": "shuat2",
        "type": "MYSQL",
        "description": "上海uat2",
        "url": "jdbc:db2://10.250.9.40:50010/shuatdb2",
        "username": "aicappusr",
        "gmtCreate": "2019-08-19 12:08:09",
        "gmtModified": "2019-08-31 13:08:09",
      }
    ]
  },

  'GET /api/database/select-database-resource-by-id.json': {
    "success": true,
    "resultCode": "SUCCESS",
    "resultMsg": "成功",
    "data":
      {
        "id": 1,
        "name": "shuat2",
        "type": "MYSQL",
        "description": "上海uat2",
        "url": "jdbc:db2://10.250.9.40:50010/shuatdb2",
        "username": "aicappusr",
        "password": "aicappusr",
        "gmtCreate": "2019-08-19 12:08:09",
        "gmtModified": "2019-08-31 13:08:09",
      }

  },

  'POST /api/database/update-database-resource-by-id.json': {
    "success": true,
    "resultCode": "SUCCESS",
    "resultMsg": "成功",
    "data": [{
      "id": 1,
      "name": "shuat1",
      "type": "MYSQL",
      "description": "上海uat1",
      "url": "jdbc:db2://10.250.9.40:50010/shuatdb1",
      "username": "aicappusr",
      "gmtCreate": "2019-08-19 12:08:09",
      "gmtModified": "2019-08-31 13:08:09",
    }, {
      "id": 2,
      "name": "shuat2",
      "type": "BD2",
      "description": "上海uat2",
      "url": "jdbc:db2://10.250.9.40:50010/shuatdb2",
      "username": "aicappusr",
      "gmtCreate": "2019-08-19 12:08:09",
      "gmtModified": "2019-08-31 13:08:09",
    }, {
      "id": 3,
      "name": "shuat3",
      "type": "MYSQL",
      "description": "上海uat3",
      "url": "jdbc:db2://10.250.9.40:50010/shuatdb3",
      "username": "aicappusr",
      "gmtCreate": "2019-08-19 12:08:09",
      "gmtModified": "2019-08-31 13:08:09",
    }]
  },

  'POST /api/database/database-resource-add.json': {
    "success": true,
    "resultCode": "SUCCESS",
    "resultMsg": "成功",
    "data": {}
  },
}
