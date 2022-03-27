import React from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Legend
} from "bizcharts";
import DataSet from "@antv/data-set";

export default class GrailCheckPeople extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      data:this.props.data
    }
  }
  shouldComponentUpdate(newProps, newState) {
    if(this.props.data===newProps.data){
      return false;
    }else{
      this.setState((state, props) =>({
        data: props.data
      }));
    }
    return true;
  }
  render() {
    const {DataView} = DataSet;
    const ages = [
      "查人行",
      "不查人行",
      "查三方",
      "不查三方",
      "一审通过",
      "二审通过",
      "一审拒绝",
      "二审拒绝",
      "二审转人工",
      "一审转人工"
    ];
    const dv = new DataView();
    dv.source(this.props.data)
      .transform({
        type: "fold",
        fields: ages,
        key: "age",
        value: "population",
        retains: ["State"]
      })
      .transform({
        type: "map",
        callback: obj => {
          const key = obj.age;
          let type;
          if (key === "查人行") {
            type = "a";
          } else if (key === "不查人行") {
            type = "b";
          } else if (key === "查三方") {
            type = "c";
          } else if (key === "不查三方") {
            type = "e";
          } else if (key === "一审通过") {
            type = "f";
          } else if (key === "二审通过") {
            type = "g";
          } else if (key === "一审拒绝") {
            type = "h";
          } else if (key === "二审拒绝") {
            type = "i";
          } else if (key === "一审转人工") {
            type = "j";
          } else if (key === "二审转人工") {
            type = "k";
          }
          obj.type = type;
          return obj;
        }
      });
    const colorMap = {
      "查人行": "#fecd52",
      "不查人行": "#6D85A0",
      "查三方": "#fecd52",
      "不查三方": "#6D85A0",
      "一审通过": "#fecd52",
      "二审通过":"#fecd52",
      "一审拒绝": "#6D85A0",
      "二审拒绝": "#6D85A0",
      "二审转人工": "#d8904b",
      "一审转人工": "#d8904b",
    };
    const scale={
      State:{
        type: 'cat',
        range: [ 1/(this.props.data.length), 0.90 ]
      }
    }
    return (
        <Chart
          height={644}
          data={dv}
          forceFit
          scale={scale}
          padding={[20,88,80,30]}
        >
          <Coord scale={[1, 1.1]} />
          <Axis
            name="State"
          />
          <Axis
            name="population"
          />
          <Legend offsetX={-31} position="right-center" layout="vertical"  />
          <Tooltip/>
          <Geom
            size={20}
            type="interval"
            position="age*population"
            color={[
              "age",
              function (age) {
                return colorMap[age];
              }
            ]}
            adjust={[
              {
                type: 'dodge',
                marginRatio: 0.5, // 数值范围为 0 至 1，用于调整分组中各个柱子的间距
                dodgeBy: "type",
              },
              { type:'stack',reverseOrder: false }

            ]}
          />
        </Chart>
    );
  }

}
