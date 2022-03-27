import React, { Component, Suspense } from "react";
import {Axis, Chart, Geom, Legend, Tooltip, View} from "bizcharts";
import DataSet from "@antv/data-set";
import style from "@/style/zeus/Grail.less";


export default class GrailFirstApproval extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const ds = new DataSet();
    ds.setState('type', '');
    const dv = ds.createView().source(this.props.data);

    dv.transform({
      type: 'fold',
      fields: ['批件','转人工'], // 展开字段集
      key: 'type', // key字段
      value: 'value', // value字段
    })
      .transform({
        type: 'filter',
        callback: (d) => {
          console.log(ds.state.type);
          return d.type !== ds.state.type;
        }
      });
    const scale = {
      拒绝: {
        type: 'linear'
      },
    };

    const legendItems = [
      { value: '批件', marker: { symbol: 'square', fill: '#3182bd', radius: 5 } },
      { value: '转人工', marker: { symbol: 'square', fill: '#41a2fc', radius: 5 } },

      { value: '拒绝', marker: { symbol: 'hyphen', stroke: '#fad248', radius: 5, lineWidth: 3 } },
    ];
    return (
      <Chart
        height={innerWidth*0.3}
        padding={[1,1,1,1]}
        forceFit data={dv} scale={scale} padding="auto" onGetG2Instance={(c) => {
        this.chart = c;
      }}>
        <Legend
          custom
          allowAllCanceled
          items={legendItems}
          onClick={(ev) => {
            setTimeout(() => {
              const checked = ev.checked;
              const value = ev.item.value;
              if (value === '拒绝') {
                if (checked) {
                  this.chart.get('views')[0].get('geoms')[0].hide()
                } else {
                  this.chart.get('views')[0].get('geoms')[0].show()
                }
              }
              const newLegend = legendItems.map((d) => {
                if (d.value === value) {
                  d.checked = checked
                }
                return d;
              })
              this.chart.filter('type', (t) => {
                const legendCfg = newLegend.find(i => i.value == t);
                return legendCfg && legendCfg.checked;
              });
              this.chart.legend({
                items: newLegend
              })
              this.chart.repaint();
              // console.log(this.view)
            },0)
          }}
        />
        <Axis name="label" />
        <Axis name="value" position={'left'} />
        <Tooltip />
        <Geom
          type="interval"
          position="label*value"
          color={['type', (value) => {
            if (value === '批件') {
              return '#2b6cbb';
            }
            if (value === '转人工') {
              return '#41a2fc';
            }
            if (value === '收益') {
              return '#54ca76';
            }
          }]}
          adjust={[{
            type: 'dodge',
            marginRatio: 1 / 32,
          }]}
        />
        <View data={this.props.data} >
          <Axis name="拒绝" position="right" />
          <Geom type="line" position="label*拒绝" color="#fad248" size={3} />
        </View>
      </Chart>
    )
  }
}
