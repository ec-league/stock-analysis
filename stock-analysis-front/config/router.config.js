export default [
  // user
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/stock/dashboard',
      },
      {
        path: '/stock',
        icon: 'dashboard',
        name: '股票信息',
        routes: [
          {
            path: '/stock/dashboard',
            name: '股票大盘',
            component: './Stock/Dashboard'
          }
        ]
      },
      {
        path: '/stock-analysis',
        icon: 'build',
        name: '数据分析',
        routes: [
        ]
      },
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
