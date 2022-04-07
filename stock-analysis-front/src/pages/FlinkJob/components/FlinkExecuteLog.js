import React, { PureComponent } from 'react'
import PageHeaderWrapper from '@/components/PageHeaderWrapper'
import { Card, Row, Typography } from 'antd'
import { connect } from 'dva'

const { Text } = Typography;

//console_state_manager:本页面的状态管理 文件路径为FlickConsole/Models
@connect(({ console_state_manager }) => ({
  console_state_manager
}))
class FlinkExecuteLog extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { console_state_manager: { logs } } = this.props
    const children = []
    logs.map((item, i) => {
      children.push(<Row key={i}><Text>{item}</Text></Row>)
    })
    return (
      <PageHeaderWrapper>
        <Card
          title="执行过程日志"
          style={{ height: '360px' }}
          bodyStyle={{ height: '300px', overflowY: 'scroll' }}
        >
          {children}
        </Card>
      </PageHeaderWrapper>
    )
  }
}

export default FlinkExecuteLog
