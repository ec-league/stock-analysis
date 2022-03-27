import React, { Fragment, PureComponent } from 'react';
import { connect } from 'dva';
import { Button, Card, Col, Descriptions, Modal, PageHeader, Row, Select, Table,Divider } from 'antd';
import { Axis, Chart, Coord, Geom, Label, Legend, Tooltip } from 'bizcharts';
import DescriptionList from '@/components/DescriptionList';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Bar } from '@/components/Charts';
import DataSet from '@antv/data-set';
import task from '../../../mock/task';
import router from 'umi/router';

@connect(({ model_apply_detail, variable_statics }) => ({
  model_apply_detail: model_apply_detail, variable_statics,
}))
export default class VarRegression extends PureComponent {
  state = {
    visible: false,
    key: 'input',
    mainKey: 'main',
    regressionModalVisible: false,
    currentRegressionId: null
  };

  componentDidMount() {
    const { dispatch, match, model_apply_detail } = this.props;
    const { params } = match;
    const { id } = params;

    dispatch({
      type: 'variable_statics/fetchOnlineStaticsByVariableId',
      payload: id,
    }),
      dispatch({
        type: 'variable_statics/fetchOfflineStaticsByVariableId',
        payload: id,
      })

  }

  showVarRegressionDetailModal(id) {
    this.setState({
      regressionModalVisible: true,
      currentRegressionId: id
    })
  }

  regressionModalHandleOk = (e) => {

    this.setState({
      regressionModalVisible: false
    })
  };

  regressionModalHandleCancel = e=> {
    this.setState({
      regressionModalVisible: false
    })
  };

  renderOfflineBar() {

    const { variable_statics: { offlineStatics } } = this.props;
    const regressionList = offlineStatics.offlineStatisticsInfo;

    let currentRegression = {
      statisticsInfo: {
        ranges: []
      }
    };

    if(offlineStatics!=null && offlineStatics.offlineStatisticsInfo!=null) {
      for (let [index, value] of regressionList.entries()) {
        if (value.regressionId == this.state.currentRegressionId) {
          currentRegression = value;
        }
      }
    }


    console.log("renderOfflineBar this.state.currentRegressionId: ", this.state.currentRegressionId);
    const ranges = currentRegression.statisticsInfo.ranges;

    console.log("renderOfflineBar currentRegression.statisticsInfo.ranges: ", ranges);

    const data = [];

    const cols = {
      count: {
        tickInterval: 20
      }
    };

    for (let [index, value] of ranges.entries()) {
      let key = '' + value.start + '-' + value.end;
      const item = {
        "interval": key,
        "count": value.count
      };
      data.push(item);
    }

    console.log("renderOfflineBar: ", data);

    return(
      <Chart height={400} data={data} scale={cols} forceFit>
        <Axis name="区间" />
        <Axis name="value" />
        <Tooltip
          crosshairs={{
            type: "y"
          }}
        />
        <Geom type="interval" position="interval*count" />
      </Chart>
    )
  }

  renderOfflinePie() {
    const { variable_statics: { offlineStatics } } = this.props;
    const regressionList = offlineStatics.offlineStatisticsInfo;
    const opType = offlineStatics.opType;
    const taskType = offlineStatics.taskType;

    let regressionDetail = {
      statisticsInfo:{
        groups: []
      }
    };

    if (regressionList != null) {
      for (let [index, value] of regressionList.entries()) {
        if (value.regressionId == this.state.currentRegressionId) {
          regressionDetail = value;
        }
      }
    }


    console.log('regressionDetail: ', regressionDetail);
    console.log('this.state.currentRegressionId: ', this.state.currentRegressionId);

    const { DataView } = DataSet;

    const data = regressionDetail.statisticsInfo.groups;

    const dv = new DataView();

    dv.source(data).transform({
      type: "percent",
      field: "count",
      dimension: "category",
      as: "percent"
    });
    const cols = {
      percent: {
        formatter: val => {
          val = val * 100 + "%";
          return val;
        }
      }
    };

    return (
      <Chart
        height={400}
        data={dv}
        scale={cols}
        padding={[80, 100, 80, 80]}
        forceFit
      >
        <Coord type="theta" radius={0.75} />
        <Axis name="percent" />
        <Legend
          position="right"
          offsetY={-100}
          offsetX={-50}
        />
        <Tooltip
          showTitle={false}
          itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
        />
        <Geom
          type="intervalStack"
          position="percent"
          color="category"
          tooltip={[
            "category*percent",
            (category, percent) => {
              percent = percent * 100 + "%";
              return {
                name: category,
                value: percent
              };
            }
          ]}
          style={{
            lineWidth: 1,
            stroke: "#fff"
          }}
        >
          <Label
            content="percent"
            formatter={(val, item) => {
              return item.point.category + ": " + val;
            }}
          />
        </Geom>
      </Chart>
    );

  }

  renderVarOfflineChart() {
    const { variable_statics: { offlineStatics } } = this.props;
    const opType = offlineStatics.opType;

    if (offlineStatics != null && opType != null) {
      //连续型
      if (opType == 'CONTINUOUS') {
        return (
          this.renderOfflineBar()
        );
      } else if (opType == 'CATEGORICAL') {
        return (

          this.renderOfflinePie()
        );
      }
    }
  }
  //变量回溯
  renderVarOfflineList() {
    const { variable_statics: { offlineStatics } } = this.props;

    const taskType = offlineStatics.taskType;
    const regressionList = offlineStatics.offlineStatisticsInfo;

    const { model_apply_detail: { outputVariables } } = this.props;
    const offlineVarRegressionData = regressionList;

    const formattedOfflineVarRegressionData = [];

    console.log("offlineVarRegressionData", offlineVarRegressionData);

    if (offlineVarRegressionData != null) {
      for (let [index, value] of offlineVarRegressionData.entries()) {
        const item = {
          "opType": value.opType,
          "regressionId": value.regressionId,
          "total": value.statisticsInfo.total
        };
        formattedOfflineVarRegressionData.push(item);
      }
    }


    const offlineVarColumns = [
      {
        title: '回溯Id',
        dataIndex: 'regressionId',
        key: 'regressionId'
      },
      {
        title: '总数',
        dataIndex: 'total',
        key: 'total',
      },
      {
        title: '类型',
        dataIndex: 'opType',
        key: 'opType',
      },
      {
        title: '显示详情',
        dataIndex: 'regressionId',
        key: 'id',
        render: text => (<a href="#" onClick={() => this.showVarRegressionDetailModal(text)}>回溯详情</a>),
      },
    ];

    let title = '';
    if(taskType == "single"){
      title = '单次执行'
    }else if (taskType == 'hour') {
      title = '按小时执行';
    }else if (taskType == 'day') {
      title = '按天执行';
    }

    return (
      <PageHeader
        /*title={title}*/
        style={{
          border: '1px solid rgb(235, 237, 240)',
        }}
        extra={[
        ]}
      >
        <Table columns={offlineVarColumns} dataSource={formattedOfflineVarRegressionData} />
        <Modal
          title="回溯结果"
          visible={this.state.regressionModalVisible}
          onOk={this.regressionModalHandleOk}
          onCancel={this.regressionModalHandleCancel}
        >
          {this.renderVarOfflineChart()}
        </Modal>
      </PageHeader>
    );
  }

  //实时数据统计饼图
  renderRealPie() {
    const { variable_statics: { onlineStatics } } = this.props;
    const groups = onlineStatics.statisticsInfo.groups;

    const { DataView } = DataSet;

    const data = groups;

    const dv = new DataView();

    dv.source(data).transform({
      type: "percent",
      field: "count",
      dimension: "category",
      as: "percent"
    });
    const cols = {
      percent: {
        formatter: val => {
          val = val * 100 + "%";
          return val;
        }
      }
    };

    return (
      <Chart
        height={400}
        data={dv}
        scale={cols}
        padding={[80, 100, 80, 80]}
        forceFit
      >
        <Coord type="theta" radius={0.75} />
        <Axis name="percent" />
        <Legend
          position="right"
          offsetY={-100}
          offsetX={-50}
        />
        <Tooltip
          showTitle={false}
          itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
        />
        <Geom
          type="intervalStack"
          position="percent"
          color="category"
          tooltip={[
            "category*percent",
            (category, percent) => {
              percent = percent * 100 + "%";
              return {
                name: category,
                value: percent
              };
            }
          ]}
          style={{
            lineWidth: 1,
            stroke: "#fff"
          }}
        >
          <Label
            content="percent"
            formatter={(val, item) => {
              return item.point.category + ": " + val;
            }}
          />
        </Geom>
      </Chart>
    );
  }
  //实时数据统计柱状图
  renderRealBar() {
    const { variable_statics: { onlineStatics } } = this.props;
    const statisticsInfo = onlineStatics.statisticsInfo;
    const ranges = statisticsInfo.ranges;

    const data = [];

    const cols = {
      count: {
        tickInterval: 20
      }
    };

    for (let [index, value] of ranges.entries()) {
      let key = '' + value.start + '-' + value.end;
      const item = {
        "interval": key,
        "count": value.count
      };
      data.push(item);
    }

    console.log("renderRealBar: ", data);

    return(
      <Chart height={400} data={data} scale={cols} forceFit>
        <Axis name="区间" />
        <Axis name="value" />
        <Tooltip
          crosshairs={{
            type: "y"
          }}
        />
        <Geom type="interval" position="interval*count" />
      </Chart>
    )

  }

  //实时数据统计
  renderVarRealChart() {
    const { variable_statics: { onlineStatics } } = this.props;
    const varType = onlineStatics.opType;

    if(onlineStatics !=null && varType!=null){
      //连续型
      if (varType == 'CONTINUOUS') {
        return (
          this.renderRealBar()
        );
      }else if (varType == 'CATEGORICAL') {
        return (
          this.renderRealPie()
        );
    }
    }

  }

  render() {
    const {
      model_apply_detail: {
      },
    } = this.props;


    return (
      <PageHeaderWrapper
        title="变量回溯详情"
      >
        <Card>
          {this.renderVarRealChart()}
        </Card>
        <Card>
          {this.renderVarOfflineList()}
        </Card>
      </PageHeaderWrapper>
    );
  }

}
