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




export default  class Treedendrogram extends React.Component {

  componentWillReceiveProps(nextProps,nextContext) {

  }
  render() {
    const data=this.props.data;
    const ds = new DataSet();
    const dv = ds.createView().source(data, {
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
        let length;
        if(d&&d.name){
          length=d.name.length
        }else{
          length=0;
        }
        return 18 *length;
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
              x: [link.source.x, link.target.x],
              y: [link.source.y, link.target.y],
              起点: link.source.id,
              终点: link.target.id
            }))}
          >
            <Geom
              type="edge"
              position="x*y"
              shape="vhv"
              color="grey"
              opacity={0.5}
              tooltip="起点*终点"
            />
          </View>
          <View
            data={dv.getAllNodes().map(node => ({
              是否有子节点: !!(node.children && node.children.length),
              name: node.data.name,
              value: node.type,
              depth: node.type,
              x: node.x,
              y: node.y
            }))}
          >
            <Geom type="point" position="x*y" color="是否有子节点">
              <Label
                content="name"
                textStyle={(text, item) => {
                  const textAlign = item.point.是否有子节点 ? "是" : "否";
                  return {
                    fill: "grey",
                    fontSize: 12,
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

