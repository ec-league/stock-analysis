import React, { Component, Fragment } from "react";
import { Button, Form, Input } from "antd";
import { connect } from "dva";
import styles from "./UserInfo.less";

const FormItem = Form.Item;

const validatorPassword = (rule, value, callback) => {
  if (value.length < 6) {
    callback('密码长度至少6位');
  }

  callback();
};

@connect(({ user }) => ({
  currentUser: user.currentUser,
  password: user.password,
}))
@Form.create()
class ModifyPassword extends Component {
  componentDidMount() {
    this.setBaseInfo();
  }

  setBaseInfo = () => {
    const { currentUser, form } = this.props;
    Object.keys(form.getFieldsValue()).forEach(key => {
      const obj = {};
      obj[key] = currentUser[key] || null;
      form.setFieldsValue(obj);
    });
  };

  getViewDom = ref => {
    this.view = ref;
  };

  render() {
    const {
      form: { getFieldDecorator },
      dispatch,
      password,
    } = this.props;

    return (
      <div className={styles.baseView} ref={this.getViewDom}>
        <div className={styles.left}>
          <Form layout="vertical" onSubmit={this.handleSubmit} hideRequiredMark>
            <FormItem label="原始密码">
              {getFieldDecorator('originPassword', {
                rules: [
                  {
                    required: true,
                    message: '请输入原始密码',
                  },
                ],
              })(<Input.Password onChange={
                (e) => {
                  dispatch({
                    type: 'user/setOriginPassword',
                    payload: e.target.value,
                  });
                }
              }/>)}
            </FormItem>
            <FormItem label="新密码">
              {getFieldDecorator('newPassword', {
                rules: [
                  {
                    required: true,
                    message: '请输入原始密码',
                  },
                  { validator: validatorPassword },
                ],
              })(<Input.Password onChange={
                (e) => {
                  dispatch({
                    type: 'user/setNewPassword',
                    payload: e.target.value,
                  });
                }
              }/>)}
            </FormItem>
            <FormItem label="确认新密码">
              {getFieldDecorator('confirmPassword', {
                rules: [
                  {
                    required: true,
                    message: '请确认原始密码',
                  },
                ],
              })(<Input.Password onChange={
                (e) => {
                  dispatch({
                    type: 'user/setConfirmPassword',
                    payload: e.target.value,
                  });
                }
              }/>)}
            </FormItem>

            <Button type="primary" onClick={() => {
              dispatch({
                type: 'user/modifyPassword',
                payload: {
                  ...password,
                }
              })
            }}>
              修改密码
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default ModifyPassword;
