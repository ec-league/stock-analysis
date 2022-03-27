import React from "react";
import {
  Chart,
  Geom,
  Tooltip,
  Coord,
  Label,
  Legend,
} from "bizcharts";
import {Card} from "antd";

export default class GrailNdge extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Card title={this.props.title}>
      <Chart  data={this.props.data} padding="auto"
              height={660}

              forceFit>
          <Coord type="polar" />
          <Tooltip showTitle={false}/>
          <Legend
            position="right-center"
          />
          <Geom
            type="interval"
            color="type"
            position="type*value"
            tooltip={['type*value', (type, value)=>{ // array
              return {
                name:this.props.name+`:${type}`,
                value:`数量:${value}`
              }
            }]}
          >
            <Label content="type" />
          </Geom>

        </Chart>
      </Card>
    );
  }
}

