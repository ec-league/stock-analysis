import React, { Component } from "react";
import { formatMessage, FormattedMessage } from "umi-plugin-react/locale";
import { Button, Form, Input } from "antd";
import { connect } from "dva";
import styles from "./UserInfo.less";

const FormItem = Form.Item;

const validatorPhone = (rule, value, callback) => {
  const values = value.split('-');

  if (!value.match(/^1[3456789]\d{9}$/)) {
    callback('Please input your correct phone number!');
  }
  callback();
};

@connect(({ user }) => ({
  currentUser: user.currentUser,
}))
@Form.create()
class UserInfo extends Component {
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
      currentUser
    } = this.props;

    return (
      <div className={styles.baseView} ref={this.getViewDom}>
        <div className={styles.left}>
          <Form layout="vertical" onSubmit={this.handleSubmit} hideRequiredMark>
            <FormItem label={formatMessage({ id: 'app.settings.basic.email' })}>
              {getFieldDecorator('email', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'app.settings.basic.email-message' }, {}),
                  },
                ],
              })(<Input onChange={(e) => {
                dispatch({
                  type: 'user/setNewUserInfo',
                  payload: {
                    email: e.target.value,
                    name: currentUser.name,
                    phone: currentUser.phone,
                    userProfile: currentUser.userProfile,
                    address: currentUser.address,
                  }
                });
              }}/>)}
            </FormItem>
            <FormItem label={formatMessage({ id: 'app.settings.basic.nickname' })}>
              {getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'app.settings.basic.nickname-message' }, {}),
                  },
                ],
              })(<Input onChange={(e) => {
                dispatch({
                  type: 'user/setNewUserInfo',
                  payload: {
                    email: currentUser.email,
                    name: e.target.value,
                    phone: currentUser.phone,
                    userProfile: currentUser.userProfile,
                    address: currentUser.address,
                  }
                });
              }}/>)}
            </FormItem>
            <FormItem label={formatMessage({ id: 'app.settings.basic.profile' })}>
              {getFieldDecorator('userProfile', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'app.settings.basic.profile-message' }, {}),
                  },
                ],
              })(
                <Input.TextArea
                  placeholder={formatMessage({ id: 'app.settings.basic.profile-placeholder' })}
                  rows={4}
                  onChange={(e) => {
                    dispatch({
                      type: 'user/setNewUserInfo',
                      payload: {
                        email: currentUser.email,
                        name: currentUser.name,
                        phone: currentUser.phone,
                        userProfile: e.target.value,
                        address: currentUser.address,
                      }
                    });
                  }}
                />
              )}
            </FormItem>
            <FormItem label={formatMessage({ id: 'app.settings.basic.address' })}>
              {getFieldDecorator('address', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'app.settings.basic.address-message' }, {}),
                  },
                ],
              })(<Input onChange={(e) => {
                dispatch({
                  type: 'user/setNewUserInfo',
                  payload: {
                    email: currentUser.email,
                    name: currentUser.name,
                    phone: currentUser.phone,
                    userProfile: currentUser.userProfile,
                    address: e.target.value,
                  }
                });
              }}/>)}
            </FormItem>
            <FormItem label={formatMessage({ id: 'app.settings.basic.phone' })}>
              {getFieldDecorator('phone', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'app.settings.basic.phone-message' }, {}),
                  },
                  { validator: validatorPhone },
                ],
              })(<Input onChange={(e) => {
                dispatch({
                  type: 'user/setNewUserInfo',
                  payload: {
                    email: currentUser.email,
                    name: currentUser.name,
                    phone: e.target.value,
                    userProfile: currentUser.userProfile,
                    address: currentUser.address,
                  }
                });
              }}/>)}
            </FormItem>
            <Button type="primary" onClick={() => {
              dispatch({
                type: 'user/modifyUserInfo',
                payload: {
                  email: currentUser.email,
                  name: currentUser.name,
                  phone: currentUser.phone,
                  userProfile: currentUser.userProfile,
                  address: currentUser.address,
                }
              });
            }}>
              <FormattedMessage
                id="app.settings.basic.update"
                defaultMessage="Update Information"
              />
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default UserInfo;
