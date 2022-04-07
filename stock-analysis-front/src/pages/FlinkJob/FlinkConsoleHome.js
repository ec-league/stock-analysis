import React, {Fragment, PureComponent} from 'react'
import {Row, Col} from 'antd'
import FlinkTaskDetail from './components/FlinkTaskDetail'
import FlinkExecuteArea from './components/FlinkExecuteArea'
import FlinkSubTaskList from './components/FlinkSubTaskList'
import FlinkExecuteLog from './components/FlinkExecuteLog'
import FlinkSourceSearch from './components/FlinkSourceSearch'
import FlinkExecuteResult from './components/FlinkExecuteResult'
import FlinkExecuteRecord from './components/FlinkExecuteRecord'
import {connect} from "dva";


@connect(({ schedule_job_detail, flink_scheduler_execute_record }) => ({
  schedule_job_detail,
  flink_scheduler_execute_record
}))
export default class FlinkConsoleHome extends PureComponent {
  componentWillMount() {
    this.initData()
  }
  initData(){
    const {
      match:{ params },
      dispatch
    } = this.props
    dispatch({
      type: 'schedule_job_detail/fetch',
      payload: params.id
    })
    dispatch({
      type: 'flink_scheduler_execute_record/queryExecuteRecord',
      payload: params.id
    })
  }
  render() {
    const {
      match:{ params }
    } = this.props
    return (
      <Fragment>
        <FlinkTaskDetail
          id={params.id}
          onRefresh={()=>{
            this.initData()
          }}
        ></FlinkTaskDetail>
        <Row gutter={16} style={{marginTop:'16px'}}>
          <Col span={12}>
            <FlinkExecuteArea
              onRefresh={()=>{
                this.initData()
              }}
            ></FlinkExecuteArea>
          </Col>
          <Col span={12}>
            <FlinkSubTaskList
              id={params.id}
              onRefresh={()=>{
                this.initData()
              }}
            ></FlinkSubTaskList>
          </Col>
        </Row>
        <Row gutter={16} style={{marginTop:'16px'}}>
          <Col span={12}>
            <FlinkExecuteLog></FlinkExecuteLog>
          </Col>
          <Col span={12}>
            <FlinkSourceSearch></FlinkSourceSearch>
          </Col>
        </Row>
        <Row style={{marginTop:'16px'}}>
          <FlinkExecuteResult></FlinkExecuteResult>
        </Row>
        <Row style={{marginTop:'16px'}}>
          <FlinkExecuteRecord id={params.id}></FlinkExecuteRecord>
        </Row>
      </Fragment>
    );
  }
}
