import React, { PureComponent } from 'react'
import PageHeaderWrapper from '@/components/PageHeaderWrapper'
import { Button, Card, message, Modal, Table } from 'antd'
import { connect } from 'dva'
import 'codemirror/keymap/sublime'
import 'codemirror/theme/eclipse.css'
import 'codemirror/theme/monokai.css'
import 'codemirror/mode/sql/sql'
import 'codemirror/addon/hint/sql-hint.js'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/hint/show-hint.js'
import CodeMirror from '@uiw/react-codemirror'
import { formatDate } from "@/utils/CommonUtils";

let logClock

//console_state_manager:本页面的状态管理 文件路径为FlickConsole/Models
@connect(({ schedule_job_detail, console_state_manager, flink_sql_job_edit, data_sync, flink_sql_job_detail }) => ({
  schedule_job_detail,
  console_state_manager,
  flink_sql_job_edit,
  data_sync,
  flink_sql_job_detail
}))
class FlinkExecuteArea extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  onPolling(id) {
    const { dispatch } = this.props
    dispatch({
      type: 'console_state_manager/createLogs',
      payload: id
    }).then(res => {
      console.log(res, id)
      if (res && res !== 'FINISH' && res !== 'FAILED') {
        logClock = setTimeout(() => {
          this.onPolling(id)
        }, 1000)
      } else if (res) {
        dispatch({
          type: 'console_state_manager/fetchExecuteResult',
          payload: id
        })
      }
    })
  }

  onSubmit = () => {
    const {
      dispatch,
      console_state_manager: { rowInfo },
      flink_sql_job_edit: { flinkSqlJobInfo }
    } = this.props
    if (rowInfo && typeof rowInfo.rowIndex === 'number') {
      clearTimeout(logClock)
      dispatch({
        type: 'data_sync/submitSql',
        payload: flinkSqlJobInfo
      }).then(res => {
        this.props.onRefresh()
        if (res && res.success) {
          dispatch({
            type: 'console_state_manager/resetLogs'
          }).then(res => {
            if (!res) {
              this.onPolling(rowInfo.rowData.id)
            }
          })
        }
      })
    } else {
      message.error('请选择子任务后再执行')
    }
  }
  handleSubmit = () => {
    const {
      flink_sql_job_edit: { flinkSqlJobInfo },
      console_state_manager: { rowInfo },
      dispatch
    } = this.props
    if (rowInfo && typeof rowInfo.rowIndex === 'number') {
      dispatch({
        type: 'flink_sql_job_edit/updateFlinkSqlJob',
        payload: flinkSqlJobInfo
      })
      this.props.onRefresh()
    } else {
      message.error('请选择子任务后再保存')
    }
  }
  handleHistoryOk = e => {
    this.setState({
      visible: false
    })
  }
  handleHistoryCancel = e => {
    this.setState({
      visible: false
    })
  }

  handleSqlTextChange(value) {
    const {
      dispatch,
      console_state_manager: { rowInfo }
    } = this.props
    if (rowInfo && typeof rowInfo.rowIndex === 'number') {
      const payload = {
        ...rowInfo.rowData,
        jobConfig: {
          ...rowInfo.rowData.jobConfig,
          sql: value
        }
      }
      dispatch({
        type: 'flink_sql_job_edit/saveSqlJobInfo',
        payload: payload
      })
    }
  }

  render() {
    const {
      flink_sql_job_detail: { oldVersionList },
      console_state_manager: { rowInfo }
    } = this.props
    const options = {
      lineNumbers: true,
      keyMap: 'sublime',
      theme: 'monokai',
      mode: 'sql',
      smartIndent: true,
      indentWithTabs: true,
      lineWrapping: true
    }
    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
      },
      {
        title: '状态',
        dataIndex: 'status',
      },
      {
        title: '备注',
        dataIndex: 'extInfo',
      },
      {
        title: '更新时间',
        dataIndex: 'gmtModified',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.gmtModified - b.gmtModified,
        render: (time) => {
          return formatDate(time);
        }
      },
      {
        title: '操作',
        dataIndex: 'x',
        width: 150,
        render: (x, record) => {
          return <Button type="primary" onClick={() => {
            const { dispatch } = this.props
            dispatch({
              type: 'flink_sql_job_detail/versionRollback',
              payload: record.id
            })
            this.props.onRefresh()
          }}>回滚</Button>
        }
      }
    ]
    const action = (
      <span>
        <Button
          type="primary"
          style={{ marginLeft: 8 }}
          onClick={() => {
            this.setState({
              visible: true
            })
          }}
        >
          历史版本
        </Button>
        <Button
          type="primary"
          style={{ marginLeft: 8 }}
          onClick={() => {
            this.onSubmit()
          }}
        >
          执行
        </Button>
        <Button
          type="primary"
          style={{ marginLeft: 8 }}
          onClick={() => {
            this.handleSubmit()
          }}
        >
          保存
        </Button>
      </span>
    )
    return (
      <PageHeaderWrapper extra={action}>
        <Card title="子任务内容" style={{ height: '500px' }}>
          <CodeMirror
            title="sql"
            options={options}
            value={rowInfo && rowInfo.rowData && rowInfo.rowData.jobConfig && rowInfo.rowData.jobConfig.sql}
            height={350}
            onChange={e => {
              this.handleSqlTextChange(e.getValue())
            }}
          />
        </Card>
        <Modal
          width='80%'
          title="Sql历史记录列表"
          visible={this.state.visible}
          onOk={this.handleHistoryOk}
          onCancel={this.handleHistoryCancel}
        >
          <Table
            columns={columns}
            dataSource={oldVersionList}
            expandedRowRender={record => <div style={{ marginBottom: 16 }}>
              <CodeMirror value={JSON.stringify(record.jobConfig, null, "\t")} options={this.options}>
                {record.jobConfig}
              </CodeMirror>
            </div>}
          />
        </Modal>
      </PageHeaderWrapper>
    );
  }
}

export default FlinkExecuteArea
