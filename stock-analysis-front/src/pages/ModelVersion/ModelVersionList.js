import React, { Fragment, PureComponent } from 'react';
import { connect } from 'dva';
import { Button, Card, Table } from 'antd';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import router from "umi/router"

@connect(({ model_version }) => ({
  model_version,
}))
class ModelVersionList extends PureComponent {
  componentDidMount() {
    const { dispatch, match } = this.props;
    const { params } = match;

    dispatch({
      type: 'model_version/fetchList',
      payload: {
        count: 8,
        fileId: params.fileId
      },
    });
  }


  render() {
    const {
      model_version: { data, fileId }, dispatch
    } = this.props;

    const action = (
      <Fragment>
        <Button type="primary" onClick={() => {
          router.push(`/model-manage/model/model-version-add/${fileId}`);
        }}>添加模型版本</Button>
      </Fragment>
    );

    const formatDate = (time) => {
      const date = new Date(time);
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const strDate = date.getDate().toString().padStart(2, '0');
      return `${date.getFullYear()}-${month}-${strDate} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    };

    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
      },
      {
        title: '模型版本名称',
        dataIndex: 'version',
      },
      {
        title: '当前状态',
        dataIndex: 'status',
      },
      {
        title: '创建时间',
        dataIndex: 'gmtCreate',
        render:
          text => <span>{formatDate(text)}</span>
      },
      {
        title: '修改时间',
        dataIndex: 'gmtModified',
        render:
          text => <span>{formatDate(text)}</span>
      },
      {
        title: '操作',
        render: (text, record) => (
          <span>
            <a disabled={record.status === 'USING'}
               onClick={() => {
                 dispatch({
                   type: 'model_version/validate',
                   payload: record.id
                 });
                 location.reload();
               }}>生效</a>|
             <a disabled={record.status === 'USING'}
                onClick={() => {
                  dispatch({
                    type: 'model_version/deleteVersion',
                    payload: record.id
                  });
                  location.reload();
                }}>删除</a>
          </span>
        ),
      }
    ];
    return (
      <PageHeaderWrapper title="模型版本列表" content="模型版本管理: 查看并管理目前使用的模型文件"
                         extra={action}
      >
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

export default ModelVersionList;
