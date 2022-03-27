import React, { PureComponent } from "react";
import { connect } from "dva";
import { Button, Card, Col, Form, Icon, Input, message, Modal, Row, Upload } from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import router from "umi/router";

const FormItem = Form.Item;
const { TextArea } = Input;
const { Dragger } = Upload;

@connect(({ model_file_add, user }) => ({
  model_file_add,
  user
}))
@Form.create()
class ModelFileAdd extends PureComponent {
  state = { visible: false };

  handleSubmit = e => {
    const { dispatch, form } = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({
          type: 'model_file_add/submitModelFile',
          payload: values,
        });
      }
    });
  };

  showModal = () => {
    const { model_file_add: { data }, dispatch } = this.props;

    dispatch({
      type: 'model_file_add/modelAdd',
      payload: data.fileId,
    });

    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    const { model_file_add: { data } } = this.props;

    this.setState({
      visible: false,
    });

    router.push(`/model-manage/model/model-file-detail/${data.fileId}`);
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
      model_file_add: { data },
      user: { currentUser },
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

    const props = {
      name: 'file',
      multiple: true,
      action: '/api/model/model-file-upload.json',
      data: {
        name: data.name,
        desc: data.description,
        fileName: data.fileName,
        createUserName: currentUser.name,
        updateUserName: currentUser.name,
      },
      onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);

          dispatch({
            type: 'model_file_add/setFileId',
            payload: info.file.response.data,
          });

        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };

    return (
      <PageHeaderWrapper
        title="新增PMML配置"
        content="新增PMML模型配置文件, 用于新增模型, 以便于进行变量回溯, 变量计算等"
      >
        <Card bordered={false}>
          <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
            <FormItem {...formItemLayout} label="模型名称">
              {getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: "请输入模型的名称",
                  },
                ],
              })(<Input placeholder="业务定义的模型的名称" onChange={
                (e) => {
                  dispatch({
                    type: 'model_file_add/setModelName',
                    payload: e.target.value,
                  });
                }
              }/>)}
            </FormItem>
            <FormItem {...formItemLayout} label="模型描述">
              {getFieldDecorator('desc', {
                rules: [
                  {
                    required: true,
                    message: "请输入模型的描述",
                  },
                ],
              })(
                <TextArea
                  placeholder="业务定义的模型的描述, 可以简述模型的用途, 作用等"
                  style={{ minHeight: 32 }}
                  rows={4}
                  onChange={
                    (e) => {
                      dispatch({
                        type: 'model_file_add/setModelDesc',
                        payload: e.target.value,
                      });
                    }
                  }
                />
              )}
            </FormItem>
            <FormItem>
              <Row align="middle">
                <Col span={10} offset={7}>
                  <Dragger {...props}
                           disabled={
                             this.props.form.getFieldValue("title") === null
                             || this.props.form.getFieldValue("title") === ''
                             || this.props.form.getFieldValue("desc") == null
                             || this.props.form.getFieldValue("desc") === ''}>
                    <p className="ant-upload-drag-icon">
                      <Icon type="inbox"/>
                    </p>
                    <p className="ant-upload-text">Support modelName and model description firstly,then</p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                      band files
                    </p>
                  </Dragger>
                </Col>
              </Row>
            </FormItem>
            <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
              <Button type="primary" onClick={this.showModal}>
                提交
              </Button>
            </FormItem>
            <Modal
              title="新增模型成功"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              okText="跳转详情"
            >
              模型新增完成
            </Modal>
          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default ModelFileAdd;
