import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Table } from 'antd';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import styles from './ModelApplyList.less';

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
        title: '模型类型',
        dataIndex: 'gmtCreate',
      },
      {
        title: '修改时间',
        dataIndex: 'gmtModified',
      },
      {
        title: '使用状态',
        dataIndex: 'status',
      },
      {
        title: '操作',
        render: (text, record) => (
          <span>
            <a href={`/model-manage/model-apply/model-apply-detail/${record.id}`}>查看详情</a>
          </span>
        ),
      }
    ];
    return (
      <PageHeaderWrapper title="模型应用列表">
        <Card bordered={false}>
          <Table
            dataSource={data}
            columns={columns}
          />
        </Card>
        <div className={styles.model_file_list}>

        </div>
      </PageHeaderWrapper>
    );
  }
}

export default ModelFileList;
