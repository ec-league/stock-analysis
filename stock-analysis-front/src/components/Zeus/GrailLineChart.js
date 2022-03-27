import React, { Component, Suspense } from "react";
import {Axis, Chart, Geom, Legend, Tooltip} from "bizcharts";
import style from "@/style/zeus/Grail.less"



export default class GrailLineChart extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const cols = {
      num: {
        range: [0, 1]
      }
    }
    return (
      <Chart

        height={innerWidth*this.props.percent}
        data={this.props.data} scale={cols} forceFit>
        <Legend itemFormatter={(val)=>{
          const obj = {"sucess": "调用量", "fail": "批核率"}
          return obj[val]; // val 为每个图例项的文本值
        } }/>

        <Axis
          name="num"
          label={{
            formatter: val => `${val}笔`
          }}
        />
        <Axis name="date" />
        <Tooltip
          crosshairs={{
            type: "y"
          }}
        />
        <Geom
          type="line"
          position="date*num"
          size={2}
          color={"type"}
          shape={"smooth"}
          tooltip={['type*num', (type,num)=>{
            const obj = {"sucess": "调用量", "fail": "批核率"}
            return {
              name:obj[type],
              value: num
            }
          }]}

        />
        <Geom
          type="point"
          position="date*num"
          size={4}
          shape={"circle"}
          color={"type"}
          style={{
            stroke: "#fff",
            lineWidth: 1
          }}
        />
      </Chart>
    )
  }
}
