import React, { PureComponent } from "react";
import { connect } from "dva";
import { Card, Divider, Empty, Table } from "antd";

import PageHeaderWrapper from "@/components/PageHeaderWrapper";

@connect(({ regression_list }) => ({
  regression_list: regression_list
}))
export default class RegressionList extends PureComponent {
  render() {

    const {
      regression_list: { data },
      dispatch
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
            <a onClick={() => {
              dispatch({
                type: 'model_file_list/invalidate',
                payload: record.id
              });
            }}>失效</a>
          </span>
        ),
      }
    ];

    if (data) {
      return (
        <PageHeaderWrapper title="回溯列表" content="回溯列表, 用来查看总体回溯详情">
          <Card bordered={false}>
            <Table
              dataSource={data}
              columns={columns}
            />
          </Card>
        </PageHeaderWrapper>
      );
    } else {
      return (
        <PageHeaderWrapper title="回溯列表" content="回溯列表, 用来查看总体回溯详情">
          <Card bordered={false}>
            <Empty/>
          </Card>
        </PageHeaderWrapper>
      );
    }
  }
}
