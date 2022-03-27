import React, { PureComponent } from "react";
import { connect } from "dva";
import { Card, Table } from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";


@connect(({ task_list, task_add }) => ({
  task_list: task_list,
  task_add: task_add,
}))
export default class TaskList extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'task_list/fetch',
      payload: {
        count: 8,
      },
    });

    dispatch({
      type: 'task_add/fetchModels',
    })
  }

  render() {
    const {
      task_list: { data },
      task_add: { models }
    } = this.props;

    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
      },
      {
        title: '任务名称',
        dataIndex: 'taskName',
        render: (text, record) => <a href={`/regression/task-manage/task-detail/${record.id}`}>{text}</a>
      },
      {
        title: '任务描述',
        dataIndex: 'taskDescription',
      },
      {
        title: '评估模型',
        dataIndex: 'modelId',
        render: (text) => {
          return <a href={`/model-manage/model/model-file-detail/${text}`}>{models[text]}</a>
        }
      },
      {
        title: '当前状态',
        dataIndex: 'status',
      },
      {
        title: '任务类型',
        dataIndex: 'taskType',
        render: (text, record) => {
          if (record.taskConfigProfile) {
            if (record.taskConfigProfile.executeFrequencyType === 'single') {
              return '单次执行';
            } else if (text === 'day') {
              return '每日凌晨2点开始执行';
            } else if (text === 'hour') {
              return '每小时执行';
            }
          }
        }
      },
      {
        title: '操作',
        render: (text, record) => (
          <span>
            <a href={`/regression/task-manage/task-detail/${record.id}`}>查看详情</a>
          </span>
        ),
      }
    ];

    return (
      <PageHeaderWrapper title="任务列表" content="查看并管理所有配置中的任务">
        <Card bordered={false}>
          <Table
            dataSource={data}
            columns={columns}
          />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

