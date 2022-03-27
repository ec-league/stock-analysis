import React, { Component, Suspense } from "react";
import {Axis, Chart, Geom, Legend, Tooltip, View,Coord} from "bizcharts";
import DataSet from "@antv/data-set";
import style from "@/style/zeus/Grail.less"


export default class GrailTotalNum extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data=this.props.data.data;
    const cols = {
      count: {
        alias:'交易笔数' // 别名
      }
    };
    return (
        <Chart   height={534.5+this.props.data.height} data={data} scale={cols} forceFit>
          <Coord  scale={[1, 1]}/>

          <Axis name="key" />
          <Axis name="count" />
          <Tooltip showTitle={false} crosshairs={{
            type: "y"
          }}/>
          <Geom type="interval" position="key*count" color="#fb7b45" size={45}
                adjust={[
                  {
                    type: 'dodge',
                    marginRatio: 0.05, // 数值范围为 0 至 1，用于调整分组中各个柱子的间距
                    dodgeBy: "key",
                  },
                  { type:'stack',reverseOrder: false }

                ]}
          />
        </Chart>
    );
  }
}
