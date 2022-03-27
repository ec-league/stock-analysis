
import React from "react";
import {
  Chart,
  Geom,
  Tooltip,
  Coord,
  Legend,
} from "bizcharts";
import {Card} from "antd";

export default class GrailSector extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Card title={this.props.title}>
      <Chart
        height={660}
        data={this.props.data}
        forceFit
        padding={[40, 0]}
      >
        <Legend
          position="bottom"
        />
        <Coord
          type="theta"
          startAngle={Math.PI}
          endAngle={Math.PI * (3 / 2)}
        />
        <Tooltip showTitle={false}/>
        <Geom type="intervalStack" position="value" color="type"
              tooltip={['type*value', (type, value)=>{ // array
                return {
                  name:this.props.name+`:${type}`,
                  value:`数量:${value}`
                }
              }]}>
          {/*<Label content="type" />*/}
        </Geom>
      </Chart>
      </Card>
    );
  }
}


