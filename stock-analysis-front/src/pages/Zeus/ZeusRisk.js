import React, { Component } from "react";
import { Table,Tabs ,Card, Col,  Row} from "antd";
import { connect } from "dva";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import GrailNdge from "@/components/Zeus/GrailNdge";
import GrailSector from "@/components/Zeus/GrailSector";

@connect(({ zeusgrail }) => ({
  zeusgrail
}))
export default class ZeusRisk extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "zeusgrail/fetch"
    });
  }

  render() {
    const {
      zeusgrail: {
        riskStatistics
      }
    } = this.props;
    const param6={title:"降级分类占比",name:"客群分类",height:window.innerHeight/2+100, width:window.innerWidth/2, data:riskStatistics};
    return (
      <PageHeaderWrapper
      >
        <Row type="flex" >
          <Col span={12}>
            {new GrailNdge(param6).render()}
          </Col>
        </Row>
      </PageHeaderWrapper>
    );
  }
}
