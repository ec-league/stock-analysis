import React, { Fragment, PureComponent } from "react";
import { connect } from "dva";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import { Button, Card, Col, Descriptions, Empty, Icon, Row } from "antd";
import DescriptionList from "@/components/DescriptionList";
import router from "umi/router";

import { ChartCard, MiniProgress } from "@/components/Charts";

const ButtonGroup = Button.Group;
const { Description } = DescriptionList;

@connect(({ task_detail }) => ({
  task_detail: task_detail,
}))
export default class TaskDetail extends PureComponent {

  componentDidMount() {
    const { dispatch, match } = this.props;
    const { params } = match;

    dispatch({
      type: 'task_detail/fetch',
      payload: params.id,
    });
  }

  renderTaskDescription() {
    const { task_detail: { taskInfo } } = this.props;

    let list = [];

    if (taskInfo) {
      list.push(<Descriptions.Item label="任务状态">{taskInfo.status}</Descriptions.Item>)
      if (taskInfo.taskConfigProfile) {
        list.push(<Descriptions.Item
          label="任务类型">{taskInfo.taskConfigProfile.taskType === 'single' ? '单次执行' : '多次执行'}</Descriptions.Item>);
        list.push(<Descriptions.Item label="任务单次捞取数量">{taskInfo.taskConfigProfile.recordNum}</Descriptions.Item>)
        list.push(<Descriptions.Item label="数据起始日期">{taskInfo.taskConfigProfile.startDate}</Descriptions.Item>)
        list.push(<Descriptions.Item label="数据结束日期">{taskInfo.taskConfigProfile.endDate}</Descriptions.Item>)
      }

    }

    return (
      <Card title="任务描述">
        <Descriptions bordered>
          {list}
        </Descriptions>
      </Card>
    )
  }

  renderModelDescription() {
    const { task_detail: { modelInfo } } = this.props;

    let list = [];

    if (modelInfo.modelDetailInfo) {
      Object.keys(modelInfo.modelDetailInfo).forEach(key => {
        if (key === 'detail') {
          return;
        }
        list.push(<Descriptions.Item label={key}>{modelInfo.modelDetailInfo[key]}</Descriptions.Item>)
      });
    }

    return (
      <Card title="回溯模型" style={{ marginTop: 16 }}>
        <Descriptions bordered>
          {list}
        </Descriptions>
      </Card>
    );
  }

  renderRegressionList() {
    const { task_detail: { regressions } } = this.props;

    const list = [];

    const renderInternal = (item) => {
      if (item.status === 'FINISH') {
        const percent = item.regressionProfile.regressed / item.regressionProfile.total * 100;
        return (
          <div>
            <span>本次回溯共计{item.regressionProfile.total}条数据</span>
            <br/>
            <span>{percent > 60 ? <Icon theme="twoTone" type="check-circle"/> :
              <Icon theme="twoTone" type="exclamation-circle"/>} 可回溯率:{percent.toFixed(2)}%</span>
            <br/>
            <span>{percent > 80 ? '模型评估可用' : '模型有待改善'}</span>
            <MiniProgress
              percent={percent}
              strokeWidth={12}
              target={80}
              color={percent > 80 ? "green" : "red"}
            />
          </div>
        );
      } else if (item.status === 'PROCESSING') {
        const percent = item.regressionProfile.finish / item.regressionProfile.total * 100;
        return (
          <div>
            <Icon type="sync" spin/><span> 执行中, 请稍后</span>
            <br/>
            <span>完成状态: {item.regressionProfile.finish}/{item.regressionProfile.total}</span>
            <MiniProgress
              percent={percent}
              strokeWidth={12}
              target={100}
              color="blue"
            />
          </div>


        );
      } else if (item.status === 'INIT') {
        return (<span>尚未开始, 等待执行</span>);
      }
    };

    regressions.forEach(item => {
      list.push(
        <Col span={12}>
          <ChartCard
            hoverable="true"
            contentHeight={85}
            bordered={true}
            title={`回溯: ${item.serialNo}`}
            style={{ margin: 8 }}
            footer={
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                <span>
                 创建: {dateFormat("YYYY-mm-dd HH:MM:SS", item.gmtCreate)}
                </span>

                <span style={{ marginLeft: 6 }}>
                  完成: {dateFormat("YYYY-mm-dd HH:MM:SS", item.gmtModified)}
                </span>

              </div>
            }
          >
            {renderInternal(item)}
          </ChartCard>
        </Col>
      );
    });

    if (list.length === 0) {
      return (
        <Row>
          <Empty/>
        </Row>
      );
    }

    return (
      <Row>
        {list}
      </Row>
    )
  }

  render() {

    const {
      task_detail: { taskInfo },
      match: { params }
    } = this.props;

    const action = (
      <Fragment>
        {/*<ButtonGroup style={{ marginRight: 8 }}>*/}
        {/*<Button onClick={() => {*/}
        {/*dispatch({*/}
        {/*type: 'model_file_detail/invalidate',*/}
        {/*payload: params.id,*/}
        {/*});*/}
        {/*}}>编辑</Button>*/}
        {/*<Button onClick={() => {*/}
        {/*dispatch({*/}
        {/*type: 'model_file_detail/invalidate',*/}
        {/*payload: params.id,*/}
        {/*});*/}
        {/*}}>废弃</Button>*/}
        {/*</ButtonGroup>*/}
        <Button type="primary" onClick={() => {
          router.push(`/data/variable/variable-calculate/${params.id}`);
        }}>立即触发回溯</Button>
      </Fragment>
    );

    return (
      <PageHeaderWrapper
        title={<div><Icon theme="twoTone" style={{ color: "blue" }} type="calendar"/> {taskInfo.taskName}</div>}
        extra={action}
        content={taskInfo.taskDesc}
      >
        <Card bordered={false}>
          {this.renderTaskDescription()}
          {this.renderModelDescription()}
          <Card title="回溯记录" style={{ marginTop: 16 }}>
            {this.renderRegressionList()}
          </Card>
        </Card>
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
    ;
  }
  ;
  return fmt;
}
