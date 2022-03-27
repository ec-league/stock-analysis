import React, { Component, Suspense } from "react";
import {Icon, Tooltip as Atooltip} from "antd";
import {ChartCard} from "@/components/Charts";
export default class ZeusChartCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ChartCard

        forceFit
        style={{ margin: this.props.pmargin }}
        title={this.props.title}
        action={
          <Atooltip title={this.props.atitle}>
            <Icon type="info-circle-o"/>
          </Atooltip>
        }
        total={this.props.total}
      >
      <span>
      使用中:{this.props.usedCount}
        </span>
      </ChartCard>
    )
  }
}
