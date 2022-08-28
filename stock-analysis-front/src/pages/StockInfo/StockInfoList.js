import React, { PureComponent } from "react";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import { Button, Card, Form, Input, Modal, Table } from "antd";
import { connect } from "dva";
import { formItemLayout } from "@/Common";

const FormItem = Form.Item;

@Form.create()
@connect(({ stock_info }) => ({
  stock_info: stock_info,
}))
export default class StockInfoList extends PureComponent {
  state = {
    visible: false,
    record: null
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({
      type: 'stock_info/fetchList'
    });
  }

  handleOk() {
    const {
      dispatch,
      form: { getFieldValue }
    } = this.props;

    dispatch({
      type: 'stock_info/saveStock',
      payload: {
        stockCode: getFieldValue('stockCode'),
        stockName: getFieldValue('stockName')
      }
    });

    this.setState({ visible: false, record: null });
  }

  handleCancel() {
    this.setState({ visible: false, record: null })
  }

  renderModal() {
    const {
      form: { getFieldDecorator }
    } = this.props;

    return (
      <Modal
        title={this.state.record ? "更新股票信息": "新增股票信息"}
        visible={this.state.visible}
        onCancel={() => this.handleCancel()}
        onOk={() => {
        }}
        destroyOnClose
        footer={[
          <Button key="back" onClick={() => this.handleCancel()}>
            取消
          </Button>,
          <Button type="primary" htmlType="submit" onClick={() => this.handleOk()}>
            提交
          </Button>,
        ]}>
        <Form hideRequiredMark style={{ marginTop: 8 }}>
          <FormItem {...formItemLayout} label="股票代码">
            {getFieldDecorator('stockCode', {
              initialValue: this.state.record ? this.state.record.stockCode : '',
              rules: [
                {
                  required: true,
                  message: "股票代码",
                },
              ],
            })(
              <Input/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="股票名称">
            {getFieldDecorator('stockName', {
              initialValue: this.state.record ? this.state.record.stockName : '',
              rules: [
                {
                  required: true,
                  message: "股票名称",
                },
              ],
            })(
              <Input/>
            )}
          </FormItem>
        </Form>
      </Modal>
    )
  }

  render() {

    const {
      stock_info: { stock_info_list },
      dispatch
    } = this.props;

    const columns = [
      {
        title: '股票代码',
        dataIndex: 'stockCode',
      },
      {
        title: '股票名称',
        dataIndex: 'stockName',
      },
      {
        title: '更新时间',
        dataIndex: 'gmtModified'
      },
      {
        title: '当前切片',
        dataIndex: 'extInfo.partitionDate'
      },
      {
        title: '操作',
        dataIndex: 'stockCode',
        key: 'operation',
        render: (text, record) => (
          <span>
            <a href="#" onClick={() => this.setState({ record: record, visible: true, })}>修改</a>
            |
            <a href="#" onClick={() => {
              dispatch({
                type: 'stock_info/startRegression',
                payload: text
              })
            }}>历史刷数</a>
          </span>),
      }
    ];

    const action = (
      <Button type={"primary"} onClick={() => {
        this.setState({ visible: true })
      }}>新增</Button>
    );

    return (
      <PageHeaderWrapper type={"success"}
                         title={"股票概要列表"}
                         extra={action}
      >
        <Card>
          <Table columns={columns}
                 dataSource={stock_info_list}/>
        </Card>
        {this.renderModal()}
      </PageHeaderWrapper>
    )
  }
}
