import React, { PureComponent } from "react";
import { connect } from "dva";
import { Button, Card, Form, Input, Radio } from "antd";
import router from "umi/router";

const FormItem = Form.Item;
const { TextArea } = Input;

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

@connect(({ functor_add }) => ({
  functor_add: functor_add,
}))
@Form.create()
class FunctorAddStep1 extends PureComponent {
  state = { visible: false, returnType: '', checkNick: false };

  render() {
    const {
      form: { getFieldDecorator },
      dispatch,
      functor_add: { newFunctor },
    } = this.props;


    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };

    const onNext = (e) => {
      const { form, dispatch } = this.props;
      e.preventDefault();
      form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          dispatch({
            type: 'functor_add/fetchExpressionParams',
            payload: this.props.form.getFieldValue('expression'),
          });
          router.push('/data/functor/functor-add/detail');
        }
      });
    };

    const returnTypeChange = (e) => {
      this.setState({
        returnType: e.target.value,
      });

      dispatch({
        type: 'functor_add/setNewFunctorInfo',
        payload: {
          ...newFunctor,
          returnType: e.target.value,
        },
      });
    };

    return (
      <Card bordered={false}>
        <Form hideRequiredMark style={{ marginTop: 8 }}>
          <FormItem {...formItemLayout} label="算子名称">
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: "请输入算子名称",
                },
              ],
            })(<Input placeholder="算子名称" onChange={
              (e) => {
                dispatch({
                  type: 'functor_add/setNewFunctorInfo',
                  payload: {
                    ...newFunctor,
                    name: e.target.value,
                  },
                });
              }
            }/>)}
          </FormItem>
          <FormItem {...formItemLayout} label="算子描述">
            {getFieldDecorator('description', {
              rules: [
                {
                  required: true,
                  message: "请输入算子描述",
                },
              ],
            })(<Input placeholder="算子描述" onChange={
              (e) => {
                dispatch({
                  type: 'functor_add/setNewFunctorInfo',
                  payload: {
                    ...newFunctor,
                    description: e.target.value,
                  },
                });
              }
            }/>)}
          </FormItem>
          <FormItem {...formItemLayout} label="算子返回值类型">
            {getFieldDecorator('scriptSource', {
              rules: [
                {
                  required: true,
                  message: "请选择算子返回值类型",
                },
              ],
            })(<Radio.Group value={this.state.returnType} onChange={returnTypeChange}>
                <Radio value="INTEGER">整数</Radio>
                <Radio value="DOUBLE">浮点数</Radio>
                <Radio value="STRING">字符串</Radio>
                <Radio value="ARRAY">数组</Radio>
                <Radio value="MAP">映射表</Radio>
              </Radio.Group>
            )}
          </FormItem>

          <FormItem {...formItemLayout} label="表达式">
            {getFieldDecorator('expression', {
              rules: [
                {
                  required: true,
                  message: "请输入表达式",
                },
              ],
            })(<TextArea rows={10} placeholder="表达式" onChange={
              (e) => {
                dispatch({
                  type: 'functor_add/setNewFunctorInfo',
                  payload: {
                    ...newFunctor,
                    expression: e.target.value,
                  },
                });
              }
            }/>)}
          </FormItem>

          <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
            <Button type="primary" onClick={onNext}>
              下一步
            </Button>
          </FormItem>
        </Form>

      </Card>
    );
  }
}

export default FunctorAddStep1;
