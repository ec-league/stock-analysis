export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
      {
        component: '404',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      {
        path: '/',
        redirect: '/model-apply-dashboard',
      },
      {
        path: '/model-apply-dashboard',
        name: '模型应用总览',
        icon: 'dashboard',
        component: './ModelApply/ModelDashboard',
      },
      {
        path: '/business',
        name: '业务大盘',
        icon: 'dashboard',
        routes: [
          {
            path: '/business/pre-credit',
            name: '贷前',
            icon: 'unordered-list',
            component: './ModelFile/ModelFileList',
          },
          {
            path: '/business/in-credit',
            name: '贷中',
            icon: 'unordered-list',
            component: './ModelFile/ModelFileList',
          },
          {
            path: '/business/post-credit',
            name: '贷后',
            icon: 'unordered-list',
            component: './ModelFile/ModelFileList',
          },
        ]
      },
      {
        path: '/in-credit',
        name: '贷中管理',
        icon: 'unordered-list',
        routes:[
          {
            path:'/in-credit/adjustment',
            name:'调额',
            icon:'unordered-list',
            routes:[
              {
                path:'/in-credit/adjustment/adjustList',
                name:'调额列表',
                icon:'unordered-list',
                component:'./InCredit/Adjustment/AdjustList'
              },
              {
                path:'/in-credit/adjustment/byFile',
                name:'文件调额',
                icon:'unordered-list',
                component:'./InCredit/Adjustment/ByFile'
              },
              {
                path:'/in-credit/adjustment/bySql',
                name:'脚本调额',
                icon:'unordered-list',
                component:'./InCredit/Adjustment/BySql'
              }
            ]
          },
          // {
          //   path:'/in-credit/white',
          //   name:'白名单',
          //   icon:'unordered-list',
          //   routes:[
          //     {
          //       path:'/in-credit/white/fileList',
          //       name:'白名单文件列表',
          //       icon:'unordered-list',
          //       component:'./InCredit/White/FileList'
          //     },
          //     {
          //       path:'/in-credit/white/fileUpload',
          //       name:'白名单文件上传',
          //       icon:'unordered-list',
          //       component:'./InCredit/White/FileUpload'
          //     }
          //   ]
          // }
        ]
      },
      {
        path: '/data',
        name: '数据处理',
        icon: 'dashboard',
        routes: [
          {
            path: '/data/data-workspace',
            name: '数据工作台',
            component: './Data/DataWorkspace',
            icon: 'experiment'
          },
          {
            path: '/data/sql-record-by-user',
            component: './SqlRecord/RecordByUser'
          },
          {
            path: '/data/data-link-config',
            name: '数据源链接配置',
            component: './Data/DataLinkList',
            icon: 'setting'
          },
          {
            path: '/data/data-link-add',
            component: './Data/AddDataLink',
          },
          {
            path: '/data/functor',
            icon: 'calculator',
            name: '算子管理',
            routes: [
              {
                path: '/data/functor/functor-list',
                name: '算子列表',
                icon: 'unordered-list',
                component: './Functor/FunctorList',
              },
              {
                path: '/data/functor/functor-add',
                component: './Functor/FunctorAdd',
                hideChildrenInMenu: true,
                routes: [
                  {
                    path: '/data/functor/functor-add',
                    redirect: '/data/functor/functor-add/info',
                  },
                  {
                    path: '/data/functor/functor-add/info',
                    name: '算子基本信息',
                    component: './Functor/FunctorAddStep1',
                  },
                  {
                    path: '/data/functor/functor-add/detail',
                    name: '算子入参信息',
                    component: './Functor/FunctorAddStep2',
                  },
                  {
                    path: '/data/functor/functor-add/result',
                    name: '算子添加结果',
                    component: './Functor/FunctorAddStep3',
                  },
                ],
              },
              {
                path: '/data/functor/functor-detail/:id',
                component: './Functor/FunctorDetail',
              },
              {
                path: '/data/functor/functor-update/:id',
                component: './Functor/FunctorModify',
              },
            ]
          },
          {
            path: '/data/variable',
            icon: 'build',
            name: '变量管理',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/data/variable/variable-calculate/:id',
                component: './Variable/VariableCalculate',
              },
              {
                path: '/data/variable/basic-variable',
                name: '基础变量列表',
                icon: 'unordered-list',
                component: './Variable/BasicVariable',
              },
              {
                path: '/data/variable/basic-variable-detail/:id',
                component: './Variable/BasicVariableDetail',
              },
              {
                path: '/data/variable/basic-variable-detail-by-name/:variableName',
                component: './Variable/BasicVariableDetail',
              },

              {
                path: '/data/variable/basic-variable-update/:id',
                component: './Variable/VariableModify',
              },
              {
                path: '/data/variable/derived-variable-list',
                name: '衍生变量列表',
                icon: 'unordered-list',
                component: './Variable/DerivedVariableList',
              },
              {
                path: '/data/variable/derived-variable-detail/:id',
                component: './Variable/DerivedVariableDetail',
              },
              {
                path: '/data/variable/derived-variable-detail-by-name/:variableName',
                component: './Variable/DerivedVariableDetail',
              },
              {
                path: '/data/variable/variable-add',
                component: './Variable/VariableAdd',
              },
              {
                path: '/data/variable/derived-add',
                component: './Variable/DerivedVariableAdd',
              },
            ]
          },
          {
            path: '/data/single-search',
            icon: 'search',
            name: '数据查询',
            component: './Data/Search',
          },
          {
            path: '/data/scene-route-list',
            name: '数据源路由信息列表',
            icon: 'info-circle',
            component: './Data/SceneRouteList'
          },
          {
            path: '/data/scene-route-add',
            component: './Data/AddSceneRoute',
          },
          {
            path: '/data/local-data-config',
            name: '离线数据配置',
            icon: 'database',
            component: './Data/LocalDataSourceConfig',
          },
          {
            path: '/data/local-data-config-detail/:id',
            component: './Data/LocalDataSourceConfigDetail',
          }
        ]
      },
      {
        path: '/strategy',
        name: '策略',
        icon: 'dashboard',
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/strategy/zeusgrail',
            icon: 'dashboard',
            name: '大盘' ,
            component: './Zeus/ZeusGrail',
          },
           {
            path: '/strategy/model',
            icon: 'dashboard',
            name: '客群管理' ,
            component: './Zeus/ZeusCust',
           },
          {
            path: '/strategy/dflow',
            icon: 'project',
            name: '风险管控',
            component: './Zeus/ZeusRisk',
          },
          {
            path: '/strategy/rule',
            icon: 'project',
            name: '场景路由统计',
            component: './Zeus/ZeusRule',
          }
          ]
      },
      {
        path: '/model-manage',
        icon: 'project',
        name: '模型管理',
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/model-manage/scene',
            icon: 'robot',
            name: '场景管理',
            routes: [
              {
                name: '场景列表',
                path: '/model-manage/scene/scene-list',
                icon: 'info-circle',
                component: './Scene/SceneList'
              },

              {
                name: '场景添加',
                path: '/model-manage/scene/scene-add',
                icon: 'info-circle',
                component: './Scene/SceneAdd'
              },
              {

                path: '/model-manage/scene/scene-detail/:id',
                component: './Scene/SceneDetail'
              }
            ]
          },
          {
            path: '/model-manage/model/model-file-list',
            name: '模型列表',
            icon: 'unordered-list',
            component: './ModelFile/ModelFileList',
          },
          {
            path: '/model-manage/model/model-file-detail/:id',
            component: './ModelFile/ModelFileDetail',
          },
          {
            path: '/model-manage/model/add-file-model',
            name: '新增文件模型',
            icon: 'file-add',
            component: './ModelFile/ModelFileAdd',
          },
          {
            path: '/model-manage/model/model-version-list/:fileId',
            component: './ModelVersion/ModelVersionList',
          },
          {
            path: '/model-manage/model/model-version-add/:fileId',
            component: './ModelVersion/ModelVersionAdd',
          },
          {
            path: '/model-manage/model-apply',
            icon: 'experiment',
            name: '模型评估',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/model-manage/model-apply/model-apply-list',
                name: '模型应用列表',
                icon: 'unordered-list',
                component: './ModelApply/ModelApplyList',
              },
              {
                path: '/model-manage/model-apply/model-apply-detail/:id',
                component: './ModelApply/ModelApplyDetail',
              },
              {
                path: '/model-manage/model-apply/model-apply-detail/var-regression/:id',
                component: './ModelApply/VarRegression',
              }
            ]
          },
        ]
      },
      {
        path: '/regression',
        icon: 'redo',
        name: '回溯管理',
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/regression/task-manage',
            icon: 'schedule',
            name: '任务管理',
            routes: [
              {
                path: '/regression/task-manage/settings',
                name: '任务管理列表',
                icon: 'unordered-list',
                component: './Config/TaskManage/TaskList',
              },
              {
                path: '/regression/task-manage/task-add',
                name: '任务新增',
                icon: 'plus-square',
                component: './Config/TaskManage/TaskAdd',
                hideChildrenInMenu: true,
                routes: [
                  {
                    path: '/regression/task-manage/task-add',
                    redirect: '/regression/task-manage/task-add/info',
                  },
                  {
                    path: '/regression/task-manage/task-add/info',
                    name: '任务描述信息',
                    component: './Config/TaskManage/Step1',
                  },
                  {
                    path: '/regression/task-manage/task-add/detail',
                    name: '任务执行详情',
                    component: './Config/TaskManage/Step2',
                  },
                  {
                    path: '/regression/task-manage/task-add/result',
                    name: '配置任务结果',
                    component: './Config/TaskManage/Step3',
                  },
                ],
              },
              {
                path: '/regression/task-manage/task-detail/:id',
                component: './Config/TaskManage/TaskDetail',
              }
            ]
          },
        ]
      },
      {
        path: '/config',
        icon: 'control',
        name: '配置管理',
        authority: ['admin'],
        routes: [
          {
            path: '/config/scheduler-list',
            name: '调度配置',
            component: './Config/SchedulerConfig/SchedulerConfigList',
          },
          {
            path: '/config/dynamic-resource-list',
            name: '动态配置',
            component: './Config/DynamicResource/DynamicResourceList',
          },
          {
            path: '/config/dynamic-resource-add',
            component: './Config/DynamicResource/AddDynamicResource',
          },
        ]
      },
      {
        path: '/account',
        routes: [
          {
            path: '/account/settings',
            // name: 'settings',
            component: './Account/Settings/Info',
            routes: [
              {
                path: '/account/settings',
                redirect: '/account/settings/base',
              },
              {
                path: '/account/settings/base',
                component: './User/UserInfo',
              },
              {
                path: '/account/settings/security',
                component: './User/ModifyPassword',
              },
            ],
          },
        ],
      },
      {
        path: '/exception',
        routes: [
          // exception
          {
            path: '/exception/403',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            component: './Exception/500',
          },
        ],
      },
      {
        path: '/user-manage',
        icon: 'usergroup-add',
        name: '用户管理',
        authority: ['admin'],
        routes: [
          {
            path: '/user-manage/user-list',
            name: '注册用户列表',
            icon: 'unordered-list',
            component: './UserManager/UserList',
          },
          {
            path: '/user-manage/user-add',
            name: '新增用户',
            icon: 'user-add',
            component: './UserManager/AddUser',
          },
          {
            path: '/user-manage/user-modify/:id',
            component: './UserManager/ModifyUser'
          },
        ]
      },
      {
        path: '/log-manage',
        icon: 'search',
        name: '日志查询',
        routes: [
          {
            path: '/log-manage/search',
            name: '日志查询',
            icon: 'search',
            component: './Log/SearchLog'
          }
        ]
      },
      {
        path: '/info',
        icon: 'info',
        name: '产品说明',
        routes: [
          {
            name: '产品文档',
            path: '/info/product',
            icon: 'info-circle',
            component: './Info/Product'
          },
          {
            name: '帮助文档',
            path: '/info/help',
            icon: 'paper-clip',
            component: './Info/Help'
          }
        ]
      },
      {
        component: '404',
      },
    ],
  },
];
