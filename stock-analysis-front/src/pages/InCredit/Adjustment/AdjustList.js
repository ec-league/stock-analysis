import React, { Fragment, PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Col, DatePicker, Form, Input, Table, Tabs } from 'antd';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import './index.css';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/eclipse.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/sql/sql';
import 'codemirror/addon/hint/sql-hint.js';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint.js';

const { RangePicker } = DatePicker;


const { TabPane } = Tabs;
const FormItem = Form.Item;

const validatorRangePicker = (rule, value, callback) => {
  if (value[0] > new Date() || value[1] > new Date()) {
    callback('选择日期不能大于当前日期');
  }
  callback();
};

@connect(({ adjustment_list }) => ({
  adjustment_list,
}))

@Form.create()
class AdjustList extends PureComponent {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'adjustment_list/fetchReadyList',
      payload: {
        batchType: "ADJUST",
      },
    });
    dispatch({
      type: 'adjustment_list/fetchSqlList',
      payload: {
        batchType: "ADJUST",
      },
    });
    dispatch({
      type: 'adjustment_list/fetchFinishList',
      payload: {
        batchType: "ADJUST",
      },
    });
  }

  formatDate = (time) => {
    const date = new Date(time);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const strDate = date.getDate().toString().padStart(2, '0');
    return `${date.getFullYear()}-${month}-${strDate} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  };


  onReadySubmit = () => {
    const { dispatch, adjustment_list: { param } } = this.props;
    dispatch({
      type: 'adjustment_list/fetchSearch',
      payload: {
        ...param,
        status: "INIT",
        batchType: "ADJUST",
      },
    });
  };

  onFinishSubmit = () => {
    const { dispatch, adjustment_list: { param } } = this.props;
    dispatch({
      type: 'adjustment_list/fetchSearch',
      payload: {
        ...param,
        batchType: "ADJUST",

      },
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
    const { dispatch } = this.props;
    dispatch({
      type: 'adjustment_list/resetSearchInfo',
      payload: {},
    });
  };

  getFields() {
    const {
      form: { getFieldDecorator },
      adjustment_list: { param },
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
      <Col span={8} key="fileName">
        <FormItem {...formItemLayout} label="文件、脚本名称">
          {getFieldDecorator('fileName', {
            rules: [
              {
                required: false,
              },
            ],
          })(<Input onChange={(e) => {
            dispatch({
              type: 'adjustment_list/setSearchInfo',
              payload: {
                ...param,
                fileName: e.target.value,
              },
            });
          }}/>)}
        </FormItem>
      </Col>,
    );
    children.push(
      <Col span={8} key="uploadUser">
        <FormItem {...formItemLayout} label="上传人员">
          {getFieldDecorator('uploadUser', {
            rules: [
              {
                required: false,
              },
            ],
          })(<Input onChange={(e) => {
            dispatch({
              type: 'adjustment_list/setSearchInfo',
              payload: {
                ...param,
                uploadUser: e.target.value,
              },
            });
          }}/>)}
        </FormItem>
      </Col>,
    );
    children.push(
      <Col span={8} key="dateRange">
        <FormItem {...formItemLayout} label="上传时间">
          {getFieldDecorator('dateRange', {
            rules: [
              {
                required: false,
              },
              { validator: validatorRangePicker },
            ],
          })(<RangePicker
            onChange={(dateString) => {
              dispatch({
                type: 'adjustment_list/setSearchInfo',
                payload: {
                  ...param,
                  startDate: dateString[0],
                  endDate: dateString[1]
                },
              });
            }}
          />)}
        </FormItem>
      </Col>
    );

    return children;
  }


  readyAdjustList() {
    const {
      adjustment_list: { readyData }, dispatch
    } = this.props;

    const columns = [
      {
        title: '文件、脚本名称',
        dataIndex: 'name',
      },
      {
        title: '生成时间',
        dataIndex: 'gmtCreate',
        render:
          text => <span>{this.formatDate(text)}</span>
      },
      {
        title: '完成时间',
        dataIndex: 'gmtModified',
        render: (text, record) => (
          <span>{(record.status == 'SUCCESS'||record.status == 'END'||record.status == 'FAIL' )? this.formatDate(text) : ""}</span>
        )
      },
      {
        title: '上传人',
        dataIndex: 'uploadUser',
      },

      {
        title: '记录数',
        dataIndex: 'recordNum',
      },
      {
        title: '成功数',
        dataIndex: 'successNum',
      },
      {
        title: '失败数',
        dataIndex: 'failNum',
      },
      {
        title: '批次状态',
        dataIndex: 'status',
      },
      // {
      //   title: '备注',
      //   dataIndex: 'remarks',
      // },
      {
        title: '操作',
        render: (text, record) => (
          <span>
             <a disabled={record.status !== 'SQL_END'} onClick={() => {
               dispatch({
                 type: 'adjustment_list/downSqlResult',
                 payload: record.id
               });
             }}>下载</a>
            |
            <a disabled={record.status !== 'SQL_END'} onClick={() => {
              dispatch({
                type: 'adjustment_list/executeSqlAdjust',
                payload: record.id
              });
              location.reload();
            }}>执行</a>
          </span>
        ),
      }
    ];

    const options = {
      lineNumbers: true,
      keyMap: 'sublime',
      theme: 'monokai',
      mode: 'sql',
    };

    return (
      <div>
        <Card>
          <Table dataSource={readyData} columns={columns}
                 expandedRowRender={record => <CodeMirror
                   value={record.content}
                   options={options}></CodeMirror>}/>
        </Card>
      </div>)
  }

  sqlAdjustList() {
    const {
      adjustment_list: { sqlData }, dispatch
    } = this.props;

    const columns = [
      {
        title: '文件、脚本名称',
        dataIndex: 'name',
      },
      {
        title: '停顿点',
        dataIndex: 'stopStep',
      },
      {
        title: '生成时间',
        dataIndex: 'gmtCreate',
        render:
          text => <span>{this.formatDate(text)}</span>
      },
      {
        title: '完成时间',
        dataIndex: 'gmtModified',
        render: (text, record) => (
      <span>{(record.status == 'SUCCESS'||record.status == 'END'||record.status == 'FAIL' )? this.formatDate(text) : ""}</span>
    )
      },
      {
        title: '上传人',
        dataIndex: 'uploadUser',
      },

      {
        title: '记录数',
        dataIndex: 'recordNum',
      },
      {
        title: '成功数',
        dataIndex: 'successNum',
      },
      {
        title: '失败数',
        dataIndex: 'failNum',
      },
      {
        title: '批次状态',
        dataIndex: 'status',
      },
      // {
      //   title: '备注',
      //   dataIndex: 'remarks',
      // },
      {
        title: '操作',
        render: (text, record) => (
          <span>
             <a disabled={record.status !== 'SQL_END'} onClick={() => {
               dispatch({
                 type: 'adjustment_list/downSqlResult',
                 payload: record.id
               });
             }}>下载</a>

          </span>
        ),
      }
    ];

    const options = {
      lineNumbers: true,
      keyMap: 'sublime',
      theme: 'monokai',
      mode: 'sql',
    };

    return (
      <div>
        <Card>
          <Table dataSource={sqlData} columns={columns}
                 expandedRowRender={record => <CodeMirror
                   value={record.content}
                   options={options}></CodeMirror>}/>
        </Card>
      </div>)
  }

  finishAdjustList() {
    const {
      adjustment_list: { finishData }, dispatch
    } = this.props;

    const columns = [
      {
        title: '文件、脚本名称',
        dataIndex: 'name',
        width: "20",

      },
      {
        title: '生成时间',
        dataIndex: 'gmtCreate',
        width: "10",

        render:
          text => <span>{this.formatDate(text)}</span>
      },
      {
        title: '完成时间',
        dataIndex: 'gmtModified',
        width: "10",
        render: (text, record) => (
          <span>{(record.status == 'SUCCESS'||record.status == 'END'||record.status == 'FAIL' )? this.formatDate(text) : ""}</span>
        )

      },
      {
        title: '上传人',
        dataIndex: 'uploadUser',
        width: "10",

      },

      {
        title: '记录数',
        dataIndex: 'recordNum',
        width: "5",

      },
      {
        title: '成功数',
        dataIndex: 'successNum',
        width: "5",

      },
      {
        title: '失败数',
        dataIndex: 'failNum',
        width: "5",

      },

      {
        title: '批次状态',
        dataIndex: 'status',
        width: "5",

      },
      {
        title: '处理人',
        dataIndex: 'dealUser',
        width: "10",

      },
      {
        title: 'aps处理状态',
        dataIndex: 'dealStatus',
        width: "10",

      },
      {
        title: '处理时间',
        dataIndex: 'gmtDeal',
        width: "10",

        render: (text, record) => (
          <span>{record.gmtDeal ? this.formatDate(text) : ""}</span>
        )
      },

      // {
      //   title: '备注',
      //   dataIndex: 'remarks',
      // },
      {
        title: '操作',
        width: "10",

        render: (text, record) => (
          <span>
            <a disabled={record.status !== 'SUCCESS'} onClick={() => {
              dispatch({
                type: 'adjustment_list/downAdjustResult',
                payload: record.id
              });
            }}>下载</a>
          </span>
        ),
      }
    ];

    const options = {
      lineNumbers: true,
      keyMap: 'sublime',
      theme: 'monokai',
      mode: 'sql',
    };

    return (

      <div>
        <Card>
          <Table dataSource={finishData} columns={columns}
                 expandedRowRender={record => <CodeMirror
                   value={record.content}
                   options={options}></CodeMirror>}/>
        </Card>
      </div>
    )
  }


  render() {

    return (
      <PageHeaderWrapper title="调额列表" content="查看调额列表，包括文件调额、脚本调额。
      批次状态对应关系如下：
      SQL_INIT：sql脚本初始化,
      SQL_PROCESSING：SQL执行中,
      SQL_ENDSQL执行完成,
      INIT：调额文件初始化完成,
      PROCESSING：执行中,
      END：执行完成,
      INVALID：失效,
      REQUEST_SUCCESS：请求RAS或APS等外部系统成功，
      SUCCESS：执行成功,
      FAIL：执行失败;
      ">
        <Card bordered={false}>
          <Tabs defaultActiveKey="sqlExecute" type="card">
            <TabPane tab="SQL执行" key="sqlExecute">
              {this.sqlAdjustList()}
            </TabPane>
            <TabPane tab="待处理" key="ready">
              {this.readyAdjustList()}
            </TabPane>
            <TabPane tab="结果文件" key="result">
              {this.finishAdjustList()}
            </TabPane>
          </Tabs>

        </Card>
      </PageHeaderWrapper>
    );
  }

}

export default AdjustList;
