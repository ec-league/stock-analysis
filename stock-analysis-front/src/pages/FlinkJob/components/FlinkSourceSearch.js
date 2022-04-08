import React, {PureComponent} from 'react'
import PageHeaderWrapper from '@/components/PageHeaderWrapper'
import {Card, Button, Input, Table} from 'antd'
import { connect } from 'dva'

//console_state_manager:本页面的状态管理 文件路径为FlickConsole/Models
@connect(({ console_state_manager }) => ({
  console_state_manager
}))
class FlinkSourceSearch extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      filter:''
    }
    this.columns = [
      {
        title: 'Id',
        dataIndex: 'id'
      },
      {
        title: '任务名',
        dataIndex: 'tableName'
      },
      {
        title: '类型',
        dataIndex: 'type'
      },
      {
        title:'操作',
        render: (text, record) => {
          return(
            <a href={`/risk-market/flink/${record.schemaSource}/${record.schemaId}/${record.tableId}/${record.tableName}`}>查看</a>
          )
        }
      }
    ]
  }
  handleChange = e => {
    const { value } = e.target
    this.setState({
      filter: value
    })
  }

  handleSearch = e => {
    const { filter } = this.state
    const { dispatch } = this.props
    dispatch({
      type: 'console_state_manager/searchFlinkSource',
      payload: filter
    })
  }
  render() {
    const { console_state_manager:{ searchSource } } = this.props
    return (
      <div>
        <Card title="Flink源搜索结果" style={{height:'360px'}}>
          <div style={{ display: 'flex', marginBottom: 20}}>
            <Input onChange={ this.handleChange }/>
            <Button type="primary"
                    style={{marginLeft:12}}
                    onClick={this.handleSearch}>搜索</Button>
          </div>
          <Table
            size='small'
            pagination={{
              pageSize:3
            }}
            rowClassName={() => 'editable-row'}
            dataSource={searchSource}
            columns={this.columns}
            rowKey={record=>record.id}
          />
        </Card>
      </div>
    )
  }
}

export default FlinkSourceSearch
