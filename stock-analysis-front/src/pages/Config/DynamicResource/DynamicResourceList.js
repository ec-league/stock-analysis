import React, { Fragment, PureComponent } from "react";
import { connect } from "dva";
import { Button, Card, Form, Input, Modal, Select, Table } from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import router from "umi/router";

const FormItem = Form.Item;
const { Option } = Select;


@connect(({ dynamic_resource_list, task_add }) => ({
  dynamic_resource_list: dynamic_resource_list,
}))
@Form.create()
export default class DynamicResourceList extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'dynamic_resource_list/fetch',
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
    const { dispatch } = this.props;
    dispatch({
      type: 'dynamic_resource_list/fetchResourceById',
      payload: id,
    });

    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    const { dynamic_resource_list: { selectResourceById }, dispatch } = this.props;
    dispatch({
      type: 'dynamic_resource_list/updateResourceById',
      payload: selectResourceById,
    });

    this.setState({ loading: false, visible: false });

  };

  handleCancel = e => {
    this.setState({
      visible: false,
      loading: false,
    });
  };

  renderSelectResource() {
    const {
      dynamic_resource_list: { selectResourceById, },
      form: { getFieldDecorator },
      dispatch,
    } = this.props;

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

    console.log("selectResourceById", selectResourceById);
    return (
      <Form hideRequiredMark style={{ marginTop: 8 }}>
        <FormItem {...formItemLayout} label="Id">
          {getFieldDecorator('id', {
            initialValue: selectResourceById.id,
            rules: [
              {
                required: true,
                message: "请输入ID",
              },
            ],
          })(<Input value={selectResourceById.id} disabled/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="配置名字">
          {getFieldDecorator('name', {
            initialValue: selectResourceById.name,
            rules: [
              {
                required: true,
                message: "配置名字",
              },
            ],
          })(
            <Input onChange={(e) => {
              dispatch({
                type: 'dynamic_resource_list/setNewResourceInfo',
                payload: {
                  ...selectResourceById,
                  name: e.target.value,
                },
              });
            }}/>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="配置描述">
          {getFieldDecorator('description', {
            initialValue: selectResourceById.description,
            rules: [
              {
                required: true,
                message: "配置描述",
              },
            ],
          })(
            <Input onChange={(e) => {
              dispatch({
                type: 'dynamic_resource_list/setNewResourceInfo',
                payload: {
                  ...selectResourceById,
                  description: e.target.value,
                },
              });
            }}/>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="配置key">
          {getFieldDecorator('dataKey', {
            initialValue: selectResourceById.dataKey,
            rules: [
              {
                required: true,
                message: "配置key",
              },
            ],
          })(
            <Input disabled value={selectResourceById.dataKey}/>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="配置值">
          {getFieldDecorator('value', {
            initialValue: selectResourceById.value,
            rules: [
              {
                required: true,
                message: "配置值",
              },
            ],
          })(
            <Input onChange={(e) => {
              dispatch({
                type: 'dynamic_resource_list/setNewResourceInfo',
                payload: {
                  ...selectResourceById,
                  value: e.target.value,
                },
              });
            }}/>
          )}
        </FormItem>
      </Form>
    );
  }

  render() {
    const action = (
      <Fragment>
        <Button type="primary" onClick={() => {
          router.push("/config/dynamic-resource-add");
        }}>新增配置</Button>
      </Fragment>
    );

    const {
      dynamic_resource_list: { data },
    } = this.props;

    const { visible, loading } = this.state;

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
      {
        title: '操作',
        dataIndex: 'id',
        key: 'id',
        render: text => (
          <span>
            <a href="#" onClick={() => this.showModal(text)}>修改</a>
          </span>),
      },
    ];

    return (
      <PageHeaderWrapper extra={action} title="动态配置列表" content="查看并管理所有的动态配置信息">
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
            {this.renderSelectResource()}

          </Modal>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

