import React, { PureComponent } from "react";
import { connect } from "dva";
import { Button, Card, Divider, Form, Input, Radio } from "antd";
import styles from "./style.less";
import router from "umi/router";

const FormItem = Form.Item;

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
class Step1 extends PureComponent {
  state = { visible: false, freq: 'single' };

  render() {
    const {
      form: { getFieldDecorator },
      dispatch,
      task_add: { newTask },
    } = this.props;


    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };

    const onNext = (e) => {
      const { form } = this.props;
      e.preventDefault();
      form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          router.push('/regression/task-manage/task-add/detail');
        }
      });
    };

    const ratioOnChange = (e) => {
      this.setState({
        freq: e.target.value,
      });

      dispatch({
        type: 'task_add/setTaskInfo',
        payload: {
          ...newTask,
          taskType: e.target.value,
        },
      });
    };

    return (
      <Card bordered={false}>
        <Form hideRequiredMark style={{ marginTop: 8 }}>
          <FormItem {...formItemLayout} label="任务名称">
            {getFieldDecorator('title', {
              rules: [
                {
                  required: true,
                  message: "请输入任务名称",
                },
              ],
            })(<Input placeholder="任务名称" onChange={
              (e) => {
                dispatch({
                  type: 'task_add/setTaskInfo',
                  payload: {
                    ...newTask,
                    taskName: e.target.value,
                  },
                });
              }
            }/>)}
          </FormItem>
          <FormItem {...formItemLayout} label="任务描述">
            {getFieldDecorator('desc', {
              rules: [
                {
                  required: true,
                  message: "请输入任务描述",
                },
              ],
            })(<Input placeholder="任务描述" onChange={
              (e) => {
                dispatch({
                  type: 'task_add/setTaskInfo',
                  payload: {
                    ...newTask,
                    taskDesc: e.target.value,
                  },
                });
              }
            }/>)}
          </FormItem>
          <FormItem {...formItemLayout} label="任务执行频率">
            <Radio.Group value={this.state.freq} onChange={ratioOnChange}>
              <Radio value="single">单次</Radio>
              <Radio value="day">每天</Radio>
              <Radio value="hour">每小时</Radio>
            </Radio.Group>
          </FormItem>
          <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
            <Button type="primary" onClick={onNext}>
              下一步
            </Button>
          </FormItem>
        </Form>
        <Divider style={{ margin: '40px 0 24px' }}/>
        <div className={styles.desc}>
          <h3>说明</h3>
          <p>
            本页面主要配置的是任务的基本信息, 用于让用户可以根据任务基本信息定位到指定的任务
          </p>
          <h4>任务执行频率</h4>
          <p>
            如果任务执行频率定位为单次执行, 则创建的任务会在明日凌晨6点起执行, 后续如果用户希望修改任务执行时间可以修改提前
          </p>
          <p>
            如果任务执行频率定位为多次, 可以配置为每天, 或者每小时进行执行
          </p>
        </div>
      </Card>
    );
  }
}

export default Step1;
