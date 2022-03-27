import React from 'react';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
} from 'bizcharts';
import {connect} from "dva";
import {Card} from "antd";
import fz from "@/style/zeus/Grail.less";


@connect(({ zeus_dashboard }) => ({
  zeus_dashboard
}))
export default class ZeusScene extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({
      type: "zeus_dashboard/fetch"
    });
  }
  render() {
    const {
      zeus_dashboard: {
        hitRulesStatistics
      }
    } = this.props;
    const title="最新命中规则及相关场景分布";
    const cols = {
      sceneCount: {
        alias: "场景命中数"
      },
      ruleCount: {
        alias: "规则命中数"
      },
      ruleName: {
        alias: "规则名称"
      },
      sceneName: {
        alias: "场景名称"
      }
    };
    return (

      <Card title={title} forceFit>
        <Chart  height={800} data={hitRulesStatistics} scale={cols} className={fz} forceFit>
          <Tooltip
            showTitle={false}
            crosshairs={{
              type: 'cross',
            }}
          />

          <Axis name="sceneCount" title={"场景命中数"}/>
          <Axis name="ruleCount" title={"规则命中数"}/>
          <Geom
            type="point"
            //x*y
            position="sceneCount*ruleCount"
            opacity={0.65}
            color="ruleName"
            shape={['ruleName', ['circle', 'square']]}
            size={4}
            tooltip="ruleName*ruleCount*sceneName*sceneCount"
          />
          <Legend />
        </Chart>
      </Card>
    );
  }
}

