import React, { Component, Suspense } from "react";
import { Card, Col, Icon, Row, Tooltip } from "antd";
import { connect } from "dva";
import { getTimeDistance } from "@/utils/utils";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import moment from "moment";
import numeral from "numeral";

import { Bar, ChartCard, Field, MiniArea, MiniBar, MiniProgress, Pie, yuan } from "@/components/Charts";

const visitData = [];
const beginDay = new Date().getTime();
for (let i = 0; i < 14; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: Math.floor(Math.random() * 100) + 10,
  });
}

const salesData = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}

const salesPieData = [
  {
    x: '家用电器',
    y: 4544,
  },
  {
    x: '食用酒水',
    y: 3321,
  },
  {
    x: '个护健康',
    y: 3113,
  },
  {
    x: '服饰箱包',
    y: 2341,
  },
  {
    x: '母婴产品',
    y: 1231,
  },
  {
    x: '其他',
    y: 1231,
  },
];

@connect(({ model_dashboard }) => ({
  model_dashboard
}))
export default class ModelDashboard extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({
      type: "model_dashboard/fetch"
    });
  }

  render() {
    const {
      model_dashboard: {
        modelStatistics, dataSourceStatistics, dataSourceInvokeDigest, variableStatistics, modelCalcStatistics, modelCalHourDigest, modelCalDayDigest
      }
    } = this.props;

    return (
      <PageHeaderWrapper
      >
        <Row type="flex" justify="space-around">
          <Col span={6}>
            <ChartCard
              style={{ margin: 8 }}
              title="模型总数"
              action={
                <Tooltip title="模型概要说明">
                  <Icon type="info-circle-o"/>
                </Tooltip>
              }
              total={modelStatistics.modelCount}
              footer={<Field label="模型实际应用" value={modelStatistics.usedCount + modelStatistics.grayCount}/>}
              contentHeight={46}
            >
              <span>
                使用中:{modelStatistics.usedCount}
              </span>
              <span style={{ marginLeft: 16 }}>
                灰度中:{modelStatistics.grayCount}
              </span>
            </ChartCard>
          </Col>
          <Col span={6}>
            <ChartCard
              style={{ margin: 8 }}
              title="数据源总数"
              action={
                <Tooltip title="数据源统计信息说明">
                  <Icon type="info-circle-o"/>
                </Tooltip>
              }
              total={numeral(dataSourceStatistics.total).format('0,0')}
              footer={<Field label="数据源类型" value={dataSourceStatistics.typeCount}/>}
              contentHeight={46}
            >
              <MiniBar height={46} data={dataSourceInvokeDigest}/>
            </ChartCard>
          </Col>
          <Col span={6}>
            <ChartCard
              style={{ margin: 8 }}
              title="变量总数"
              action={
                <Tooltip title="变量概要说明">
                  <Icon type="info-circle-o"/>
                </Tooltip>
              }
              total={variableStatistics.variableCount}
              footer={<Field label="目前算子生成的衍生变量数" value={variableStatistics.functorDerivedCount}/>}
              contentHeight={46}
            >
              <span>
          衍生变量:{variableStatistics.derivedVariableCount}
              </span>
              <span style={{ marginLeft: 16 }}>
          基础变量: {variableStatistics.basicVariableCount}
              </span>
            </ChartCard>
          </Col>
          <Col span={6}>
            <ChartCard
              style={{ margin: 8 }}
              title="模型计算次数"
              action={
                <Tooltip title="指标说明">
                  <Icon type="info-circle-o"/>
                </Tooltip>
              }
              total={numeral(modelCalcStatistics.calTotal).format('0,0')}
              footer={<Field label="每日计算" value={numeral(modelCalcStatistics.calDaily).format('0,0')}/>}
              contentHeight={46}
            >
              <MiniArea line height={45} data={modelCalHourDigest}/>
            </ChartCard>
          </Col>
        </Row>
        <Row type="flex" justify="space-around">
          <Col span={24}>
            <Card style={{ margin: 8 }}>
              <Bar height={280} title="模型计算调用量" data={modelCalDayDigest}/>
            </Card>
          </Col>
        </Row>
      </PageHeaderWrapper>
    );
  }
}
