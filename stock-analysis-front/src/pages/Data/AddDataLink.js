import React, { PureComponent } from "react";
import { connect } from "dva";
import { Button, Card, Form, Input, Select } from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import router from 'umi/router';

const FormItem = Form.Item;
const { Option } = Select;


@connect(({ data_link_add }) => ({
  data_link_add,
}))
@Form.create()
class AddDataLink extends PureComponent {

  onSubmit = () => {
    const { dispatch, data_link_add: { newDataLink }, form } = this.props;
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({
          type: 'data_link_add/dataLinkAdd',
          payload: newDataLink,
        });

        router.push("/data/data-link-config");
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
      data_link_add: { newDataLink },
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

    const setDbType = (value) => {
      dispatch({
        type: 'data_link_add/setNewDataLinkInfo',
        payload: {
          ...newDataLink,
          type: value,
        },
      });
    };

    return (
      <PageHeaderWrapper
        title="新增数据库链路信息"
      >
        <Card bordered={false}>
          <Form hideRequiredMark style={{ marginTop: 8 }}>
            <FormItem {...formItemLayout} label="数据库名称">
              {getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: "请输入数据库名称",
                  },
                ],
              })(<Input value={newDataLink.name} style={{ width: 480 }} onChange={(e) => {
                dispatch({
                  type: 'data_link_add/setNewDataLinkInfo',
                  payload: {
                    ...newDataLink,
                    name: e.target.value,
                  },
                });
              }}/>)}
            </FormItem>

            <FormItem {...formItemLayout} label="数据库信息描述">
              {getFieldDecorator('description', {
                rules: [
                  {
                    required: true,
                    message: "请输入数据库信息描述",
                  },
                ],
              })(<Input value={newDataLink.description} style={{ width: 480 }} onChange={(e) => {
                dispatch({
                  type: 'data_link_add/setNewDataLinkInfo',
                  payload: {
                    ...newDataLink,
                    description: e.target.value,
                  },
                });
              }}/>)}
            </FormItem>

            <FormItem {...formItemLayout} label="数据库类型">
              {getFieldDecorator('type', {
                rules: [
                  {
                    required: true,
                    message: "请选择数据库类型",
                  },
                ],
              })(<Select style={{ width: 480 }} onChange={setDbType}>
                <Option value="MYSQL">MYSQL</Option>
                <Option value="DB2">DB2</Option>
              </Select>)}
            </FormItem>

            <FormItem {...formItemLayout} label="url">
              {getFieldDecorator('url', {
                rules: [
                  {
                    required: true,
                    message: "请输入数据库url",
                  },
                ],
              })(
                <Input value={newDataLink.url} style={{ width: 480 }} onChange={(e) => {
                  dispatch({
                    type: 'data_link_add/setNewDataLinkInfo',
                    payload: {
                      ...newDataLink,
                      url: e.target.value,
                    },
                  });
                }}/>
              )}
            </FormItem>

            <FormItem {...formItemLayout} label="用户名">
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: "请输入用户名",
                  },
                ],
              })(
                <Input value={newDataLink.username} style={{ width: 480 }} onChange={(e) => {
                  dispatch({
                    type: 'data_link_add/setNewDataLinkInfo',
                    payload: {
                      ...newDataLink,
                      username: e.target.value,
                    },
                  });
                }}/>
              )}
            </FormItem>

            <FormItem {...formItemLayout} label="密码">
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: "请输入密码",
                  },
                ],
              })(
                <Input value={newDataLink.password} style={{ width: 480 }} onChange={(e) => {
                  dispatch({
                    type: 'data_link_add/setNewDataLinkInfo',
                    payload: {
                      ...newDataLink,
                      password: e.target.value,
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

export default AddDataLink;
