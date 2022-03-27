import React from "react";
import {Button, Col, Form, Row} from "antd";
import {DatePicker} from "antd"
const { RangePicker } = DatePicker;
import moment from "moment";
import "moment/locale/zh-cn"
import {connect} from "dva";
@connect(({ zeusrule, loading }) => ({
  zeusrule,
  loading: loading.effects['zeusrule/fetch'],
}))
class AdvancedSearchForm extends React.Component {

  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this);
    this.state={
      treeData:[]
    }
  }
  componentWillMount() {
    // console.log('第一步：AdvancedSearchForm将要加入dom')
  }
  componentDidMount() {
    // console.log('第二步：AdvancedSearchForm已经加入dom')
  }
  componentWillReceiveProps(newProps) {

    // console.log('第三步：AdvancedSearchForm将要接收参数：接收到的newProps'+newProps)
  }
  shouldComponentUpdate(newProps, newState) {
    // console.log('第四步：AdvancedSearchForm是否应该更新组件：接收到的newProps'+newProps)
    // console.log('第四步：AdvancedSearchForm是否应该更新状态：接收到的newState'+newState)
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    // console.log('第五步：AdvancedSearchForm组件将要更新，接收到的nextProps'+nextProps)
    // console.log('第五步：AdvancedSearchForm组件将要更新，接收到的nextState'+nextState)
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('第六步骤：AdvancedSearchForm组件已经更新，之前接收到的组件：'+prevProps)
    // console.log('第六步骤：AdvancedSearchForm组件已经更新，之前接收到的状态：'+prevState)
  }
  componentWillUnmount() {
    // console.log('第七步骤：AdvancedSearchForm组件将要被移除')
  }
  // To generate mock Form.Item
  getFields() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Col span={12} >
        <Form.Item label={`时间段`} hasFeedback>
          {getFieldDecorator(`period`,{
            rules: [{ required: true, message: '请选择时间!' }],
          })(<RangePicker width={1000} showTime={{ format: 'HH:mm' }}
                          format="YYYY-MM-DD HH:mm:ss"
                          placeholder={['开始时间', '结束时间']}/>
          )}
        </Form.Item>
      </Col>
    );
  }
  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
          //要传递的参数
      const params = {
        startTime:moment(values.period[0]._d).format('YYYY-MM-DD HH:mm:ss'),
        endTime:moment(values.period[1]._d).format('YYYY-MM-DD HH:mm:ss')
      };
      this.props.dispatch({
        type: "zeusrule/fetch",
        payload:params,
        callback: (res) => {
          if (res) {
            this.setState({
              treeData:res.data
            })
          }
        }
      })
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
    const { zeusrule, loading } = this.props;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSearch}>
        <Row gutter={24}>{this.getFields()}</Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              查询
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              重置
            </Button>
          </Col>
        </Row>
        {this.props.render(this.state.treeData)}
      </Form>
    );
  }
}
export const GrailTimeForm = Form.create({})(AdvancedSearchForm);
