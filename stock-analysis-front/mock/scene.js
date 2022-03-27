export default {

  'GET /api/scene/scene-get-detail.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '成功',
    'data': {
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
          'flag': true,
        },
        {
          'modelId': 2,
          'name': 'file2',
          'desc': 'filedes2',
          'flag': false,
        },
        {
          'modelId': 3,
          'name': 'file3',
          'desc': 'filedes3',
          'flag': false,
        },
      ],
      'extInfo': '',
    },
  },

  'POST /api/scene/scene-get-List.json': {
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

  'POST /api/scene/add-scene.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '插入成功',
  },

  'PUT /api/scene/update-scene.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '更新成功',
  },
}
;
