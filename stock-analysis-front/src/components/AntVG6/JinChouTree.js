import React, { useEffect, useState } from 'react';
import G6 from '@antv/g6';

export default function JinChouTreeGraph(props) {
  const data = props.data;

  useEffect(() => {
    const graph = new G6.TreeGraph({
      container: 'mountNode',
      width: window.innerWidth * 0.8,
      height: window.innerHeight * 0.8,
      pixelRatio: 2,
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
        size: 16,
        anchorPoints: [[0, 0.5], [1, 0.5]],
        style: {
          fill: '#40a9ff',
          stroke: '#096dd9'
        }
      },
      defaultEdge: {
        shape: 'cubic-horizontal',
        style: {
          stroke: '#A3B1BF'
        }
      },
      layout: {
        type: 'compactBox',
        direction: 'LR',
        getId: function getId(d) {
          return d.id;
        },
        getHeight: function getHeight() {
          return 16;
        },
        getWidth: function getWidth() {
          return 16;
        },
        getVGap: function getVGap() {
          return 10;
        },
        getHGap: function getHGap() {
          return 100;
        }
      }
    });
    graph.node(function (node) {
      return {
        size: 26,
        style: {
          fill: '#40a9ff',
          stroke: '#096dd9'
        },
        label: node.nodeName,
        labelCfg: {
          position: node.children && node.children.length > 0 ? 'left' : 'right'
        }
      };
    });

    graph.data(data);
    graph.render();
    graph.fitView();


    graph.on('node:mouseenter', function (evt) {
      var target = evt.target;

      var node = evt.item;
      var model = node.getModel();
      model.oriLabel = model.label;
      graph.setItemState(node, 'hover', true);
      if (model.children != null) {
        graph.updateItem(node, {
          label: model.nodeName + ',衍生变量',
          labelCfg: {
            style: {
              fill: '#f00'
            }
          }
        });
      }
      else {
        graph.updateItem(node, {
          label: model.nodeName + ',基础变量',
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
    graph.on('edge:mouseenter', function (evt) {
      var target = evt.target;

      var edge = evt.item;
      var model = edge.getModel();
      model.oriLabel = model.label;
      graph.setItemState(edge, 'hover', true);
      graph.updateItem(edge, {
        label: 'hover 后',
        labelCfg: {
          style: {
            fill: '#f00'
          }
        }
      });
    });
    graph.on('edge:mouseleave', function (evt) {
      var edge = evt.item;
      var model = edge.getModel();
      graph.setItemState(edge, 'hover', false);
      graph.updateItem(edge, {
        label: '',
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



