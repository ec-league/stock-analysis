import React, { PureComponent } from "react";
import { connect } from "dva";
import { Card, Divider, Table } from "antd";

import PageHeaderWrapper from "@/components/PageHeaderWrapper";

@connect(({ user_manage }) => ({
  user_manage,
}))
class UserList extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'user_manage/queryUserList',
      payload: {
        count: 8,
      },
    });
  }

  render() {
    const {
      user_manage: { data }, dispatch,
    } = this.props;

    const formatDate = (time) => {
      const date = new Date(time);
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const strDate = date.getDate().toString().padStart(2, '0');
      return `${date.getFullYear()}-${month}-${strDate} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    };

    const columns = [
      {
        title: 'Id',
        dataIndex: 'userId',
      },
      {
        title: '用户账号',
        dataIndex: 'userName',
      },
      {
        title: '用户姓名',
        dataIndex: 'name',
      },
      {
        title: '创建时间',
        dataIndex: 'gmtCreate',
        render: text => <span>{formatDate(text)}</span>
      },
      {
        title: '修改时间',
        dataIndex: 'gmtModified',
        render: text => <span>{formatDate(text)}</span>
      },
      {
        title: '用户状态',
        dataIndex: 'status',
      },
      {
        title: '操作',
        render: (text, record) => {
          return (
            <span>
            <a href={`/user-manage/user-modify/${record.userId}`}>编辑</a>
            <Divider type="vertical"/>
            <a onClick={() => {
              dispatch({
                type: 'user_manage/invalidate',
                payload: record.userId
              });
            }}>失效</a>
          </span>
          );
        },
      }
    ];
    return (
      <PageHeaderWrapper title="已注册用户列表">
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

export default UserList;
