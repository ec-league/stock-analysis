import React, { useEffect, useState } from 'react';
import G6 from '@antv/g6';

export default function TreeModelGraph(props) {
  const data = props.data;
  const [treeGraph, setTreeGraph] = useState(undefined);

  useEffect(() => {
    if (treeGraph !== undefined) {
      treeGraph.changeData(data);
    } else {
      if (data) {
        const graph = new G6.TreeGraph({
          container: 'mountNode',
          width: document.getElementById("mountNode").scrollWidth,
          height: document.getElementById("mountNode").scrollHeight || 500,
          pixelRatio: 2,
          fitView: true,
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
              return 10;
            },
            getWidth: function getWidth() {
              return 20;
            },
            getVGap: function getVGap() {
              return 30;
            },
            getHGap: function getHGap(d) {
              if (d.id) {
                return 50 + d.id.length * 3;
              } else {
                return 50;
              }
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
              position: 'right'
            }
          };
        });

        graph.data(data);
        graph.render();


        graph.on('node:mouseenter', function (evt) {
          var target = evt.target;
          var node = evt.item;
          var model = node.getModel();
          console.log(model);
          model.oriLabel = model.label;
          graph.setItemState(node, 'hover', true);
          graph.updateItem(node, {
            label: model.expression,
            labelCfg: {
              style: {
                fill: '#f00'
              }
            }
          });
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

        setTreeGraph(graph);
      }


    }

  });

  return (
    <div id='mountNode' style={{ margin: 8 }}></div>
  );
}



