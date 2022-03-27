import React, { PureComponent } from "react";
import { connect } from "dva";
import { Button, Card, Form, Input, Select } from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import router from "umi/router";

const FormItem = Form.Item;
const { TextArea } = Input;


@connect(({ scene_add, model_file_list }) => ({
  scene_add, model_file_list
}))

@Form.create()
class SceneAdd extends PureComponent {
  state = {
    visible: false,
  };

  componentDidMount() {
    const {
      dispatch
    } = this.props;

    //初始化先取所有数据
    dispatch({
      type: 'model_file_list/fuzzyQuery',
      payload: '',
    });
  }

  handleSubmit = e => {
    const { dispatch, form } = this.props;
    const { scene_add: { data } } = this.props;

    console.log("data: ", data);

    const modelIdArray = data.modelId;
    const modelExtArray = [];

    for (let [index, value] of modelIdArray.entries()) {
      modelExtArray.push({
        "modelId": value,
        "flag": true
      })
    }

    const sceneData = {
      "sceneName": data.name,
      "description": data.desc,
      "modelExtsDto": modelExtArray
    };

    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({
          type: 'scene_add/addScene',
          payload: sceneData,
        });
        router.push(`/model-manage/scene/scene-list`);
      }
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  render() {
    //debugger
    const {
      form: { getFieldDecorator },
      scene_add: { data },
      model_file_list: { fuzzyModels },
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

    //定义optional选项
    const modelItems = [];

    for (let [index, value] of fuzzyModels.entries()) {
      modelItems.push(<Select.Option key={value.id}>{value.name}</Select.Option>)
    }

    return (
      <PageHeaderWrapper
        title="新增场景"
        content="新增场景"
      >
        <Card bordered={false}>
          <Form hideRequiredMark onSubmit={this.handleSubmit} style={{ marginTop: 8 }}>
            <FormItem {...formItemLayout} label="场景名称">
              {getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: "请输入场景的名称",
                  },
                ],
              })(<Input placeholder="业务定义的场景的名称" onChange={
                (e) => {
                  dispatch({
                    type: 'scene_add/setSceneName',
                    payload: e.target.value,
                  });
                }
              }/>)}
            </FormItem>


            <FormItem {...formItemLayout} label="场景描述">
              {getFieldDecorator('desc', {
                rules: [
                  {
                    required: true,
                    message: "请输入场景描述",
                  },
                ],
              })(
                <TextArea
                  placeholder="业务定义的场景的描述, 可以简述场景的用途, 作用等"
                  style={{ minHeight: 180 }}
                  rows={4}
                  onChange={

                    (e) => {
                      dispatch({
                        type: 'scene_add/setSceneDesc',
                        payload: e.target.value,
                      });
                    }
                  }
                />
              )}
            </FormItem>


            <FormItem {...formItemLayout} label="选择模型">
              {getFieldDecorator('modelId', {
                rules: [
                  {
                    required: false,
                    message: "请选择某个模型",
                  },
                ],
              })(
                <Select
                  showSearch
                  //style={{ width: 200 }}
                  mode="multiple"
                  placeholder="请选择一个模型"
                  optionFilterProp="children"
                  onChange={
                    //e代表key,上面我们设定成model.id
                    (e) => {
                      console.log('selected modleIds=', e);
                      dispatch({
                        type: 'scene_add/setSceneModelId',
                        payload: e,
                      });
                    }
                  }
                  //onFocus={onFocus}
                  //onBlur={onBlur}
                  onSearch={
                    (value) => {
                      dispatch({
                        type: 'model_file_list/fuzzyQuery',
                        payload: value,
                      });
                    }
                  }
                  filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {modelItems}
                </Select>
              )}
            </FormItem>

            <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                重置
              </Button>
            </FormItem>

          </Form>

        </Card>

      </PageHeaderWrapper>
    );
  }
}

export default SceneAdd;
