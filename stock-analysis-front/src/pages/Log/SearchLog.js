import React, { PureComponent } from "react";
import { connect } from "dva";
import { Button, Card, Col, Form, Input, Row, Select, Table } from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import './index.css';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/eclipse.css';
import 'codemirror/theme/monokai.css';

const FormItem = Form.Item;
const { Option } = Select;


@connect(({ log_manage }) => ({
  log_manage,
}))
@Form.create()
class SearchLog extends PureComponent {

  onSubmit = () => {
    const { dispatch, log_manage: { param } } = this.props;
    dispatch({
      type: 'log_manage/fetchSearch',
      payload: param,
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
    const { dispatch } = this.props;
    dispatch({
      type: 'log_manage/resetSearchInfo',
      payload: {},
    });
  };

  getFields() {
    const {
      form: { getFieldDecorator },
      log_manage: { param },
      dispatch
    } = this.props;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 10 },
      },
    };
    const children = [];
    children.push(
      <Col span={8} key="indexName">
        <FormItem {...formItemLayout} label="indexName">
          {getFieldDecorator('indexName', {
            rules: [
              {
                required: false,
              },
            ],
          })(<Input onChange={(e) => {
            dispatch({
              type: 'log_manage/setSearchInfo',
              payload: {
                ...param,
                indexName: e.target.value,
              },
            });
          }}/>)}
        </FormItem>
      </Col>,
    );
    children.push(
      <Col span={8} key="serialNo">
        <FormItem {...formItemLayout} label="serialNo">
          {getFieldDecorator('serialNo', {
            rules: [
              {
                required: false,
              },
            ],
          })(<Input onChange={(e) => {
            dispatch({
              type: 'log_manage/setSearchInfo',
              payload: {
                ...param,
                athenaSerialNo: e.target.value,
              },
            });
          }}/>)}
        </FormItem>
      </Col>,
    );
    children.push(
      <Col span={8} key="extraSerialNo">
        <FormItem {...formItemLayout} label="extraSerialNo">
          {getFieldDecorator('extraSerialNo', {
            rules: [
              {
                required: false,
              },
            ],
          })(<Input onChange={(e) => {
            dispatch({
              type: 'log_manage/setSearchInfo',
              payload: {
                ...param,
                athenaExternalSerialNo: e.target.value,
              },
            });
          }}/>)}
        </FormItem>
      </Col>,
    );
    children.push(
      <Col span={8} key="certNo">
        <FormItem {...formItemLayout} label="certNo">
          {getFieldDecorator('certNo', {
            rules: [
              {
                required: false,
              },
            ],
          })(<Input onChange={(e) => {
            dispatch({
              type: 'log_manage/setSearchInfo',
              payload: {
                ...param,
                id_no: e.target.value,
              },
            });
          }}/>)}
        </FormItem>
      </Col>
    );
    children.push(
      <Col span={8} key="userName">
        <FormItem {...formItemLayout} label="userName">
          {getFieldDecorator('userName', {
            rules: [
              {
                required: false,
              },
            ],
          })(<Input onChange={(e) => {
            dispatch({
              type: 'log_manage/setSearchInfo',
              payload: {
                ...param,
                name: e.target.value,
              },
            });
          }}/>)}
        </FormItem>
      </Col>
    );
    children.push(
      <Col span={8} key="mobilePhone">
        <FormItem {...formItemLayout} label="mobilePhone">
          {getFieldDecorator('mobilePhone', {
            rules: [
              {
                required: false,
              },
            ],
          })(<Input onChange={(e) => {
            dispatch({
              type: 'log_manage/setSearchInfo',
              payload: {
                ...param,
                phone: e.target.value,
              },
            });
          }}/>)}
        </FormItem>
      </Col>
    );

    return children;
  }

  searchResult = () => {
    const { log_manage: { searchResult } } = this.props;

    const columns = [
      { title: 'indexName', dataIndex: 'indexName', key: 'indexName', width: '15%' },
      { title: 'serialNo', dataIndex: 'serialNo', key: 'serialNo', width: '15%' },
      { title: 'certNo', dataIndex: 'certNo', key: 'certNo', width: '15%' },
      { title: 'userName', dataIndex: 'userName', key: 'userName', width: '10%' },
      { title: 'mobilePhone', dataIndex: 'mobilePhone', key: 'mobilePhone', width: '12%' },
      { title: 'externalSerialNo', dataIndex: 'externalSerialNo', key: 'externalSerialNo', width: '18%' },
      { title: 'gmtCreate', dataIndex: 'gmtCreate', key: 'gmtCreate', width: '15%' },
    ]
    const options = {
      lineNumbers: true,
      keyMap: 'sublime',
      theme: 'monokai',
      mode: 'json',
    };
    return (
      <Card style={{ marginTop: 16 }}>
        <p style={{ color: '#000' }}> 搜索结果总条数{searchResult.total}</p>

        <Table style={{ marginTop: 16 }}
               columns={columns}
               expandedRowRender={record => <CodeMirror
                 value={JSON.stringify(JSON.parse(record.detailContent), null, 2)}
                 options={options}>{record.detailContent}</CodeMirror>}
               dataSource={searchResult.logDetails}
        />
      </Card>
    );
  }

  render() {
    const {
      log_manage: { searchResult },
    } = this.props;

    return (
      <PageHeaderWrapper
        title="日志搜索"
      >
        <Card bordered={false}>
          <Form className="ant-advanced-search-form">
            <Row gutter={24}>{this.getFields()}</Row>
            <Row>
              <Col span={24} style={{ textAlign: 'center' }}>
                <Button type="primary" htmlType="submit" onClick={this.onSubmit}>
                  搜索
                </Button>
                <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                  清空
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>

        <Card>
          {searchResult ? this.searchResult() : <div></div>}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default SearchLog;
