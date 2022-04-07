import React, { PureComponent } from 'react'
import PageHeaderWrapper from '@/components/PageHeaderWrapper'
import { Button, Card, Icon, Input, Popconfirm, Table, Tabs } from 'antd'
import { connect } from 'dva'
import Link from 'umi/link'
import { formatDate } from '@/utils/CommonUtils'
import Highlighter from 'react-highlight-words'

const { TabPane } = Tabs;

@connect(({ schedule_job_list }) => ({
  schedule_job_list
}))
export default class ScheduleJobList extends PureComponent {
  state = {
    visible: false,
  }

  componentDidMount() {
    const { dispatch } = this.props

    dispatch({
      type: 'schedule_job_list/fetch'
    })
  }

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }}/>
    ),
    onFilter: (value, record) => {
      let val = record[dataIndex] ? record[dataIndex].toString() : ''
      return val.toLowerCase()
        .includes(value.toLowerCase())
    },
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text => (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text ? text.toString() : ''}
      />
    ),
  });

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const {
      schedule_job_list: { job_list },
      dispatch
    } = this.props

    const columns = [
      {
        title: 'Id',
        dataIndex: 'id'
      },
      {
        title: '任务名',
        dataIndex: 'name',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: '归属人',
        dataIndex: 'extInfo.ownerName',
      },
      {
        title: '创建时间',
        dataIndex: 'gmtCreate',
        render: time => {
          return formatDate(time)
        }
      },
      {
        title: '更新时间',
        dataIndex: 'gmtModified',
        render: time => {
          return formatDate(time)
        }
      },
      {
        title: '操作',
        dataIndex: 'id',
        render: (id, record) => {
          return (
            <span>
              <a href={`/stock-analysis/flink-console/${id}`}>查看</a>|
               <Popconfirm title="是否要删除？" onConfirm={() => {
                 dispatch({
                   type: 'schedule_job_list/delete',
                   payload: id,
                 }).then(resp => {
                   if (resp.success) {
                     dispatch({
                       type: 'schedule_job_list/fetch'
                     })
                   }
                 })
               }}><a>删除</a></Popconfirm>|
               <a href={"#"} onClick={() => {
                 window.open(`/api/flink-job/schedule-job-export.json?scheduleJobId=${id}`);
               }}>导出</a>|
              <a href={`/risk-task/flow-schedule-task-detail/${record.graphId}`}>新版</a>
            </span>
          )
        }
      }
    ];

    const tabPanes = [];
    const enableTask = [];
    const disableTask = [];
    job_list.forEach(job => {
      if (job.status === 'T') {
        enableTask.push(job);
      } else {
        disableTask.push(job);
      }
    });

    tabPanes.push(<TabPane tab="生效中" key="1">
        <Card>
          <Table columns={columns} dataSource={enableTask}/>
        </Card>
      </TabPane>
    );
    tabPanes.push(<TabPane tab="不生效" key="2">
      <Card>
        <Table columns={columns} dataSource={disableTask}/>
      </Card>
    </TabPane>);

    const extra = (
      <div>
        <Link to={{ pathname: `/stock-analysis/schedule-job-add` }}>
          <Button type={"primary"}>新增调度任务</Button>
        </Link>
      </div>
    );

    return (
      <PageHeaderWrapper title="调度任务列表" extra={extra}>
        <Card bordered={false}>
          <Tabs type="card" onChange={this.onChange}>
            {tabPanes}
          </Tabs>
        </Card>
      </PageHeaderWrapper>
    );
  }
}
