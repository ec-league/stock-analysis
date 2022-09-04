create table if not exists ASYNC_TASK
(
    ID           bigint auto_increment primary key,
    ASYNC_TYPE   varchar(32)   null,
    PROCESS_INFO varchar(4096) null,
    STATUS       varchar(32)   null,
    ERROR_CODE   varchar(32)   null,
    ERROR_MSG    varchar(1024) null,
    GMT_CREATE   datetime      null,
    GMT_MODIFIED datetime      null
);

create table if not exists FLINK_GENERAL_SOURCE
(
    ID            bigint auto_increment
        primary key,
    SCHEMA_NAME   varchar(64)  null,
    TABLE_NAME    varchar(64)  null,
    TYPE          varchar(128) null,
    SOURCE_CONFIG mediumtext   null,
    GMT_CREATE    datetime     null,
    GMT_MODIFIED  datetime     null,
    unique index idx_uniq_schema_name_table_name (SCHEMA_NAME, TABLE_NAME)
)
    comment 'Flink数据源表';

create table if not exists FLINK_SCHEDULE_JOB
(
    ID              bigint auto_increment
        primary key,
    NAME            varchar(256)  null,
    DESCRIPTION     varchar(256)  null,
    CRON_EXPRESSION varchar(32)   null,
    STATUS          varchar(16)   null,
    TAG             varchar(64)   null,
    GMT_CREATE      datetime      null,
    GMT_MODIFIED    datetime      null,
    EXT_INFO        varchar(2048) null
)
    comment 'Flink调度任务表';

create table if not exists FLINK_SQL_JOB
(
    ID              bigint auto_increment
        primary key,
    NAME            varchar(256)  null,
    TYPE            varchar(128)  null,
    TASK_SEQ_ID     bigint        null,
    FLINK_JOB_ID    varchar(128)  null,
    JOB_CONFIG      mediumtext    null,
    FLINK_CONFIG    varchar(8092) null,
    STATUS          varchar(16)   null,
    RESULT_MSG      varchar(1024) null,
    EXT_INFO        varchar(4096) null,
    GMT_CREATE      datetime      null,
    GMT_MODIFIED    datetime      null,
    SCHEDULE_JOB_ID bigint        null,
    PRIORITY        int default 0 null,
    index idx_flink_sql_job_task_seq_id (TASK_SEQ_ID)
)
    comment 'Flink子任务表';

create table if not exists FLINK_SQL_JOB_VERSION
(
    ID           bigint auto_increment
        primary key,
    SQL_ID       bigint        null,
    JOB_CONFIG   mediumtext    null,
    FLINK_CONFIG varchar(8092) null,
    STATUS       varchar(16)   null,
    EXT_INFO     varchar(1024) null,
    GMT_CREATE   datetime      null,
    GMT_MODIFIED datetime      null,
    index idx_sql_id (SQL_ID)
)
    comment 'Flink SQL 版本表';

create table if not exists PARTITION_DATE
(
    PARTITION_DATE varchar(32) not null
        primary key
);

create table if not exists SCHEDULER_CONFIG
(
    ID              bigint auto_increment
        primary key,
    TASK_TYPE       varchar(32) null,
    CRON_EXPRESSION varchar(32) null,
    RECORD_LIMIT    int         null,
    STATUS          varchar(8)  null,
    GMT_CREATE      datetime    null,
    GMT_MODIFIED    datetime    null,
    unique index uniq_task_type (TASK_TYPE)
)
    comment '调度配置';

create table if not exists STOCK_DAILY_DIGEST
(
    ID                       bigint auto_increment primary key,
    CODE                     varchar(16)    null,
    NAME                     varchar(16)    null,
    START_PRICE              decimal(15, 2) null,
    END_PRICE                decimal(15, 2) null,
    HIGHEST_PRICE            decimal(15, 2) null,
    LOWEST_PRICE             decimal(15, 2) null,
    PARTITION_DATE           varchar(16)    null,
    TRADING_VOLUME           decimal(15, 2) null,
    BUSINESS_VOLUME          decimal(15, 2) null,
    TURNOVER_RATE            double         null,
    PE                       double         null,
    PB                       double         null,
    TOTAL_VALUE              decimal(15, 2) null,
    CIRCULATION_MARKET_VALUE decimal(15, 2) null,
    GMT_CREATE               datetime       null,
    GMT_MODIFIED             datetime       null,
    index idx_code (CODE),
    index idx_name (NAME),
    index idx_partition_date (PARTITION_DATE)
);

create table if not exists STOCK_INFO
(
    STOCK_CODE   varchar(16)   not null
        primary key,
    STOCK_NAME   varchar(128)  null,
    EXT_INFO     varchar(8192) null,
    GMT_CREATE   datetime      null,
    GMT_MODIFIED datetime      null,
    INDEX IDX_STOCK_CODE (STOCK_CODE),
    INDEX IDX_STOCK_NAME (STOCK_NAME)
)
    comment '股票信息表';

create table if not exists TASK
(
    ID           bigint auto_increment primary key,
    TASK_TYPE    varchar(32)   null,
    EXT_INFO     varchar(4096) null,
    STATUS       varchar(32)   null,
    RESULT_MSG   varchar(4096) null,
    RETRY_TIMES  int           null,
    FIRE_DATE    datetime      null,
    GMT_CREATE   datetime      null,
    GMT_MODIFIED datetime      null,
    index idx_status_fire_date (STATUS, FIRE_DATE)
);

create table if not exists TASK_SEQUENCE_FLOW
(
    ID               bigint auto_increment
        primary key,
    PARENT_ID        bigint        null,
    TASK_FLOW_TYPE   varchar(64)   null,
    TASK_INFO        varchar(8192) null,
    STATUS           varchar(16)   null,
    GMT_CREATE       datetime      null,
    GMT_MODIFIED     datetime      null,
    SCHEDULER_JOB_ID bigint        null,
    index idx_task_sequence_flow_parent_id (PARENT_ID)
)
    comment 'Flink子任务任务执行记录表';

create table if not exists STOCK_DAILY_WIDE_DIGEST
(
    ID                       bigint auto_increment primary key,
    CODE                     varchar(16)    null,
    NAME                     varchar(16)    null,
    START_PRICE              decimal(15, 2) null,
    L1D_START_PRICE          decimal(15, 2) null,
    L2D_START_PRICE          decimal(15, 2) null,
    L3D_START_PRICE          decimal(15, 2) null,
    L4D_START_PRICE          decimal(15, 2) null,
    L5D_START_PRICE          decimal(15, 2) null,
    L6D_START_PRICE          decimal(15, 2) null,
    L7D_START_PRICE          decimal(15, 2) null,
    L8D_START_PRICE          decimal(15, 2) null,
    L9D_START_PRICE          decimal(15, 2) null,
    L10D_START_PRICE         decimal(15, 2) null,
    L11D_START_PRICE         decimal(15, 2) null,
    L12D_START_PRICE         decimal(15, 2) null,
    L13D_START_PRICE         decimal(15, 2) null,
    L14D_START_PRICE         decimal(15, 2) null,
    L15D_START_PRICE         decimal(15, 2) null,
    L16D_START_PRICE         decimal(15, 2) null,
    L17D_START_PRICE         decimal(15, 2) null,
    L18D_START_PRICE         decimal(15, 2) null,
    L19D_START_PRICE         decimal(15, 2) null,
    L20D_START_PRICE         decimal(15, 2) null,
    L21D_START_PRICE         decimal(15, 2) null,
    L22D_START_PRICE         decimal(15, 2) null,
    L23D_START_PRICE         decimal(15, 2) null,
    L24D_START_PRICE         decimal(15, 2) null,
    L25D_START_PRICE         decimal(15, 2) null,
    L26D_START_PRICE         decimal(15, 2) null,
    L27D_START_PRICE         decimal(15, 2) null,
    L28D_START_PRICE         decimal(15, 2) null,
    L29D_START_PRICE         decimal(15, 2) null,
    L30D_START_PRICE         decimal(15, 2) null,
    END_PRICE                decimal(15, 2) null,
    L1D_END_PRICE            decimal(15, 2) null,
    L2D_END_PRICE            decimal(15, 2) null,
    L3D_END_PRICE            decimal(15, 2) null,
    L4D_END_PRICE            decimal(15, 2) null,
    L5D_END_PRICE            decimal(15, 2) null,
    L6D_END_PRICE            decimal(15, 2) null,
    L7D_END_PRICE            decimal(15, 2) null,
    L8D_END_PRICE            decimal(15, 2) null,
    L9D_END_PRICE            decimal(15, 2) null,
    L10D_END_PRICE           decimal(15, 2) null,
    L11D_END_PRICE           decimal(15, 2) null,
    L12D_END_PRICE           decimal(15, 2) null,
    L13D_END_PRICE           decimal(15, 2) null,
    L14D_END_PRICE           decimal(15, 2) null,
    L15D_END_PRICE           decimal(15, 2) null,
    L16D_END_PRICE           decimal(15, 2) null,
    L17D_END_PRICE           decimal(15, 2) null,
    L18D_END_PRICE           decimal(15, 2) null,
    L19D_END_PRICE           decimal(15, 2) null,
    L20D_END_PRICE           decimal(15, 2) null,
    L21D_END_PRICE           decimal(15, 2) null,
    L22D_END_PRICE           decimal(15, 2) null,
    L23D_END_PRICE           decimal(15, 2) null,
    L24D_END_PRICE           decimal(15, 2) null,
    L25D_END_PRICE           decimal(15, 2) null,
    L26D_END_PRICE           decimal(15, 2) null,
    L27D_END_PRICE           decimal(15, 2) null,
    L28D_END_PRICE           decimal(15, 2) null,
    L29D_END_PRICE           decimal(15, 2) null,
    L30D_END_PRICE           decimal(15, 2) null,
    HIGHEST_PRICE            decimal(15, 2) null,
    L1D_HIGHEST_PRICE        decimal(15, 2) null,
    L2D_HIGHEST_PRICE        decimal(15, 2) null,
    L3D_HIGHEST_PRICE        decimal(15, 2) null,
    L4D_HIGHEST_PRICE        decimal(15, 2) null,
    L5D_HIGHEST_PRICE        decimal(15, 2) null,
    L6D_HIGHEST_PRICE        decimal(15, 2) null,
    L7D_HIGHEST_PRICE        decimal(15, 2) null,
    L8D_HIGHEST_PRICE        decimal(15, 2) null,
    L9D_HIGHEST_PRICE        decimal(15, 2) null,
    L10D_HIGHEST_PRICE       decimal(15, 2) null,
    L11D_HIGHEST_PRICE       decimal(15, 2) null,
    L12D_HIGHEST_PRICE       decimal(15, 2) null,
    L13D_HIGHEST_PRICE       decimal(15, 2) null,
    L14D_HIGHEST_PRICE       decimal(15, 2) null,
    L15D_HIGHEST_PRICE       decimal(15, 2) null,
    L16D_HIGHEST_PRICE       decimal(15, 2) null,
    L17D_HIGHEST_PRICE       decimal(15, 2) null,
    L18D_HIGHEST_PRICE       decimal(15, 2) null,
    L19D_HIGHEST_PRICE       decimal(15, 2) null,
    L20D_HIGHEST_PRICE       decimal(15, 2) null,
    L21D_HIGHEST_PRICE       decimal(15, 2) null,
    L22D_HIGHEST_PRICE       decimal(15, 2) null,
    L23D_HIGHEST_PRICE       decimal(15, 2) null,
    L24D_HIGHEST_PRICE       decimal(15, 2) null,
    L25D_HIGHEST_PRICE       decimal(15, 2) null,
    L26D_HIGHEST_PRICE       decimal(15, 2) null,
    L27D_HIGHEST_PRICE       decimal(15, 2) null,
    L28D_HIGHEST_PRICE       decimal(15, 2) null,
    L29D_HIGHEST_PRICE       decimal(15, 2) null,
    L30D_HIGHEST_PRICE       decimal(15, 2) null,
    LOWEST_PRICE             decimal(15, 2) null,
    L1D_LOWEST_PRICE         decimal(15, 2) null,
    L2D_LOWEST_PRICE         decimal(15, 2) null,
    L3D_LOWEST_PRICE         decimal(15, 2) null,
    L4D_LOWEST_PRICE         decimal(15, 2) null,
    L5D_LOWEST_PRICE         decimal(15, 2) null,
    L6D_LOWEST_PRICE         decimal(15, 2) null,
    L7D_LOWEST_PRICE         decimal(15, 2) null,
    L8D_LOWEST_PRICE         decimal(15, 2) null,
    L9D_LOWEST_PRICE         decimal(15, 2) null,
    L10D_LOWEST_PRICE        decimal(15, 2) null,
    L11D_LOWEST_PRICE        decimal(15, 2) null,
    L12D_LOWEST_PRICE        decimal(15, 2) null,
    L13D_LOWEST_PRICE        decimal(15, 2) null,
    L14D_LOWEST_PRICE        decimal(15, 2) null,
    L15D_LOWEST_PRICE        decimal(15, 2) null,
    L16D_LOWEST_PRICE        decimal(15, 2) null,
    L17D_LOWEST_PRICE        decimal(15, 2) null,
    L18D_LOWEST_PRICE        decimal(15, 2) null,
    L19D_LOWEST_PRICE        decimal(15, 2) null,
    L20D_LOWEST_PRICE        decimal(15, 2) null,
    L21D_LOWEST_PRICE        decimal(15, 2) null,
    L22D_LOWEST_PRICE        decimal(15, 2) null,
    L23D_LOWEST_PRICE        decimal(15, 2) null,
    L24D_LOWEST_PRICE        decimal(15, 2) null,
    L25D_LOWEST_PRICE        decimal(15, 2) null,
    L26D_LOWEST_PRICE        decimal(15, 2) null,
    L27D_LOWEST_PRICE        decimal(15, 2) null,
    L28D_LOWEST_PRICE        decimal(15, 2) null,
    L29D_LOWEST_PRICE        decimal(15, 2) null,
    L30D_LOWEST_PRICE        decimal(15, 2) null,
    PARTITION_DATE           varchar(16)    null,
    TRADING_VOLUME           decimal(15, 2) null,
    BUSINESS_VOLUME          decimal(15, 2) null,
    TURNOVER_RATE            double         null,
    PE                       double         null,
    PB                       double         null,
    TOTAL_VALUE              decimal(15, 2) null,
    CIRCULATION_MARKET_VALUE decimal(15, 2) null,
    GMT_CREATE               datetime       null,
    GMT_MODIFIED             datetime       null,
    index idx_code (CODE),
    index idx_name (NAME),
    index idx_partition_date (PARTITION_DATE)
);