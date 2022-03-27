import React, { Component } from 'react';
import { connect } from 'dva';
import { Button, Card, Col, Descriptions, Icon, InputNumber, List, Modal, Row } from 'antd';
import { Axis, Chart, Coord, Geom, Label, Legend, Tooltip, View } from 'bizcharts';
import DataSet from '@antv/data-set';
import Graph from '@/components/AntVG6/JinChouTree.js';
import router from 'umi/router';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

@connect(({ derived_variable_detail, variable_config }) => ({
  derived_variable_detail, variable_config,
}))
class DerivedVariableDetail extends Component {

//给两个tab设置默认key
  state = {
    key: 'detail',
    noTitleKey: 'variableGraph',
    visual: false,
  };

  componentDidMount() {
    const { dispatch, match } = this.props;
    const { params } = match;

    dispatch({
      type: 'derived_variable_detail/fetch',
      payload: params.id,
    });

    dispatch({
      type: 'variable_config/fetchVariableConfigByVarId',
      payload: params.id,
    });

  }

  //定义tab页切换函数
  onTabChange = (key, type) => {
    this.setState({ [type]: key });
  };

  renderVariableGraph() {
    const { derived_variable_detail: { basicInfo }, dispatch } = this.props;


    if (basicInfo.variableGraph) {
      var dv = new DataSet.View().source(basicInfo.variableGraph, {
        type: 'hierarchy',
        pureData: true,
      });
      dv.transform({
        type: 'hierarchy.compact-box',
        // this layout algorithm needs to use pure data
        direction: 'TB',

        getHGap() {
          return 8;
        },

        getVGap() {
          return 8;
        },

        getHeight() {
          return 10;
        },

        getWidth(d) {
          return 10 * d.nodeName.length;
        },
      });
      return (
        <Card>
          <Chart
            forceFit={true}
            height={window.innerHeight}
            padding={[0, 10, 0, 10]}
          >
            <Coord transpose/>
            <Tooltip/>
            <View
              data={dv.getAllLinks().map(link => ({
                x: [link.source.x, link.target.x],
                y: [link.source.y, link.target.y],
                source: link.source.id,
                target: link.target.id,
              }))}
            >
              <Geom
                type="edge"
                position="x*y"
                style={{
                  lineWidth: 3,
                }}
                shape="smooth"
                color="grey"
                opacity={0.5}
                tooltip="source*target"
              />
            </View>
            <View
              data={dv.getAllNodes().map(node => ({
                hasChildren: !!(node.children && node.children.length),
                name: node.data.score,
                value: node.value,
                depth: node.depth,
                x: node.x,
                y: node.y,
              }))}
            >
              <Geom
                type="point"
                position="x*y"
                color="hasChildren"
                size={12}
                shape="circle"
              >
                <Label
                  content="name"
                  textStyle={{
                    textAlign: 'start', // 文本对齐方向，可取值为： start middle end
                    fill: '#404040', // 文本的颜色
                    fontSize: '12', // 文本大小
                    fontWeight: 'bold', // 文本粗细
                    rotate: 30,
                    textBaseline: 'top', // 文本基准线，可取 top middle bottom，默认为middle
                  }}
                />
              </Geom>
            </View>
          </Chart>
        </Card>
      );
    }
  }


  renderDerivedVariableDetail() {
    const { derived_variable_detail: { basicInfo } } = this.props;
    let list = [];

    if (basicInfo) {
      list.push(<Descriptions.Item label="变量名称">{basicInfo.variableName}</Descriptions.Item>);
      list.push(<Descriptions.Item label="变量值类型">{basicInfo.variableType}</Descriptions.Item>);
      list.push(<Descriptions.Item label="变量分布类型">{basicInfo.opType}</Descriptions.Item>);
      list.push(<Descriptions.Item label="变量类型">{basicInfo.type}</Descriptions.Item>);
      list.push(<Descriptions.Item
        label="创建日期">{dateFormat(basicInfo.gmtCreate)}</Descriptions.Item>);
      list.push(<Descriptions.Item
        label="修改日期">{dateFormat(basicInfo.gmtModified)}</Descriptions.Item>);
    }

    return (
      <Card title="衍生变量描述">
        <Descriptions bordered>
          {list}
        </Descriptions>
      </Card>
    );
  }

  renderFunctorDetail() {
    const { derived_variable_detail: { basicInfo } } = this.props;
    let list = [];

    if (basicInfo.functorDto) {
      list.push(<Descriptions.Item label="算子名称"><a href="#" onClick={() => {
        router.push('/data/functor/functor-detail/' + basicInfo.functorDto.id);
      }}> {basicInfo.functorDto.name}</a></Descriptions.Item>);
      list.push(<Descriptions.Item label="算子描述">{basicInfo.functorDto.description}</Descriptions.Item>);
      list.push(<Descriptions.Item label="返回值类型">{basicInfo.functorDto.returnType}</Descriptions.Item>);
      list.push(<Descriptions.Item label="算子创建人">{basicInfo.functorDto.createBy}</Descriptions.Item>);
      list.push(<Descriptions.Item
        label="创建日期">{dateFormat(basicInfo.functorDto.gmtCreate)}</Descriptions.Item>);
      list.push(<Descriptions.Item
        label="修改日期">{dateFormat(basicInfo.functorDto.gmtModified)}</Descriptions.Item>);
    }

    return (
      <Card title="算子描述" style={{ marginTop: 16 }}>
        <Descriptions bordered>
          {list}
        </Descriptions>
      </Card>
    );
  }

  renderModelFileDetail() {
    const { derived_variable_detail: { basicInfo } } = this.props;
    let list = [];

    if (basicInfo.modelDto) {
      list.push(<Descriptions.Item label="模型名称"><a href="#" onClick={() => {
        router.push('/model-manage/model/model-file-detail/' + basicInfo.modelDto.fileId);
      }}> {basicInfo.modelDto.modelName}</a></Descriptions.Item>);
      list.push(
        <Descriptions.Item label="模型描述">{basicInfo.modelDto.modelDesc}</Descriptions.Item>,
      );
      list.push(
        <Descriptions.Item label="模型类型">{basicInfo.modelDto.modelType}</Descriptions.Item>,
      );
      list.push(
        <Descriptions.Item label="模型状态">{basicInfo.modelDto.status}</Descriptions.Item>,
      );
      list.push(
        <Descriptions.Item
          label="创建日期">{dateFormat(basicInfo.modelDto.gmtCreate)}</Descriptions.Item>,
      );
      list.push(
        <Descriptions.Item
          label="修改日期">{dateFormat(basicInfo.modelDto.gmtModified)}</Descriptions.Item>,
      );
    }

    return (
      <Card title="模型描述">
        <Descriptions bordered>
          {list}
        </Descriptions>
      </Card>
    );
  }

  renderDistributePie() {

    const { DataView } = DataSet;
    const { derived_variable_detail: { pie } } = this.props;

    if (pie) {
      const dv = new DataView();
      dv.source(pie).transform({
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
        <Card>
          <Chart
            height={window.innerHeight / 2}
            data={dv}
            scale={cols}
            padding={[0, 0, 0, 0]}
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
        </Card>
      );
    }
  }

  renderDistributeBar() {
    const { derived_variable_detail: { graph } } = this.props;
    const cols = {
      sales: {
        tickInterval: 20,
      },
    };

    return (
      <div>
        <Chart height={400} data={graph} scale={cols} forceFit>
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
  }

  //读取ES数据
  renderDistributeBarFromEs() {
    const { derived_variable_detail: { graph } } = this.props;
    const cols = {
      sales: {
        tickInterval: 20,
      },
    };

    return (
      <div>
        <Chart height={400} data={graph} scale={cols} forceFit>
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
  }

  render() {
    const { derived_variable_detail: { basicInfo } } = this.props;
    //定义tab 标题
    const tabNameList = [
      {
        key: 'detail',
        tab: '变量详情',
      },
      {
        key: 'variableGraph',
        tab: '变量血缘图',
      },
    ];

    //定义两个tab内容
    const tabContentsList = {
      detail: <div>
        {this.renderDerivedVariableDetail()}
        {basicInfo.functorId ? this.renderFunctorDetail() : <div></div>}
        {basicInfo.generateModelId ? this.renderModelFileDetail() : <div></div>}
        {this.renderGraph()}
      </div>,
      variableGraph: <Graph data={basicInfo.variableGraph}/>,
    };

    return (
      <PageHeaderWrapper>

        <Card bordered={false}
              title={basicInfo.name}
              tabList={tabNameList}
              activeTabKey={this.state.key}
              onTabChange={key => {
                this.onTabChange(key, 'key');
              }}
        >
          {tabContentsList[this.state.key]}
        </Card>
      </PageHeaderWrapper>
    );
  }

  handleCancel = () => {
    this.setState(
      {
        visual: false,
      },
    );
  };

  handleOk = () => {
    const { dispatch, variable_config } = this.props;
    const { currentVariableConfig } = variable_config;

    console.log('handleOk currentVariableConfig: ', currentVariableConfig);

    this.setState(
      {
        visual: false,
      },
    );

    dispatch({
      type: 'variable_config/addVariableInterval',
      payload: currentVariableConfig,
    });

    //save interval到数据库后，重新加载页面
    location.reload()

  };

  showModal = () => {
    this.setState({
      visual: true,
    });
  };

  onIntervalChange = (value) => {
    const { dispatch, variable_config, match } = this.props;
    const { currentVariableConfig } = variable_config;
    const { params } = match;

    const varConfig = {
      id: currentVariableConfig.id,
      variableId: params.id,
      variableName: currentVariableConfig.variableName,
      interval: value,
    };

    dispatch({
      type: 'variable_config/updateLocalCurrentVariableInterval',
      payload: varConfig,
    });
  };

  renderVarConfigAdd = () => {
    const { variable_config } = this.props;
    const { currentVariableConfig } = variable_config;
    const { interval } = currentVariableConfig;

    return (
      <div>
        <InputNumber style={{ width: 240, marginTop: 20, marginBottom: 40 }}
                     min={1} value={interval ? interval + '' : ''} tip="输入变量分布间隔"
                     onChange={this.onIntervalChange}></InputNumber>
      </div>
    );
  };

  renderGraph() {
    const { derived_variable_detail: { basicInfo, statistics }, variable_config } = this.props;
    const { currentVariableConfig } = variable_config;
    const interval = currentVariableConfig.interval;

    let buttonInfo = '添加 interval';
    if (interval) {
      buttonInfo = '更新 interval';
    }

    if (basicInfo.opType === 'CONTINUOUS') {
      const list = [];
      if (statistics && statistics.statisticsInfo) {
        list.push(`数据总量:${statistics.statisticsInfo.total}`);
        list.push(`最大值:${statistics.statisticsInfo.max}`);
        list.push(`最小值:${statistics.statisticsInfo.min}`);
      }

      return (

        <div>

          <Card title="变量值分布" style={{ marginTop: 16 }}>
            <Row>
              <Col span={24}>
                <Button key="3" onClick={this.showModal} style={{ float: 'right' }}>{buttonInfo}</Button>
                <Modal
                  title="设置分布间隔"
                  visible={this.state.visual}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  {this.renderVarConfigAdd()}
                </Modal>
              </Col>
              <Col span={20}>
                {this.renderDistributeBarFromEs()}
              </Col>
              <Col span={4}>
                <Card height={400} bordered={false}>
                  <List
                    dataSource={list}
                    renderItem={item => (
                      <List.Item>
                        <Icon type="project" theme="filled"/> {item}
                      </List.Item>
                    )}
                  >
                  </List>
                </Card>
              </Col>
            </Row>
          </Card>

        </div>


      );
    } else {
      return (<Card title="变量值分布" style={{ marginTop: 16 }}>
        {this.renderDistributePie()}
      </Card>);
    }
  }
}

function dateFormat(dateStr) {
  let date = new Date(dateStr);
  let fmt = 'YYYY-mm-dd HH:MM:SS';
  let ret;
  let opt = {
    'Y+': date.getFullYear().toString(),        // 年
    'm+': (date.getMonth() + 1).toString(),     // 月
    'd+': date.getDate().toString(),            // 日
    'H+': date.getHours().toString(),           // 时
    'M+': date.getMinutes().toString(),         // 分
    'S+': date.getSeconds().toString(),          // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp('(' + k + ')').exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')));
    }
  }
  return fmt;
}

export default DerivedVariableDetail;
