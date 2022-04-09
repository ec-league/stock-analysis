import React, { PureComponent } from 'react'
import { Card, Table } from 'antd'
import { connect } from 'dva'

@connect(({ console_state_manager }) => ({
  console_state_manager
}))
class FlinkExecuteResult extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      downloadType: 'csv',
    }
  }

  renderExecuteResult() {
    const {
      console_state_manager: { executeRecord }
    } = this.props

    const columns = []
    if (executeRecord.header && executeRecord.header.length > 0) {
      for (let i = 0; i < executeRecord.header.length; i++) {
        columns.push({
          title: executeRecord.header[i],
          dataIndex: executeRecord.header[i],
        });
      }
    }

    return (
      <div>
        <Table
          scroll={{ x: 'max-content', y: 240 }}
          bordered={true}
          columns={columns}
          dataSource={executeRecord.resultData}
          pagination={{ pageSize: 20 }}
        />
      </div>
    )
  }

  render() {
    return (
      <div>
        <Card title="执行结果">
          {this.renderExecuteResult()}
        </Card>
      </div>
    )
  }
}

export default FlinkExecuteResult
