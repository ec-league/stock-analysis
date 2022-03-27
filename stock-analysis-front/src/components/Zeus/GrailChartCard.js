import React, { Component, Suspense } from "react";
import {Icon, Tooltip as Atooltip} from "antd";
import styles from "@/style/zeus/style.less";
import {ChartCard} from "@/components/Charts";
import { FormattedMessage } from 'umi-plugin-react/locale';
import Trend from '@/components/Trend';
import mystyle from "@/style/zeus/GrailChartCard.less";

export default class GrailChartCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ChartCard
        padding={[1,1,1,1]}
        style={{ margin: this.props.pmargin }}
        title={this.props.title}
        action={
          <Atooltip title={this.props.atitle}>
            <Icon type="info-circle-o"/>
          </Atooltip>
        }
        total={this.props.data.total}
        footer={
          <div className={mystyle.divFlex}  >
          <Trend flag={this.props.data.weekflag}>
            <FormattedMessage id="BLOCK_NAME.analysis.week" defaultMessage="周环比" />
            <span className={styles.trendText}>{this.props.data.weekvalue}</span>
          </Trend>
          <Trend flag={this.props.data.dayflag}>
            <FormattedMessage id="BLOCK_NAME.analysis.day" defaultMessage="日环比" />
            <span className={styles.trendText}>{this.props.data.dayvalue}</span>
          </Trend>
        </div>
        }
      >
      </ChartCard>
    )
  }
}
