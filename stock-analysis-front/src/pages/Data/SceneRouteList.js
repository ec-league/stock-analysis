import React, { Fragment, PureComponent } from "react";
import { connect } from "dva";
import { Button, Card, Form, Input, Modal, Select, Table } from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import router from "umi/router";

const FormItem = Form.Item;
const { Option } = Select;


@connect(({ scene_route }) => ({
  scene_route: scene_route,
}))
@Form.create()
export default class SceneRouteList extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'scene_route/fetch',
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
      type: 'scene_route/fetchSceneRouteById',
      payload: id,
    });

    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    const { scene_route: { selectSceneRouteById }, dispatch } = this.props;
    dispatch({
      type: 'scene_route/updateSceneRouteById',
      payload: selectSceneRouteById,
    });

    this.setState({ loading: false, visible: false });

  };

  handleCancel = e => {
    this.setState({
      visible: false,
      loading: false,
    });
  };

  renderSelectSceneRoute() {
    const {
      scene_route: { selectSceneRouteById, },
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

    const setScene = (value) => {
      dispatch({
        type: 'scene_route/setNewSceneRouteInfo',
        payload: {
          ...selectSceneRouteById,
          scene: value,
        },
      });
    };

    const setClientCode = (value) => {
      dispatch({
        type: 'scene_route/setNewSceneRouteInfo',
        payload: {
          ...selectSceneRouteById,
          clientCode: value,
        },
      });
    };


    return (
      <Form hideRequiredMark style={{ marginTop: 8 }}>
        <FormItem {...formItemLayout} label="Id">
          {getFieldDecorator('id', {
            initialValue: selectSceneRouteById.id,
            rules: [
              {
                required: true,
                message: "请输入ID",
              },
            ],
          })(<Input value={selectSceneRouteById.id} disabled/>)}
        </FormItem>
        <FormItem {...formItemLayout} label="sceneCode">
          {getFieldDecorator('sceneCode', {
            initialValue: selectSceneRouteById.sceneCode,
            rules: [
              {
                required: true,
                message: "数据源code",
              },
            ],
          })(
            <Input onChange={(e) => {
              dispatch({
                type: 'scene_route/setNewSceneRouteInfo',
                payload: {
                  ...selectSceneRouteById,
                  sceneCode: e.target.value,
                },
              });
            }}/>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="配置描述">
          {getFieldDecorator('description', {
            initialValue: selectSceneRouteById.description,
            rules: [
              {
                required: true,
                message: "配置描述",
              },
            ],
          })(
            <Input onChange={(e) => {
              dispatch({
                type: 'scene_route/setNewSceneRouteInfo',
                payload: {
                  ...selectSceneRouteById,
                  description: e.target.value,
                },
              });
            }}/>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="clientCode">
          {getFieldDecorator('clientCode', {
            initialValue: selectSceneRouteById.clientCode,
            rules: [
              {
                required: true,
                message: "clientCode",
              },
            ],
          })(
            <Select onChange={setClientCode}>
              <Option value="bis">bis</Option>
              <Option value="cis">cis</Option>
              <Option value="mtFrontend">美团前置</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="scene">
          {getFieldDecorator('scene', {
            initialValue: selectSceneRouteById.scene,
            rules: [
              {
                required: true,
                message: "scene",
              },
            ],
          })(
            <Select onChange={setScene}>
              <Option value="PBOC">人行</Option>
              <Option value="FRONTEND_DATAPORT">dataport</Option>
              <Option value="FRONTEND_VARIABLES">变量模式</Option>
              <Option value="HOUSING_FUND">公积金</Option>
              <Option value="RETAIL_INFO">零售信息</Option>
              <Option value="LAXXW_INFO">汇法网</Option>
              <Option value="BANK_ASSET">资产信息</Option>
              <Option value="BLACK_LIST">黑名单</Option>
            </Select>
          )}
        </FormItem>
      </Form>
    );
  }

  render() {
    const action = (
      <Fragment>
        <Button type="primary" onClick={() => {
          router.push("/data/scene-route-add");
        }}>新增数据源查询路由信息</Button>
      </Fragment>
    );

    const {
      scene_route: { data },
    } = this.props;

    const { visible, loading } = this.state;

    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
      },
      {
        title: 'sceneCode',
        dataIndex: 'sceneCode',
      },
      {
        title: '配置描述',
        dataIndex: 'description',
      },
      {
        title: 'clientCode',
        dataIndex: 'clientCode',
      },
      {
        title: 'scene',
        dataIndex: 'scene',
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
            {this.renderSelectSceneRoute()}

          </Modal>
        </Card>
      </PageHeaderWrapper>
    )
      ;
  }
}

