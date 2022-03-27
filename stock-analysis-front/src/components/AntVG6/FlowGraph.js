import React, { useState, useEffect } from 'react';
import G6 from '@antv/g6';
import dagre from 'dagre';


const FlowGraph = () =>
{
  const data = {
    nodes: [{
      id: '收集日志'
    }, {
      id: '入 es 集群'
    }, {
      id: '入 hdfs'
    }, {
      id: 'hive 计算'
    }, {
      id: 'report'
    }],
    edges: [{
      source: '收集日志',
      target: '入 es 集群'
    }, {
      source: '收集日志',
      target: '入 hdfs'
    }, {
      source: '入 hdfs',
      target: 'hive 计算'
    }, {
      source: '入 es 集群',
      target: 'hive 计算'
    }, {
      source: 'hive 计算',
      target: 'report'
    }]
  };

  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(function() {
    return {};
  });
  g.setGraph({
    rankdir: 'TB'
  });
  data.nodes.forEach(function(node) {
    node.label = node.id;
    g.setNode(node.id, {
      width: 150,
      height: 50
    });
  });
  data.edges.forEach(function(edge) {
    g.setEdge(edge.source, edge.target);
  });
  dagre.layout(g);
  var coord = void 0;
  g.nodes().forEach(function(node, i) {
    coord = g.node(node);
    data.nodes[i].x = coord.x;
    data.nodes[i].y = coord.y;
  });
  g.edges().forEach(function(edge, i) {
    coord = g.edge(edge);
    data.edges[i].startPoint = coord.points[0];
    data.edges[i].endPoint = coord.points[coord.points.length - 1];
    data.edges[i].controlPoints = coord.points.slice(1, coord.points.length - 1);
  });

  G6.registerNode('operation', {
    drawShape: function drawShape(cfg, group) {
      var rect = group.addShape('rect', {
        attrs: {
          x: -75,
          y: -25,
          width: 150,
          height: 50,
          radius: 10,
          stroke: '#00C0A5',
          fill: '#92949F',
          fillOpacity: 0.45,
          lineWidth: 2
        }
      });
      return rect;
    }
  }, 'single-shape');


  useEffect(() => {

    const graph = new G6.Graph({
      container: 'mountNode',
      width: window.innerWidth*0.6,
      height: window.innerHeight*0.6,
      pixelRatio: 2,
      modes: {
        default: ['drag-canvas', 'zoom-canvas']
      },
      defaultNode: {
        shape: 'operation',
        labelCfg: {
          style: {
            fill: '#666',
            fontSize: 14,
            fontWeight: 'bold'
          }
        }
      },
      defaultEdge: {
        shape: 'polyline',
        style: {
          endArrow: true,
          lineWidth: 2,
          stroke: '#ccc'
        }
      }
    });
    graph.data(data);
    graph.render();
    graph.fitView();

});

return (
  <div id='mountNode'> </div>
);
}

export default FlowGraph
