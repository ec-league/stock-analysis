export default [
  // user
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/config',
        icon: 'control',
        name: '配置管理',
        routes: [
          {
            path: '/config/scheduler-list',
            name: '调度配置',
            component: './Config/SchedulerConfig/SchedulerConfigList',
          }
        ]
      },
      {
        component: '404',
      },
    ],
  },
];
