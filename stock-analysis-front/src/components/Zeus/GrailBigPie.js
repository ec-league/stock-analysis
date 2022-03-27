import React, { Component, Suspense } from "react";
import {Card, Icon, Tooltip as Atooltip} from "antd";
import {Axis, Chart, Coord, Geom, Legend, Tooltip} from "bizcharts";
import DataSet from "@antv/data-set";
export default class GrailBigPie extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { DataView } = DataSet;
    const data = new DataView();
    data.source(this.props.data).transform({
      type: "percent",
      field: "count",
      dimension: "item",
      as: "percent"
    });
    const cols = {
      percent: {
        formatter: val => {
          val = val * 100 + "%";
          return val;
        }
      }};
    return (
      <Card style={{ margin: this.props.pmargin }} title={this.props.title}>
        <Chart
          height={this.props.height}
          width={this.props.width}
          padding={[1,1,1,1]}
          data={data}
          scale={cols}
          forceFit
        >
          <Coord type="theta" radius={0.75} />
          <Axis name="percent" />
          {/*<Legend*/}
          {/*  position="bottom-center"*/}
          {/*/>*/}
          <Tooltip
            showTitle={false}
            itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
          />
          <Geom
            type="intervalStack"
            position="percent"
            color="item"
            // tooltip={[
            //   "item*percent",
            //   (item, percent) => {
            //     percent = percent * 100 + "%";
            //     return {
            //       name: item,
            //       value: percent
            //     };
            //   }
            // ]}
            style={{
              lineWidth: 1,
              stroke: "#fff"
            }}
          >
          </Geom>
        </Chart>
      </Card>
    )
  }
}
