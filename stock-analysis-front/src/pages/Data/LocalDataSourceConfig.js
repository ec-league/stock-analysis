import React, { PureComponent } from "react";
import { connect } from "dva";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import router from "umi/router";
import { Card, Table } from "antd";

@connect(({ local_data_source_config }) => ({
  local_data_source_config: local_data_source_config,
}))
export default class LocalDataSourceConfig extends PureComponent {
  state = {
    visible: false,
    record: {},
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'local_data_source_config/fetch',
    });
  }

  render() {

    const { local_data_source_config: { localDataSourceConfigs } } = this.props;
    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
      },
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
      {
        title: '操作',
        dataIndex: 'sceneCode',
        key: 'sceneCode',
        render: sceneCode => (
          <span>
            <a href={`/data/local-data-config-detail/${sceneCode}`}>查看详情</a>
          </span>),
      }];

    return (
      <PageHeaderWrapper
        title="离线数据查询配置"
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
