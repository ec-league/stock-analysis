import React from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
import DataSet from "@antv/data-set";



export default class GrailTree extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const ds = new DataSet();
    const dv = ds.createView().source(this.props.data, {
      type: "hierarchy",
      pureData: true
    });
    dv.transform({
      type: "hierarchy.dendrogram",
      // this layout algorithm needs to use pure data
      direction: "TB",

      getHGap() {
        return 10;
      },

      getVGap() {
        return 10;
      },

      getHeight() {
        return 18;
      },

      getWidth(d) {
        return 18 * d.name.length;
      }
    });
    return (
      <div>
        <Chart
          forceFit={true}
          padding={[0, 10, 0, 10]}
        >
          <Coord transpose />
          <Tooltip />
          <View
            data={dv.getAllLinks().map(link => ({
              x: [link.父节点.x, link.子节点.x],
              y: [link.父节点.y, link.子节点.y],
              父节点: link.父节点.id,
              子节点: link.子节点.id
            }))}
          >
            <Geom
              type="edge"
              position="x*y"
              shape="vhv"
              color="grey"
              opacity={0.5}
              tooltip="父节点*子节点"
            />
          </View>
          <View
            data={dv.getAllNodes().map(node => ({
              hasChildren: !!(node.children && node.children.length),
              name: node.data.name,
              value: node.type,
              depth: node.depth,
              x: node.x,
              y: node.y
            }))}
          >
            <Geom type="point" position="x*y" color="hasChildren">
              <Label
                content="name"
                textStyle={(text, item) => {
                  const textAlign = item.point.hasChildren ? "right" : "left";
                  return {
                    fill: "grey",
                    fontSize: 9,
                    textBaseline: "middle",
                    textAlign: textAlign
                  };
                }}
                offset={0}
              />
            </Geom>
          </View>
        </Chart>
      </div>
    );
  }
}

