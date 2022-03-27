import React, { Component } from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Card, Icon, Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;

class Help extends Component {
  render() {

    return (
      <PageHeaderWrapper>
        <Card>
          <Typography>
            <Title level={2}>使用帮助</Title>
            <Paragraph>
              <Text strong>主要包含基本操作的使用说明</Text>
            </Paragraph>
            <Title level={3}>
              <Icon type="user"/>
              <span style={{ marginLeft: 8 }}>个人页</span>
            </Title>
            <Paragraph>
              <ul>
                <li><a href="/account/settings/base">个人设置</a></li>
              </ul>
            </Paragraph>
            <Paragraph>
              主要包含个人信息的配置, 当管理员分配了新的账号以后, 个人是可以进行该页面进行个人信息的变更的, 主要包含常用的联系方式以及密码变更
            </Paragraph>

            <Title level={3}>
              <Icon type="dashboard"/>
              <span style={{ marginLeft: 8 }}>模型应用总览</span>
            </Title>
            <Paragraph>
              <ul>
                <li><a href="/model-apply-dashboard">模型应用总览</a></li>
              </ul>
            </Paragraph>
            <Paragraph>
              模型应用总览主要展示系统运行到现在的一些摘要大盘, 可以通过总览页, 可以查看一天风险数据总量, 任务大盘, 模型计算大盘等数据
            </Paragraph>
            <Title level={3}>
              <Icon type="project"/>
              <span style={{ marginLeft: 8 }}>模型管理</span>
            </Title>
            <Paragraph>
              <ul>
                <li><a href="/model-manage/model/model-file-list">模型列表</a></li>
                <li><a href="/model-manage/model/add-file-model">新增文件模型</a></li>
              </ul>
            </Paragraph>
            <Paragraph>
              模型列表会展示目前录入的全部模型, 通过列表页, 可以进入查看模型的详情, 将其配置生效, 模拟计算等操作
            </Paragraph>
            <Paragraph>
              新增模型则会重新录入一个新的模型, 当录入后, 该模型会展示在列表页上, 用户也可以直接跳转到模型的详情查看模型初步解析的信息
            </Paragraph>
            <Title level={3}>
              <Icon type="build"/>
              <span style={{ marginLeft: 8 }}>变量管理</span>
            </Title>
            <Paragraph>
              <ul>
                <li><a href="/data/variable/basic-variable">基础变量列表</a></li>
                <li><a href="/data/variable/derived-variable-list">衍生变量列表</a></li>
                <li><a href="/data/variable/variable-add">新增基础变量</a></li>
                <li><a href="/data/variable/derived-add">新增衍生变量</a></li>
              </ul>
            </Paragraph>
            <Title level={3}>
              <Icon type="calculator"/>
              <span style={{ marginLeft: 8 }}>算子管理</span>
            </Title>
            <Paragraph>
              <ul>
                <li><a href="/data/functor/functor-list">算子列表</a></li>
                <li><a href="/data/functor/functor-add">新增算子</a></li>
              </ul>
            </Paragraph>
            <Title level={3}>
              <Icon type="redo"/>
              <span style={{ marginLeft: 8 }}>回溯管理</span>
            </Title>
            <Paragraph>
              <ul>
                <li><a href="/regression/task-manage/settings">回溯任务列表</a></li>
                <li><a href="/regression/task-manage/task-add">新增回溯任务</a></li>
              </ul>
            </Paragraph>
            <Title level={3}>
              <Icon type="experiment"/>
              <span style={{ marginLeft: 8 }}>模型评估</span>
            </Title>
            <Paragraph>
              <ul>
                <li><a href="/model-manage/model-apply/model-apply-list">模型应用列表</a></li>
              </ul>
            </Paragraph>
            <Title level={3}>
              <Icon type="robot"/>
              <span style={{ marginLeft: 8 }}>场景管理</span>
            </Title>
            <Paragraph>
              <ul>
                <li><a href="/model-manage/scene/scene-list">场景列表</a></li>
                <li><a href="/model-manage/scene/scene-add">场景添加</a></li>
              </ul>
            </Paragraph>
            <Title level={3}>
              <Icon type="sliders"/>
              <span style={{ marginLeft: 8 }}>配置管理</span>
            </Title>
            <Paragraph>
              <ul>
                <li><a href="/config/scheduler-list">调度配置列表</a></li>
                <li><a href="/config/dynamic-resource-list">动态配置列表</a></li>
              </ul>
            </Paragraph>
            <Title level={3}>
              <Icon type="team"/>
              <span style={{ marginLeft: 8 }}>用户管理</span>
            </Title>
            <Paragraph>
              <ul>
                <li><a href="/user-manage/user-list">用户列表</a></li>
                <li><a href="/user-manage/user-add">新增用户</a></li>
              </ul>
            </Paragraph>
            <Paragraph>
              该菜单当且仅当用户为管理员才可见, 管理员可以通过<Text strong>用户列表</Text>查看所有用户的基本信息, 以及为用户赋权, 失效用户等. 管理员也可以通过<Text
              strong>新增用户</Text>来重新录入一个新的用户, 使用该系统.
            </Paragraph>
            <Title level={3}>
              <Icon type="search"/>
              <span style={{ marginLeft: 8 }}>日志查询</span>
            </Title>
            <Paragraph>
              <ul>
                <li><a href="/log-manage/search">日志查询</a></li>
              </ul>
            </Paragraph>
          </Typography>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Help;
