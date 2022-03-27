import React, { PureComponent } from "react";
import { connect } from "dva";
import { Button, Card, Col, Form, Icon, message, Modal, Row, Upload } from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import router from "umi/router";

const FormItem = Form.Item;
const { Dragger } = Upload;

@connect(({ white_file, user }) => ({
  white_file,
  user
}))
@Form.create()
class FileUpload extends PureComponent {
  state = { visible: false };

  handleSubmit = e => {
    const { dispatch, form } = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({
          type: 'white_file/submitWhiteFile',
          payload: values,
        });
      }
    });
  };

  showModal = () => {
    const { white_file: { batchId }, dispatch } = this.props;

    dispatch({
      type: 'white_file/whiteFileAdd',
      payload: batchId,
    });

    this.setState({
      visible: true,
    });
  };

  handleOk = e => {

    this.setState({
      visible: false,
    });

    router.push(`/in-credit/white/fileList`);
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const {
      user: { currentUser },
      white_file: { validateSuccess },
      dispatch
    } = this.props;

    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };

    const props = {
      name: 'file',
      action: '/api/white/file-upload.json',
      data: {
        createUserName: currentUser.name,
      },
      onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
        }
        if (status === 'done') {

          dispatch({
            type: 'white_file/setBatchId',
            payload: info.file.response.data,
          });

          if (info.file.response.success) {
            message.success(`${info.file.name} file uploaded successfully.`);
          } else {
            message.error(info.file.response.resultMsg);
          }

        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };

    return (
      <PageHeaderWrapper
        title="白名单文件上传"
        content="上传白名单文件"
      >
        <Card bordered={false}>
          <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>

            <FormItem>
              <Row align="middle">
                <Col span={10} offset={7}>
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <Icon type="inbox"/>
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">Support for a single upload.</p>
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
              title="新增白名单文件成功"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              okText="跳转详情"
            >
              新增白名单文件{validateSuccess ? "成功" : "失败"}
            </Modal>
          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default FileUpload;
