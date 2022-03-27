import React, { PureComponent } from "react";
import { connect } from "dva";
import { Button, Card, Form, Input, Select } from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import router from 'umi/router';

const FormItem = Form.Item;
const { Option } = Select;


@connect(({ variable_add }) => ({
  variable_add,
}))
@Form.create()
class VariableAdd extends PureComponent {

  onSubmit = () => {
    const { dispatch, variable_add: { newVariable }, form } = this.props;
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({
          type: 'variable_add/addVariableInfo',
          payload: newVariable,
        });

        router.push("/data/variable/basic-variable");
      }
    });

  };

  render() {
    const {
      form: { getFieldDecorator },
      variable_add: { newVariable },
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
        type: 'variable_add/setNewVariableInfo',
        payload: {
          ...newVariable,
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
        type: 'variable_add/setNewVariableInfo',
        payload: {
          ...newVariable,
          variableType: value,
          opType: this.props.form.getFieldValue('opType')
        },
      });
    };

    return (
      <PageHeaderWrapper
        title="新增变量"
      >
        <Card bordered={false}>
          <Form hideRequiredMark style={{ marginTop: 8 }}>
            <FormItem {...formItemLayout} label="变量名称">
              {getFieldDecorator('variableName', {
                initialValue: newVariable.variableName,
                rules: [
                  {
                    required: true,
                    message: "请输入变量名称",
                  },
                ],
              })(<Input value={newVariable.variableName} style={{ width: 480 }} onChange={(e) => {
                dispatch({
                  type: 'variable_add/setNewVariableInfo',
                  payload: {
                    ...newVariable,
                    variableName: e.target.value,
                  },
                });
              }}/>)}
            </FormItem>

            <FormItem {...formItemLayout} label="变量类型">
              {getFieldDecorator('variableType', {
                initialValue: newVariable.variableType,
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
                initialValue: newVariable.opType,
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
                initialValue: newVariable.type,
                rules: [
                  {
                    required: true,
                    message: "请输入变量来源",
                  },
                ],
              })(<Input value={newVariable.type} style={{ width: 480 }} onChange={(e) => {
                dispatch({
                  type: 'variable_add/setNewVariableInfo',
                  payload: {
                    ...newVariable,
                    type: e.target.value,
                  },
                });
              }}/>)}
            </FormItem>

            <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
              <Button type="primary" htmlType="submit" onClick={this.onSubmit}>
                提交
              </Button>
            </FormItem>
          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default VariableAdd;
