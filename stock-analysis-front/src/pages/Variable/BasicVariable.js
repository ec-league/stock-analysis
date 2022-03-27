import React, { Fragment, PureComponent } from "react";
import { connect } from "dva";
import { Button, Card, Icon, Input, Table } from "antd";
import Highlighter from "react-highlight-words";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import router from "umi/router";

@connect(({ basic_variable_list }) => ({
  basic_variable_list,
}))
export default class BasicVariable extends PureComponent {

  state = {
    data: [],
    pagination: {},
    loading: false,
  };

  componentDidMount() {
    this.fetch({
      pageSize: 10,
      page: 1,
    });
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      pageSize: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  };
  fetch = (params = {}) => {
    this.setState({ loading: true });
    const { basic_variable_list: { data }, dispatch } = this.props;
    dispatch({
      type: 'basic_variable_list/fetchBasicVariableList',
      payload: {
        ...params,
      },
    })
    const pagination = { ...this.state.pagination };
    this.setState({
      loading: false,
      data: data.pageData,
      pagination,
    });
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


  render() {
    const action = (
      <Fragment>
        <Button type="primary" onClick={() => {
          router.push("/data/variable/variable-add");
        }}>新增变量</Button>
      </Fragment>
    );

    const { basic_variable_list: { data }, } = this.props;
    this.setState({
      data: data.pageData,
      pagination: data.pagination,
    });

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
        fixed: 'left',
        width: 30,
      },
      {
        title: '变量名',
        dataIndex: 'variableName',
        sorter: true,
        render: variableName => `${variableName.first} ${variableName.last}`,
        ...this.getColumnSearchProps('variableName'),
        fixed: 'left',
        width: 300,
      },
      {
        title: '变量中文名',
        dataIndex: 'chineseName',
      },
      {
        title: '变量描述',
        dataIndex: 'description',
      },
      {
        title: '变量类型',
        dataIndex: 'variableType',
        filters: [
          { text: 'INTEGER', value: 'INTEGER' },
          { text: 'DOUBLE', value: 'DOUBLE' },
          { text: 'STRING', value: 'STRING' }],
      },
      {
        title: '变量值类型',
        dataIndex: 'opType',
      },
      {
        title: '变量来源',
        dataIndex: 'type',
      },
      {
        title: '生成时间',
        dataIndex: 'gmtCreate',
        render: text => <span>{formatDate(text)}</span>
      },
      {
        title: '修改时间',
        dataIndex: 'gmtModified',
        render: text => <span>{formatDate(text)}</span>
      },
      {
        title: '操作',
        render: (text, record) => {
          return (
            <span>
            <a href={`/data/variable/basic-variable-detail/${record.id}`}>详情</a>
              |<a href={`/data/variable/basic-variable-update/${record.id}`}>修改</a>
          </span>
          );
        },
        fixed: 'right',
      }
    ];
    return (
      <PageHeaderWrapper
        extra={action}
        title="基础变量列表"
        content="基础变量均来自于其他系统直接上送, 属于原生变量"
      >
        <Card bordered={false}>
          <Table
            columns={columns}
            dataSource={data.pageData}
            pagination={this.state.pagination}
            onChange={this.handleTableChange}
            loading={this.state.loading}
            size="small"
          />
        </Card>
      </PageHeaderWrapper>
    );
  }
}
