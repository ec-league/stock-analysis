import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { Table, Card, Row, Col, Button } from "antd";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/eclipse.css';
import 'codemirror/theme/monokai.css';
import DescriptionList from '@/components/DescriptionList';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';


const { Description } = DescriptionList;

@connect(({ variable_calculate, model_file_detail }) => ({
  variable_calculate,
  model_file_detail
}))
class VariableCalculate extends PureComponent {

  state = {
    key: 'tab1',
    noTitleKey: 'app',
  };

  onTabChange = (key, type) => {
    this.setState({ [type]: key });
  };

  componentDidMount() {
    const { dispatch, match } = this.props;
    const { params } = match;

    dispatch({
      type: 'model_file_detail/fetch',
      payload: params.id,
    });
  }

  render() {
    const { dispatch, model_file_detail: { basicInfo, variables : { inputParams, outputParams } }, variable_calculate: { originValue, calculateValue } } = this.props;

    const { match : { params } } = this.props;

    const paramColumns = [
      {
        title: '参数类型',
        dataIndex: 'variableType',
        key: 'variableType',
      },
      {
        title: '参数名称',
        dataIndex: 'variableName',
        key: 'variableName',
      },
      {
        title: '参数opType',
        dataIndex: 'opType',
        key: 'opType',
      },
      {
        title: '参数详情',
        dataIndex: 'extInfo',
        key: 'extInfo',
        render: text => {
          if (text) {
            let l = [];
            Object.keys(text).forEach(k => l.push(<p>`${k}:${text[k]}`</p>));

            return (<span>{l}</span>);
          }
        }
      },
    ];

    const dict = {};

    if (inputParams) {
      inputParams.forEach(item => {
        dict[item.variableName] = "";
      });
    }

    const d =  JSON.stringify(dict, null, 2);

    const modelDetailInfo = basicInfo.modelDetailInfo;

    let list = [];

    if (modelDetailInfo) {
      Object.keys(modelDetailInfo).forEach(key => {
        if (key === 'detail')
          return;
        list.push(<Description term={key}>{modelDetailInfo[key]}</Description>)
      });
    }

    const detailDescription = (
      <DescriptionList col="2" size="small">
        {list}
      </DescriptionList>
    );

    const action = (
      <Fragment>
        <Button onClick={() => {
          dispatch({
            type: 'variable_calculate/calculateVariable',
            payload: {
              fileId: params.id,
              originValue: originValue
            },
          });
        }}>计算</Button>
        <Button type="primary">模型详情</Button>
      </Fragment>
    );

    const options = {
      lineNumbers: true,
      keyMap: 'sublime',
      theme: 'monokai',
      mode: 'json',
    };

    const outOptions = {
      lineNumbers: true,
      keyMap: 'sublime',
      theme: 'monokai',
      mode: 'json',
      readOnly: true,
    };

    const tabList = [
      {
        key: 'tab1',
        tab: '入参表',
      },
      {
        key: 'tab2',
        tab: '出参表',
      },
    ];

    const contentList = {
      tab1: <Table
        size="small"
        style={{ marginBottom: 8 }}
        pagination={false}
        dataSource={inputParams}
        columns={paramColumns}
      />,
      tab2: <Table
        size="small"
        style={{ marginBottom: 8 }}
        pagination={false}
        dataSource={outputParams}
        columns={paramColumns}
      />,
    };

    return (
      <PageHeaderWrapper
        title="左边为输入, 右边为输出, 根据左边计算的结果输出右侧结果, 格式为Json"
        style={{ padding: 0 }}
        content={detailDescription}
        extra={action}
      >
        <Card bordered={false} style={{ padding: 0 }}>
          <Card
            tit
            tabList={tabList}
            activeTabKey={this.state.key}
            onTabChange={key => {
              this.onTabChange(key, 'key');
            }}
          >
            {contentList[this.state.key]}
          </Card>

          <Row>
            <Col span={11}>
              <Card title="输入">
                <CodeMirror value={d}
                            options={options} onChange={
                  (e) => {
                    dispatch({
                      type: 'variable_calculate/setOriginVariables',
                      payload: e.getValue(),
                    });
                  }}/>
              </Card>
            </Col>
            <Col span={11} offset={2}>
              <Card title="输出">
                <CodeMirror value={calculateValue}
                            options={outOptions}/>
              </Card>
            </Col>
          </Row>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default VariableCalculate;
