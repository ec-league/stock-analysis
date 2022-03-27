export default {
  'GET /api/dashboard/model-statistics.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: {
      modelCount: 12,
      usedCount: 8,
      notUsedCount: 4,
      grayCount: 6,
    }
  },

  'GET /api/dashboard/datasource-statistics.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: {
      total: 4302873,
      typeCount: 12,
      list: [
        {
          date: '2019-11-01',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2019-11-02',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2019-11-03',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2019-11-04',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2019-11-05',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2019-11-06',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2019-11-07',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2019-11-08',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2019-11-09',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2019-11-10',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2019-11-11',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2019-11-12',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2019-11-13',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2019-11-14',
          count: Math.floor(Math.random() * 100) + 10,
        },

      ]
    }
  },
  'GET /api/dashboard/task-statistics.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: {
      taskConfigCount: 6,
      single: 1,
      day: 2,
      hour: 3,
      taskDigestCount: 127674,
    }
  },
  'GET /api/dashboard/variable-statistics.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: {
      taskConfigCount: 6,
      single: 1,
      day: 2,
      hour: 3,
      taskDigestCount: 127674,
    }
  },
  'GET /api/dashboard/model-calculate-statistics.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: {
      calTotal: 96372,
      calDaily: 1227,
      hourList: [
        {
          date: '1点',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2点',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '3点',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '4点',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '5点',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '6点',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '7点',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '8点',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '9点',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '10点',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '11点',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '12点',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '13点',
          count: Math.floor(Math.random() * 100) + 10,
        },

      ],
      dayList: [
        {
          date: '2019-11-01',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2019-11-02',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2019-11-03',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2019-11-04',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2019-11-05',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2019-11-06',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2019-11-07',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2019-11-08',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2019-11-09',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2019-11-10',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2019-11-11',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2019-11-12',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2019-11-13',
          count: Math.floor(Math.random() * 100) + 10,
        },
        {
          date: '2019-11-14',
          count: Math.floor(Math.random() * 100) + 10,
        },

      ]
    }
  },
}

