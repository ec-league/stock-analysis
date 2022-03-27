import React, { PureComponent } from "react";
import { connect } from "dva";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import { Card, Table } from "antd";

@connect(({ local_data_source_config }) => ({
  local_data_source_config: local_data_source_config,
}))
export default class LocalDataSourceConfigDetail extends PureComponent {
  componentDidMount() {
    const { match: { params }, dispatch } = this.props;

    dispatch({
      type: 'local_data_source_config/fetchBySceneCode',
      payload: params.id
    });
  }

  render() {
    const { local_data_source_config: { localDataSourceConfigs }, match: { params } } = this.props;

    const columns = [
      {
        title: 'sceneCode',
        dataIndex: 'sceneCode',
      },
      {
        title: '表信息',
        dataIndex: 'table',
      },
      {
        title: '变量名称',
        dataIndex: 'variableName',
      },
    ];

    return (
      <PageHeaderWrapper
        title="离线数据查询配置详情"
      >
        <Card bordered={false}>
          <Table
            dataSource={localDataSourceConfigs}
            columns={columns}
          />
        </Card>
      </PageHeaderWrapper>
    );
  }

}
