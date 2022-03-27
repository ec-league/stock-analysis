export default {

  //获取某条回溯记录
  'GET /api/regression/regression-detail/regression-get.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: {
      'id': 1,
      'status': 'FINISH',
      'regressionProfile': {
        'hit': 370,
        'finish': 1000,
        'total': 1000,
      },
      'gmtCreate': new Date(),
      'gmtModified': new Date(),
    },
  },
};
