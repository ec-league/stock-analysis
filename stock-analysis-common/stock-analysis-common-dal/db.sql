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
    STOCK_CODE VARCHAR(16) PRIMARY KEY,
    STOCK_NAME VARCHAR(128)

)
    ENGINE = innodb
    DEFAULT CHARSET = utf8mb4
    COMMENT '股票信息表';

