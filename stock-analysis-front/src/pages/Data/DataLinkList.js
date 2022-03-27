import React, { Fragment, PureComponent } from "react";
import { connect } from "dva";
import { Button, Card, Form, Input, Modal, Select, Table } from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import router from "umi/router";

const FormItem = Form.Item;
const { Option } = Select;


@connect(({ data_link }) => ({
  data_link: data_link,
}))
@Form.create()
export default class DataLinkList extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'data_link/fetch',
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
      type: 'data_link/fetchDataLinkById',
      payload: id,
    });

    this.setState({
      visible: true,
    });
  };

  synDatabaseStruct = (id) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'data_link/synDatabseStruct',
      payload: id,
    });
  };

  resetSynDatabaseStruct = (id) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'data_link/resetSynDatabseStruct',
      payload: id,
    });
  };

  handleOk = e => {
    const { data_link: { selectDataLinkById }, dispatch } = this.props;
    dispatch({
      type: 'data_link/updateDataLinkById',
      payload: selectDataLinkById,
    });

    this.setState({ loading: false, visible: false });

  };

  handleCancel = e => {
    this.setState({
      visible: false,
      loading: false,
    });
  };

  renderSelectDataLink() {
    const {
      data_link: { selectDataLinkById, },
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

    const setDbType = (value) => {
      dispatch({
        type: 'data_link/setNewDataLinkInfo',
        payload: {
          ...selectDataLinkById,
          type: value,
        },
      });
    };

    return (
      <Form hideRequiredMark style={{ marginTop: 8 }}>
        <FormItem {...formItemLayout} label="Id">
          {getFieldDecorator('id', {
            initialValue: selectDataLinkById.id,
            rules: [
              {
                required: true,
                message: "请输入ID",
              },
            ],
          })(<Input value={selectDataLinkById.id} disabled/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="数据库名称">
          {getFieldDecorator('name', {
            initialValue: selectDataLinkById.name,
            rules: [
              {
                required: true,
                message: "请输入数据库名称",
              },
            ],
          })(<Input onChange={(e) => {
            dispatch({
              type: 'data_link/setNewDataLinkInfo',
              payload: {
                ...selectDataLinkById,
                name: e.target.value,
              },
            });
          }}/>)}
        </FormItem>

        <FormItem {...formItemLayout} label="数据库类型">
          {getFieldDecorator('type', {
            initialValue: selectDataLinkById.type,
            rules: [
              {
                required: true,
                message: "请选择数据库类型",
              },
            ],
          })(<Select onChange={setDbType}>
            <Option value="MYSQL">MYSQL</Option>
            <Option value="DB2">DB2</Option>
          </Select>)}
        </FormItem>

        <FormItem {...formItemLayout} label="数据库信息描述">
          {getFieldDecorator('description', {
            initialValue: selectDataLinkById.description,
            rules: [
              {
                required: true,
                message: "请输入数据库信息描述",
              },
            ],
          })(<Input onChange={(e) => {
            dispatch({
              type: 'data_link/setNewDataLinkInfo',
              payload: {
                ...selectDataLinkById,
                description: e.target.value,
              },
            });
          }}/>)}
        </FormItem>

        <FormItem {...formItemLayout} label="url">
          {getFieldDecorator('url', {
            initialValue: selectDataLinkById.url,
            rules: [
              {
                required: true,
                message: "请输入数据库url",
              },
            ],
          })(
            <Input onChange={(e) => {
              dispatch({
                type: 'data_link/setNewDataLinkInfo',
                payload: {
                  ...selectDataLinkById,
                  url: e.target.value,
                },
              });
            }}/>
          )}
        </FormItem>

        <FormItem {...formItemLayout} label="用户名">
          {getFieldDecorator('username', {
            initialValue: selectDataLinkById.username,
            rules: [
              {
                required: true,
                message: "请输入用户名",
              },
            ],
          })(
            <Input onChange={(e) => {
              dispatch({
                type: 'data_link/setNewDataLinkInfo',
                payload: {
                  ...selectDataLinkById,
                  username: e.target.value,
                },
              });
            }}/>
          )}
        </FormItem>

        <FormItem {...formItemLayout} label="密码">
          {getFieldDecorator('password', {
            initialValue: selectDataLinkById.password,
            rules: [
              {
                required: true,
                message: "请输入密码",
              },
            ],
          })(
            <Input onChange={(e) => {
              dispatch({
                type: 'data_link/setNewDataLinkInfo',
                payload: {
                  ...selectDataLinkById,
                  password: e.target.value,
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
          router.push("/data/data-link-add");
        }}>新增数据源连接</Button>
      </Fragment>
    );

    const formatDate = (time) => {
      const date = new Date(time);
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const strDate = date.getDate().toString().padStart(2, '0');
      return `${date.getFullYear()}-${month}-${strDate} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    };


    const {
      data_link: { data },
    } = this.props;

    const { visible, loading } = this.state;

    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
      },
      {
        title: '数据库名称',
        dataIndex: 'name',
      },
      {
        title: '数据库类型',
        dataIndex: 'type',
      },
      {
        title: '数据库描述',
        dataIndex: 'description',
      },
      {
        title: '数据库连接url',
        dataIndex: 'url',
      },
      {
        title: '用户名',
        dataIndex: 'username',
      },
      {
        title: '创建时间',
        dataIndex: 'gmtCreate',
        render: text => <span>{formatDate(text)}</span>
      },
      {
        title: '操作',
        dataIndex: 'id',
        key: 'id',
        render: (text, record) => (
          <span>
            <a href="#" onClick={() => this.showModal(text)}>修改</a>
            | <a href="#" disabled={record.synStatus === 'PROCESSING'}
                 onClick={() => this.synDatabaseStruct(text)}>同步</a>
            | <a href="#" onClick={() => this.resetSynDatabaseStruct(text)}>重置同步</a>
          </span>

        ),
      },
    ];

    return (
      <PageHeaderWrapper extra={action} title="数据源查询路由表" content="查看并管理所有的数据源查询路由表信息">
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
            {this.renderSelectDataLink()}

          </Modal>
        </Card>
      </PageHeaderWrapper>
    )
      ;
  }
}

