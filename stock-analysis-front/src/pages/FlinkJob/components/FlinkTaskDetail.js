import React, { PureComponent } from 'react'
import PageHeaderWrapper from '@/components/PageHeaderWrapper'
import {
  Button,
  Card,
  Checkbox,
  Col,
  DatePicker,
  Descriptions,
  Divider,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Radio,
  Row,
  Select,
  TimePicker,
  Tooltip
} from 'antd'
import { connect } from 'dva'
import { formatDate } from '@/utils/CommonUtils'
import moment from 'moment'

const FormItem = Form.Item
const Option = Select.Option
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
    md: { span: 10 }
  }
}

@connect(({ schedule_job_detail, console_state_manager }) => ({
  schedule_job_detail, console_state_manager
}))
@Form.create()
class FlinkTaskDetail extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      singTimeTaskId: 0,
      visibleSinks: false,
      deleteSinksFinished: [],
      versionSelect: "old",
      executeCycleSelect: "day",
      executeDate: ['1', '16'],
      executeTime: "00:00:00",
    }
  }

  executeOnce() {
    const { dispatch, schedule_job_detail: { current_job } } = this.props
    dispatch({
      type: 'console_state_manager/flinkExecuteOnce',
      payload: {
        ...current_job,
        singleTimes: 'T'
      }
    }).then(() => {
      this.props.onRefresh()
    })
  }

  stopSingleTime() {
    const { dispatch, schedule_job_detail: { current_job } } = this.props
    dispatch({
      type: 'console_state_manager/stopSingleTime',
      payload: current_job.id
    }).then(() => {
      this.props.onRefresh()
    })

    this.setState({
      singTimeTaskId: 0
    })
  }

  handleSubmit() {
    const {
      dispatch,
      schedule_job_detail: { current_job }
    } = this.props

    if (!current_job.cronExpression) {
      message.error('cron表达式配置缺失，请完善配置后重试')
      return
    }
    if (!current_job.extInfo.type) {
      message.error('任务类型缺失，请完善配置后重试')
      return
    }
    if (!current_job.extInfo.ownerName) {
      message.error('任务归属人不能为空')
      return
    }

    if (current_job.extInfo.type === "history" && !current_job.extInfo.startDate) {
      message.error('任务起始时间不能为空')
      return
    }

    dispatch({
      type: 'schedule_job_detail/submitScheduleJob',
      payload: {
        ...current_job,
        extInfo: {
          ...current_job.extInfo,
          deleteSinksFinished: this.state.deleteSinksFinished
        }
      }
    }).then(() => {
      this.props.onRefresh()
    })

    this.setState({
      visibleSinks: false
    })
  }

  invalidScheduleJob() {
    const {
      dispatch,
      schedule_job_detail: { current_job }
    } = this.props
    dispatch({
      type: 'schedule_job_detail/invalidScheduleJob',
      payload: current_job
    }).then(() => {
      this.props.onRefresh()
    })
  }

  handleAddModelOk = e => {
    const { dispatch } = this.props
    const {
      schedule_job_detail: { current_job }
    } = this.props

    if (current_job && current_job.extInfo && typeof current_job.extInfo.replaceParams === 'string') {
      current_job.extInfo.replaceParams = JSON.parse(
        current_job.extInfo.replaceParams === '' ? '{}' : current_job.extInfo.replaceParams
      )
    }

    let cron = current_job.cronExpression;

    if (this.state.versionSelect === "new") {
      cron = this.dateToCron();
    }
    const payload = {
      ...current_job,
      cronExpression: cron,
    }
    dispatch({
      type: 'schedule_job_detail/saveScheduleJob',
      payload: payload
    })

    dispatch({
      type: 'schedule_job_detail/updateScheduleJob',
      payload: payload
    })
    console.log('handleAddModelOk: ', payload)

    this.setState({
      visible: false
    })
  }

  handleAddModelCancel = e => {
    this.setState({
      visible: false
    })
  }

  handleDeleteSinksOk = e => {
    this.handleSubmit()
  }

  handleDeleteSinksCancel = e => {
    this.setState({
      visibleSinks: false
    })
  }

  onCheckAllChange = e => {
    const {
      schedule_job_detail: { scheduleSinks }
    } = this.props
    this.setState({
      deleteSinksFinished: e.target.checked ? scheduleSinks : []
    })
  }

  renderDaily() {
    const {
      schedule_job_detail: { current_job },
      form: { getFieldDecorator },
      dispatch
    } = this.props

    if (!current_job.extInfo) {
      return
    }

    let startDate = ''
    if (current_job && current_job.extInfo) {
      startDate = current_job.extInfo.startDate
    }

    if (current_job.extInfo.type === 'history') {
      return (
        <FormItem {...formItemLayout} label="起始时间">
          {getFieldDecorator('limit', {
            initialValue: startDate,
            rules: [
              {
                required: true,
                message: '起始时间'
              }
            ]
          })(
            <Input
              onChange={e => {
                dispatch({
                  type: 'schedule_job_detail/saveScheduleJob',
                  payload: {
                    ...current_job,
                    extInfo: {
                      ...current_job.extInfo,
                      startDate: e.target.value
                    }
                  }
                })
              }}
            />
          )}
        </FormItem>
      )
    } else if (current_job.extInfo.type === 'partition') {
    }
  }

  renderModal() {
    const {
      schedule_job_detail: { current_job },
      form: { getFieldDecorator },
      dispatch
    } = this.props

    let replaceParams = ''
    if (current_job && current_job.extInfo) {
      replaceParams = current_job.extInfo.replaceParams
    }

    let parallelism = 1
    if (current_job && current_job.extInfo) {
      parallelism = current_job.extInfo.parallelism
    }

    if (current_job && current_job.extInfo && current_job.extInfo.configVersion) {
      this.setState({
        versionSelect: current_job.extInfo.configVersion
      })
    }

    const { TextArea } = Input

    return (
      <Form style={{ marginTop: 8 }}>
        <FormItem {...formItemLayout} label="任务名">
          {getFieldDecorator('name', {
            initialValue: current_job.name,
            rules: [
              {
                required: true,
                message: '任务名'
              }
            ]
          })(
            <Input
              onChange={e => {
                dispatch({
                  type: 'schedule_job_detail/saveScheduleJob',
                  payload: {
                    ...current_job,
                    name: e.target.value
                  }
                })
              }}
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="任务描述">
          {getFieldDecorator('description', {
            initialValue: current_job.description,
            rules: [
              {
                required: false,
                message: '任务描述'
              }
            ]
          })(
            <Input
              onChange={e => {
                dispatch({
                  type: 'schedule_job_detail/saveScheduleJob',
                  payload: {
                    ...current_job,
                    description: e.target.value
                  }
                })
              }}
            />
          )}
        </FormItem>
        <div style={{ marginLeft: '15%', marginRight: '15%' }}>
          <Card style={{ marginBottom: 16 }}>
            <FormItem {...formItemLayout} label="选择时间配置方式">
              {getFieldDecorator('configVersion', {
                initialValue: this.state.versionSelect,
                rules: [
                  {
                    required: true,
                    message: '时间配置方式'
                  }
                ]
              })(
                <Radio.Group
                  onChange={e => {
                    dispatch({
                      type: 'schedule_job_detail/saveScheduleJob',
                      payload: {
                        ...current_job,
                        extInfo: {
                          ...current_job.extInfo,
                          configVersion: e.target.value
                        }
                      }
                    })
                  }}
                >
                  <Radio value="old">Cron表达式(旧版)</Radio>
                  <Radio value="new">选择日期(新版)</Radio>
                </Radio.Group>
              )}
            </FormItem>
            {this.renderConfig()}
          </Card>
        </div>

        <FormItem {...formItemLayout} label="flink并发度">
          {getFieldDecorator('parallelism', {
            initialValue: parallelism,
            rules: [
              {
                required: false,
                message: 'flink并发度'
              }
            ]
          })(
            <InputNumber
              min={1} max={8} defaultValue={1}
              onChange={value => {
                dispatch({
                  type: 'schedule_job_detail/saveScheduleJob',
                  payload: {
                    ...current_job,
                    extInfo: {
                      ...current_job.extInfo,
                      parallelism: value
                    }
                  }
                })
              }}
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="json补充信息">
          {getFieldDecorator('replaceParams', {
            initialValue: JSON.stringify(replaceParams),
            placeholder: '请填写json格式数据，如：{"key":"value"}',
            rules: [
              {
                required: false,
                message: '补充信息'
              }
            ]
          })(
            <TextArea
              initialValue={JSON.stringify(replaceParams)}
              rows={4}
              onChange={e => {
                dispatch({
                  type: 'schedule_job_detail/saveScheduleJob',
                  payload: {
                    ...current_job,
                    extInfo: {
                      ...current_job.extInfo,
                      replaceParams: e.target.value
                    }
                  }
                })
              }}
            ></TextArea>
          )}
        </FormItem>
      </Form>
    )
  }

  renderConfig() {
    const {
      form: { getFieldDecorator },
      schedule_job_detail: { current_job },
      dispatch
    } = this.props;

    console.log("current_job:", current_job)

    let type = ''
    if (current_job && current_job.extInfo) {
      type = current_job.extInfo.type
    }

    if (current_job && current_job.extInfo && current_job.extInfo.executeCycleSelect) {
      this.setState({
        executeCycleSelect: current_job.extInfo.executeCycleSelect
      })
    }

    let startDate = ''
    if (current_job && current_job.extInfo) {
      startDate = current_job.extInfo.startDate
    }

    // 我们需要在ext——info里面保存新旧版本信息
    // configVersion作为字段， new 代表新版本， old 代表旧版本
    // 不存在代表 旧版本
    if (this.state.versionSelect === "old") {
      //旧版本
      return (
        <div>
          <FormItem {...formItemLayout} label="Cron表达式">
            {getFieldDecorator('cronExpression', {
              initialValue: current_job.cronExpression,
              rules: [
                {
                  required: true,
                  message: 'Cron表达式'
                }
              ]
            })(
              <Input
                onChange={e => {
                  dispatch({
                    type: 'schedule_job_detail/saveScheduleJob',
                    payload: {
                      ...current_job,
                      cronExpression: e.target.value
                    }
                  })
                }}
              />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="任务类型">
            {getFieldDecorator('taskType', {
              initialValue: type,
              rules: [
                {
                  required: true,
                  message: '任务类型'
                }
              ]
            })(
              <Select
                onChange={value => {
                  dispatch({
                    type: 'schedule_job_detail/saveScheduleJob',
                    payload: {
                      ...current_job,
                      extInfo: {
                        ...current_job.extInfo,
                        type: value
                      }
                    }
                  })
                }}
              >
                <Option value="history">历史回溯</Option>
                <Option value="partition">每日执行</Option>
              </Select>
            )}
          </FormItem>
          {this.renderDaily()}
        </div>
      )
    } else {
      //新版本
      return (
        <div>
          <FormItem {...formItemLayout} label="执行周期">
            {getFieldDecorator('executeCycleSelect', {
              initialValue: this.state.executeCycleSelect,
              rules: [{
                required: true,
                message: '执行周期'
              }]
            })(
              <Select defaultValue="day"
                      onChange={value => {
                        dispatch({
                          type: 'schedule_job_detail/saveScheduleJob',
                          payload: {
                            ...current_job,
                            extInfo: {
                              ...current_job.extInfo,
                              executeCycleSelect: value
                            }
                          }
                        })
                      }}>
                <Option value={"month"}>每月执行</Option>
                <Option value={"day"}>每日执行</Option>
              </Select>
            )}
          </FormItem>
          <div>
            {this.renderExecuteTime()}
          </div>
          <FormItem {...formItemLayout} label="起始时间">
            {getFieldDecorator('limit', {
              initialValue: startDate,
              rules: [{
                required: true,
                message: '起始时间'
              }]
            })(<div>
              <DatePicker
                onChange={(date, dateString) => {
                  dispatch({
                    type: 'schedule_job_detail/saveScheduleJob',
                    payload: {
                      ...current_job,
                      extInfo: {
                        ...current_job.extInfo,
                        startDate: dateString,
                        type: "history",
                      }
                    }
                  })
                }}/></div>
            )}
          </FormItem>
        </div>
      )
    }
  }

  dateToCron() {
    let cron = '';
    const time = this.state.executeTime.split(":");
    const hour = parseInt(time[0], 10)
    const minute = parseInt(time[1], 10)
    const second = parseInt(time[2], 10)
    if (this.state.executeCycleSelect === "day") {
      cron = second.toString() + " " + minute.toString() + " " + hour.toString() + " " + "* " + "* " + "?"
      console.log("cron:", cron)
    } else if (this.state.executeCycleSelect === "month") {
      let date = '';
      if (this.state.executeDate) {
        this.state.executeDate.forEach(day => {
          date = date + day.toString() + ','
        })
        date = date.substr(0, date.length - 1);
        cron = second.toString() + " " + minute.toString() + " " + hour.toString() + " " + date + " * " + "?"
        console.log("dateCron:", cron)
      }
    }
    return cron;
  }

  renderExecuteTime() {
    const {
      form: { getFieldDecorator },
      schedule_job_detail: { current_job },
      dispatch
    } = this.props;

    if (current_job && current_job.extInfo && current_job.extInfo.executeDate.length) {
      this.setState({
        executeDate: current_job.extInfo.executeDate
      })
    }

    if (current_job && current_job.extInfo && current_job.extInfo.executeTime) {
      this.setState({
        executeTime: current_job.extInfo.executeTime
      })
    }

    const dateList = [];
    for (let i = 1; i < 29; i++) {
      dateList.push(<Option key={i.toString()}>{i.toString()}</Option>)
    }
    const executeTimeChange = (time, timeString) => {
      dispatch({
        type: 'schedule_job_detail/saveScheduleJob',
        payload: {
          ...current_job,
          extInfo: {
            ...current_job.extInfo,
            executeTime: timeString
          }
        }
      })
    }
    if (this.state.executeCycleSelect === "month") {
      return (
        <FormItem {...formItemLayout} label="执行时间">
          {getFieldDecorator('cronExpression', {
            initialValue: this.state.executeTime,
            rules: [{
              required: true,
              message: '执行时间'
            }]
          })(
            <div>
              <Select mode="multiple" style={{ width: '50%', marginRight: 20 }} placeholder="Please select"
                      defaultValue={this.state.executeDate}
                      onChange={value => {
                        dispatch({
                          type: 'schedule_job_detail/saveScheduleJob',
                          payload: {
                            ...current_job,
                            extInfo: {
                              ...current_job.extInfo,
                              executeDate: value
                            }
                          }
                        })
                      }}>
                {dateList}
              </Select>
              <TimePicker defaultValue={moment(this.state.executeTime, 'HH:mm:ss')} onChange={executeTimeChange}/>
            </div>
          )}
        </FormItem>
      )
    } else {
      return (
        <FormItem {...formItemLayout} label="执行时间">
          {getFieldDecorator('cronExpression', {
            initialValue: this.state.executeTime,
            rules: [{
              required: true,
              message: '执行时间'
            }]
          })}
          <TimePicker defaultValue={moment(this.state.executeTime, 'HH:mm:ss')} onChange={executeTimeChange}/>
        </FormItem>
      )
    }
  }

  render() {
    const {
      dispatch,
      schedule_job_detail: { current_job, singTimeTaskId, scheduleSinks },
      form: { getFieldDecorator },
    } = this.props
    const list = []

    console.log("start render!");
    if (current_job) {
      list.push(
        <Descriptions.Item key="sceneName" label="任务名称">
          {current_job.name}
        </Descriptions.Item>
      )
      list.push(
        <Descriptions.Item key="description" label="任务描述">
          {current_job.description}
        </Descriptions.Item>
      )
      if (current_job.extInfo && current_job.extInfo.currentRunningJob) {
        list.push(
          <Descriptions.Item key="currentJob" label="当前执行子任务">
            {current_job.extInfo.currentRunningJob}
          </Descriptions.Item>
        );
      }
      if (current_job.extInfo && current_job.extInfo.taskId) {
        list.push(
          <Descriptions.Item key="scheduleTaskId" label="任务流水Id">
            {current_job.extInfo.taskId}
          </Descriptions.Item>
        );
      }
      if (current_job.extInfo && current_job.extInfo.singTimeTaskId) {
        list.push(
          <Descriptions.Item key="singTimeTaskId" label="单次任务流水Id">
            {current_job.extInfo.singTimeTaskId}
          </Descriptions.Item>
        );
      }
      if (current_job.extInfo && current_job.extInfo.replaceParams) {
        list.push(
          <Descriptions.Item key="replaceParams" label="替换参数">
            {JSON.stringify(current_job.extInfo.replaceParams)}
          </Descriptions.Item>
        );
      }
      list.push(
        <Descriptions.Item key="createDate" label="创建日期">
          {formatDate(current_job.gmtCreate)}
        </Descriptions.Item>
      )
      list.push(
        <Descriptions.Item key="cron" label="调度表达式">
          {current_job.cronExpression}
        </Descriptions.Item>
      )
      list.push(
        <Descriptions.Item key="status" label="状态">
          {current_job.status}
        </Descriptions.Item>
      )
      list.push(
        <Descriptions.Item key="modifyDate" label="修改日期">
          {formatDate(current_job.gmtModified)}
        </Descriptions.Item>
      )
      this.setState({
        singTimeTaskId: singTimeTaskId
      })
    }
    const action = (
      <span>
        <Button type="primary" style={{ marginLeft: 8 }} onClick={() => {
          window.open(`/api/flink-job/schedule-job-export.json?scheduleJobId=${current_job.id}`)
        }}>导出</Button>
        {
          this.state.singTimeTaskId > 0 ? <Button
            type="primary"
            style={{ marginLeft: 8 }}
            disabled={current_job.status === 'T'}
            onClick={() => {
              this.stopSingleTime()
            }}
          >
            停止单次
          </Button> : <Button
            type="primary"
            style={{ marginLeft: 8 }}
            disabled={current_job.status === 'T'}
            onClick={() => {
              this.executeOnce()
            }}
          >
            单次执行
          </Button>
        }
        <Button type="primary" style={{ marginLeft: 8 }}
                disabled={current_job.status === 'T'}
                onClick={() => this.setState({ visible: true })}>
          配置
        </Button>
        <Button
          type="primary"
          disabled={current_job.status === 'T'}
          style={{ marginLeft: 8 }}
          onClick={() => {
            dispatch({
              type: 'schedule_job_detail/queryScheduleSinks',
              payload: current_job.id
            }).then(reps => {
              if (reps && reps.success) {
                this.setState({
                  deleteSinksFinished: current_job.extInfo.deleteSinksFinished.length > 0 ? current_job.extInfo.deleteSinksFinished : reps.data
                })
              }

            })
            this.setState({
              visibleSinks: true,
            })
          }}
        >
          生效
        </Button>
        <Button
          type="primary"
          disabled={current_job.status === 'F'}
          style={{ marginLeft: 8 }}
          onClick={() => this.invalidScheduleJob()}
        >
          失效
        </Button>
      </span>
    )
    return (
      <PageHeaderWrapper extra={action}>
        <Card title="任务详情" style={{ marginBottom: 16 }}>
          <Descriptions bordered>{list}</Descriptions>
          <Divider/>
          <Descriptions bordered>
            <Descriptions.Item key="extraInfo" label="EXT_INFO">
              <Tooltip title={JSON.stringify(current_job.extInfo)}>
                <div style={{
                  maxWidth: 900,
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden'
                }}>{JSON.stringify(current_job ? current_job.extInfo : {})}</div>
              </Tooltip>
            </Descriptions.Item>
          </Descriptions>
        </Card>
        <Modal
          title="配置任务详情"
          width={1200}
          visible={this.state.visible}
          onOk={this.handleAddModelOk}
          onCancel={this.handleAddModelCancel}
        >
          {this.renderModal()}
        </Modal>

        <Modal
          title="执行完成可删除文件"
          width={1200}
          visible={this.state.visibleSinks}
          onOk={this.handleDeleteSinksOk}
          onCancel={this.handleDeleteSinksCancel}
        >

          <Row style={{ marginBottom: '20px' }}>
            <Col xs={{ span: 24 }} sm={{ span: 12, offset: 7 }} md={{ span: 14, offset: 7 }}>
              <Checkbox onChange={this.onCheckAllChange}>
                是否全选
              </Checkbox>
            </Col>
          </Row>
          <Form style={{ marginTop: 8 }}>
            <FormItem {...formItemLayout} label="可删除文件">
              {getFieldDecorator('deleteSinksFinished', {
                initialValue: this.state.deleteSinksFinished,
                rules: [{
                  required: false,
                  message: '可删除文件'
                }]
              })(
                <Checkbox.Group options={scheduleSinks} defaultValue={this.state.deleteSinksFinished}
                                onChange={(checkedValue) => {
                                  this.setState({ deleteSinksFinished: checkedValue })
                                }}>
                </Checkbox.Group>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="调度归属人">
              {getFieldDecorator('ownerName', {
                initialValue: current_job.extInfo && current_job.extInfo.ownerName ? current_job.extInfo.ownerName : null,
                rules: [
                  {
                    required: true,
                    message: '调度归属人'
                  }
                ]
              })(
                <Select
                  placeholder="选择归属人，只罗列了常用人员，可自行编辑"
                  mode="tags"
                  defaultValue="test"
                  onChange={value => {
                    dispatch({
                      type: 'schedule_job_detail/saveScheduleJob',
                      payload: {
                        ...current_job,
                        extInfo: {
                          ...current_job.extInfo,
                          ownerName: value.toString()
                        }
                      }
                    })
                  }}
                >
                  <Option key="柏云鹏">柏云鹏</Option>
                  <Option key="潘超杰">潘超杰</Option>
                  <Option key="王诗璠">王诗璠</Option>
                  <Option key="孙亮">孙亮</Option>
                  <Option key="徐文锋">徐文锋</Option>
                  <Option key="张泰">张泰</Option>
                  <Option key="邹儒">邹儒</Option>
                  <Option key="胡芳婷">胡芳婷</Option>
                  <Option key="赵赛旭">赵赛旭</Option>
                  <Option key="路小瑞">路小瑞</Option>
                  <Option key="业务人员">业务人员</Option>
                  <Option key="测试人员">测试人员</Option>
                  <Option key="其他人员">其他人员</Option>
                </Select>
              )}
            </FormItem>

            <FormItem {...formItemLayout} label="完成是否通知">
              {getFieldDecorator('needEndNotice', {
                initialValue: current_job.extInfo && current_job.extInfo.needEndNotice ? current_job.extInfo.needEndNotice : 'F',
                rules: [
                  {
                    required: false,
                    message: '执行完成通知'
                  }
                ]
              })(
                <Radio.Group
                  onChange={e => {
                    dispatch({
                      type: 'schedule_job_detail/saveScheduleJob',
                      payload: {
                        ...current_job,
                        extInfo: {
                          ...current_job.extInfo,
                          needEndNotice: e.target.value
                        }
                      }
                    })
                  }}
                >
                  <Radio value="T">是</Radio>
                  <Radio value="F">否</Radio>
                </Radio.Group>
              )}
            </FormItem>
          </Form>

        </Modal>
      </PageHeaderWrapper>
    )
  }
}

export default FlinkTaskDetail
