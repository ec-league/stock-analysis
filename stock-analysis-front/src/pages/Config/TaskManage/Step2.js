import React, { PureComponent } from "react";
import { connect } from "dva";
import { Button, Card, DatePicker, Divider, Form, InputNumber, Select } from "antd";
import styles from "./style.less";
import router from "umi/router";

const FormItem = Form.Item;

const { RangePicker } = DatePicker;

const { Option } = Select;

const validatorRangePicker = (rule, value, callback) => {
  if (value[0] > new Date() || value[1] > new Date()) {
    callback('选择日期不能大于当前日期');
  }

  callback();
};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
    md: { span: 10 },
  },
};

@connect(({ task_add }) => ({
  task_add: task_add,
}))
@Form.create()
class Step2 extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({
      type: 'task_add/fetchModels',
    })
  }

  renderTimeRange() {

    const {
      task_add: { newTask },
      form: { getFieldDecorator },
      dispatch
    } = this.props;

    if (newTask.taskType === 'single') {
      function onRangePickerChange(date, dateString) {
        dispatch({
          type: 'task_add/setTaskInfo',
          payload: {
            ...newTask,
            startDate: dateString[0],
            endDate: dateString[1]
          }
        })
      }

      return (
        <FormItem {...formItemLayout} label="数据源查询日期范围">
          {getFieldDecorator('dateRange', {
            rules: [
              {
                required: true,
                message: "请输入模型的名称",
              },
              { validator: validatorRangePicker },
            ],
          })(
            <RangePicker onChange={onRangePickerChange}/>
          )}
        </FormItem>
      );
    }
  }

  renderRecordNum() {
    const {
      form: { getFieldDecorator },
      dispatch,
      task_add: { newTask },
    } = this.props;

    if (newTask && newTask.taskType !== 'single') {
      return ;
    }

    return (<FormItem {...formItemLayout} label="任务一次捞取条目数">
      {getFieldDecorator('recordNum', {
        initialValue: newTask.recordNum,
        rules: [
          {
            required: true,
            message: "请输入任务一次捞取条目数, 最少一条, 上线10000条",
          },
        ],
      })(<InputNumber style={{ width: 200 }} placeholder="捞取条目数" min={1} max={10000} step={100}
                      value={1000} onChange={
        (value) => {
          dispatch({
            type: 'task_add/setTaskInfo',
            payload: {
              ...newTask,
              recordNum: value,
            },
          });
        }
      }/>)}
    </FormItem>);
  }

  render() {
    const {
      form: { getFieldDecorator },
      dispatch,
      task_add: { newTask, addResult },
    } = this.props;

    if (newTask.taskName === '') {
      router.push('/regression/task-manage/task-add/info');
    }

    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };

    return (
      <Card bordered={false}>
        <Form hideRequiredMark style={{ marginTop: 8 }}>
          {this.renderRecordNum()}
          <FormItem {...formItemLayout} label="回溯模型">
            {getFieldDecorator('model', {
              rules: [
                {
                  required: true,
                  message: "请输入模型的名称",
                },
              ],
            })(
              this.renderSelectModel()
            )
            }
          </FormItem>
          {this.renderTimeRange()}
          <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
            <Button type="primary" onClick={() => {
              router.push('/regression/task-manage/task-add/info')
            }}>
              上一步
            </Button>
            <Button style={{ marginLeft: 16 }} type="primary" loading={addResult.loading} onClick={() => {

              dispatch({
                type: 'task_add/addTask',
                payload: newTask
              });

              router.push('/regression/task-manage/task-add/result');
            }}>
              下一步
            </Button>
          </FormItem>
        </Form>
        <Divider style={{ margin: '40px 0 24px' }}/>
        <div className={styles.desc}>
          <h3>说明</h3>
          <p>
            本页面主要配置的是任务的执行详情, 用于让模型平台了解任务应该去哪里获取数据进行回溯
          </p>
          <h4>任务一次捞取条目数</h4>
          <p>
            一次任务回溯去风险数据平台获取的数据数量, 以人行为例, 配置1000相当于获取1000笔人行对应的用户数据
          </p>
          <h4>回溯模型</h4>
          <p>
            选择的是等待评估的模型, 任务会根据该模型进行回溯, 然后评估结果
          </p>
          <h4>数据源查询日期范围</h4>
          <p>当任务类型为单次执行时有效, 多次执行的任务会根据每天(每小时)进行任务数据的处理</p>
          <p>
            日期范围指的是数据源查询的历史日期. 如果该时间段内, 包含的数据量小于前面配置的任务捞取条目数, 则只会执行对应的条目数; 如果包含的数据量大于等于前面配置的任务捞取条目数, 则会捞取对应配置的条目数
          </p>
        </div>
      </Card>
    );
  }

  renderSelectModel() {

    const { dispatch, task_add: { newTask, models } } = this.props;

    const handleSelectModelChange = (value) => {
      dispatch({
        type: 'task_add/setTaskInfo',
        payload: {
          ...newTask,
          modelId: value,
        },
      });
    };

    const list = [];

    if (models) {
      Object.keys(models).forEach(key => {
        list.push(<Option value={key}>{models[key]}</Option>)
      });
    }

    return (
      <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleSelectModelChange}>
        {list}
      </Select>
    );
  }
}

export default Step2;
