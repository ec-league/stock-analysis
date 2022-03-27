import React, { Fragment, PureComponent } from 'react';
import { Card, Steps } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const { Step } = Steps;

export default class FunctorAdd extends PureComponent {
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
    console.log("functor add");
    return (
      <PageHeaderWrapper
        title="新增算子"
        tabActiveKey={location.pathname}
      >
        <Card bordered={false}>
          <Fragment>
            <Steps current={this.getCurrentStep()}>
              <Step title="算子基本信息"/>
              <Step title="算子入参信息"/>
              <Step title="算子添加完成"/>
            </Steps>
            {children}
          </Fragment>
        </Card>
      </PageHeaderWrapper>
    );
  }
}
