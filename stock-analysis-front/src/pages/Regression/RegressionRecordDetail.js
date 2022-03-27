import React, { Fragment, PureComponent } from 'react';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Button, Card, Col, Descriptions, Empty, Icon, Row } from 'antd';
import DescriptionList from '@/components/DescriptionList';
import router from 'umi/router';

import { Bar, ChartCard, Field, MiniArea, MiniBar, MiniProgress, Pie, yuan } from '@/components/Charts';

const ButtonGroup = Button.Group;
const { Description } = DescriptionList;

@connect(({ regression_detail }) => ({
  regression_detail: regression_detail,
}))

export default class RegressionRecordDetail extends PureComponent {

  componentDidMount() {
    const { dispatch, match } = this.props;
    const { params } = match;

    dispatch({
      type: 'regression_detail/fetchRegressionRecordDetail',
      payload: params.id,
    });
  }

  renderOneRegressionRecordDetail() {

    const { regression_detail: { current_regression_record_detail } } = this.props;

    let percent = 0;
    let total = 0;


    if (current_regression_record_detail && current_regression_record_detail.id != null) {
      percent = current_regression_record_detail.regressionProfile.hit / current_regression_record_detail.regressionProfile.finish * 100;
      total = current_regression_record_detail.regressionProfile.total
    }


    return (
      <Row>
        <Col span="24">
          <div>
            <span>本次回溯共计{total}条数据</span>
            <br/>
            <span>{percent > 60 ? <Icon theme="twoTone" type="check-circle"/> :
              <Icon theme="twoTone" type="exclamation-circle"/>} 命中:{percent}%</span>
            <br/>
            <span>{percent > 60 ? '模型评估可用' : '模型有待改善'}</span>
            <MiniProgress
              percent={percent}
              strokeWidth={12}
              target={60}
              color={percent > 60 ? 'green' : 'red'}
            />
          </div>

        </Col>
      </Row>
    );
  }


  render() {

    const {
    } = this.props;
    return (
      <Card title="回溯记录详情" bordered={false}>
        {this.renderOneRegressionRecordDetail()}
      </Card>
    );
  }
}
