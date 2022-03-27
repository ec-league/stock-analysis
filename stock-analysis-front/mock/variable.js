export default {
  'POST /api/variable/calculate-variable.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: {
      abc: 123,
      name: 'value'
    }

  },

  //获取所有基础变量
  'POST /api/variable/basic-variable-get.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: {
      'pagination': {
        'total': 200,
        'current': 1,
      },
      'pageData': [
        {
          'id': '1',
          'variableName': 'salary',
          'variableType': 'String',
          'opType': 'continues',
          'type': 'aps',
          'gmtCreate': '2019-08-19 12:08:09',
          'gmtModified': '2019-08-31 13:08:09'
        },
        {
          'id': '2',
          'variableName': 'sex',
          'variableType': 'String',
          'opType': 'categorical',
          'type': 'aps',
          'gmtCreate': '2019-08-19 13:08:09',
          'gmtModified': '2019-08-31 18:08:09',
        },
        {
          'id': '3',
          'variableName': 'creditScore',
          'variableType': 'String',
          'opType': 'continues',
          'type': 'aps',
          'gmtCreate': '2019-08-19 12:08:09',
          'gmtModified': '2019-08-31 13:08:09'
        },
        {
          'id': '4',
          'variableName': 'salary',
          'variableType': 'String',
          'opType': 'continues',
          'type': 'bis',
          'gmtCreate': '2019-08-19 13:08:09',
          'gmtModified': '2019-08-31 18:08:09',
        },
        {
          'id': '5',
          'variableName': 'creditScore',
          'variableType': 'String',
          'opType': 'continues',
          'gmtCreate': '2019-08-19 12:08:09',
          'gmtModified': '2019-08-31 13:08:09'
        },
        {
          'id': '6',
          'variableName': 'salary',
          'variableType': 'Integer',
          'opType': 'categorical',
          'type': 'bis',
          'gmtCreate': '2019-08-19 13:08:09',
          'gmtModified': '2019-08-31 18:08:09',
        },
        {
          'id': '7',
          'variableName': 'creditScore',
          'variableType': 'String',
          'opType': 'categorical',
          'type': 'bis',
          'gmtCreate': '2019-08-19 12:08:09',
          'gmtModified': '2019-08-31 13:08:09'
        },
        {
          'id': '8',
          'variableName': 'salary',
          'variableType': 'Integer',
          'opType': 'categorical',
          'type': 'bis',
          'gmtCreate': '2019-08-19 13:08:09',
          'gmtModified': '2019-08-31 18:08:09',
        },
        {
          'id': '9',
          'variableName': 'creditScore',
          'variableType': 'String',
          'opType': 'categorical',
          'type': 'bis',
          'gmtCreate': '2019-08-19 12:08:09',
          'gmtModified': '2019-08-31 13:08:09'
        },
        {
          'id': '10',
          'variableName': 'salary',
          'variableType': 'Integer',
          'opType': 'categorical',
          'type': 'bis',
          'gmtCreate': '2019-08-19 13:08:09',
          'gmtModified': '2019-08-31 18:08:09',
        },
        {
          'id': '11',
          'variableName': 'creditScore',
          'variableType': 'String',
          'opType': 'categorical',
          'type': 'bis',
          'gmtCreate': '2019-08-19 12:08:09',
          'gmtModified': '2019-08-31 13:08:09'
        },
        {
          'id': '12',
          'variableName': 'salary',
          'variableType': 'Integer',
          'opType': 'categorical',
          'type': 'bis',
          'gmtCreate': '2019-08-19 13:08:09',
          'gmtModified': '2019-08-31 18:08:09',
        },
        {
          'id': '13',
          'variableName': 'salary',
          'variableType': 'Integer',
          'opType': 'categorical',
          'gmtCreate': '2019-08-19 13:08:09',
          'gmtModified': '2019-08-31 18:08:09',
        },
        {
          'id': '14',
          'variableName': 'creditScore',
          'variableType': 'String',
          'opType': 'categorical',
          'type': 'bis',
          'gmtCreate': '2019-08-19 12:08:09',
          'gmtModified': '2019-08-31 13:08:09'
        },
        {
          'id': '15',
          'variableName': 'salary',
          'variableType': 'Integer',
          'opType': 'categorical',
          'type': 'bis',
          'gmtCreate': '2019-08-19 13:08:09',
          'gmtModified': '2019-08-31 18:08:09',
        },
      ]
    }
  },

  // //获取某条回溯记录
  // 'GET /api/variable/basic-variable/basic-variable-detail-even.json': {
  //   success: true,
  //   resultCode: 'SUCCESS',
  //   resultMsg: '成功',
  //   data: {
  //     'id': 2,
  //     'variableName': 'age',
  //     'variableType': 'classification',
  //     'desc': '这是一个工资变量',
  //     'gmtCreate': new Date(),
  //     'gmtModified': new Date(),
  //   }
  // },
  //
  // 'GET /api/variable/basic-variable/basic-variable-detail-odd.json': {
  //   success: true,
  //   resultCode: 'SUCCESS',
  //   resultMsg: '成功',
  //   data: {
  //     'id': 3,
  //     'variableName': 'age',
  //     'variableType': 'value',
  //     'gmtCreate': new Date(),
  //     'gmtModified': new Date(),
  //   }
  // },

  //获取衍生变量列表
  'POST /api/variable/derived-variable-list.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: {
      'pagination': {
        'total': 200,
        'current': 1,
      },
      'pageData': [
        {
          'id': '1',
          'variableName': 'salary',
          'variableType': 'String',
          'opType': 'continues',
          'type': 'model1',
          'gmtCreate': '2019-08-19 12:08:09',
          'gmtModified': '2019-08-31 13:08:09'
        },
        {
          'id': '2',
          'variableName': 'sex',
          'variableType': 'String',
          'opType': 'categorical',
          'type': 'model1',
          'gmtCreate': '2019-08-19 13:08:09',
          'gmtModified': '2019-08-31 18:08:09',
        },
        {
          'id': '3',
          'variableName': 'creditScore',
          'variableType': 'String',
          'opType': 'continues',
          'type': 'model1',
          'gmtCreate': '2019-08-19 12:08:09',
          'gmtModified': '2019-08-31 13:08:09'
        },
        {
          'id': '4',
          'variableName': 'salary',
          'variableType': 'String',
          'opType': 'continues',
          'type': 'model1',
          'gmtCreate': '2019-08-19 13:08:09',
          'gmtModified': '2019-08-31 18:08:09',
        },
        {
          'id': '5',
          'variableName': 'creditScore',
          'variableType': 'String',
          'opType': 'continues',
          'type': 'model1',
          'gmtCreate': '2019-08-19 12:08:09',
          'gmtModified': '2019-08-31 13:08:09'
        },
        {
          'id': '6',
          'variableName': 'salary',
          'variableType': 'Integer',
          'opType': 'categorical',
          'type': 'model1',
          'gmtCreate': '2019-08-19 13:08:09',
          'gmtModified': '2019-08-31 18:08:09',
        },
        {
          'id': '7',
          'variableName': 'creditScore',
          'variableType': 'String',
          'opType': 'categorical',
          'type': 'model1',
          'gmtCreate': '2019-08-19 12:08:09',
          'gmtModified': '2019-08-31 13:08:09'
        },
        {
          'id': '8',
          'variableName': 'salary',
          'variableType': 'Integer',
          'opType': 'categorical',
          'type': 'model1',
          'gmtCreate': '2019-08-19 13:08:09',
          'gmtModified': '2019-08-31 18:08:09',
        },
        {
          'id': '9',
          'variableName': 'creditScore',
          'variableType': 'String',
          'opType': 'categorical',
          'type': 'model1',
          'gmtCreate': '2019-08-19 12:08:09',
          'gmtModified': '2019-08-31 13:08:09'
        },
        {
          'id': '10',
          'variableName': 'salary',
          'variableType': 'Integer',
          'opType': 'categorical',
          'type': 'model1',
          'gmtCreate': '2019-08-19 13:08:09',
          'gmtModified': '2019-08-31 18:08:09',
        },
        {
          'id': '11',
          'variableName': 'creditScore',
          'variableType': 'String',
          'opType': 'categorical',
          'type': 'model1',
          'gmtCreate': '2019-08-19 12:08:09',
          'gmtModified': '2019-08-31 13:08:09'
        },
        {
          'id': '12',
          'variableName': 'salary',
          'variableType': 'Integer',
          'opType': 'categorical',
          'type': 'model1',
          'gmtCreate': '2019-08-19 13:08:09',
          'gmtModified': '2019-08-31 18:08:09',
        },
        {
          'id': '13',
          'variableName': 'salary',
          'variableType': 'Integer',
          'opType': 'categorical',
          'type': 'model1',
          'gmtCreate': '2019-08-19 13:08:09',
          'gmtModified': '2019-08-31 18:08:09',
        },
        {
          'id': '14',
          'variableName': 'creditScore',
          'variableType': 'String',
          'opType': 'categorical',
          'type': 'model1',
          'gmtCreate': '2019-08-19 12:08:09',
          'gmtModified': '2019-08-31 13:08:09'
        },
        {
          'id': '15',
          'variableName': 'salary',
          'variableType': 'Integer',
          'opType': 'categorical',
          'type': 'model1',
          'gmtCreate': '2019-08-19 13:08:09',
          'gmtModified': '2019-08-31 18:08:09',
        },
      ]
    },

  },

  //获取衍生变量详情
  'GET /api/variable/variable-detail.json':
    {
      "success": true,
      "resultCode": "SUCCESS",
      "resultMsg": "成功",
      "data": {
        "id": 32,
        "functorId": 4,
        "functorName": null,
        "variableName": "测试sum",
        "variableType": "INTEGER",
        "opType": "CATEGORICAL",
        "extInfo": null,
        "type": "derived",
        "gmtCreate": 1573803881000,
        "gmtModified": 1573854281000,
        "variableGraph":
          {
            nodes: [{
              id: "2",
              label: "本次交易信息"
            }, {
              id: "3",
              label: "上次交易信息"
            }, {
              id: "4",
              label: "两次时间间隔"
            }, {
              id: "5",
              label: "两次距离间隔"
            }, {
              id: "6",
              label: "时间标准化"
            }, {
              id: "7",
              label: "距离标准化",
            }, {
              id: "8",
              label: "两次交易速度",
            }],
            edges: [{
              source: "3",
              target: "5"
            }, {
              source: "2",
              target: "5"
            }, {
              source: "5",
              target: "7"
            }, {
              source: "2",
              target: "4"
            }, {
              source: "6",
              target: "8"
            }, {
              source: "3",
              target: "4"
            }, {
              source: "7",
              target: "8"
            }, {
              source: "4",
              target: "6"
            }]
          },
//   {
//   "id": "测试sum",
//   "children": [
//     {
//       "id": "assets",
//       "children": null,
//       "nodeName": "assets"
//     },
//     {
//       "id": "salary",
//       "children": null,
//       "nodeName": "salary"
//     }],
//   "nodeName": "测试sum",
//   "functor": "add"
// },
        "variableParams":
          [{
            "id": 17,
            "variableId": 32,
            "name": "x",
            "description": "入参x",
            "paramSource": "基础变量",
            "paramValue": "assets",
            "extInfo": null,
            "gmtCreate": 1573803881000,
            "gmtModified": 1573803881000
          }, {
            "id": 18,
            "variableId": 32,
            "name": "y",
            "description": "入参y",
            "paramSource": "基础变量",
            "paramValue": "salary",
            "extInfo": null,
            "gmtCreate": 1573803881000,
            "gmtModified": 1573803881000
          }],
        "functorDto":
          {
            "id":
              4,
            "name":
              "add",
            "description":
              "加法",
            "extInfo":
              null,
            "returnType":
              "LONG",
            "scriptSource":
              "BEAN",
            "gmtCreate":
              1573567203000,
            "gmtModified":
              1573567203000,
            "createBy":
              "admin",
            "functorParams":
              null
          }
      }
    },

  //获取衍生变量详情
  'GET /api/variable/variable-interval.json':
    {
      "success":
        true,
      "resultCode":
        "SUCCESS",
      "resultMsg":
        "成功",
      "data":
        {
          "id":
            69,
          "variableId":
            69,
          "statisticsInfo":
            {
              "ranges":
                [
                  {
                    "start": 0,
                    "end": 30,
                    "count": 120
                  },
                  {
                    "start": 30,
                    "end": 60,
                    "count": 110
                  },
                  {
                    "start": 60,
                    "end": 90,
                    "count": 140
                  },
                  {
                    "start": 90,
                    "end": 120,
                    "count": 50
                  },
                  {
                    "start": 120,
                    "end": 150,
                    "count": 80
                  },
                  {
                    "start": 150,
                    "end": 180,
                    "count": 120
                  },
                ],
              "groups":
                [{ "category": "overcast", "count": 687 }, {
                  "category": "sunny",
                  "count": 657
                }, { "category": "rain", "count": 656 }],
              "total":
                2000,
              "type":
                "CONTINUOUS",
              "max":
                0.0,
              "min":
                0.0
            }
          ,
          "onLine":
            true,
          "opType": "CONTINUOUS",
          "gmtCreate":
            1573214440000,
          "gmtModified":
            1573214440000
        }
    },

  'GET /api/variable/variable-statistics.json':
    {
      "success":
        true,
      "resultCode":
        "SUCCESS",
      "resultMsg":
        "成功",
      "data":
        {
          "id":
            69,
          "variableId":
            69,
          "statisticsInfo":
            {
              "ranges":
                [
                  {
                    "start": 0,
                    "end": 30,
                    "count": 120
                  },
                  {
                    "start": 30,
                    "end": 60,
                    "count": 110
                  },
                  {
                    "start": 60,
                    "end": 90,
                    "count": 140
                  },
                  {
                    "start": 90,
                    "end": 120,
                    "count": 50
                  },
                  {
                    "start": 120,
                    "end": 150,
                    "count": 80
                  },
                  {
                    "start": 150,
                    "end": 180,
                    "count": 120
                  },
                ],
              "groups":
                [{ "category": "overcast", "count": 687 }, {
                  "category": "sunny",
                  "count": 657
                }, { "category": "rain", "count": 656 }],
              "total":
                2000,
              "type":
                "CONTINUOUS",
              "max":
                0.0,
              "min":
                0.0
            }
          ,
          "onLine":
            true,
          "opType": "CONTINUOUS",
          "gmtCreate":
            1573214440000,
          "gmtModified":
            1573214440000
        }
    }
  ,


  'GET /api/variable/variable-statistics-offline.json': {
    'success': true,
    'resultCode': 'SUCCESS',
    'resultMsg': '成功',
    'data': {
      'id': 69,
      'variableId': 69,
      'offlineStatisticsInfo': [
        {
          'statisticsInfo': {
            'ranges': [
              {
                "start": 0,
                "end": 30,
                "count": 30
              },
              {
                "start": 30,
                "end": 60,
                "count": 20
              }
            ],
            'groups': [{ 'category': 'overcast', 'count': 687 }, {
              'category': 'sunny',
              'count': 657,
            }, { 'category': 'rain', 'count': 656 }],
          },
          'regressionId': 11,
          'total': 2000,
          'type': 'CONTINUOUS',
          'max': 0.0,
          'min': 0.0,
        },
        {
          'statisticsInfo': {
            'ranges': [
              {
                "start": 0,
                "end": 30,
                "count": 30
              },
              {
                "start": 30,
                "end": 60,
                "count": 20
              }
            ],
            'groups': [{ 'category': 'overcast', 'count': 67 }, {
              'category': 'sunny',
              'count': 50,
            }, { 'category': 'rain', 'count': 20 }],
          },
          'regressionId': 12,
          'total': 2000,
          'type': 'CONTINUOUS',
          'max': 0.0,
          'min': 0.0,
        }
      ],
      'onLine': false,
      'opType': 'CONTINUOUS',
      //标记是单次，hour, day定时任务
      'taskType': 'single',
      'gmtCreate': 1573214440000,
      'gmtModified': 1573214440000,
    },
  },


//根据名字获取衍生变量详情
  'GET /api/variable/variable-detail-by-name.json':
    {
      "success":
        true,
      "resultCode":
        "SUCCESS",
      "resultMsg":
        "成功",
      "data":
        {
          "id":
            1,
          "variableName":
            "creditScore",
          "variableType":
            "INTEGER",
          "opType":
            "CONTINUOUS",
          "type":
            "derived",
          "gmtCreate":
            "2019-08-19 12:08:09",
          "gmtModified":
            "2019-08-31 13:08:09",
          "variableGraph":
            {
              "functor":
                "测试",
              "variable":
                {
                  "id":
                    0,
                  "variableName":
                    "whatIdo",
                  "variableType":
                    "STRING",
                  "opType":
                    "CATEGORICAL",
                  "extInfo":
                    {}
                  ,
                  "type":
                    "derived",
                  "gmtCreate":
                    "Nov 8, 2019 9:54:21 AM",
                  "gmtModified":
                    "Nov 8, 2019 9:54:21 AM"
                }
              ,
              "id":
                "whatIdo",
              "children":
                [{
                  "variable": {
                    "id": 1,
                    "variableName": "temperature",
                    "variableType": "Double",
                    "opType": "CONTINUOUS",
                    "type": "basic",
                    "gmtCreate": "Nov 7, 2019 4:48:58 PM",
                    "gmtModified": "Nov 7, 2019 4:48:58 PM"
                  }, "id": "temperature", "nodeName": "temperature"
                }, {
                  "variable": {
                    "id": 2,
                    "variableName": "humidity",
                    "variableType": "Double",
                    "opType": "CONTINUOUS",
                    "type": "basic",
                    "gmtCreate": "Nov 7, 2019 4:49:39 PM",
                    "gmtModified": "Nov 7, 2019 4:49:39 PM"
                  }, "id": "humidity", "nodeName": "humidity"
                }, {
                  "variable": {
                    "id": 3,
                    "variableName": "windy",
                    "variableType": "String",
                    "opType": "CATEGORICAL",
                    "type": "basic",
                    "gmtCreate": "Nov 7, 2019 4:49:54 PM",
                    "gmtModified": "Nov 7, 2019 4:49:54 PM"
                  }, "id": "windy", "nodeName": "windy"
                }, {
                  "variable": {
                    "id": 4,
                    "variableName": "outlook",
                    "variableType": "String",
                    "opType": "CATEGORICAL",
                    "type": "basic",
                    "gmtCreate": "Nov 7, 2019 4:50:30 PM",
                    "gmtModified": "Nov 7, 2019 4:50:30 PM"
                  }, "id": "outlook", "nodeName": "outlook"
                }],
              "nodeName":
                "whatIdo"
            }
          ,
        }
      ,
    }
  ,

  'POST /api/variable/modify-variable.json':
    {
      "success":
        true,
      "resultCode":
        "SUCCESS",
      "resultMsg":
        "成功",
      "data":
        {}
    }
  ,
  'POST /api/variable/add-variable.json':
    {
      "success":
        true,
      "resultCode":
        "SUCCESS",
      "resultMsg":
        "成功",
      "data":
        {}
    }
  ,
}

