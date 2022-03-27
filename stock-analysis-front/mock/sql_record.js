export default {
  'GET /api/sql/queryRecordByUser.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: [{
      "id": 1,
      "jobId": "e363d707bfd4fc269a5e24311514ccdc",
      "jobType": "201912111704007640afc15740703377",
      "status": "SUCCESS",
      "filePath": "/Users/mtdp/Downloads/testCsv.csv",
      "gmtCreate": "2019-12-11 17:04:00",
      "jobInfo": "{\"select * from athena_mis.ROLE;\"}"
    }]

  },
  'POST /api/sql/downResultFile.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    data: "ï»¿ID,SERIALNO,EXTERNAL_SERIAL_NO,DATA_TYPE,BASE_DATA,EXT_INFO,GMT_CREATE,GMT_MODIFIED\n" +
    "1,20200120104822570a9fef6378336067,20200120104822291a9fef6375138637,test_test,\"{\"\"work\"\":\"\"0\"\",\"\"age\"\":\"\"26\"\"}\",{},2020/1/20 10:48,2020/1/20 10:48\n" +
    "2,20200120105025567a9fef6371349883,20200120105025447a9fef6372192051,test_test,\"{\"\"work\"\":\"\"1\"\",\"\"age2\"\":\"\"35\"\"}\",{},2020/1/20 10:50,2020/1/20 10:50"

  },
}
