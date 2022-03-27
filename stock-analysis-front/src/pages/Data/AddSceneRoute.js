import React, { PureComponent } from "react";
import { connect } from "dva";
import { Button, Card, Form, Input, Select } from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import router from 'umi/router';

const FormItem = Form.Item;
const { Option } = Select;


@connect(({ scene_route_add }) => ({
  scene_route_add,
}))
@Form.create()
class AddSceneRoute extends PureComponent {

  onSubmit = () => {
    const { dispatch, scene_route_add: { newSceneRoute }, form } = this.props;
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({
          type: 'scene_route_add/sceneRouteAdd',
          payload: newSceneRoute,
        });

        router.push("/data/scene-route-list");
      }
    });

  };

  render() {
    const {
      form: { getFieldDecorator },
      scene_route_add: { newSceneRoute },
      dispatch
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

    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };

    const setScene = (value) => {
      dispatch({
        type: 'scene_route_add/setNewSceneRouteInfo',
        payload: {
          ...newSceneRoute,
          scene: value,
        },
      });
    };

    const setClientCode = (value) => {
      dispatch({
        type: 'scene_route_add/setNewSceneRouteInfo',
        payload: {
          ...newSceneRoute,
          clientCode: value,
        },
      });
    };

    return (
      <PageHeaderWrapper
        title="新增数据源路由信息"
      >
        <Card bordered={false}>
          <Form hideRequiredMark style={{ marginTop: 8 }}>
            <FormItem {...formItemLayout} label="数据源场景码">
              {getFieldDecorator('sceneCode', {
                rules: [
                  {
                    required: true,
                    message: "请输入数据源场景码",
                  },
                ],
              })(<Input value={newSceneRoute.sceneCode} style={{ width: 480 }} onChange={(e) => {
                dispatch({
                  type: 'scene_route_add/setNewSceneRouteInfo',
                  payload: {
                    ...newSceneRoute,
                    sceneCode: e.target.value,
                  },
                });
              }}/>)}
            </FormItem>

            <FormItem {...formItemLayout} label="路由信息描述">
              {getFieldDecorator('type', {
                rules: [
                  {
                    required: true,
                    message: "请输入变量来源",
                  },
                ],
              })(<Input value={newSceneRoute.description} style={{ width: 480 }} onChange={(e) => {
                dispatch({
                  type: 'scene_route_add/setNewSceneRouteInfo',
                  payload: {
                    ...newSceneRoute,
                    description: e.target.value,
                  },
                });
              }}/>)}
            </FormItem>

            <FormItem {...formItemLayout} label="系统码">
              {getFieldDecorator('clientCode', {
                rules: [
                  {
                    required: true,
                    message: "请选择系统码",
                  },
                ],
              })(
                <Select style={{ width: 480 }} onChange={setClientCode}>
                  <Option value="bis">BIS</Option>
                  <Option value="local">本地离线</Option>
                  <Option value="mtFrontend">美团前置</Option>
                </Select>
              )}
            </FormItem>

            <FormItem {...formItemLayout} label="数据源选择">
              {getFieldDecorator('scene', {
                rules: [
                  {
                    required: true,
                    message: "请选择数据源",
                  },
                ],
              })(
                <Select style={{ width: 480 }} onChange={setScene}>
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

            <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
              <Button type="primary" htmlType="submit" onClick={this.onSubmit}>
                提交
              </Button>
            </FormItem>
          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default AddSceneRoute;
