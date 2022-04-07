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
          },
          {
            path: '/stock/info-list',
            name: '股票信息管控',
            component: './StockInfo/StockInfoList'
          }
        ]
      },
      {
        path: '/stock-analysis',
        icon: 'build',
        name: '数据分析',
        routes: [
          {
            path: '/stock-analysis/schedule-job-list',
            name: '调度任务',
            component: './FlinkJob/ScheduleJobList'
          },
          {
            path: '/stock-analysis/schedule-job-add',
            component: './FlinkJob/ScheduleAddJob',
          },
          {
            path: '/stock-analysis/flink-console/:id',
            component: './FlinkJob/FlinkConsoleHome'
          },
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
