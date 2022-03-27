export default {
  'GET /api/data/datasource-list.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '查询成功',
    data: [
      {
        id: 1,
        name: '青岛cc',
        schemas: [
          {
            schemaName: 'GMP',
            tables: [
              {
                name: 'TM_INSTANCE',
                fieldList: [
                  {
                    name: "ID",
                    type: "VARCHAR"
                  }
                ]
              },
              {
                name: 'TM_PROCESS',
                fieldList: [
                  {
                    name: "ID",
                    type: "VARCHAR"
                  }
                ]
              }
            ],
          }
        ]
      },
      {
        id: 2,
        name: '青岛cr',
        schemas: [
          {
            schemaName: 'BIS',
            tables: [
              {
                name: 'TM_MT_PBOC_CREDIT_VALUE',
                fieldList: [
                  {
                    name: "ID",
                    type: "VARCHAR"
                  },
                  {
                    name: "USER_NAME",
                    type: "VARCHAR"
                  },
                  {
                    name: "CERT_TYPE",
                    type: "VARCHAR"
                  },
                  {
                    name: "CERT_NO",
                    type: "VARCHAR"
                  },
                  {
                    name: "G1_REPORT",
                    type: "VARCHAR"
                  },
                ]
              },
            ]
          }, {
            schemaName: 'APS',
            tables: [
              {
                name: 'TM_APP_HISTORY',
                fieldList: [
                  {
                    name: "ID",
                    type: "VARCHAR"
                  }
                ]
              },
            ]
          },
        ]
      }
    ]
  },
  'GET /api/data/query-schemas-by-id.json': {
    "success": true, "resultCode": "SUCCESS", "resultMsg": "成功", "data": [{
      "id": 44,
      "schemaName": "athena_calculation",
      "tables": [{
        "name": "DATA_SOURCE",
        "fieldList": [{
          "columnName": "ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, {
          "columnName": "SERIAL_NO",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "EXTERAL_SERIAL_NO",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "DATA_TYPE",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "BASE_DATA",
          "columnType": "MEDIUMTEXT",
          "columnDescription": null
        }, {
          "columnName": "EXT_INFO",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "GMT_MODIFIED", "columnType": "DATETIME", "columnDescription": null }]
      }, {
        "name": "flink_sink_trail",
        "fieldList": [{
          "columnName": "serial_no",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "external_serial_no",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "idcellnbankallm1applyorgnumt",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "min_of_all_historical_app_score_based_on_cc_limit_max_median",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "v2_s_max_user_pay_meishi_succ_amt_360d",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "user_wm_add_jiudian_xiuyu_order_cnt_o_total_weekday",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "user_pay_waimai_time_dispersion_last_90d",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "user_wm_add_xiuxianyule_o_total",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "order_all_bg_rank2_360d",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "idcellnbankalld7applyorgnumt",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "v2_v_user_acc_visit_workday_week_cnt_360d",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "m_user_georobustscore",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "idnbankotherloworglowconcernt",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "idcellnbankp2pm3applyorgnumt",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "order_all_order_hour_seg_eq_late_night_size_ratio_360d",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "idcellnbankloanm3applyorgnumt",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "idnbankotherloworgmidconcernt",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "order_all_quantity_max_360d",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "m_user_reg_day",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "rh_ln_bad_prob",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "order_all_order_hour_seg_rank1_30d",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, { "columnName": "order_product_hotel_amount_min_180d", "columnType": "VARCHAR", "columnDescription": null }]
      }, {
        "name": "FUNCTOR",
        "fieldList": [{ "columnName": "ID", "columnType": "BIGINT", "columnDescription": null }, {
          "columnName": "NAME",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "DESCRIPTION",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "RETURN_TYPE",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "EXPRESSION",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "EXT_INFO",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "SCRIPT_SOURCE",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "CREATE_BY",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "GMT_MODIFIED", "columnType": "DATETIME", "columnDescription": null }]
      }, {
        "name": "FUNCTOR_PARAM",
        "fieldList": [{
          "columnName": "ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, { "columnName": "FUNCTOR_ID", "columnType": "BIGINT", "columnDescription": null }, {
          "columnName": "NAME",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "DESCRIPTION",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "EXT_INFO",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "DATA_TYPE",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "GMT_MODIFIED", "columnType": "DATETIME", "columnDescription": null }]
      }, {
        "name": "MODEL",
        "fieldList": [{
          "columnName": "ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, { "columnName": "FILE_ID", "columnType": "BIGINT", "columnDescription": null }, {
          "columnName": "MODEL_NAME",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "MODEL_TYPE",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "DESCRIPTION",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "EXT_INFO",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "MODEL_GRAPH",
          "columnType": "MEDIUMTEXT",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "GMT_MODIFIED", "columnType": "DATETIME", "columnDescription": null }]
      }, {
        "name": "MODEL_FILE",
        "fieldList": [{ "columnName": "ID", "columnType": "BIGINT", "columnDescription": null }, {
          "columnName": "NAME",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "DESCRIPTION",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "STATUS",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "UPLOAD_STATUS",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "CREATE_USER_NAME",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "UPDATE_USER_NAME",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "CONTENT",
          "columnType": "MEDIUMTEXT",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "GMT_MODIFIED", "columnType": "DATETIME", "columnDescription": null }]
      }, {
        "name": "MODEL_INVOKE_FLOW_TRACE",
        "fieldList": [{
          "columnName": "ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, { "columnName": "SERIAL_NO", "columnType": "VARCHAR", "columnDescription": null }, {
          "columnName": "STATUS",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, { "columnName": "MODEL_ID", "columnType": "BIGINT", "columnDescription": null }, {
          "columnName": "REQUEST",
          "columnType": "MEDIUMTEXT",
          "columnDescription": null
        }, {
          "columnName": "RESPONSE",
          "columnType": "MEDIUMTEXT",
          "columnDescription": null
        }, {
          "columnName": "EXT_INFO",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "GMT_MODIFIED", "columnType": "DATETIME", "columnDescription": null }]
      }, {
        "name": "MODEL_VERSION",
        "fieldList": [{
          "columnName": "ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, { "columnName": "FILE_ID", "columnType": "BIGINT", "columnDescription": null }, {
          "columnName": "VERSION",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, { "columnName": "STATUS", "columnType": "VARCHAR", "columnDescription": null }, {
          "columnName": "MODEL_TYPE",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, { "columnName": "EXT_INFO", "columnType": "VARCHAR", "columnDescription": null }, {
          "columnName": "CONTENT",
          "columnType": "MEDIUMTEXT",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "GMT_MODIFIED", "columnType": "DATETIME", "columnDescription": null }]
      }, {
        "name": "SCENE",
        "fieldList": [{
          "columnName": "ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, {
          "columnName": "SCENE_NAME",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "DESCRIPTION",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "EXT_INFO",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "MODEL_JSON",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "GMT_MODIFIED", "columnType": "DATETIME", "columnDescription": null }]
      }, {
        "name": "VARIABLE",
        "fieldList": [{
          "columnName": "ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, {
          "columnName": "FUNCTOR_ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, {
          "columnName": "GENERATE_MODEL_ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, {
          "columnName": "VARIABLE_NAME",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "VARIABLE_TYPE",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, { "columnName": "OP_TYPE", "columnType": "VARCHAR", "columnDescription": null }, {
          "columnName": "EXT_INFO",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "TYPE",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "VARIABLE_GRAPH",
          "columnType": "MEDIUMTEXT",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "GMT_MODIFIED", "columnType": "DATETIME", "columnDescription": null }]
      }, {
        "name": "VARIABLE_CONFIG",
        "fieldList": [{
          "columnName": "ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, {
          "columnName": "VARIABLE_ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, {
          "columnName": "VARIABLE_JSON",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "GMT_MODIFIED", "columnType": "DATETIME", "columnDescription": null }]
      }, {
        "name": "VARIABLE_PARAM",
        "fieldList": [{
          "columnName": "ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, {
          "columnName": "VARIABLE_ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, {
          "columnName": "FUNCTOR_PARAM_NAME",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "DESCRIPTION",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "PARAM_SOURCE",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "PARAM_VALUE",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "EXT_INFO",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "GMT_MODIFIED", "columnType": "DATETIME", "columnDescription": null }]
      }]
    }, {
      "id": 45,
      "schemaName": "athena_data",
      "tables": [{
        "name": "DATA_SOURCE",
        "fieldList": [{
          "columnName": "ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, {
          "columnName": "SERIAL_NO",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "EXTERNAL_SERIAL_NO",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "DATA_TYPE",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "ORIGIN_DATA",
          "columnType": "MEDIUMTEXT",
          "columnDescription": null
        }, {
          "columnName": "CALCULATE_VARIABLES",
          "columnType": "MEDIUMTEXT",
          "columnDescription": null
        }, {
          "columnName": "EXT_INFO",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "GMT_MODIFIED", "columnType": "DATETIME", "columnDescription": null }]
      }, {
        "name": "DB_CONFIG",
        "fieldList": [{ "columnName": "ID", "columnType": "BIGINT", "columnDescription": null }, {
          "columnName": "NAME",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, { "columnName": "TYPE", "columnType": "VARCHAR", "columnDescription": null }, {
          "columnName": "URL",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, { "columnName": "USERNAME", "columnType": "VARCHAR", "columnDescription": null }, {
          "columnName": "PASSWORD",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "SYN_STATUS",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "EXT_INFO",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "DESCRIPTION",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "GMT_MODIFIED", "columnType": "DATETIME", "columnDescription": null }]
      }, {
        "name": "SCENE_ROUTE",
        "fieldList": [{
          "columnName": "ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, {
          "columnName": "SCENE_CODE",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, { "columnName": "CLIENT_CODE", "columnType": "VARCHAR", "columnDescription": null }, {
          "columnName": "SCENE",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "EXT_INFO",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "DESCRIPTION",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "GMT_MODIFIED", "columnType": "DATETIME", "columnDescription": null }]
      }, {
        "name": "SYNC_DB_SCHEMA",
        "fieldList": [{
          "columnName": "ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, {
          "columnName": "DATABASE_RESOURCE_ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, {
          "columnName": "SCHEMA_NAME",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "GMT_MODIFIED", "columnType": "DATETIME", "columnDescription": null }]
      }, {
        "name": "SYNC_DB_TABLE",
        "fieldList": [{
          "columnName": "ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, {
          "columnName": "SCHEMA_ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, {
          "columnName": "DATABASE_RESOURCE_ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, {
          "columnName": "TABLE_NAME",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "CONTENT",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "GMT_MODIFIED", "columnType": "DATETIME", "columnDescription": null }]
      }, {
        "name": "VARIABLE_CONFIG",
        "fieldList": [{
          "columnName": "ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, {
          "columnName": "VARIABLE_NAME",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "VARIABLE_EXTERNAL_NAME",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "VARIABLE_VERSION",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "GMT_MODIFIED", "columnType": "DATETIME", "columnDescription": null }]
      }]
    }, {
      "id": 46,
      "schemaName": "athena_mis",
      "tables": [{
        "name": "DYNAMIC_RESOURCE",
        "fieldList": [{ "columnName": "ID", "columnType": "BIGINT", "columnDescription": null }, {
          "columnName": "NAME",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "DESCRIPTION",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, { "columnName": "DATA_KEY", "columnType": "VARCHAR", "columnDescription": null }, {
          "columnName": "VALUE",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "GMT_MODIFIED", "columnType": "DATETIME", "columnDescription": null }]
      }, {
        "name": "GENERAL_STATISTICS",
        "fieldList": [{
          "columnName": "ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, {
          "columnName": "STATISTICS_TYPE",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "EXT_INFO",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "INVOKE_DATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "GMT_MODIFIED", "columnType": "DATETIME", "columnDescription": null }]
      }, {
        "name": "REGRESSION",
        "fieldList": [{
          "columnName": "SERIAL_NO",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "MODEL_ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, {
          "columnName": "TASK_CONFIG_ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, {
          "columnName": "REGRESSION_PROFILE",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, { "columnName": "STATUS", "columnType": "VARCHAR", "columnDescription": null }, {
          "columnName": "RESULT_MSG",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "GMT_MODIFIED", "columnType": "DATETIME", "columnDescription": null }]
      }, {
        "name": "ROLE",
        "fieldList": [{
          "columnName": "ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, { "columnName": "USER_ID", "columnType": "BIGINT", "columnDescription": null }, {
          "columnName": "AUTHORITY",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, {
          "columnName": "CREATE_BY",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "GMT_MODIFIED",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "UPDATE_BY", "columnType": "VARCHAR", "columnDescription": null }]
      }, {
        "name": "SCHEDULER_CONFIG",
        "fieldList": [{
          "columnName": "ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, {
          "columnName": "TASK_TYPE",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "CRON_EXPRESSION",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, { "columnName": "RECORD_LIMIT", "columnType": "INT", "columnDescription": null }, {
          "columnName": "STATUS",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "GMT_MODIFIED", "columnType": "DATETIME", "columnDescription": null }]
      }, {
        "name": "SESSION",
        "fieldList": [{
          "columnName": "ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, { "columnName": "USER_ID", "columnType": "BIGINT", "columnDescription": null }, {
          "columnName": "TOKEN_ID",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "GMT_MODIFIED", "columnType": "DATETIME", "columnDescription": null }]
      }, {
        "name": "TASK",
        "fieldList": [{
          "columnName": "ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, {
          "columnName": "TASK_CONFIG_ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, {
          "columnName": "SERIAL_NO",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "EXTERNAL_SERIAL_NO",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "TASK_TYPE",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "TASK_PROFILE",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, { "columnName": "STATUS", "columnType": "VARCHAR", "columnDescription": null }, {
          "columnName": "RESULT_MSG",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "RETRY_TIMES",
          "columnType": "INT",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, {
          "columnName": "GMT_MODIFIED",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "FIRE_DATE", "columnType": "DATETIME", "columnDescription": null }]
      }, {
        "name": "TASK_CONFIG",
        "fieldList": [{
          "columnName": "ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, { "columnName": "MODEL_ID", "columnType": "BIGINT", "columnDescription": null }, {
          "columnName": "TASK_NAME",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "TASK_DESCRIPTION",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "TASK_CONFIG_PROFILE",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, { "columnName": "STATUS", "columnType": "VARCHAR", "columnDescription": null }, {
          "columnName": "CREATE_BY",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, {
          "columnName": "GMT_MODIFIED",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "FIRE_DATE", "columnType": "DATETIME", "columnDescription": null }]
      }, {
        "name": "USER",
        "fieldList": [{
          "columnName": "USER_ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, { "columnName": "USERNAME", "columnType": "VARCHAR", "columnDescription": null }, {
          "columnName": "PASSWORD",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, { "columnName": "NAME", "columnType": "VARCHAR", "columnDescription": null }, {
          "columnName": "PHONE",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "EMAIL",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "USER_PROFILE",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, { "columnName": "ADDRESS", "columnType": "VARCHAR", "columnDescription": null }, {
          "columnName": "STATUS",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "GMT_MODIFIED", "columnType": "DATETIME", "columnDescription": null }]
      }, {
        "name": "VARIABLE_DIGEST_STATISTICS",
        "fieldList": [{
          "columnName": "ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, {
          "columnName": "VARIABLE_ID",
          "columnType": "BIGINT",
          "columnDescription": null
        }, {
          "columnName": "REGRESSION_ID",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "STATISTICS_INFO",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, {
          "columnName": "ON_LINE",
          "columnType": "TINYINT",
          "columnDescription": null
        }, {
          "columnName": "STATISTICS_DATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, {
          "columnName": "GMT_CREATE",
          "columnType": "DATETIME",
          "columnDescription": null
        }, { "columnName": "GMT_MODIFIED", "columnType": "DATETIME", "columnDescription": null }]
      }]
    }, { "id": 47, "schemaName": "information_schema", "tables": null }, {
      "id": 48,
      "schemaName": "mysql",
      "tables": null
    }, { "id": 49, "schemaName": "performance_schema", "tables": null }, {
      "id": 50,
      "schemaName": "sys",
      "tables": [{
        "name": "sys_config",
        "fieldList": [{
          "columnName": "variable",
          "columnType": "VARCHAR",
          "columnDescription": null
        }, { "columnName": "value", "columnType": "VARCHAR", "columnDescription": null }, {
          "columnName": "set_time",
          "columnType": "TIMESTAMP",
          "columnDescription": null
        }, { "columnName": "set_by", "columnType": "VARCHAR", "columnDescription": null }]
      }]
    }]
  },
  'GET /api/data/sql-job-list.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '查询成功',
    data: [
      {
        jobId: 1,
        status: "IN_PROCESS",
        gmtCreate: 1572817989000,
        gmtModified: 1572817989000,
        processingTime: "1小时",
        flinkId: 'lsdfjk',
      },
      {
        jobId: 2,
        status: "FINISH",
        gmtCreate: 1572817999000,
        gmtModified: 1572817999000,
        processingTime: "1小时",
        flinkId: 'lsdfjk',
      },
      {
        jobId: 3,
        status: "CANCEL",
        gmtCreate: 1572817999000,
        gmtModified: 1572817999000,
        processingTime: "1小时",
        flinkId: 'lsdfjk',
      },
    ]
  },
  'POST /api/data/format-sql.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '查询成功',
    data: 'SELECT * FROM APS.TM_APP_HISTORY'
  },
  'POST /api/data/submit-sql.json': {
    "success": true,
    "resultCode": "SUCCESS",
    "resultMsg": "成功",
    "data": {
      "id": 468,
      "userId": 1,
      "jobId": "2a52666a3a7965ca1f616171aaaec5f1",
      "jobType": "SQL_EXECUTE",
      "jobInfo": "select * from athena_calculation.DATA_SOURCE;",
      "status": "INIT",
      "filePath": "/Users/mtdp/IdeaProjects/athena-mis/20200413/537471be-2c92-469e-afd5-1961df10b95a.csv",
      "extInfo": { "jobId": "2a52666a3a7965ca1f616171aaaec5f1", "dbConfigId": "5", "dbConfigName": "localhost" },
      "gmtCreate": 1586762291356,
      "gmtModified": 1586762291780
    }
  },

  'GET /api/data/job-status.json': {
    success: true,
    resultCode: 'SUCCESS',
    resultMsg: '查询成功',
    data: {
      jobId: 1,
      taskId: 12,
      jobType: 'SQL_DB2_JOB',
      jobStatus: 'SUCCESS',
      extInfo: {
        SQL: 'SELECT * FROM APS.TM_APP_HISTORY',
        FILE_NAME: '/Users/ethanpark/workspace/tmp.txt'
      },
      gmtCreate: 1572817999000,
      gmtModified: 1572817999000,
    }
  },

  'POST /api/data/execute-record.json': {
    "success": true,
    "resultCode": "SUCCESS",
    "resultMsg": "成功",
    "data": {
      "header": [
        "ID",
        "USER_ID",
        "JOB_ID",
        "JOB_TYPE",
        "JOB_INFO",
        "STATUS",
        "FILE_PATH",
        "EXT_INFO",
        "GMT_CREATE",
        "GMT_MODIFIED"
      ],
      "resultData": [
        {
          "JOB_INFO": "{select * from athena_mis.ROLE}",
          "JOB_ID": "1111",
          "STATUS": "SUCCESS",
          "GMT_CREATE": "2020-03-23 15:38:22",
          "EXT_INFO": "null",
          "GMT_MODIFIED": "2020-03-23 15:38:26",
          "USER_ID": "1",
          "JOB_TYPE": "SQL_EXECUTE",
          "ID": "1",
          "FILE_PATH": "/Users/mtdp/Downloads/testCsv.csv"
        },
        {
          "JOB_INFO": "{\"dbConfigId\":\"5\",\"splitTableTaskId\":\"8\"}",
          "JOB_ID": "null",
          "STATUS": "INIT",
          "GMT_CREATE": "2020-04-02 14:50:56",
          "EXT_INFO": "{\"jarId\":\"8b3e3066-d577-4bdf-ba2f-808ad8953c80_sync-db-info-1.0-SNAPSHOT.jar\"}",
          "GMT_MODIFIED": "2020-04-02 14:50:56",
          "USER_ID": "null",
          "JOB_TYPE": "SPLIT_TABLE",
          "ID": "11",
          "FILE_PATH": "null"
        },
        {
          "JOB_INFO": "{select * from athena_mis.ROLE}",
          "JOB_ID": "1111",
          "STATUS": "SUCCESS",
          "GMT_CREATE": "2020-03-23 15:38:22",
          "EXT_INFO": "null",
          "GMT_MODIFIED": "2020-03-23 15:38:26",
          "USER_ID": "1",
          "JOB_TYPE": "SQL_EXECUTE",
          "ID": "1",
          "FILE_PATH": "/Users/mtdp/Downloads/testCsv.csv"
        },
        {
          "JOB_INFO": "{\"dbConfigId\":\"5\",\"splitTableTaskId\":\"8\"}",
          "JOB_ID": "null",
          "STATUS": "INIT",
          "GMT_CREATE": "2020-04-02 14:50:56",
          "EXT_INFO": "{\"jarId\":\"8b3e3066-d577-4bdf-ba2f-808ad8953c80_sync-db-info-1.0-SNAPSHOT.jar\"}",
          "GMT_MODIFIED": "2020-04-02 14:50:56",
          "USER_ID": "null",
          "JOB_TYPE": "SPLIT_TABLE",
          "ID": "11",
          "FILE_PATH": "null"
        },
      ]
    }
  },

}
