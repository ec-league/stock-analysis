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
        />
        <Row gutter={16} style={{marginTop:'16px'}}>
          <Col span={18}>
            <FlinkExecuteArea
              onRefresh={()=>{
                this.initData()
              }}
            />
          </Col>
          <Col span={6}>
            <FlinkSubTaskList
              id={params.id}
              onRefresh={()=>{
                this.initData()
              }}
            />
          </Col>
        </Row>
        <Row gutter={16} style={{marginTop:'16px'}}>
          <Col span={12}>
            <FlinkExecuteLog/>
          </Col>
          <Col span={12}>
            <FlinkSourceSearch/>
          </Col>
        </Row>
        <Row style={{marginTop:'16px'}}>
          <FlinkExecuteResult/>
        </Row>
        <Row style={{marginTop:'16px'}}>
          <FlinkExecuteRecord id={params.id}/>
        </Row>
      </Fragment>
    );
  }
}
