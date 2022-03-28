import { PureComponent } from "react";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import { Card } from "antd";

export default class Dashboard extends PureComponent {
  render() {
    return (
      <PageHeaderWrapper type={"success"} title={"股票大盘"}>
        <Card title={"股票信息"}/>
        <Card title={"模拟交易"} style={{ marginTop: 16 }}/>
        <Card title={"资产信息"} style={{ marginTop: 16 }}/>
      </PageHeaderWrapper>
    );
  }
}
