import React, { useState, useEffect } from 'react';
import G6 from '@antv/g6';

const ERGraph = () =>
{

G6.registerEdge('relation', {
  draw: function draw(cfg, group) {
    const keyShape = group.addShape('path', {
      attrs: {
        path: [['M', cfg.startPoint.x, cfg.startPoint.y], ['L', cfg.endPoint.x, cfg.endPoint.y]],
        stroke: '#666',
        lineWidth: 2,
        lineAppendWidth: 4
      }
    });
    const center = keyShape.getPoint(0.5);
    const shapeContainer = group.addGroup();

    var point = G6.Util.getLabelPosition(keyShape, 0, 10, 4, true);
    group.addShape('text', {
      attrs: {
        text: cfg.sourceEntity,
        x: point.x,
        y: point.y,
        rotate: point.rotate,
        fill: '#666'
      }
    });
    point = G6.Util.getLabelPosition(keyShape, 1, -15, 4, true);
    group.addShape('text', {
      attrs: {
        text: cfg.targetEntity,
        x: point.x,
        y: point.y,
        fill: '#666',
        rotate: point.rotate
      }
    });
    shapeContainer.transform([['t', -center.x, -center.y], ['r', point.angle], ['t', center.x, center.y]]);
    shapeContainer.addShape('path', {
      attrs: {
        path: [['M', center.x - 40, center.y], ['L', center.x, center.y - 20], ['L', center.x + 40, center.y], ['L', center.x, center.y + 20], ['Z']],
        fill: '#fff',
        stroke: '#666'
      }
    });
    shapeContainer.addShape('text', {
      attrs: {
        text: cfg.relation,
        x: center.x,
        y: center.y,
        textAlign: 'center',
        textBaseline: 'middle',
        fill: '#666'
      }
    });
    return keyShape;
  }
});

  const data = {
  nodes: [{
    id: 'customer',
    label: 'customer',
    x: 200,
    y: 200,
    shape: 'rect',
    size: [60, 40]
  }, {
    id: 'customer_id',
    label: 'customer_id',
    x: 120,
    y: 160,
    shape: 'ellipse',
    size: [80, 40]
  }, {
    id: 'name',
    label: 'name',
    x: 140,
    y: 100,
    shape: 'ellipse',
    size: [80, 40]
  }, {
    id: 'address',
    label: 'address',
    x: 180,
    y: 60,
    shape: 'ellipse',
    size: [80, 40]
  }, {
    id: 'email',
    label: 'email',
    x: 240,
    y: 110,
    shape: 'ellipse',
    size: [80, 40]
  }, {
    id: 'order',
    label: 'order',
    x: 400,
    y: 200,
    shape: 'rect',
    size: [60, 40]
  }, {
    id: 'order_id',
    label: 'order_id',
    x: 320,
    y: 130,
    shape: 'ellipse',
    size: [80, 40]
  }, {
    id: 'order_status',
    label: 'order_status',
    x: 380,
    y: 80,
    shape: 'ellipse',
    size: [80, 40]
  }, {
    id: 'total_price',
    label: 'total_price',
    x: 440,
    y: 150,
    shape: 'ellipse',
    size: [80, 40]
  }, {
    id: 'employee',
    label: 'employee',
    x: 380,
    y: 380,
    shape: 'rect',
    size: [60, 40]
  }, {
    id: 'employee_id',
    label: 'employee_id',
    x: 320,
    y: 440,
    shape: 'ellipse',
    size: [80, 40]
  }, {
    id: 'title',
    label: 'title',
    x: 440,
    y: 440,
    shape: 'ellipse',
    size: [80, 40]
  }],
  edges: [{
    id: 'c_id',
    source: 'customer',
    target: 'customer_id'
  }, {
    id: 'c_name',
    source: 'customer',
    target: 'name'
  }, {
    id: 'c_address',
    source: 'customer',
    target: 'address'
  }, {
    id: 'c_email',
    source: 'customer',
    target: 'email'
  }, {
    id: 'o_id',
    source: 'order',
    target: 'order_id'
  }, {
    id: 'o_price',
    source: 'order',
    target: 'total_price'
  }, {
    id: 'o_status',
    source: 'order',
    target: 'order_status'
  }, {
    id: 'c_o',
    source: 'customer',
    target: 'order',
    relation: 'places',
    sourceEntity: '1',
    targetEntity: 'N',
    shape: 'relation'
  }, {
    id: 'o_e',
    source: 'employee',
    target: 'order',
    relation: 'finalize',
    sourceEntity: '1',
    targetEntity: 'N',
    shape: 'relation'
  }, {
    id: 'e_id',
    source: 'employee',
    target: 'employee_id'
  }, {
    id: 'e_title',
    source: 'employee',
    target: 'title'
  }]
};
  useEffect(() => {

    const graph = new G6.Graph({
      container: 'mountNode',
      width: window.innerWidth*0.6,
      height: window.innerHeight*0.6,
      pixelRatio: 2,
      modes: {
        default: ['drag-node', 'drag-canvas', 'zoom-canvas']
      }
    });
graph.data(data);
graph.render();

});

return (
  <div id='mountNode'> </div>
);
}

export default ERGraph
