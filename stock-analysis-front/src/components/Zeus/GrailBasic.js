import React, { Component, Suspense } from "react";
import {Axis, Chart, Coord, Geom, Legend, Tooltip} from "bizcharts";
import DataSet from "@antv/data-set";
import fz from "@/style/zeus/Grail.less";

export default class GrailBasic extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    const ds = new DataSet();
    const dv = ds.createView().source(this.props.data);
    dv.source(this.props.data).transform({
      type: "sort",

      callback(a, b) {
        // 排序依据，和原生js的排序callback一致
        return a.count - b.count > 0;
      }
    });
    const label = {
      offset: 15, // 数值，设置坐标轴文本 label 距离坐标轴线的距离
      rotate: 80, // 文本旋转角度
      // 设置文本的显示样式，还可以是个回调函数，回调函数的参数为该坐标轴对应字段的数值
      textStyle: {
        textAlign: 'center', // 文本对齐方向，可取值为： start center end
        fill: '#404040', // 文本的颜色
        fontSize: '12', // 文本大小
        fontWeight: 'bold', // 文本粗细
        textBaseline: 'top' // 文本基准线，可取 top middle bottom，默认为middle
      }
    };
    const scale = {
      count:{
        alias:'交易笔数' // 别名
      }
    };
    return (
      <div>
        <Chart
          scale={scale}
          height={644}
               data={dv}
               padding={[1,20,1,50]}
               forceFit>
          <Coord transpose scale={[1, 0.7]}/>

          <Axis
            name="rule" label={label}
          />
          <Axis name="count" />
          <Tooltip />
          <Geom type="interval" position="rule*count" color={this.props.color} />
        </Chart>
      </div>
    )

  }
}
