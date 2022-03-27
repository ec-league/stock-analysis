import { Form, Row, Col, Input, Button, Icon ,Select} from 'antd';
import ReactDOM from  "react-dom";
import GrailTree from '@/components/Zeus/GrailTree'
import Treedendrogram from '@/components/Zeus/Treedendrogram'
import GrailLineChart from '@/components/Zeus/GrailLineChart'
const { Option } = Select;
import React from "react";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
const data=["规则1","规则2"]
const data1={
  "name": "起始点规则",
  "type":"规则",
  "children": [{
    "name": "起始点因子",
    "type":"因子",
    "children": [{
      "name": "d4_tag",
      "type":"参数",
    },
     {
        "name": "d3_tag",
        "type":"参数",
      }, {
        "name": "d2_tag",
        "type":"参数",
      }, {
        "name": "d1_tag",
        "type":"参数",
      }, {
        "name": "d0_tag",
        "type":"参数",

    }]
  }]
}
const data2={
  "name": "起始点规则23123",
  "type":"规则",
  "children": [{
    "name": "起始点因子123",
    "type":"因子",
    "children": [{
      "name": "d4_tag123",
      "type":"参数",
    },
      {
        "name": "d3_tag123",
        "type":"参数",
      }, {
        "name": "d2_tag123",
        "type":"参数",
      }, {
        "name": "d1_tag123",
        "type":"参数",
      }, {
        "name": "d0_tag123",
        "type":"参数",

      }]
  }]
}
export default class AdvancedSearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name:props.name,
      expand: false,
      option:data,
      treeData:[],
      display:props.display
    };
  }




  // To generate mock Form.Item
  getFields() {
    const count = this.state.expand ? 1 : 6;
    const { getFieldDecorator } = this.props.form;
    const children = [];
    for (let i = 0; i < 1; i++) {
      children.push(
        <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
          <Form.Item label={`规则名称 ${i}`} hasFeedback>
            {getFieldDecorator(`select${i}`, {
              rules: [{ required: true, message: '请选择规则!' }],
            })(<Select>
              <Select.Option value="规则1">规则1</Select.Option>
              <Select.Option value="规则2">规则2</Select.Option>
            </Select>
            )}
          </Form.Item>
        </Col>,
      );
    }
    return children;
  }

  handleSearch = e => {
    // e.preventDefault();
    console.log('Received values of form:asdasd ', this.state.display);
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form:asdasd ',values)
      if(values.select0=="规则1"){

        console.log('Received values of form:asdasd ', this.state.name);

      }else if(values.select0=="规则2"){
        console.log('Received values of form:wqewqe ', values);

      }
      console.log('Received values of form: ', values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };

  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form className="ant-advanced-search-form" {...formItemLayout} onSubmit={this.handleSearch}>
        <Row gutter={24}>{this.getFields()}</Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Clear
            </Button>
            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
              Collapse <Icon type={this.state.expand ? 'up' : 'down'} />
            </a>
          </Col>
        </Row>
      </Form>
        );
  }
}

const GrailTable = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);

export  default  GrailTable
