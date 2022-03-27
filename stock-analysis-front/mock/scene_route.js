export default {

  'GET /api/data/scene-route-list.json': {
    "success": true,
    "resultCode": "SUCCESS",
    "resultMsg": "成功",
    "data": [
      {
        "id": 1,
        "sceneCode": "bis_pboc",
        "description": "bis查人行",
        "clientCode": "bis",
        "scene": "PBOC",
        "gmtCreate": 1572817989000,
        "gmtModified": 1572817989000
      }
    ]
  },

  'GET /api/data/select-scene-route-by-id.json': {
    "success": true,
    "resultCode": "SUCCESS",
    "resultMsg": "成功",
    "data":
      {
        "id": 1,
        "sceneCode": "bis_pboc",
        "description": "bis查人行",
        "clientCode": "bis",
        "scene": "PBOC",
        "gmtCreate": 1572817989000,
        "gmtModified": 1572817989000
      }

  },

  'POST /api/data/update-scene-route-by-id.json': {
    "success": true,
    "resultCode": "SUCCESS",
    "resultMsg": "成功",
    "data": [{
      "id": 1,
      "sceneCode": "bis_pboc",
      "description": "bis查人行",
      "clientCode": "bis",
      "scene": "PBOC",
      "gmtCreate": 1572817989000,
      "gmtModified": 1572817989000
    }, {
      "id": 2,
      "sceneCode": "cis_tongdun",
      "description": "cis查同盾",
      "clientCode": "cis",
      "scene": "TONGDUN",
      "gmtCreate": 1572817989000,
      "gmtModified": 1572817989000
    }, {
      "id": 3,
      "sceneCode": "cis_bairong",
      "description": "cis查百容",
      "clientCode": "cis",
      "scene": "BAIRONG",
      "gmtCreate": 1572817989000,
      "gmtModified": 1572817989000
    }]
  },

  'POST /api/data/scene-route-add.json': {
    "success": true,
    "resultCode": "SUCCESS",
    "resultMsg": "成功",
    "data": {}
  },
}
