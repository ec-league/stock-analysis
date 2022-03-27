import React, { PureComponent } from "react";
import { connect } from "dva";
import { Button, Card, Descriptions, Form, Input, Table } from "antd";
import DescriptionList from "@/components/DescriptionList";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";

const ButtonGroup = Button.Group;
const { Description } = DescriptionList;
const FormItem = Form.Item;

@connect(({ functor_detail }) => ({
  functor_detail,
}))
@Form.create()
export default class FunctorDetail extends PureComponent {

  componentDidMount() {
    const { dispatch, match } = this.props;
    const { params } = match;

    dispatch({
      type: 'functor_detail/fetchFunctorById',
      payload: params.id,
    });

  }

  renderFunctorDetail() {

    const { functor_detail: { data } } = this.props;
    let list = [];
    if (data) {
      list.push(<Descriptions.Item label="算子名称">{data.name}</Descriptions.Item>)
      list.push(<Descriptions.Item label="算子描述">{data.description}</Descriptions.Item>)
      list.push(<Descriptions.Item label="算子返回值">{data.returnType}</Descriptions.Item>)
      list.push(<Descriptions.Item label="表达式">{data.expression}</Descriptions.Item>)
      list.push(<Descriptions.Item label="算子来源">{data.scriptSource}</Descriptions.Item>)
      list.push(<Descriptions.Item label="创建人">{data.createBy}</Descriptions.Item>)
      list.push(<Descriptions.Item label="创建日期">{dateFormat("YYYY-mm-dd HH:MM:SS", data.gmtCreate)}</Descriptions.Item>)
      list.push(<Descriptions.Item
        label="修改日期">{dateFormat("YYYY-mm-dd HH:MM:SS", data.gmtModified)}</Descriptions.Item>)
    }

    return (
      <Card title="算子详情">
        <Descriptions bordered>
          {list}
        </Descriptions>
      </Card>
    );
  }

  renderParamsDescription() {
    const { functor_detail: { data } } = this.props;
    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
      },
      {
        title: '参数名称',
        dataIndex: 'name',
      },
      {
        title: '参数描述',
        dataIndex: 'description',
      },
      {
        title: '参数类型',
        dataIndex: 'dataType',
      },
      {
        title: '生成时间',
        dataIndex: 'gmtCreate',
        render: text => <span>{dateFormat("YYYY-mm-dd HH:MM:SS", text)}</span>
      },
      {
        title: '修改时间',
        dataIndex: 'gmtModified',
        render: text => <span>{dateFormat("YYYY-mm-dd HH:MM:SS", text)}</span>
      }
    ];

    return (
      <Card title="算子参数详情" style={{ marginTop: 16 }}>
        <Table
          columns={columns}
          dataSource={data.functorParams}
        />
      </Card>
    );
  }

  onSubmit = () => {
    const { dispatch, functor_detail: { newParams, data } } = this.props;

    dispatch({
      type: 'functor_detail/calculatorFunctor',
      payload: {
        newParams: newParams,
        functorId: data.id,
      },
    });

  };

  renderTestFunctor() {
    const {
      form: { getFieldDecorator },
      functor_detail: { newParams, data, result },
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

    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };

    let list = [];
    if (data.functorParams) {
      for (let i = 0; i < data.functorParams.length; i++) {
        let name = data.functorParams[i].name;
        list.push(<FormItem {...formItemLayout} label={name}>
          {getFieldDecorator([name], {
            rules: [
              {
                required: true,
                message: "请输入测试变量值",
              },
            ],
          })(<Input value={name} onChange={(e) => {
            dispatch({
              type: 'functor_detail/setNewParams',
              payload: {
                ...newParams,
                [name]: e.target.value,
              },
            });
          }}/>)}
        </FormItem>)
      }

      list.push(<FormItem {...formItemLayout} label="计算结果">
        {getFieldDecorator('result', {
          initialValue: result,
          rules: [
            {
              required: false,
              message: "计算结果",
            },
          ],
        })(<Input disabled={true} value={result}/>)}
      </FormItem>)
    }

    return (
      <Card bordered={false} title="算子在线测试" style={{ marginTop: 16 }}>
        <Form hideRequiredMark>
          {list}
          <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
            <Button type="primary" htmlType="submit" onClick={this.onSubmit}>
              测试算子
            </Button>
          </FormItem>
        </Form>
      </Card>);
  }


  render() {
    return (
      <PageHeaderWrapper title="算子详情">
        {this.renderFunctorDetail()}
        {this.renderParamsDescription()}
        {this.renderTestFunctor()}
      </PageHeaderWrapper>
    );
  }
}

function dateFormat(fmt, dateStr) {
  let date = new Date(dateStr);
  let ret;
  let opt = {
    "Y+": date.getFullYear().toString(),        // 年
    "m+": (date.getMonth() + 1).toString(),     // 月
    "d+": date.getDate().toString(),            // 日
    "H+": date.getHours().toString(),           // 时
    "M+": date.getMinutes().toString(),         // 分
    "S+": date.getSeconds().toString()          // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    }
    ;
  }
  ;
  return fmt;
}
