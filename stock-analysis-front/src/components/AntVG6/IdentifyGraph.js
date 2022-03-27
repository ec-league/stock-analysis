import React, { useEffect, useState } from 'react';
import G6 from '@antv/g6';
import dagre from 'dagre';


export default function IdentifyGraph(props) {
  const data = props.data;

  // const FlowGraph = () =>
  // {
  // const data = {
  //   nodes: [{
  //     id: "1",
  //     label: "name",
  //   }, {
  //     id: "2",
  //     label: "sex"
  //   }, {
  //     id: "3",
  //     label: "salary"
  //   }, {
  //     id: "4",
  //     label: "idNo"
  //   }, {
  //     id: "5",
  //     label: "address"
  //   }, {
  //     id: "6",
  //     label: "assets"
  //   }, {
  //     id: "7",
  //     label: "age",
  //   }, {
  //     id: "8",
  //     label: "married",
  //   }],
  //   edges: [{
  //     source: "1",
  //     target: "2"
  //   }, {
  //     source: "1",
  //     target: "3"
  //   },  {
  //     source: "3",
  //     target: "5"
  //   },{
  //     source: "2",
  //     target: "5"
  //   },{
  //     source: "5",
  //     target: "7"
  //   } ,{
  //     source: "2",
  //     target: "4"
  //   },{
  //     source: "5",
  //     target: "6"
  //   }, {
  //     source: "6",
  //     target: "8"
  //   }, {
  //     source: "3",
  //     target: "4"
  //   }, {
  //     source: "4",
  //     target: "7"
  //   },  {
  //     source: "7",
  //     target: "8"
  //   }, {
  //     source: "4",
  //     target: "6"
  //   }]
  // };

  useEffect(() => {

    var graph = new G6.Graph({
      container: "mountNode",
      width: 1000,
      height: 800,
      layout: {
        type: 'dagre',
        rankdir: 'LR'
      },
      modes: {
        default: [{
          type: 'collapse-expand',
          onChange: function onChange(item, collapsed) {
            var data = item.get('model').data;
            data.collapsed = collapsed;
            return true;
          }
        }, 'drag-canvas', 'zoom-canvas']
      },
      defaultNode: {
        shape: "node",
        labelCfg: {
          style: {
            fill: "#000",
            fontSize: 14
          }
        }
      },
      defaultEdge: {
        shape: "line-with-arrow",
        style: {
          endArrow: true,
          lineWidth: 2,
          stroke: "#ccc"
        }
      }
    });
    graph.data(data);
    graph.render();



    graph.on('node:mouseenter', function (evt) {
      var target = evt.target;

      var node = evt.item;
      var model = node.getModel();
      model.oriLabel = model.label;
      graph.setItemState(node, 'hover', true);
      if (model.children != null) {
        graph.updateItem(node, {
          label: model.id + ',衍生变量',
          labelCfg: {
            style: {
              fill: '#f00'
            }
          }
        });
      }
      else {
        graph.updateItem(node, {
          label: model.id + ',基础变量',
          labelCfg: {
            style: {
              fill: '#f00'
            }
          }
        });
      }
    });
    graph.on('node:mouseleave', function (evt) {
      var node = evt.item;
      var model = node.getModel();
      graph.setItemState(node, 'hover', false);
      graph.updateItem(node, {
        label: model.oriLabel,
        labelCfg: {
          style: {
            fill: '#555'
          }
        }
      });
    });

  });

  return (
    <div id='mountNode'></div>
  );
}

