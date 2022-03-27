import React, { PureComponent } from "react";
import { connect } from "dva";
import { Button, Card, Form, Input, Select } from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import router from 'umi/router';

const FormItem = Form.Item;
const { Option } = Select;


@connect(({ variable_modify, basic_variable_detail }) => ({
  variable_modify, basic_variable_detail
}))
@Form.create()
class VariableModify extends PureComponent {

  componentDidMount() {
    const { dispatch, match } = this.props;
    const { params } = match;

    dispatch({
      type: 'basic_variable_detail/fetchBasicVariableDetailById',
      payload: params.id,
    });
  }

  onSubmit = () => {
    const { dispatch, variable_modify: { modifyVariable }, basic_variable_detail: { data } } = this.props;
    const id = data.id;
    modifyVariable.id = data.id;
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({
          type: 'variable_modify/modifyVariableInfo',
          payload: {
            ...modifyVariable,
            variableName: this.props.form.getFieldValue('variableName'),
            variableType: this.props.form.getFieldValue('variableType'),
            opType: this.props.form.getFieldValue('opType'),
            type: this.props.form.getFieldValue('type'),
          },
        });
        router.push("/data/variable/basic-variable-detail/" + id);
      }
    });
  };

  render() {

    const {
      form: { getFieldDecorator },
      basic_variable_detail: { data },
      variable_modify: { modifyVariable },
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

    const handleChangeOpType = (value) => {
      dispatch({
        type: 'variable_modify/setVariableInfo',
        payload: {
          ...modifyVariable,
          opType: value,
        },
      });
    };

    const handleSelectChange = (value) => {
      this.props.form.setFieldsValue({
        opType: `${value === 'STRING' ? 'CATEGORICAL' : 'CONTINUOUS'}`,
        variableType: value
      });
      dispatch({
        type: 'variable_modify/setVariableInfo',
        payload: {
          ...modifyVariable,
          variableType: this.props.form.getFieldValue('variableType'),
          opType: this.props.form.getFieldValue('opType'),
        },
      });
    };

    return (
      <PageHeaderWrapper
        title="修改变量信息"
      >
        <Card bordered={false}>
          <Form hideRequiredMark style={{ marginTop: 8 }}>
            <FormItem {...formItemLayout} label="变量名称">
              {getFieldDecorator('variableName', {
                initialValue: data.variableName,
                rules: [
                  {
                    required: true,
                    message: "请输入变量名称",
                  },
                ],
              })(<Input disabled value={modifyVariable.variableName} style={{ width: 480 }} onChange={(e) => {
                dispatch({
                  type: 'variable_modify/setVariableInfo',
                  payload: {
                    ...modifyVariable,
                    variableName: e.target.value,
                  },
                });
              }}/>)}
            </FormItem>

            <FormItem {...formItemLayout} label="变量类型">
              {getFieldDecorator('variableType', {
                initialValue: data.variableType,
                rules: [
                  {
                    required: true,
                    message: "请选择变量类型",
                  },
                ],
              })(
                <Select style={{ width: 480 }} onChange={handleSelectChange}>
                  {/*<Option value="BOOLEAN">BOOLEAN</Option>*/}
                  <Option value="INTEGER">INTEGER</Option>
                  {/*<Option value="LONG">LONG</Option>*/}
                  <Option value="DOUBLE">DOUBLE</Option>
                  <Option value="STRING">STRING</Option>
                </Select>
              )}
            </FormItem>

            <FormItem {...formItemLayout} label="变量值类型">
              {getFieldDecorator('opType', {
                initialValue: data.opType,
                rules: [
                  {
                    required: true,
                    message: "请选择变量值类型",
                  },
                ],
              })(
                <Select style={{ width: 480 }} onChange={handleChangeOpType}>
                  <Option value="CONTINUOUS">CONTINUOUS</Option>
                  <Option value="CATEGORICAL">CATEGORICAL</Option>
                </Select>
              )}
            </FormItem>

            <FormItem {...formItemLayout} label="变量来源">
              {getFieldDecorator('type', {
                initialValue: data.type,
                rules: [
                  {
                    required: true,
                    message: "请输入变量来源",
                  },
                ],
              })(<Input value={modifyVariable.type} style={{ width: 480 }} onChange={(e) => {
                dispatch({
                  type: 'variable_modify/setVariableInfo',
                  payload: {
                    ...modifyVariable,
                    type: e.target.value,
                  },
                });
              }}/>)}
            </FormItem>

            <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
              <Button type="primary" htmlType="submit" onClick={this.onSubmit}>
                更新变量信息
              </Button>
            </FormItem>
          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default VariableModify;
