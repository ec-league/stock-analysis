import React, { Component, Fragment } from "react";
import { connect } from "dva";
import { Button, Card, Col, Descriptions, Divider, Input, Modal, Row, Table } from "antd";
import DescriptionList from "@/components/DescriptionList";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import styles from "./ModelFileDetail.less";
import router from "umi/router";
import Graph from "@/components/AntVG6/TreeModelGraph.js";


const { Description } = DescriptionList;

const { TextArea } = Input;

@connect(({ model_file_detail }) => ({
  model_file_detail
}))
class ModelFileDetail extends Component {

  //给两个tab设置默认key
  state = {
    key: 'detail',
    noTitleKey: 'app',
    visible: false,
  };

  componentDidMount() {
    const { dispatch, match } = this.props;
    const { params } = match;

    dispatch({
      type: 'model_file_detail/fetch',
      payload: params.id,
    });
  }

  //tab1
  renderModelDetail() {

    const { model_file_detail, loading } = this.props;
    const { basicInfo, variables } = model_file_detail;

    let inParams = variables.inputParams;
    let outParams = variables.outputParams;
    const inputParamColumns = [
      {
        title: '参数名称',
        dataIndex: 'variableName',
        key: 'variableName',
      },
      {
        title: '参数描述',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: '匹配变量',
        dataIndex: 'matchVariableName',
        key: 'matchVariableName',
        render: (text, record) => {
          if (!text) {
            return (<a href={`/data/variable/derived-add?initParam=${record.variableName}`}>新增衍生变量</a>);
          }
          return '已存变量';
        }
      },
      {
        title: '参数opType',
        dataIndex: 'opType',
        key: 'opType',
      },
      {
        title: '参数类型',
        dataIndex: 'variableType',
        key: 'variableType',
      },
      {
        title: '参数详情',
        render: (text, record) => {
          let disable = false;
          if (record.id === 0) {
            disable = true;
          }
          return (
            <span>
            {record.type === 'derived' ?
              <Button href={`/data/variable/derived-variable-detail/${record.id}`} disabled={disable}>查看详情</Button> :
              <Button href={`/data/variable/basic-variable-detail/${record.id}`} disabled={disable}>查看详情</Button>}
            </span>
          );
        }
      },
    ];

    const outputParamColumns = [
      {
        title: '参数名称',
        dataIndex: 'variableName',
        key: 'variableName',
      },
      {
        title: '参数描述',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: '参数opType',
        dataIndex: 'opType',
        key: 'opType',
      },
      {
        title: '参数类型',
        dataIndex: 'variableType',
        key: 'variableType',
      },
      {
        title: '参数详情',
        render: (text, record) => {
          let disable = false;
          if (record.id === 0) {
            disable = true;
          }
          return (
            <span>
            {record.type === 'derived' ?
              <Button href={`/data/variable/derived-variable-detail/${record.id}`} disabled={disable}>查看详情</Button> :
              <Button href={`/data/variable/basic-variable-detail/${record.id}`} disabled={disable}>查看详情</Button>}
            </span>
          );
        }
      },
    ];


    const modelDetailInfo = basicInfo.modelDetailInfo;

    let list = [];

    if (modelDetailInfo) {
      Object.keys(modelDetailInfo).forEach(key => {
        if (key === 'detail')
          return;
        list.push(<Descriptions.Item label={key}>{modelDetailInfo[key]}</Descriptions.Item>)
      });
    }

    const detailDescription = (
      <Descriptions title="模型详情" bordered>
        {list}
      </Descriptions>
    );

    return (
      <div>
        <p>{basicInfo.desc}</p>
        <Divider style={{ marginBottom: 32 }}/>
        {detailDescription}
        <Divider style={{ marginBottom: 32 }}/>
        <div className={styles.title}>入参</div>
        <Card>
          <Table
            size="small"
            style={{ marginBottom: 24 }}
            loading={loading}
            dataSource={inParams}
            columns={inputParamColumns}
            rowKey="variableName"
          />
          <div className={styles.title}>出参</div>
          <Table
            size="small"
            style={{ marginBottom: 16 }}
            loading={loading}
            dataSource={outParams}
            columns={outputParamColumns}
          />
        </Card>
        <div className={styles.title}>模型详情</div>
        <Card
          style={{ marginBottom: 16 }}
        >
          <TextArea rows={40} value={basicInfo.content}/>
        </Card>

      </div>
    );
  }

  showModal = (graph) => {
    this.setState({
      visible: true,
      tree: graph,
    });
  };

  renderModelGraph() {
    const { model_file_detail: { basicInfo } } = this.props;

    if (!basicInfo.modelGraph) {
      return;
    }

    if (basicInfo.modelType === 'MiningModel') {
      const list = basicInfo.modelGraph.subModels;
      const columns = [
        {
          title: 'Name',
          dataIndex: 'nodeName',
          key: 'nodeName',
          render: (text, record) => {
            return record.type + ":" + text;
          },
        },
        {
          title: 'Model',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: '查看详情',
          dataIndex: 'expression',
          key: 'expression',
          render: (text, record) => {
            if (record.type === 'MiningModel') {
              return "";
            }

            return (
              <a href="#" onClick={() => {
                this.showModal(record);
              }}>展示详情</a>
            );
          },
        }
      ];

      return (<Table columns={columns} dataSource={list} childrenColumnName="subModels"/>)
    } else {
      return (<Graph data={basicInfo.modelGraph}/>);
    }
  }

  renderModal() {
    let graph = null;
    if (this.state.tree) {
      graph = (<Graph data={this.state.tree}/>)
    }

    return (
      <Modal
        title="树模型"
        width={1200}
        onCancel={this.handleCancel}
        onOk={this.handleCancel}
        visible={this.state.visible}
      >
        <Card>
          {graph}
        </Card>
      </Modal>
    );
  }

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { model_file_detail, loading, match: { params }, dispatch } = this.props;
    const { basicInfo, variables } = model_file_detail;


    const action = (
      <Fragment>
        <Button type="primary" disabled={basicInfo.status === 'USING' || basicInfo.status === 'GRAY'} onClick={() => {
          dispatch({
            type: 'model_file_detail/validateModelFile',
            payload: params.id,
          });
        }}>生效</Button>
        < Button type="primary" disabled={basicInfo.status === 'USING' || basicInfo.status === 'GRAY'} onClick={() => {
          dispatch({
            type: 'model_file_detail/invalidate',
            payload: params.id,
          });
        }}>废弃</Button>
        <Button type="primary" onClick={() => {
          router.push(`/data/variable/variable-calculate/${params.id}`);
        }}>模拟计算</Button>
        <Button type="primary" onClick={() => {
          router.push(`/model-manage/model/model-version-list/${params.id}`);
        }}>版本管理</Button>
      </Fragment>
    );

    const extra = (
      <Row>
        <Col xs={24} sm={12}>
          <div className={styles.textSecondary}>状态</div>
          <div className={styles.heading}>{basicInfo.status}</div>
        </Col>
      </Row>
    );

    const formatDate = (time) => {
      const date = new Date(time);
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const strDate = date.getDate().toString().padStart(2, '0');
      return `${date.getFullYear()}-${month}-${strDate} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    };

    const description = (
      <DescriptionList className={styles.headerList} size="small" col="2">
        <Description term="模型类型">{basicInfo.modelType}</Description>
        <Description term="创建人">{basicInfo.createUserName}</Description>
        <Description term="修改人">{basicInfo.updateUserName}</Description>
        <Description term="创建时间">{basicInfo.gmtCreate ? formatDate(basicInfo.gmtCreate) : ""}</Description>
        <Description term="生效日期">{basicInfo.gmtModified ? formatDate(basicInfo.gmtModified) : ""}</Description>
      </DescriptionList>
    );

    const modelDetailInfo = basicInfo.modelDetailInfo;

    let list = [];

    if (modelDetailInfo) {
      Object.keys(modelDetailInfo).forEach(key => {
        if (key === 'detail')
          return;
        list.push(<Descriptions.Item label={key}>{modelDetailInfo[key]}</Descriptions.Item>)
      });
    }

    return (
      <PageHeaderWrapper
        title={`${basicInfo.fileId} : ${basicInfo.name}`}
        extra={action}
        content={description}
        extraContent={extra}
      >

        <Card bordered={false}
              title={basicInfo.name}
        >
          {this.renderModelDetail()}
        </Card>
        <Card title="模型图" style={{ marginTop: 16 }}>
          {this.renderModelGraph()}
        </Card>
        {this.renderModal()}
      </PageHeaderWrapper>
    );
  }
}

export default ModelFileDetail;
