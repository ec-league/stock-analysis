import React, { PureComponent } from 'react'
import PageHeaderWrapper from '@/components/PageHeaderWrapper'
import { Button, Card, Form, Input, Modal, Popconfirm, Select, Table, Tooltip } from 'antd'
import { connect } from 'dva'
import router from 'umi/router'
import FlinkSubTaskAdd from './FlinkSubTaskAdd'
import SuperSelect from 'antd-virtual-select'

const EditableContext = React.createContext()

const EditableRow = ({form, index, ...props}) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
)

const EditableFormRow = Form.create()(EditableRow)

class EditableCell extends React.Component {
  state = {
    editing: false
  }

  getInput = () => {
    return <Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save}/>
  }

  toggleEdit = () => {
    const editing = !this.state.editing
    this.setState({editing}, () => {
      if (editing) {
        this.input.focus()
      }
    })
  }

  save = e => {
    const {record, handleSave} = this.props
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return
      }
      this.toggleEdit()
      handleSave({...record, ...values})
    })
  }

  renderCell = form => {
    this.form = form
    const {children, dataIndex, record, title} = this.props
    const {editing} = this.state
    return editing ? (
      <Form.Item style={{margin: 0}}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`
            }
          ],
          initialValue: record[dataIndex]
        })(this.getInput())}
      </Form.Item>
    ) : (
      <div className="editable-cell-value-wrap" style={{paddingRight: 24}} onClick={e => {
        e.stopPropagation()
        this.toggleEdit()
      }}>
        {children}
      </div>
    )
  }

  render () {
    const {
      editable,
      dataIndex,
      title,
      handleSave,
      children,
      ...restProps
    } = this.props
    return (
      <td {...restProps}>
        {editable ? <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer> : children}
      </td>
    )
  }
}

let logClock

//console_state_manager:本页面的状态管理 文件路径为FlickConsole/Models
@connect(({schedule_job_detail, console_state_manager, flink_sql_job_detail}) => ({
  schedule_job_detail,
  console_state_manager,
  flink_sql_job_detail
}))
class FlinkSubTaskList extends PureComponent {
  constructor (props) {
    super(props)
    this.columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        width: 60,
        ellipsis: true
      },
      {
        title: '任务名',
        dataIndex: 'name',
        width: 200,
        ellipsis: true,
        render: (text) => (
          <Tooltip title={text}>
            <span>{text}</span>
          </Tooltip>
        )
      },
      {
        title:'任务类型',
        dataIndex: 'type',
        width: 120,
      },
      // {
      //   title: '状态',
      //   dataIndex: 'status',
      //   width:100,
      //   ellipsis:true,
      // },
      {
        title: '优先级',
        dataIndex: 'priority',
        editable: true,
        width: 100,
      },
      {
        title: '操作',
        width: 140,
        render: (text, record) => (
          <span>
            <Button type="primary" style={{marginRight: 8}} onClick={e => {
              e.stopPropagation()
              this.handleEdit(record.id)
            }}>
              详情
            </Button>
            <Popconfirm title="确认删除?"
                        onConfirm={e => {
                          e.stopPropagation()
                          this.handleSubTaskDelete(record)
                        }}
                        onCancel={e => {
                          e.stopPropagation()
                        }}
            >
              <Button type={'danger'} onClick={e => {
                e.stopPropagation()
              }}>
                删除
              </Button>
            </Popconfirm>
          </span>
        )
      }
    ]
    this.state = {
      visible: false,
      addVisible: false,
      jobIds: null
    }
  }

  handleEdit (id) {
    router.push(`/risk-task/flink-task/sql-job-edit/${id}`)
  }

  handleSubTaskDelete = record => {
    const {dispatch, id} = this.props
    dispatch({
      type: 'schedule_job_detail/subTaskSqlJobDelete',
      payload: {
        scheduleJobId: id,
        sqlJobId: record.id
      }
    }).then(() => {
      this.props.onRefresh()
    })
  }
  handleSave = row => {
    const {
      dispatch,
      id,
      schedule_job_detail: {job_child_list}
    } = this.props

    const newData = job_child_list
    const index = newData.findIndex(item => row.id === item.id)
    const item = newData[index]
    newData.splice(index, 1, {...item, ...row})

    dispatch({
      type: 'schedule_job_detail/updatePriority',
      payload: {
        job_child_list: newData,
        id: id
      }
    }).then(() => {
      this.props.onRefresh()
    })
  }
  handleConnectionOk = e => {
    const {dispatch, id} = this.props
    dispatch({
      type: 'schedule_job_detail/subTaskSqlJobAdd',
      payload: {
        scheduleJobId: id,
        sqlJobIds: this.state.jobIds
      }
    }).then(() => {
      this.setState({
        visible: false,
        jobIds: null
      })
      this.props.onRefresh()
    })
  }

  refresh () {
    this.props.onRefresh()
  }

  handleConnectionCancel = e => {
    this.setState({
      visible: false,
      jobIds: null
    })
  }
  handleClickRow = (record, index) => {
    const {dispatch} = this.props
    if (record.type !== 'ftp' && record.type !== 'syncFile') {
      dispatch({
        type: 'console_state_manager/rowInfo',
        payload: {
          rowData: record,
          rowIndex: index
        }
      })
      dispatch({
        type: 'console_state_manager/fetchExecuteResult',
        payload: record.id
      })
      dispatch({
        'type': 'flink_sql_job_detail/querySqlVersions',
        'payload': record.id
      })
    } else {
      dispatch({
        type: 'console_state_manager/rowInfo',
        payload: null
      })
      router.push(`/risk-task/flink-task/sql-job-edit/${record.id}`)
    }
  }

  executeOnce () {
    const {dispatch, schedule_job_detail: {current_job}} = this.props
    dispatch({
      type: 'console_state_manager/flinkExecuteOnce',
      payload: {
        ...current_job,
        singleTimes: 'T'
      }
    }).then(res => {
      console.log(res)
    })
  }

  render () {
    const {
      schedule_job_detail: {job_child_list, flink_sql_job_list, current_job},
      id
    } = this.props

    //获取当前列表和分页数据
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell
      }
    }
    const fillColumns = this.columns.map(col => {
      if (!col.editable) {
        return col
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave
        })
      }
    })
    const optionList = []
    if (flink_sql_job_list) {
      flink_sql_job_list.forEach(fj => {
        optionList.push(
          <Select.Option key={fj.id + ':' + fj.name}>
            {fj.id}: {fj.name}
          </Select.Option>
        )
      })
    }
    const action = (
      <span>
        <Button
          type="primary"
          style={{marginLeft: 8}}
          onClick={() => {
            this.setState({
              visible: true
            })
          }}
        >
          关联
        </Button>
        <Button
          type="primary"
          style={{marginLeft: 8}}
          onClick={() => {
            this.setState({
              addVisible: true
            })
          }}
        >
          新增
        </Button>
      </span>
    )
    return (
      <PageHeaderWrapper extra={action}>
        <Card title="子任务列表" style={{height: '500px'}}>
          <Table
            size='small'
            scroll={{x: 550}}
            components={components}
            rowClassName={() => 'editable-row'}
            dataSource={job_child_list}
            columns={fillColumns}
            rowKey={record => record.id}
            pagination={{
              pageSize: 6
            }}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.handleClickRow(record, index)
                }
              }
            }}
          />
        </Card>
        <Modal
          title="子任务信息"
          visible={this.state.visible}
          onOk={this.handleConnectionOk}
          onCancel={this.handleConnectionCancel}
        >
          <SuperSelect
            mode="multiple"
            style={{width: '100%'}}
            optionFilterProp="children"
            onChange={value => {
              let jobIds = []
              if (value) {
                value.forEach(val => {
                  jobIds.push(val.split(':')[0])
                })
              }
              this.setState({
                jobIds: jobIds
              })
            }}
          >
            {optionList}
          </SuperSelect>
        </Modal>
        <FlinkSubTaskAdd
          visible={this.state.addVisible}
          id={id}
          refreshWindow={() => {
            this.refresh()
            this.setState({
              addVisible: false
            })
          }}
          closeWindow={() => {
            this.setState({
              addVisible: false
            })
          }}
        ></FlinkSubTaskAdd>
      </PageHeaderWrapper>
    )
  }
}

export default FlinkSubTaskList
