import React, { PureComponent } from "react";
import { connect } from "dva";
import { Button, Card, Col, Form, Icon, message, Modal, Row, Upload } from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import router from "umi/router";

const FormItem = Form.Item;
const { Dragger } = Upload;

@connect(({ adjustment_file, user }) => ({
  adjustment_file,
  user
}))
@Form.create()
class AdjustmentByFile extends PureComponent {
  state = { visible: false };

  handleSubmit = e => {
    const { dispatch, form } = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({
          type: 'adjustment_file/submitAdjustFile',
          payload: values,
        });
      }
    });
  };

  showModal = () => {
    const { adjustment_file: { batchId }, dispatch } = this.props;

    dispatch({
      type: 'adjustment_file/adjustFileAdd',
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

    router.push(`/in-credit/adjustment/adjustList`);
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const {
      user: { currentUser },
      adjustment_file: { validateSuccess },
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
      action: '/api/adjust/file-upload.json',
      data: {
        createUserName: currentUser.name,
      },
      onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
        }
        if (status === 'done') {

          dispatch({
            type: 'adjustment_file/setBatchId',
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
        title="文件调额"
        content="上传调额文件，批量调额"
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
              title="新增调额文件"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              okText="跳转详情"
            >
              新增调额文件{validateSuccess ? "成功" : "失败"}
            </Modal>
          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default AdjustmentByFile;
