import React, { Fragment, PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Col, DatePicker, Form, Input, Table, Tabs } from 'antd';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';


const { RangePicker } = DatePicker;


const { TabPane } = Tabs;
const FormItem = Form.Item;

const validatorRangePicker = (rule, value, callback) => {
  if (value[0] > new Date() || value[1] > new Date()) {
    callback('选择日期不能大于当前日期');
  }
  callback();
};

@connect(({ white_list }) => ({
  white_list,
}))

@Form.create()
class FileList extends PureComponent {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'white_list/fetchWhiteList',
      payload: {
        batchType: "WHITE",
      },
    });
  }

  formatDate = (time) => {
    const date = new Date(time);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const strDate = date.getDate().toString().padStart(2, '0');
    return `${date.getFullYear()}-${month}-${strDate} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  };


  handleReset = () => {
    this.props.form.resetFields();
    const { dispatch } = this.props;
    dispatch({
      type: 'white_list/resetSearchInfo',
      payload: {},
    });
  };

  getFields() {
    const {
      form: { getFieldDecorator },
      white_list: { param },
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
        <FormItem {...formItemLayout} label="文件名称">
          {getFieldDecorator('fileName', {
            rules: [
              {
                required: false,
              },
            ],
          })(<Input onChange={(e) => {
            dispatch({
              type: 'white_list/setSearchInfo',
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
              type: 'white_list/setSearchInfo',
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
                type: 'white_list/setSearchInfo',
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

  render() {
    const {
      white_list: { whiteListData }, dispatch
    } = this.props;

    const columns = [
      {
        title: '文件名称',
        dataIndex: 'name',
        width: "20",

      },
      {
        title: '上传时间',
        dataIndex: 'gmtCreate',
        width: "20",

        render:
          text => <span>{this.formatDate(text)}</span>
      },

      {
        title: '完成时间',
        dataIndex: 'gmtModified',
        width: "20",

        render:
          text => <span>{this.formatDate(text)}</span>
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
        title: '处理结果',
        dataIndex: 'status',
        width: "5",

      },
      {
        title: '操作',
        width: "10",

        render: (text, record) => (
          <span>
            <a disabled={record.status !== "SUCCESS"} onClick={() => {
              console.log("downResultFile")
              dispatch({
                type: 'white_list/downResultFile',
                payload: record.id
              });
            }}>结果下载</a>
          </span>
        ),
      }
    ];


    return (
      <PageHeaderWrapper title="白名单列表" content="查看白名单列表, 批次状态对应关系如下：
      INIT：调额文件初始化完成,
      PROCESSING：执行中,
      END：执行完成,
      INVALID：失效,
      REQUEST_SUCCESS：请求RAS或APS等外部系统成功，
      SUCCESS：执行成功,
      FAIL：执行失败;">
        <Card>
          <Table dataSource={whiteListData} columns={columns}/>
        </Card>
      </PageHeaderWrapper>
    );
  }

}

export default FileList;
