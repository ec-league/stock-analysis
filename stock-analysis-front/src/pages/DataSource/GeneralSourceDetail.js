import { PureComponent } from "react";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import { connect } from "dva";
import { Button, Card, Descriptions, Form, Input, Modal, Radio, Table } from "antd";
import { formItemLayout } from "@/Common";

@Form.create()
@connect(({ data_source_detail, risk_flink_home }) => ({
  data_source_detail, risk_flink_home
}))
export default class GeneralSourceDetail extends PureComponent {
  state = {
    visible: false,
  }

  componentDidMount() {
    const { dispatch, match: { params: { id } } } = this.props;

    dispatch({
      type: 'data_source_detail/fetch',
      payload: id
    });
  }

  onOk() {
    const { data_source_detail: { detail }, form: { getFieldValue }, dispatch } = this.props;

    dispatch({
      type: 'risk_flink_home/insertFlinkTable',
      payload: {
        ...detail,
        sourceConfig: {
          ...detail.sourceConfig,
          path: getFieldValue('path'),
          fieldDelim: getFieldValue('fieldDelim'),
          ignoreHead: getFieldValue('ignoreHead'),
        }
      }
    });

    this.setState({ visible: false });
  }

  renderModalContent() {
    const { data_source_detail: { detail }, form: { getFieldDecorator } } = this.props;

    const fileSourceConfig = detail.sourceConfig;

    return (
      <Modal
        title={"编辑"}
        visible={this.state.visible}
        onCancel={() => this.setState({ visible: false })}
        onOk={() => this.onOk()}
      >
        <Form hideRequiredMark style={{ marginTop: 8 }}>
          <Form.Item {...formItemLayout} label={"path"}>
            {getFieldDecorator('path', {
                initialValue: fileSourceConfig ? fileSourceConfig.path : '',
                rules: [
                  {
                    required: true,
                    message: '文件路径'
                  }
                ]
              }
            )(
              <Input/>
            )}
          </Form.Item>
          <Form.Item {...formItemLayout} label={"fieldDelim"}>
            {getFieldDecorator('fieldDelim', {
                initialValue: fileSourceConfig ? fileSourceConfig.fieldDelim: '',
                rules: [
                  {
                    required: true,
                    message: '文件路径'
                  }
                ]
              }
            )(
              <Input/>
            )}
          </Form.Item>
          <Form.Item {...formItemLayout} label={"ignoreHead"}>
            {getFieldDecorator('ignoreHead', {
                initialValue: fileSourceConfig ? fileSourceConfig.ignoreHead : false,
                rules: [
                  {
                    required: true,
                    message: '文件路径'
                  }
                ]
              }
            )(
              <Radio.Group>
                <Radio.Button value={true}>忽略</Radio.Button>
                <Radio.Button value={false}>不忽略</Radio.Button>
              </Radio.Group>
            )}
          </Form.Item>
        </Form>
      </Modal>
    );
  }

  render() {
    const { data_source_detail: { detail } } = this.props;
    const columns = [
      {
        title: '列名称',
        dataIndex: 'name',
      },
      {
        title: '类型',
        dataIndex: 'type'
      },
    ];

    const action = (
      <Button type={"primary"}
              onClick={() => this.setState({ visible: true })}
      >
        编辑
      </Button>
    );

    const sourceConfig = detail.sourceConfig ? detail.sourceConfig : {};

    return (
      <PageHeaderWrapper
        type={"success"} title={detail ? detail.name : ''}
        extra={action}
      >
        <Card>
          <Card title={"基础信息"}>
            <Descriptions bordered={true}>
              <Descriptions.Item label={"Schema"}>{detail.schemaName}</Descriptions.Item>
              <Descriptions.Item label={"Table"}>{detail.tableName}</Descriptions.Item>
              <Descriptions.Item label={"类型"}>{detail.type}</Descriptions.Item>
              <Descriptions.Item label={"路径"}>{sourceConfig.path}</Descriptions.Item>
              <Descriptions.Item label={"分隔符"}>{sourceConfig.fieldDelim}</Descriptions.Item>
              <Descriptions.Item label={"忽略表头"}>{sourceConfig.ignoreHead ? '忽略' : '不忽略'}</Descriptions.Item>
              <Descriptions.Item label={"创建时间"}>{detail.gmtCreate}</Descriptions.Item>
              <Descriptions.Item label={"修改时间"}>{detail.gmtModified}</Descriptions.Item>
            </Descriptions>
          </Card>
          <Card title={"列信息"} style={{ marginTop: 8 }}>
            <Table dataSource={detail.sourceConfig ? detail.sourceConfig.schema : []}
                   columns={columns}/>
          </Card>
        </Card>
        {this.renderModalContent()}
      </PageHeaderWrapper>
    )
      ;
  }
}
