import React, { Fragment, PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Descriptions, Modal, PageHeader, Select, Table } from 'antd';
import { Axis, Chart, Coord, Geom, Label, Legend, Tooltip } from 'bizcharts';
import DescriptionList from '@/components/DescriptionList';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Bar } from '@/components/Charts';
import DataSet from '@antv/data-set';

const { Description } = DescriptionList;
const { Option } = Select;
@connect(({ model_apply_detail, variable_statics }) => ({
  model_apply_detail: model_apply_detail, variable_statics,
}))
export default class ModelApplyDetail extends PureComponent {
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
    const { outputVariables } = model_apply_detail;

    dispatch({
      type: 'model_apply_detail/fetch',
      payload: params.id,
    })
  }

  renderVariableDistribute() {
    const { model_apply_detail: { statistics, selectGraph } } = this.props;

    if (statistics.statisticsInfo && statistics.statisticsInfo.type === 'CONTINUOUS') {
      const cols = {
        sales: {
          tickInterval: 20,
        },
      };
      return (
        <div>
          <Chart height={400} data={selectGraph} scale={cols} forceFit>
            <Axis name="x"/>
            <Axis name="y"/>
            <Tooltip
              crosshairs={{
                type: 'y',
              }}
            />
            <Geom type="interval" position="x*y"/>
          </Chart>
        </div>
      );
    } else if (statistics.statisticsInfo && statistics.statisticsInfo.type === 'CATEGORICAL') {
      const { DataView } = DataSet;

      const dv = new DataView();

      dv.source(selectGraph).transform({
        type: 'percent',
        field: 'count',
        dimension: 'item',
        as: 'percent',
      });

      const cols = {
        percent: {
          formatter: val => {
            val = val * 100 + '%';
            return val;
          },
        },
      };
      return (
        <div>
          <Chart
            height={200}
            data={dv}
            scale={cols}
            // padding={[80, 100, 80, 80]}
            forceFit
          >
            <Coord type="theta" radius={0.75}/>
            <Axis name="percent"/>
            <Legend
              position="right"
              offsetY={-window.innerHeight / 2 + 120}
              offsetX={-100}
            />
            <Tooltip
              showTitle={false}
              itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
            />
            <Geom
              type="intervalStack"
              position="percent"
              color="item"
              tooltip={[
                'item*percent',
                (item, percent) => {
                  percent = percent * 100 + '%';
                  return {
                    name: item,
                    value: percent,
                  };
                },
              ]}
              style={{
                lineWidth: 1,
                stroke: '#fff',
              }}
            >
              <Label
                content="percent"
                formatter={(val, item) => {
                  return item.point.item + ': ' + val;
                }}
              />
            </Geom>
          </Chart>
        </div>
      );
    }
  }

  showModal = (id) => {
    const { model_apply_detail: { selectVariableId }, dispatch } = this.props;

    if (selectVariableId !== id) {
      dispatch({
        type: 'model_apply_detail/fetchStatistics',
        payload: id,
      });
    }

    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  onTabChange = (key, type) => {
    this.setState({ [type]: key });
  };

  render() {
    const {
      model_apply_detail: {
        basicInfo,
      },
    } = this.props;


    const mainTabList = [
      {
        key: 'main',
        tab: '基础信息',
      },
      {
        key: 'running',
        tab: '运行信息',
      },
    ];

    const mainContentList = {
      main: this.renderMain(),
      running: this.renderRunning(),
    };

    const formatDate = (time) => {
      const date = new Date(time);
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const strDate = date.getDate().toString().padStart(2, '0');
      return `${date.getFullYear()}-${month}-${strDate} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    };

    const description = (
      <DescriptionList size="small" col="2">
        <Description term="模型类型">{basicInfo.modelType}</Description>
        <Description term="创建人">{basicInfo.createUserName}</Description>
        <Description term="修改人">{basicInfo.updateUserName}</Description>
        <Description term="创建时间">{basicInfo.gmtCreate ? formatDate(basicInfo.gmtCreate) : ''}</Description>
        <Description term="生效日期">{basicInfo.gmtModified ? formatDate(basicInfo.gmtModified) : ''}</Description>
      </DescriptionList>
    );

    return (
      <PageHeaderWrapper
        title="模型评估详情"
        content={description}
      >
        <Card
          tabList={mainTabList}
          activeTabKey={this.state.mainKey}
          onTabChange={key => {
            this.onTabChange(key, 'mainKey');
          }}
        >
          {mainContentList[this.state.mainKey]}
          <Modal
            width={1200}
            title="变量分布"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            {this.renderVariableDistribute()}
          </Modal>
        </Card>
      </PageHeaderWrapper>
    );
  }

  renderMain() {
    const {
      model_apply_detail: {
        inputVariables,
        outputVariables,
        loading,
        basicInfo: { modelDetailInfo },
      },
    } = this.props;

    const columns = [
      {
        title: '变量名',
        dataIndex: 'variableName',
        key: 'variableName',
        render: (text, record) => (
          <span>
            {record.type === 'derived' ? <a href={`/data/variable/derived-variable-detail/${record.id}`}>{text}</a> :
              <a href={`/data/variable/basic-variable-detail/${record.id}`}>{text}</a>}
          </span>),
      },
      {
        title: '变量描述',
        dataIndex: 'description',
      },
      {
        title: '变量类型',
        dataIndex: 'variableType',
        key: 'variableType',
      },
      {
        title: 'OP_TYPE',
        dataIndex: 'opType',
        key: 'opType',
      },
      {
        title: '变量分布详情',
        dataIndex: 'id',
        key: 'id',
        render: text => (<a href="#" onClick={() => this.showModal(text)}>分布详情</a>),
      },
    ];

    let list = [];

    if (modelDetailInfo) {
      Object.keys(modelDetailInfo).forEach(key => {
        if (key === 'detail')
          return;
        list.push(<Descriptions.Item label={key}>{modelDetailInfo[key]}</Descriptions.Item>);
      });
    }

    const detailDescription = (
      <Descriptions bordered>
        {list}
      </Descriptions>
    );

    const tabList = [
      {
        key: 'input',
        tab: '入参详情',
      },
      {
        key: 'output',
        tab: '出参详情',
      },
    ];

    const contentList = {
      input: <Table
        size="small"
        loading={loading}
        columns={columns}
        dataSource={inputVariables}
      />,
      output: <Table
        size="small"
        loading={loading}
        columns={columns}
        dataSource={outputVariables}
      />,
    };

    return (
      <div>
        <Card
          title="模型概要"
        >
          {detailDescription}
        </Card>
        <Card
          title="模型参数详情"
          tabList={tabList}
          activeTabKey={this.state.key}
          style={{ marginTop: 16 }}
          onTabChange={key => {
            this.onTabChange(key, 'key');
          }}
        >
          {contentList[this.state.key]}
        </Card>

      </div>
    );
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

  regressionModalHandleCancel = e => {
    this.setState({
      regressionModalVisible: false
    })
  };

  renderVarOfflineChart() {
    const { variable_statics: { offlineStatics } } = this.props;
    const opType = offlineStatics.opType;

    //连续型
    if (opType == 'CONTINUOUS') {
      return (
        <div>
          {offlineStatics.statisticsInfo.ranges ? this.renderBar(offlineStatics.statisticsInfo.ranges) : <div></div>}
        </div>      );
    } else if (opType == 'CATEGORICAL') {
      return (
        <div>
          {offlineStatics.statisticsInfo.groups ? this.renderPie(offlineStatics.statisticsInfo.groups) : <div></div>}
        </div>
      );
    }
  }

  //变量回溯
  renderVarOfflineList() {
    const { variable_statics: { offlineStatics } } = this.props;

    const opType = offlineStatics.opType;
    const taskType = offlineStatics.taskType;
    const regressionList = offlineStatics.offlineStatisticsInfo;

    const varSelectOptions = [];
    const { model_apply_detail: { outputVariables } } = this.props;

    const offlineVarRegressionData = regressionList;

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
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: '显示详情',
        dataIndex: 'regressionId',
        key: 'id',
        render: text => (<a href="#" onClick={() => this.showVarRegressionDetailModal(text)}>回溯详情</a>),
      },
    ];

    let title = '';
    if (taskType == "single") {
      title = '单次执行'
    } else if (taskType == 'hour') {
      title = '按小时执行';
    } else if (taskType == 'day') {
      title = '按天执行';
    }

    return (
      <PageHeader
        /*title={title}*/
        style={{
          border: '1px solid rgb(235, 237, 240)',
        }}
        extra={[]}
      >
        <Table columns={offlineVarColumns} dataSource={offlineVarRegressionData}/>
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

  //数据统计饼图
  renderPie(groups) {

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
        height={window.innerHeight}
        data={dv}
        scale={cols}
        padding={[80, 100, 80, 80]}
        forceFit
      >
        <Coord type="theta" radius={0.75}/>
        <Axis name="percent"/>
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

  //数据统计柱状图
  renderBar(ranges) {

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

    return (
      <Chart height={400} data={data} scale={cols} forceFit>
        <Axis name="区间"/>
        <Axis name="value"/>
        <Tooltip
          crosshairs={{
            type: "y"
          }}
        />
        <Geom type="interval" position="interval*count"/>
      </Chart>
    )

  }

  //实时数据统计
  renderVarRealChart() {
    const { variable_statics: { onlineStatics } } = this.props;
    const varType = onlineStatics.opType;

    if (varType != null) {
      //连续型
      if (varType == 'CONTINUOUS') {
        return (
          <div>
            {onlineStatics.statisticsInfo.ranges ? this.renderBar(onlineStatics.statisticsInfo.ranges) : <div></div>}
          </div>
        );
      } else if (varType == 'CATEGORICAL') {
        return (
          <div>
            {onlineStatics.statisticsInfo.groups ? this.renderPie(onlineStatics.statisticsInfo.groups) : <div></div>}
          </div>
        );
      }
    }

  }

  renderRunning() {
    const { model_apply_detail: { modelUseStatics } } = this.props;
    return (
      <div>

        {/*<Card>*/}
        {/*{this.renderOfflineVarTable()}*/}
        {/*</Card>*/}
        {/*        <Card title="变量统计概览" style={{ marginTop: 8 }}>
          {this.renderVarRealChart()}
        </Card>
        <Card title="变量回溯统计" style={{marginTop: 8}}>
          {this.renderVarOfflineList()}
        </Card>*/}
        <Card title="模型调用统计概览" style={{ marginTop: 8 }}>
          {modelUseStatics ? this.renderPie(modelUseStatics) : <div></div>}
        </Card>
      </div>
    );
  }
}
