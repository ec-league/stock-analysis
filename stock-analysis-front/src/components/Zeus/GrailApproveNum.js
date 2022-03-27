import React, { Component, Suspense } from "react";
import {Axis, Chart, Coord, Geom, Legend, Tooltip, View} from "bizcharts";



export default class GrailApproveNum extends React.PureComponent {
  constructor(props) {
    super(props)

}
  render() {
    const data=this.props.data.data;
    const cols = {
      count: {
        alias:'批核率' // 别名
      }
    };

    return (
        <Chart height={534.5+this.props.data.height} data={data} scale={cols} forceFit>
          <Coord  scale={[1, 1]}/>

          <Axis name="key" />
          <Axis name="count" />
          <Tooltip showTitle={false} crosshairs={{
            type: "y"
          }}/>
          <Geom type="interval" position="key*count" color="#2e82e6" size={45}
                adjust={[
                  {
                    type: 'dodge',
                    marginRatio: 0.105, // 数值范围为 0 至 1，用于调整分组中各个柱子的间距
                    dodgeBy: "key",
                  },
                  { type:'stack',reverseOrder: false }

                ]}
          />
        </Chart>
    );
  }
}
