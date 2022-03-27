import React, { PureComponent, Fragment } from 'react';
import { Card, Steps } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './style.less';

const { Step } = Steps;

export default class TaskAdd extends PureComponent {
  getCurrentStep() {
    const { location } = this.props;
    const { pathname } = location;
    const pathList = pathname.split('/');
    switch (pathList[pathList.length - 1]) {
      case 'info':
        return 0;
      case 'detail':
        return 1;
      case 'result':
        return 2;
      default:
        return 0;
    }
  }

  render() {
    const { location, children } = this.props;
    return (
      <PageHeaderWrapper
        title="新增任务"
        tabActiveKey={location.pathname}
        content="新增定时任务或者一次任务, 用于评估模型的准确度"
      >
        <Card bordered={false}>
          <Fragment>
            <Steps current={this.getCurrentStep()} className={styles.steps}>
              <Step title="任务基本信息" />
              <Step title="任务执行信息" />
              <Step title="完成任务填写" />
            </Steps>
            {children}
          </Fragment>
        </Card>
      </PageHeaderWrapper>
    );
  }
}
