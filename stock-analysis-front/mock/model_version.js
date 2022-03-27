export default {
  'GET /api/model/model-version-list.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: [
      {
        id: '1',
        fileId: '1',
        version: '人行模型1',
        status: "USING",
        gmtCreate: '20190819',
        gmtModified: '20190831'
      },
      {
        id: '2',
        fileId: '1',
        version: '人行模型2',
        gmtCreate: '20190819',
        gmtModified: '20190831',
        status: "NOT_USED",
      },
    ]
  },
}
