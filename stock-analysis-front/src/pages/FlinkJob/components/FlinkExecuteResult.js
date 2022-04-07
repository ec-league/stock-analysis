import React, { PureComponent } from 'react'
import PageHeaderWrapper from '@/components/PageHeaderWrapper'
import { Button, Card, Table ,Row,Radio} from 'antd'
import { connect } from 'dva'

@connect(({ console_state_manager }) => ({
  console_state_manager
}))
class FlinkExecuteResult extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      downloadType:'csv',
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
          width:150,
          ellipsis:true
        })
      }
    }
    return (
      <div>
        <Table
          scroll={{x:'max-content', y:240}}
          size='small'
          columns={columns}
          dataSource={executeRecord.resultData}
          pagination={{pageSize:20}}
        />
      </div>
    )
  }

  render() {
    const {
      console_state_manager: {rowInfo}
    } = this.props
  const action = (
    <Row style={{marginBottom:6}}>
    <Radio.Group value={this.state.downloadType}
                 onChange={ (e) => {
                   this.setState({
                     downloadType:e.target.value
                   })
                 }}
    >
      <Radio value="excel">excel</Radio>
      <Radio value="csv">csv</Radio>
    </Radio.Group>
      <Button
        type="primary"
        onClick={() => {
          if (rowInfo && typeof rowInfo.rowIndex === 'number') {
            window.open(`/api/risk-market/flink/exportFlinkFileByTableName?tableName=${rowInfo.rowData.jobConfig.sinkFileName}&downloadType=${this.state.downloadType}`)
          }
        }}>
        下载
      </Button>
    </Row>
    )
    return (
      <PageHeaderWrapper type={'success'} extra={action}>
        <Card title="执行结果">
          {this.renderExecuteResult()}
        </Card>
      </PageHeaderWrapper>
    )
  }
}

export default FlinkExecuteResult
