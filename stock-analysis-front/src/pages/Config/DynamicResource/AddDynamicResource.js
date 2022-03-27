import React, { PureComponent } from "react";
import { connect } from "dva";
import { Button, Card, Form, Input, Select } from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import router from 'umi/router';

const FormItem = Form.Item;
const { Option } = Select;


@connect(({ dynamic_resource_add }) => ({
  dynamic_resource_add,
}))
@Form.create()
class AddDynamicResource extends PureComponent {

  onSubmit = () => {
    const { dispatch, dynamic_resource_add: { newDynamicResource }, form } = this.props;
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({
          type: 'dynamic_resource_add/dynamicResourceAdd',
          payload: newDynamicResource,
        });

        router.push("/config/dynamic-resource-list");
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
      dynamic_resource_add: { newDynamicResource },
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

    return (
      <PageHeaderWrapper
        title="新增动态配置信息"
      >
        <Card bordered={false}>
          <Form hideRequiredMark style={{ marginTop: 8 }}>
            <FormItem {...formItemLayout} label="动态配置名称">
              {getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: "请输入动态配置名称",
                  },
                ],
              })(<Input value={newDynamicResource.name} style={{ width: 480 }} onChange={(e) => {
                dispatch({
                  type: 'dynamic_resource_add/setNewDynamicResourceInfo',
                  payload: {
                    ...newDynamicResource,
                    name: e.target.value,
                  },
                });
              }}/>)}
            </FormItem>

            <FormItem {...formItemLayout} label="动态配置描述">
              {getFieldDecorator('description', {
                rules: [
                  {
                    required: true,
                    message: "请输入动态配置描述",
                  },
                ],
              })(<Input value={newDynamicResource.description} style={{ width: 480 }} onChange={(e) => {
                dispatch({
                  type: 'dynamic_resource_add/setNewDynamicResourceInfo',
                  payload: {
                    ...newDynamicResource,
                    description: e.target.value,
                  },
                });
              }}/>)}
            </FormItem>

            <FormItem {...formItemLayout} label="配置key">
              {getFieldDecorator('dataKey', {
                rules: [
                  {
                    required: true,
                    message: "请输入dataKey",
                  },
                ],
              })(
                <Input value={newDynamicResource.dataKey} style={{ width: 480 }} onChange={(e) => {
                  dispatch({
                    type: 'dynamic_resource_add/setNewDynamicResourceInfo',
                    payload: {
                      ...newDynamicResource,
                      dataKey: e.target.value,
                    },
                  });
                }}/>
              )}
            </FormItem>

            <FormItem {...formItemLayout} label="配置值">
              {getFieldDecorator('value', {
                rules: [
                  {
                    required: true,
                    message: "请输入配置值",
                  },
                ],
              })(
                <Input value={newDynamicResource.value} style={{ width: 480 }} onChange={(e) => {
                  dispatch({
                    type: 'dynamic_resource_add/setNewDynamicResourceInfo',
                    payload: {
                      ...newDynamicResource,
                      value: e.target.value,
                    },
                  });
                }}/>
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

export default AddDynamicResource;
