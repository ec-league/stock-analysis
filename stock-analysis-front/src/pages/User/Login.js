import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale';
import { Checkbox, Alert, Modal, Icon } from 'antd';
import Login from '@/components/Login';
import styles from './Login.less';

const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;

@connect(({ login, user, loading }) => ({
  login,
  user,
  submitting: loading.effects['user/login'],
}))
class LoginPage extends Component {
  state = {
    type: 'account',
    autoLogin: true,
  };

  onTabChange = type => {
    this.setState({ type });
  };

  onGetCaptcha = () =>
    new Promise((resolve, reject) => {
      this.loginForm.validateFields(['mobile'], {}, (err, values) => {
        if (err) {
          reject(err);
        } else {
          const { dispatch } = this.props;
          dispatch({
            type: 'login/getCaptcha',
            payload: values.mobile,
          })
            .then(resolve)
            .catch(reject);

          Modal.info({
            title: formatMessage({ id: 'app.login.verification-code-warning' }),
          });
        }
      });
    });

  handleSubmit = (err, values) => {
    const { type } = this.state;
    if (!err) {
      const { dispatch } = this.props;
      dispatch({
        type: 'user/login',
        payload: {
          ...values,
          type,
        },
      });
    }
  };

  changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };

  renderMessage = content => (
    <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />
  );

  render() {
    const { user, submitting } = this.props;
    const { type, autoLogin } = this.state;
    return (
      <div className={styles.main}>
        <Login
          defaultActiveKey={type}
          onTabChange={this.onTabChange}
          onSubmit={this.handleSubmit}
          ref={form => {
            this.loginForm = form;
          }}
        >
          <Tab key="account" tab={formatMessage({ id: 'app.login.tab-login-credentials' })}>
            {user.status === 'error' &&
              user.type === 'account' &&
              !submitting &&
              this.renderMessage(formatMessage({ id: 'app.login.message-invalid-credentials' }))}
            <UserName
              name="userName"
              placeholder={`${formatMessage({ id: 'app.login.userName' })}`}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'validation.userName.required' }),
                },
              ]}
            />
            <Password
              name="password"
              placeholder={`${formatMessage({ id: 'app.login.password' })}`}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'validation.password.required' }),
                },
              ]}
              onPressEnter={e => {
                e.preventDefault();
                this.loginForm.validateFields(this.handleSubmit);
              }}
            />
          </Tab>
          <div>
            <Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>
              <FormattedMessage id="app.login.remember-me" />
            </Checkbox>
            <a style={{ float: 'right' }} href="">
            </a>
          </div>
          <Submit loading={submitting}>
            <FormattedMessage id="app.login.login" />
          </Submit>
        </Login>
      </div>
    );
  }
}

export default LoginPage;
