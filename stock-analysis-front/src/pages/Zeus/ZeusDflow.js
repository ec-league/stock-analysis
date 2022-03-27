import React, { Fragment, PureComponent } from 'react';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import GrailStock from '@/components/Zeus/GrailStock';

import Highlighter from "react-highlight-words";


import { Button, Modal, Card, Col, Descriptions, Empty, Icon, Input, Row, Table, Form } from 'antd';
import DescriptionList from '@/components/DescriptionList';
import router from 'umi/router';

import { Bar, ChartCard, Field, MiniArea, MiniBar, MiniProgress, Pie, yuan } from '@/components/Charts';


const ButtonGroup = Button.Group;
const { Description } = DescriptionList;

@connect(({ zeusdflow }) => ({
  zeusdflow,
}))

export default class ZeusDflow extends PureComponent {

  //定义初始化数据
  state = {
    //table
    searchText: '',
    pagination: {
      current: 0,
      page: 1,
      pageSize: 10,
    },
    //dialog
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  };


  componentDidMount() {
    const params = this.state.pagination;

    this.fetch(params);
  }

  //获取数据
  fetch = (params = {}) => {

    const { dispatch, match } = this.props;
    dispatch({
      type: 'zeusdflow/fetchSceneListEffect',
      payload: {
        ...params,
      },
    })

  };

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
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
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
        textToHighlight={text.toString()}
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


  handleTableChange = (pagination, filters, sorter) => {

    //通过当前page情况设置pagination局部变量，不设其实也可以
    const { scene } = this.props;
    const { pagination: pageInfo } = scene;

    const pager = this.state.pagination;

    pager.current = pageInfo.current;
    pager.pageSize = pageInfo.pageSize;
    pager.page = pageInfo.page;

    this.setState({
      pagination: pager,
    });

    //用新pagination发送新请求
    this.fetch({
      pageSize: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  };

  renderZeusDflow() {

    //获取Model state
    const { zeusdflow } = this.props;

    //获取当前列表和分页数据
    const { scene_list: sceneList, pagination } = zeusdflow;

    const pageData = sceneList;

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
        key: 'id'
      },
      {
        title: '决策流名称',
        dataIndex: 'sceneName',
        key: 'sceneName',
        sorter: false,
        //render: sceneName => `${sceneName.first} ${sceneName.last}`,
        //...this.getColumnSearchProps('sceneName'),
      },
      {
        title: '决策流描述',
        dataIndex: 'description',
        key: 'description'
      },

      {
        title: '生成时间',
        dataIndex: 'gmtCreate',
        key: 'gmtCreate',
        render: text => <span>{formatDate(text)}</span>
      },
      {
        title: '修改时间',
        dataIndex: 'gmtModified',
        key: 'gmtModified',
        render: text => <span>{formatDate(text)}</span>
      },
      // {
      //   title: '操作',
      //   key: 'os',
      //   render: (text, record) => {
      //     return (
      //       <span>
      //       <a href={`/scene/scene-detail/${record.id}`}>详情</a>
      //     </span>
      //     );
      //   },
      // }
    ];

    return (
      <Table
        columns={columns}
        dataSource={pageData}
        pagination={pagination}
        rowKey={row => row.id}
        onChange={this.handleTableChange}
      />
    );
  }


  render() {
    return (
      <PageHeaderWrapper>
        <Card title="批核率走势图" bordered={true}>
          <GrailStock></GrailStock>
        </Card>
      </PageHeaderWrapper>
    );
  }
}
