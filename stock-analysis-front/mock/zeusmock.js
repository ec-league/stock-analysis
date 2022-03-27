export default {
  'GET /api/strategy/dashboard/model-statistics.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: {
      routerCount: 12,
      sceneCount:36,
      ruleCount: 87,
      factorCount: 118,
      paramCount: 308,
      decisionCount: 127,
      usedCount1: 4,
      usedCount2: 20,
      usedCount3: 50,
      usedCount4: 107,
      usedCount5: 275,
      usedCount6: 100,

    }
  },


  'GET /api/strategy/dashboard/factorpercent-statistics.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: [
        {
          item: "就绪",
          count: 40
        },
        {
          item: "未测试",
          count: 21
        }

      ]

  },
  'GET /api/strategy/dashboard/rulepercent-statistics.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data:  [
        {
          item: "生效",
          count: 40
        },
        {
          item: "标记",
          count: 21
        },
        {
          item: "离线",
          count: 17
        }

      ]

  },
  'GET /api/strategy/decision/sceneFlow-statistics.json':{

    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    'data': {
      'pageData': [
        {
          'id': 1,
          'sceneName': 's1',
          'description': 'scene1',
          'gmtCreate': new Date(),
          'gmtModified': new Date(),
          'modelExtsDto': [
            {
              'modelId': 1,
              'name': 'file1',
              'desc': 'filedes1',
              'flag': false,
            },
          ],
          'extInfo': '',
        },
        {
          'id': 2,
          'sceneName': 's2',
          'description': 'scene2',
          'gmtCreate': new Date(),
          'gmtModified': new Date(),
          'modelExtsDto': [
            {
              'modelId': 1,
              'name': 'file1',
              'desc': 'filedes1',
              'flag': false,
            },
            {
              'modelId': 2,
              'name': 'file2',
              'desc': 'filedes2',
              'flag': false,
            },
          ],
          'extInfo': '',
        },
        {
          'id': 3,
          'sceneName': 's3',
          'description': 'scene3',
          'gmtCreate': new Date(),
          'gmtModified': new Date(),
          'modelExtsDto': [
            {
              'modelId': 1,
              'name': 'file1',
              'desc': 'filedes1',
              'flag': false,
            },
          ],
          'extInfo': '',
        },
      ],
      'pagination': {
        'total': 3,
        'current': 1,
        'pageSize': 2,
      },
    },
  },
  'POST /api/strategy/decision/decision-flow.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    'data': {
      'pageData': [
        {
          'id': 1,
          'sceneName': 's1',
          'description': 'scene1',
          'gmtCreate': new Date(),
          'gmtModified': new Date(),
          'modelExtsDto': [
            {
              'modelId': 1,
              'name': 'file1',
              'desc': 'filedes1',
              'flag': false,
            },
          ],
          'extInfo': '',
        },
        {
          'id': 2,
          'sceneName': 's2',
          'description': 'scene2',
          'gmtCreate': new Date(),
          'gmtModified': new Date(),
          'modelExtsDto': [
            {
              'modelId': 1,
              'name': 'file1',
              'desc': 'filedes1',
              'flag': false,
            },
            {
              'modelId': 2,
              'name': 'file2',
              'desc': 'filedes2',
              'flag': false,
            },
          ],
          'extInfo': '',
        },
        {
          'id': 3,
          'sceneName': 's3',
          'description': 'scene3',
          'gmtCreate': new Date(),
          'gmtModified': new Date(),
          'modelExtsDto': [
            {
              'modelId': 1,
              'name': 'file1',
              'desc': 'filedes1',
              'flag': false,
            },
          ],
          'extInfo': '',
        },
      ],
      'pagination': {
        'total': 3,
        'current': 1,
        'pageSize': 2,
      },
    },
  },

    //zeus大盘基本数据
  'GET /api/strategy/dashboard/CallVolume-statistics.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: {
      totalCount:2,
      passCount:1,
      rejectCount:1,
      manualCount:1
    }
  },
  //基础指标
  'GET /api/strategy/dashboard/PercentVolume-statistics.json':{
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: {
      weekPassFlag:"up",
      dayManualFlag:"down",
      weekPassPercent:22,
      dayRejectFlag:"down",
      dayRejectPercent:9,
      dayTotalPercent:33,
      weekManualPercent:22,
      dayPassPercent:9,
      dayManualPercent:9,
      dayTotalFlag:"down",
      weekTotalFlag:"down",
      weekRejectPercent:22,
      dayPassFlag:"down",
      weekManualFlag:"up",
      weekTotalPercent:167,
      weekRejectFlag:"up"
    }



  },
  //审批
  'GET /api/strategy/dashboard/approval-statistics.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: {
      countList:[
        {
          key:"0",
          count:8
        },
        {
          key:"1",
          count:4
        }
        ],
      aCountList: [
        {
          count:7.75,
          key:"1"
        },
        {
          key:"0",
          count:7.75
        }
        ]
    }

  },
    //zeus大盘top
  'GET /api/strategy/dashboard/rejected-statistics.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: [

      {
        rule: "规则1",
        count: 86
      },
      {
        rule: "规则2",
        count: 131
      },
      {
        rule: "规则3",
        count: 1317
      },
      {
        rule: "规则4",
        count: 3213
      },
      {
        rule: "规则5",
        count: 13170
      }
    ]

  },
  'GET /api/strategy/dashboard/tol-statistics.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data : [{"State":"查人行","查人行":5},{"不查人行":5,"State":"不查人行"},{"State":"查三方","查三方":31},{"不查三方":31,"State":"不查三方"},{"一审通过":36,"State":"批件","二审通过":36},{"一审拒绝":36,"State":"拒件","二审拒绝":36},{"一审转人工":36,"State":"转人工","二审转人工":36}]
  },
    //zeus最新规则
  'GET /api/strategy/dashboard/newrule-statistics.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: [{"creator":null,"expression":null,"modifier":null,"modtime":1579143704,"originExpression":null,"type":null,"factorIdList":null,"addtime":1547628302,"editMode":null,"name":"rule_toman","alias":"其他银行转人工规则","id":1,"status":null}]
  },
  //zeus策略包
  'GET /api/strategy/dashboard/package-statistics.json':{
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: [{"previousId":null,"creator":null,"modifier":null,"modtime":null,"nameCn":"策略包V1_0004","addtime":1575385427,"name":"package_V1_0004","comment":null,"id":1,"multiLevelRouterSceneIds":null,"downloadFileUrl":null,"downloadCount":null,"status":null},{"previousId":null,"creator":null,"modifier":null,"modtime":null,"nameCn":"策略包V1_0004","addtime":1575385427,"name":"package_V1_0004","comment":null,"id":2,"multiLevelRouterSceneIds":null,"downloadFileUrl":null,"downloadCount":null,"status":null}]

  },
  //zeus客群分布
  'Get /api/strategy/dashboard/custgroup-statistics.json':{
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data:[{"type":"A", "value":21}, {"type":"B", "value":26}, {"type":"C", "value":14}, {"type":"D", "value":34}, {"type":"E", "value":14}]
  },
  //zeus客户等级
  'Get /api/strategy/dashboard/custLevel-statistics.json':{
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data:[{"type":"1", "value":24}, {"type":2, "value":34}, {"type":3, "value":64}, {"type":4, "value":20}, {"type":5, "value":94}, {"type":6, "value":14}]
  },
  //zeus客户风险
  'Get /api/strategy/dashboard/risk-statistics.json':{
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data:[{"type":"降级-负面信息","value":24},{"type":"降级-高负债","value":45},{"type":"降级-城市不稳定","value":30}]
  },
  //zeus规则分布
  'Get /api/strategy/dashboard/hitRule-statistics.json':{
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data:[{"ruleId":117,"sceneId":32,"ruleName":"测试规则","sceneName":"lusijie","ruleCount":3,"sceneCount":10},{"ruleId":88,"sceneId":18,"ruleName":"其他银行转人工规则","sceneName":"通联一审","ruleCount":20,"sceneCount":50},{"ruleId":88,"sceneId":19,"ruleName":"其他银行转人工规则","sceneName":"通联二审","ruleCount":70,"sceneCount":20}]
  }

}

