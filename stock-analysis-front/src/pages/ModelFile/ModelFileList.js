import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Divider, Table } from 'antd';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import styles from './ModelFileList.less';

@connect(({ model_file_list }) => ({
  model_file_list,
}))
class ModelFileList extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'model_file_list/fetch',
      payload: {
        count: 8,
      },
    });
  }

  render() {
    const {
      model_file_list: { data }, dispatch,
    } = this.props;

    const content = (
      <div className={styles.pageHeaderContent}>
        <p>
          模型文件管理: 查看并管理目前使用的模型文件
        </p>
      </div>
    );

    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
      },
      {
        title: '模型名称',
        dataIndex: 'name',
        render: (text, record) => <a href={`/model-manage/model/model-file-detail/${record.id}`}>{text}</a>
      },
      {
        title: '模型描述',
        dataIndex: 'desc',
      },
      {
        title: '创建时间',
        dataIndex: 'gmtCreate',
      },
      {
        title: '修改时间',
        dataIndex: 'gmtModified',
      },
      {
        title: '当前状态',
        dataIndex: 'status',
      },
      {
        title: '操作',
        render: (text, record) => (
          <span>
            <a href={`/model-manage/model/model-file-detail/${record.id}`}>查看详情</a>
            <Divider type="vertical"/>
              <a disabled={record.status === 'USING' || record.status === 'GRAY'}
                 onClick={() => {
                   dispatch({
                     type: 'model_file_list/invalidate',
                     payload: record.id
                   });
                 }}>失效</a>

          </span>
        ),
      }
    ];
    return (
      <PageHeaderWrapper title="模型文件列表" content={content}>
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

export default ModelFileList;
