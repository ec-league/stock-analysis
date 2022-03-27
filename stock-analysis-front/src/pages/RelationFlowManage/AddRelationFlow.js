import React, { PureComponent } from "react";
import { connect } from "dva";
import { Button, Card, Form, Input, Select } from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import router from 'umi/router';

const FormItem = Form.Item;
const { Option } = Select;


@connect(({ user_manage }) => ({
  user_manage,
}))
@Form.create()
class AddRelationFlow extends PureComponent {
  onSubmit = () => {
    const { dispatch, user_manage: { newUser } } = this.props;

    dispatch({
      type: 'user_manage/addUser',
      payload: newUser,
    });

    router.push("/user-manage/user-list");
  };

  render() {
    const {
      form: { getFieldDecorator },
      user_manage: { newUser },
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

    const handleChange = (value) => {
      dispatch({
        type: 'user_manage/setNewUserInfo',
        payload: {
          ...newUser,
          authority: value,
        },
      });
    };
    return (
      <PageHeaderWrapper
        title="新增账户"
      >
        <Card bordered={false}>
          <Form hideRequiredMark style={{ marginTop: 8 }}>
            <FormItem {...formItemLayout} label="用户账号">
              {getFieldDecorator('title', {
                initialValue: newUser.userAccount,
                rules: [
                  {
                    required: true,
                    message: "请输入用户账号",
                  },
                ],
              })(<Input value={newUser.userName} onChange={(e) => {
                dispatch({
                  type: 'user_manage/setNewUserInfo',
                  payload: {
                    ...newUser,
                    userName: e.target.value,
                  },
                });
              }}/>)}
            </FormItem>
            <FormItem {...formItemLayout} label="用户初始化密码">
              {getFieldDecorator('password', {
                initialValue: newUser.password,
                rules: [
                  {
                    required: true,
                  },
                ],
              })(
                <Input.Password value={newUser.password} onChange={(e) => {
                  dispatch({
                    type: 'user_manage/setNewUserInfo',
                    payload: {
                      ...newUser,
                      password: e.target.value,
                    },
                  });
                }}/>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="确认初始化密码">
              {getFieldDecorator('confirmPassword', {
                initialValue: newUser.confirmPassword,
                rules: [
                  {
                    required: true,
                  },
                ],
              })(
                <Input.Password value={newUser.confirmPassword} onChange={(e) => {
                  dispatch({
                    type: 'user_manage/setNewUserInfo',
                    payload: {
                      ...newUser,
                      confirmPassword: e.target.value,
                    },
                  });
                }}/>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="用户权限">
              {getFieldDecorator('authority', {
                initialValue: newUser.authority,
                rules: [
                  {
                    required: true,
                  },
                ],
              })(
                <Select style={{ width: 120 }} onChange={handleChange}>
                  <Option value="operator">Operator</Option>
                  <Option value="guest">Guest</Option>
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

export default AddUser;
