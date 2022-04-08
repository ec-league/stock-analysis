import React, { PureComponent } from 'react'
import { connect } from 'dva'
import PageHeaderWrapper from '@/components/PageHeaderWrapper'
import { Card, Form, Modal, Table, Tooltip } from 'antd'
import { formatDate, timestampToTime } from '@/utils/CommonUtils'
import 'codemirror/keymap/sublime'
import 'codemirror/theme/eclipse.css'
import 'codemirror/theme/monokai.css'
import CodeMirror from '@uiw/react-codemirror'

@connect(({ flink_scheduler_execute_record }) => ({
  flink_scheduler_execute_record
}))
@Form.create()
class FlinkExecuteRecord extends PureComponent {
  state = {
    visible: false
  }

  handleModelCancel = e => {
    this.setState({
      visible: false
    })
  }

  renderModal() {
    const {
      flink_scheduler_execute_record: { sonFlow },
      dispatch,
      id
    } = this.props

    const columns = [
      {
        title: 'Id',
        dataIndex: 'id'
      },
      {
        title: '状态',
        dataIndex: 'status'
      },
      {
        title: 'taskInfo',
        dataIndex: 'taskInfo.FLINK_SQL_JOB_ID',
        render: (x, record) => {
          return (
            <Tooltip placement="rightBottom" title={record.jobTitle}>
              {record.taskInfo.FLINK_SQL_JOB_ID}
            </Tooltip>)
        }
      },
      {
        title: '使用时间',
        dataIndex: 'cost',
        render: (cost) => {
          if (!cost || cost === -1) {
            return '任务还未开始执行'
          }
          return `${(cost / 1000).toFixed(2)} s`;
        }
      },
      {
        title: '创建时间',
        dataIndex: 'gmtCreate',
        render: (time, record) => {
          if (record && record.taskInfo && record.taskInfo.start) {
            return timestampToTime(record.taskInfo.start / 1000);
          } else {
            return formatDate(time);
          }
        }
      },
      {
        title: '更新时间',
        dataIndex: 'gmtModified',
        render: time => {
          return formatDate(time)
        }
      },
      {
        title: '错误码',
        dataIndex: 'errorCode',
        render: code => {
          return code ? code : ''
        }
      },
      {
        title: '错误信息',
        dataIndex: 'errorMsg',
        render: msg => {
          return msg ? msg : ''
        }
      },
      {
        title: '操作',
        dataIndex: 'x',
        render: (x, record) => {
          return (
            <span>
              <a
                disabled={record.status !== 'FAIL' && record.status !== 'PROCESSING' && record.status !== 'RETRY'}
                onClick={() => {
                  dispatch({
                    type: 'flink_scheduler_execute_record/restartTaskSequenceFlow',
                    payload: {
                      schedulerId: id,
                      taskSequenceFlowId: record.id
                    }
                  })
                }}
              >
                重新执行
              </a>
              |
              <a href={`/risk-task/flink-task/sql-job-edit/${record.taskInfo.FLINK_SQL_JOB_ID}`}>编辑</a>
            </span>
          )
        }
      }
    ]

    return <Table columns={columns} dataSource={sonFlow}/>
  }

  executeRecordlList() {
    const {
      flink_scheduler_execute_record: { taskSequenceList },
      dispatch
    } = this.props

    const columns = [
      {
        title: 'Id',
        dataIndex: 'id'
      },
      {
        title: '日期',
        dataIndex: 'partitionDate',
        render: (text, record) => {
          if (record.taskInfo) {
            return record.taskInfo.partitionDate
          }
        }
      },
      {
        title: '任务类型',
        dataIndex: 'taskFlowType'
      },
      {
        title: '状态',
        dataIndex: 'status'
      },
      {
        title: '创建时间',
        dataIndex: 'gmtCreate',
        render: time => {
          return formatDate(time)
        }
      },
      {
        title: '更新时间',
        dataIndex: 'gmtModified',
        render: time => {
          return formatDate(time)
        }
      },
      {
        title: '操作',
        dataIndex: 'x',
        render: (x, record) => {
          return (
            <span>
              <a
                disabled={record.taskFlowType !== 'FLINK_SCHEDULER_PARENT'}
                onClick={() => {
                  dispatch({
                    type: 'flink_scheduler_execute_record/fetchSonFlow',
                    payload: record.id
                  })
                  this.setState({ visible: true })
                }}
              >
                查看子任务
              </a>
            </span>
          )
        }
      }
    ]

    const options = {
      lineNumbers: true,
      keyMap: 'sublime',
      theme: 'monokai',
      mode: 'json',
      smartIndent: true,
      indentWithTabs: true,
      lineWrapping: true
    }

    return (
      <div>
        <Card title="Flink调度任务执行记录">
          <Table
            rowKey={record => record.id}
            columns={columns}
            dataSource={taskSequenceList}
            expandedRowRender={record => (
              <div style={{ width: 1400, overflow: 'auto' }}>
                <CodeMirror value={JSON.stringify(record.taskInfo, null, '\t')} options={options}>
                  {record.taskInfo}
                </CodeMirror>
              </div>
            )}
          />
          <Modal
            title="子任务流执行记录"
            width={1200}
            visible={this.state.visible}
            onOk={this.handleModelCancel}
            onCancel={this.handleModelCancel}
          >
            {this.renderModal()}
          </Modal>
        </Card>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.executeRecordlList()}
      </div>
    )
  }
}

export default FlinkExecuteRecord
