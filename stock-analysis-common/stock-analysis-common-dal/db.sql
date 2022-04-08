create database if not exists stock_analysis;
create table if not exists stock_analysis.STOCK_DAILY_DIGEST
(
    ID                       bigint auto_increment primary key,
    CODE                     varchar(16),
    NAME                     varchar(16),
    START_PRICE              DECIMAL(15, 2),
    END_PRICE                DECIMAL(15, 2),
    HIGHEST_PRICE            DECIMAL(15, 2),
    LOWEST_PRICE             DECIMAL(15, 2),
    PARTITION_DATE           VARCHAR(16),
    TRADING_VOLUME           DECIMAL(15, 2),
    BUSINESS_VOLUME          DECIMAL(15, 2),
    TURNOVER_RATE            DOUBLE,
    PE                       DOUBLE,
    PB                       DOUBLE,
    TOTAL_VALUE              DECIMAL(15, 2),
    CIRCULATION_MARKET_VALUE DECIMAL(15, 2),
    GMT_CREATE               datetime,
    GMT_MODIFIED             datetime,
    index idx_code (CODE),
    index idx_name (NAME),
    index idx_partition_date (PARTITION_DATE)
) engine innodb
  charset = utf8mb4;

create table if not exists stock_analysis.TASK
(
    ID           bigint auto_increment primary key,
    TASK_TYPE    varchar(32),
    EXT_INFO     varchar(4096),
    STATUS       varchar(32),
    RESULT_MSG   varchar(4096),
    RETRY_TIMES  int,
    FIRE_DATE    datetime,
    GMT_CREATE   datetime,
    GMT_MODIFIED datetime,
    index idx_status_fire_date (STATUS, FIRE_DATE)
)
    engine innodb
    charset = utf8mb4;

CREATE TABLE IF NOT EXISTS stock_analysis.SCHEDULER_CONFIG
(
    ID              BIGINT PRIMARY KEY AUTO_INCREMENT COMMENT '',
    TASK_TYPE       VARCHAR(32) COMMENT '',
    CRON_EXPRESSION VARCHAR(32) COMMENT '',
    RECORD_LIMIT    INT COMMENT '',
    STATUS          VARCHAR(8) COMMENT '',
    GMT_CREATE      DATETIME COMMENT '',
    GMT_MODIFIED    DATETIME COMMENT '',
    UNIQUE INDEX uniq_task_type (TASK_TYPE)
)
    ENGINE = innodb
    DEFAULT CHARSET = utf8mb4
    COMMENT '调度配置';

CREATE TABLE IF NOT EXISTS stock_analysis.STOCK_INFO
(
    STOCK_CODE   VARCHAR(16) PRIMARY KEY,
    STOCK_NAME   VARCHAR(128),
    EXT_INFO     VARCHAR(8192),
    GMT_CREATE   DATETIME,
    GMT_MODIFIED DATETIME,
    index IDX_STOCK_CODE (STOCK_CODE),
    index IDX_STOCK_NAME (STOCK_NAME)
)
    ENGINE = innodb
    DEFAULT CHARSET = utf8mb4
    COMMENT '股票信息表';


create table if not exists stock_analysis.FLINK_SCHEDULE_JOB
(
    ID              bigint auto_increment primary key,
    NAME            varchar(256)  null,
    DESCRIPTION     varchar(256)  null,
    CRON_EXPRESSION varchar(32)   null,
    STATUS          varchar(16)   null,
    TAG             varchar(64)   null,
    GMT_CREATE      datetime      null,
    GMT_MODIFIED    datetime      null,
    EXT_INFO        varchar(2048) null
)
    ENGINE = innodb
    DEFAULT CHARSET = utf8mb4
    COMMENT 'Flink调度任务表';

create table if not exists stock_analysis.FLINK_SQL_JOB
(
    ID           bigint auto_increment primary key,
    NAME         varchar(256)  null,
    TYPE         varchar(128)  null,
    TASK_SEQ_ID  bigint        null,
    FLINK_JOB_ID varchar(128)  null,
    JOB_CONFIG   mediumtext    null,
    FLINK_CONFIG varchar(8092) null,
    STATUS       varchar(16)   null,
    RESULT_MSG   varchar(1024) null,
    EXT_INFO     varchar(4096) null,
    GMT_CREATE   datetime      null,
    GMT_MODIFIED datetime      null,
    index idx_flink_sql_job_task_seq_id (TASK_SEQ_ID)
)
    ENGINE = innodb
    DEFAULT CHARSET = utf8mb4
    COMMENT 'Flink子任务表';

create table if not exists stock_analysis.TASK_SEQUENCE_FLOW
(
    ID               bigint auto_increment primary key,
    PARENT_ID        bigint        null,
    TASK_FLOW_TYPE   varchar(64)   null,
    TASK_INFO        varchar(8192) null,
    STATUS           varchar(16)   null,
    GMT_CREATE       datetime      null,
    GMT_MODIFIED     datetime      null,
    SCHEDULER_JOB_ID bigint        null,
    index idx_task_sequence_flow_parent_id (PARENT_ID)
)
    ENGINE = innodb
    DEFAULT CHARSET = utf8mb4
    COMMENT 'Flink子任务任务执行记录表';

create table if not exists stock_analysis.FLINK_GENERAL_SOURCE
(
    ID            bigint auto_increment primary key,
    SCHEMA_NAME   VARCHAR(64),
    TABLE_NAME    varchar(64)  null,
    TYPE          varchar(128) null,
    SOURCE_CONFIG mediumtext   null,
    GMT_CREATE    datetime     null,
    GMT_MODIFIED  datetime     null,
    UNIQUE INDEX idx_uniq_schema_name_table_name (SCHEMA_NAME, TABLE_NAME)
)
    ENGINE = innodb
    DEFAULT CHARSET = utf8mb4
    COMMENT 'Flink数据源表';


create table if not exists stock_analysis.FLINK_SQL_JOB_VERSION
(
    ID           bigint auto_increment primary key,
    SQL_ID       bigint        null,
    JOB_CONFIG   mediumtext    null,
    FLINK_CONFIG varchar(8092) null,
    STATUS       varchar(16)   null,
    EXT_INFO     varchar(1024) null,
    GMT_CREATE   datetime      null,
    GMT_MODIFIED datetime      null,
    INDEX idx_sql_id (SQL_ID)
)
    ENGINE = innodb
    DEFAULT CHARSET = utf8mb4
    COMMENT 'Flink SQL 版本表';

