import React, { PureComponent } from "react";
import { connect } from "dva";
import { Button, Card, Form, Input, Select } from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";

const FormItem = Form.Item;
const { Option } = Select;


@connect(({ user_manage }) => ({
  user_manage,
}))
@Form.create()
class ModifyUser extends PureComponent {

  componentDidMount() {
    const { dispatch, match } = this.props;
    const { params } = match;

    dispatch({
      type: 'user_manage/queryById',
      payload: params.id,
    });
  }

  onSubmit = () => {
    const { dispatch, user_manage: { user } } = this.props;

    dispatch({
      type: 'user_manage/modifyUser',
      payload: user,
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
      user_manage: { user },
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

    const formatDate = (time) => {
      const date = new Date(time);
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const strDate = date.getDate().toString().padStart(2, '0');
      return `${date.getFullYear()}-${month}-${strDate} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    };

    const handleChange = (value) => {
      dispatch({
        type: 'user_manage/setUserAuthority',
        payload: value,
      });
    };
    return (
      <PageHeaderWrapper
        title="修改用户信息"
      >
        <Card bordered={false}>
          <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
            <FormItem {...formItemLayout} label="用户账号">
              {getFieldDecorator('title', {
                initialValue: user.userName,
                rules: [
                  {
                    required: true,
                    message: "请输入模型的名称",
                  },
                ],
              })(<Input disabled value={user.userName}/>)}
            </FormItem>
            <FormItem {...formItemLayout} label="用户姓名">
              {getFieldDecorator('desc', {
                initialValue: user.name,
                rules: [
                  {
                    required: true,
                  },
                ],
              })(
                <Input disabled={true} value={user.name}/>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="创建时间">
              {getFieldDecorator('desc', {
                initialValue: formatDate(user.gmtCreate),
                rules: [
                  {
                    required: true,
                  },
                ],
              })(
                <Input disabled={true} value={user.gmtCreate}/>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="更新时间">
              {getFieldDecorator('desc', {
                initialValue: formatDate(user.gmtModified),
                rules: [
                  {
                    required: true,
                  },
                ],
              })(
                <Input disabled={true} value={user.gmtModified}/>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="用户权限">
              {getFieldDecorator('authority', {
                initialValue: user.authority,
                rules: [
                  {
                    required: true,
                  },
                ],
              })(
                <Select style={{ width: 120 }} onChange={handleChange}>
                  <Option value="admin">Admin</Option>
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

export default ModifyUser;
