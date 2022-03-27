import React, { Component } from "react";
import { Table,Tabs ,Card, Col,  Row} from "antd";
import { connect } from "dva";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import GrailNdge from "@/components/Zeus/GrailNdge";
import GrailSector from "@/components/Zeus/GrailSector";

@connect(({ zeusgrail }) => ({
  zeusgrail
}))
export default class ZeusCust extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "zeusgrail/fetch"
    });
  }

  render() {
    const {
      zeusgrail: {
        custGroupStatistics, custLevelStatistics
      }
    } = this.props;
    const param6={title:"客群分类占比",name:"客群分类",height:window.innerHeight/2+100, width:window.innerWidth/2, data:custGroupStatistics};
    const param7={title:"客户等级占比",name:"客群等级",height:window.innerHeight/2+100, width:window.innerWidth/2, data:custLevelStatistics};
    return (
      <PageHeaderWrapper
      >
        <Row type="flex" >
          <Col span={12}>
            {new GrailNdge(param6).render()}
          </Col>
          <Col span={12}>
            {new GrailSector(param7).render()}
          </Col>
        </Row>
      </PageHeaderWrapper>
    );
  }
}
