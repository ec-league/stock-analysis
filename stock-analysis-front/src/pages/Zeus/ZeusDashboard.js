import React, { Component, Suspense } from "react";
import { Card, Col, Icon, Row,Tooltip as Atooltip} from "antd";
import { connect } from "dva";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import ZeusChartCard from "@/components/Zeus/ZeusChartCard";
import ZeusBigPie from "@/components/Zeus/ZeusBigPie";

@connect(({ zeus_dashboard }) => ({
  zeus_dashboard
}))
export default class ZeusDashboard extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({
      type: "zeus_dashboard/fetch"
    });
  }

  render() {
    const {
      zeus_dashboard: {
        modelStatistics,zeusFactorStatistics,zeusRuleStatistics
      }
    } = this.props;
    const param={title:"决策流总数",atitle:"决策流概要说明",total:modelStatistics.routerCount,usedCount:modelStatistics.usedCount1};
    const param1={title:"场景总数",atitle:"场景概要说明",total:modelStatistics.sceneCount,usedCount:modelStatistics.usedCount2};
    const param2={title:"规则总数",atitle:"规则概要说明",total:modelStatistics.ruleCount,usedCount:modelStatistics.usedCount3};
    const param3={title:"因子总数",atitle:"因子概要说明",total:modelStatistics.factorCount,usedCount:modelStatistics.usedCount4};
    const param4={title:"参数总数",atitle:"参数概要说明",total:modelStatistics.paramCount,usedCount:modelStatistics.usedCount5};
    const param5={title:"决策总数",atitle:"决策总数概要说明",total:modelStatistics.decisionCount,usedCount:modelStatistics.usedCount6};
    const param6={title:"规则占比图",height:window.innerHeight/2+100, width:window.innerWidth/2, data:zeusRuleStatistics};
    const param7={title:"因子状态图",height:window.innerHeight/2+100, width:window.innerWidth/2, data:zeusFactorStatistics};
    return (
      <PageHeaderWrapper
      >
        <Row type="flex" justify="space-around">
          <Col span={4}>
            {new ZeusChartCard(param).render()}
          </Col>
          <Col span={4}>
            {new ZeusChartCard(param1).render()}
          </Col>
          <Col span={4}>
            {new ZeusChartCard(param2).render()}
          </Col>
          <Col span={4}>
            {new ZeusChartCard(param3).render()}
          </Col>
          <Col span={4}>
            {new ZeusChartCard(param4).render()}
          </Col>
          <Col span={4}>
            {new ZeusChartCard(param5).render()}
          </Col>
        </Row>
        <Row type="flex" >
          <Col span={12}>
            {new ZeusBigPie(param6).render()}
          </Col>
          <Col span={12}>
            {new ZeusBigPie(param7).render()}
          </Col>
        </Row>
      </PageHeaderWrapper>
    );
  }
}
