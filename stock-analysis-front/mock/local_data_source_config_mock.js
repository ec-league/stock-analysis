export default {
  'GET /api/data/query-local-data-source-configs.json': {
    success : true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: [
      {
        id: "123",
        sceneCode: "in_loan_behavior",
        table: "IN_LOAN_BEHAVIOR",
        variables: [
          "APP_NO",
          "CERTNO",
          "MOBILE_NO",
        ]
      }
    ],
  },
  'GET /api/data/query-local-data-source-configs-by-sceneCode.json': {
    success : true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: [
      {
        id: "123",
        sceneCode: "in_loan_behavior",
        table: "IN_LOAN_BEHAVIOR",
        variables: [
          "APP_NO",
          "CERTNO",
          "MOBILE_NO",
        ]
      }
    ],
  }
}
