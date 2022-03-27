import React, { PureComponent } from "react";
import { connect } from "dva";
import { Button, Card, Col, Form, Icon, Input, message, Modal, Row, Upload } from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import router from "umi/router";

const FormItem = Form.Item;
const { TextArea } = Input;
const { Dragger } = Upload;

@connect(({ model_version }) => ({
  model_version
}))
@Form.create()
class ModelVersionAdd extends PureComponent {
  state = { visible: false };

  handleSubmit = e => {
    const { dispatch, form } = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({
          type: 'model_version/submitModelVersion',
          payload: values,
        });
      }
    });
  };

  showModal = () => {
    const { match, dispatch } = this.props;
    const { params } = match;


    dispatch({
      type: 'model_version/modelVersionAdd',
      payload: {
        fileId: params.fileId,
        version: this.props.form.getFieldValue("version")
      },
    });

    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    const { match } = this.props;
    const { params } = match;

    this.setState({
      visible: false,
    });

    router.push(`/model-manage/model/model-version-list/${params.fileId}`);
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
      dispatch, match
    } = this.props;
    const { params } = match;

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
      multiple: false,
      action: '/api/model/model-version-upload.json',
      data: {
        version: this.props.form.getFieldValue("version"),
        fileId: params.fileId,
      },
      onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          message.success(`${info.file.name}file uploaded successfully.`);
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };

    return (
      <PageHeaderWrapper
        title="新增模型版本配置"
        content="新增模型版本文件，仅支持模型文件输出相同的版本，输出不同请新建模型"
      >
        <Card bordered={false}>
          <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>

            <FormItem {...formItemLayout} label="模型版本">
              {getFieldDecorator('version', {
                rules: [
                  {
                    required: true,
                  },
                ],
              })(
                <Input placeholder="模型版本名称" onChange={
                  (e) => {
                    dispatch({
                      type: 'model_version_add/setModelVersion',
                      payload: e.target.value,
                    });
                  }
                }/>
              )}
            </FormItem>
            <FormItem>
              <Row align="middle">
                <Col span={10} offset={7}>
                  <Dragger {...props}
                           disabled={
                             this.props.form.getFieldValue("version") == null
                             || this.props.form.getFieldValue("version") === ''}>
                    <p className="ant-upload-drag-icon">
                      <Icon type="inbox"/>
                    </p>
                    <p className="ant-upload-text">Support modelVersion firstly,then</p>
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
              title="新增模型版本成功"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              okText="版本列表"
            >
              模型版本新增完成
            </Modal>
          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default ModelVersionAdd;
