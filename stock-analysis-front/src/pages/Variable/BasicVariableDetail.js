import React, { PureComponent } from "react";
import { connect } from "dva";
import { Button, Card, Col, Descriptions, Icon, InputNumber, List, Modal, Row } from 'antd';
import DataSet from "@antv/data-set";
import { Axis, Chart, Coord, Geom, Label, Legend, Tooltip } from "bizcharts";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";

@connect(({ basic_variable_detail, variable_config }) => ({
  basic_variable_detail, variable_config
}))
export default class BasicVariableDetail extends PureComponent {

  state = {
    searchText: '',
    visual: false
  };

  componentDidMount() {
    const { dispatch, match } = this.props;
    const { params } = match;

    dispatch({
      type: 'basic_variable_detail/fetchBasicVariableDetailById',
      payload: params.id,
    });

    dispatch({
      type: 'variable_config/fetchVariableConfigByVarId',
      payload: params.id,
    });

  }

  renderVarPie() {
    const { DataView } = DataSet;
    const { basic_variable_detail: { pie } } = this.props;

    const dv = new DataView();

    dv.source(pie).transform({
      type: "percent",
      field: "count",
      dimension: "item",
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
      <div>
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
              "item*percent",
              (item, percent) => {
                percent = percent * 100 + "%";
                return {
                  name: item,
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
                return item.point.item + ": " + val;
              }}
            />
          </Geom>
        </Chart>
      </div>
    );
  }

  showModal = () => {
    this.setState({
      visual: true
    })
  };

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

  renderVarHistogramFromEs = () => {
    const { basic_variable_detail: { graph } } = this.props;
    const cols = {
      sales: {
        tickInterval: 20
      }
    };
    return (
      <div>
        <Chart height={400} data={graph} scale={cols} forceFit>
          <Axis name="x"/>
          <Axis name="y"/>
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom type="interval" position="x*y"/>
        </Chart>
      </div>
    );
  };

  showMaxMinTotal = () => {
    const { basic_variable_detail: { data, statistics }, variable_config } = this.props;
    const { currentVariableConfig } = variable_config;
    const interval = currentVariableConfig.interval;


    const list = [];
    if (statistics && statistics.statisticsInfo) {
      list.push(`数据总量:${statistics.statisticsInfo.total}`);
      list.push(`最大值:${statistics.statisticsInfo.max}`);
      list.push(`最小值:${statistics.statisticsInfo.min}`);
    }

    if (statistics && statistics.statisticsInfo && statistics.statisticsInfo.ranges && statistics.statisticsInfo.ranges.length > 0) {
      return (
        <List
          dataSource={list}
          renderItem={item => (
            <List.Item>
              <Icon type="project" theme="filled"/> {item}
            </List.Item>
          )}
        >
        </List>
      )
    } else {
      return (
        <div></div>
      )
    }

  };

  renderBasicVariableDetail() {

    const { basic_variable_detail: { data } } = this.props;

    let list = [];
    if (data) {
      list.push(<Descriptions.Item label="变量名称">{data.variableName}</Descriptions.Item>);
      list.push(<Descriptions.Item label="变量值类型">{data.variableType}</Descriptions.Item>);
      list.push(<Descriptions.Item label="变量分布类型">{data.opType}</Descriptions.Item>);
      list.push(<Descriptions.Item label="变量类型">{data.type}</Descriptions.Item>);
      list.push(<Descriptions.Item
        label="创建日期">{dateFormat("YYYY-mm-dd HH:MM:SS", data.gmtCreate)}</Descriptions.Item>);
      list.push(<Descriptions.Item
        label="修改日期">{dateFormat("YYYY-mm-dd HH:MM:SS", data.gmtModified)}</Descriptions.Item>)
    }

    return (
      <Card title="变量描述">
        <Descriptions bordered>
          {list}
        </Descriptions>
      </Card>
    );
  }

  renderGraph() {
    const { basic_variable_detail: { data, statistics }, variable_config } = this.props;
    const { currentVariableConfig } = variable_config;
    const interval = currentVariableConfig.interval;

    if (data && data.opType === 'CONTINUOUS') {

      let buttonInfo = '添加 interval';
      if (!interval || interval == '') {
      } else {
        buttonInfo = '更新 interval';
      }

      return (
        <div>

          <Card title="变量值分布" bordered={false} style={{ marginTop: 16 }}>
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
                {this.renderVarHistogramFromEs()}
              </Col>
              <Col span={4}>
                <Card height={400} bordered={false}>
                  {this.showMaxMinTotal()}
                </Card>
              </Col>
            </Row>
          </Card>

        </div>
      );
    } else {
      return (<Card title="变量值分布" bordered={false} style={{ marginTop: 16 }}>
        {this.renderVarPie()}
      </Card>);
    }
  }

  render() {
    const { basic_variable_detail: { data, statistics } } = this.props;

    const list = [];
    if (statistics && statistics.statisticsInfo) {
      list.push(`数据总量:${statistics.statisticsInfo.total}`);
      list.push(`最大值:${statistics.statisticsInfo.max}`);
      list.push(`最小值:${statistics.statisticsInfo.min}`);
    }

    return (
      <PageHeaderWrapper>
        {this.renderBasicVariableDetail()}
        {this.renderGraph()}
      </PageHeaderWrapper>
    );
  }
}

function dateFormat(fmt, dateStr) {
  let date = new Date(dateStr);
  let ret;
  let opt = {
    "Y+": date.getFullYear().toString(),        // 年
    "m+": (date.getMonth() + 1).toString(),     // 月
    "d+": date.getDate().toString(),            // 日
    "H+": date.getHours().toString(),           // 时
    "M+": date.getMinutes().toString(),         // 分
    "S+": date.getSeconds().toString()          // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    }
  }
  return fmt;
}
