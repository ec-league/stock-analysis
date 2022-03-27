export default {
  'GET /api/model/model-file-list.json' : {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: [
      {
        id: '1',
        name: '人行模型1',
        desc: '这是一个牛逼的模型',
        createUserName: '三皇',
        updateUserName: '三皇',
        status: "USING",
        gmtCreate: '20190819',
        gmtModified: '20190831'
      },
      {
        id: '2',
        name: '人行模型2',
        desc: '这是一个弱鸡的模型',
        createUserName: '三皇',
        updateUserName: '三皇',
        gmtCreate: '20190819',
        gmtModified: '20190831',
        status: "NOT_USED",
      },
    ]
  },

  'GET /api/model/fuzzy-model-list.json' : {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: [
      {
        id: '2',
        name: '人行模型13',
        desc: 'des13',
        createUserName: '三皇',
        updateUserName: '三皇',
        status: "INIT",
        gmtCreate: '20190819',
        gmtModified: '20190831'
      },
      {
        id: '14',
        name: '人行模型14',
        desc: 'des4',
        createUserName: '三皇',
        updateUserName: '三皇',
        gmtCreate: '20190819',
        gmtModified: '20190831',
        status: "NOT_USED",
      },
    ]
  }

}
