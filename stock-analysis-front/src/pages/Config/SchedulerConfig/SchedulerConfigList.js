import React, { PureComponent } from "react";
import { connect } from "dva";
import { Button, Card, Form, Input, Modal, Popconfirm, Select, Switch, Table } from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";

const FormItem = Form.Item;
const { Option } = Select;

@connect(({ scheduler_config_list }) => ({
  scheduler_config_list: scheduler_config_list,
}))
@Form.create()
export default class SchedulerConfigList extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'scheduler_config_list/fetch',
      payload: {
        count: 8,
      },
    });
  }

  state = {
    loading: false,
    visible: false,
  };

  showModal = (id) => {
    const { scheduler_config_list: { selectConfigId }, dispatch } = this.props;
    if (selectConfigId !== id) {
      dispatch({
        type: 'scheduler_config_list/fetchConfigById',
        payload: id,
      });
    }

    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    const { scheduler_config_list: { selectConfigById }, dispatch } = this.props;
    dispatch({
      type: 'scheduler_config_list/updateConfigById',
      payload: selectConfigById,
    });

    this.setState({ loading: false, visible: false });

  };

  handleCancel = e => {
    this.setState({
      visible: false,
      loading: false,
    });
  };

  renderSelectConfig() {
    const {
      scheduler_config_list: { selectConfigById, },
      form: { getFieldDecorator },
      dispatch,
    } = this.props;

    console.log("selectConfigById", selectConfigById);
    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
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

    return (
      <Form hideRequiredMark style={{ marginTop: 8 }}>
        <FormItem {...formItemLayout} label="Id">
          {getFieldDecorator('id', {
            initialValue: selectConfigById.id,
            rules: [
              {
                required: true,
                message: "请输入ID",
              },
            ],
          })(<Input value={selectConfigById.id} disabled/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="任务类型">
          {getFieldDecorator('taskType', {
            initialValue: selectConfigById.taskType,
            rules: [
              {
                required: true,
                message: "任务类型",
              },
            ],
          })(
            <Input disabled value={selectConfigById.taskType}/>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Cron表达式">
          {getFieldDecorator('cronExpression', {
            initialValue: selectConfigById.cronExpression,
            rules: [
              {
                required: true,
                message: "Cron表达式",
              },
            ],
          })(
            <Input onChange={(e) => {
              dispatch({
                type: 'scheduler_config_list/setNewConfigInfo',
                payload: {
                  ...selectConfigById,
                  cronExpression: e.target.value,
                },
              });
            }}/>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="执行数量">
          {getFieldDecorator('limit', {
            initialValue: selectConfigById.limit,
            rules: [
              {
                required: true,
                message: "执行数量",
              },
            ],
          })(
            <Input onChange={(e) => {
              dispatch({
                type: 'scheduler_config_list/setNewConfigInfo',
                payload: {
                  ...selectConfigById,
                  limit: e.target.value,
                },
              });
            }}/>
          )}
        </FormItem>
      </Form>
    );
  }

  switchChange(text, row) {

    const { dispatch } = this.props;

    if (text === "T") {
      row.status = "F";
    } else if (text === "F") {
      row.status = "T";
    }

    dispatch({
      type: 'scheduler_config_list/updateConfigById',
      payload: row,
    });
  }

  switchCancel(text, row) {

    location.reload();
  }

  render() {
    const {
      scheduler_config_list: { data },

    } = this.props;

    const { visible, loading } = this.state;
    console.log("ddd");
    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
      },
      {
        title: '任务类型',
        dataIndex: 'taskType',
      },
      {
        title: '调度cron表达式',
        dataIndex: 'cronExpression',
      },
      {
        title: '任务执行数量',
        dataIndex: 'limit',
      },
      {
        title: '当前状态',
        dataIndex: 'status',
        render: (text, row) => {
          return (
            <Popconfirm title="确认修改?" onConfirm={(value) => this.switchChange(text, row)}
                        onCancel={(value) => this.switchCancel(text, row)}>
              <Switch checkedChildren="开启" unCheckedChildren="关闭" checked={row.status === "T" ? true : false}/>
            </Popconfirm>);
        },
      },
      {
        title: '操作',
        dataIndex: 'id',
        key: 'id',
        render: text => (
          <span>
            <a href="#" onClick={() => this.showModal(text)}>修改</a>
          </span>),
      }
    ];

    return (

      <PageHeaderWrapper title="任务调度配置" content="查看并管理所有的任务调度信息, 属于系统的调度任务配置">
        <Card bordered={false}>
          <Table
            dataSource={data}
            columns={columns}
          />
          <Modal
            visible={visible}
            title="Title"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            destroyOnClose
            footer={[
              <Button key="back" onClick={this.handleCancel}>
                取消
              </Button>,
              <Button type="primary" htmlType="submit" loading={loading} onClick={this.handleOk}>
                提交
              </Button>,
            ]}>
            {this.renderSelectConfig()}

          </Modal>
        </Card>
      </PageHeaderWrapper>
    );
  }
}


const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
  },
  {
    title: '配置名字',
    dataIndex: 'name',
  },
  {
    title: '配置描述',
    dataIndex: 'description',
  },
  {
    title: '配置key',
    dataIndex: 'dataKey',
  },
  {
    title: '配置值',
    dataIndex: 'value',
  },
];
