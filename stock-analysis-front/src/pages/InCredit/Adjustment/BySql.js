import React, { Fragment, PureComponent } from "react";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import './index.css';
import { Button, Card, Col, Input, message, Radio, Row, Select, Tree } from 'antd';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/eclipse.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/sql/sql';
import 'codemirror/addon/hint/sql-hint.js';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint.js';

import CodeMirror from "@uiw/react-codemirror";
import { connect } from "dva";
import router from "umi/router";

const { TextArea } = Input;
const { Option } = Select;
const { TreeNode } = Tree;

const options = {
  lineNumbers: true,
  keyMap: 'sublime',
  theme: 'monokai',
  mode: 'sql',
};

@connect(({ adjustment_sql, data_workspace }) => ({
  adjustment_sql, data_workspace
}))
class BySql extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({
      'type': 'data_workspace/fetch',
    });

    this.state = {
      selectDbId: 0,
      needStop: [],
      bizType: '',
    }
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  renderTree() {
    const {
      data_workspace: {
        dbTree
      }
    } = this.props;

    if (dbTree && dbTree.length > 0) {
      const configs = [];
      const tree = [];

      dbTree.forEach(sc => {
        const tables = [];
        if (!sc.tables) {
          return;
        }
        sc.tables.forEach(t => {
          if (!t.fieldList) {
            return;
          }
          const fields = [];
          t.fieldList.forEach(f => {
            fields.push(<TreeNode title={`${f.columnName} : ${f.columnType}`}/>);
          });
          tables.push(<TreeNode title={t.name}>{fields}</TreeNode>);
        });
        tree.push(<TreeNode title={sc.schemaName}>{tables}</TreeNode>);
      });


      return (

        <Tree style={{ width: '100%', height: 600, overflow: "auto" }}>
          {tree}
        </Tree>
      );
    }
  }

  render() {

    const {
      dispatch, adjustment_sql: {
        sqlText
      }, data_workspace: {
        dataSourceList,
      }
    } = this.props;

    const optionList = [];

    if (dataSourceList) {
      dataSourceList.forEach(ds => {
        optionList.push(<Option value={ds.id}>{ds.name}</Option>)
      });
    }

    const onSubmit = () => {
      if (!this.state) {
        message.error("参数不完整");
        return;
      }
      if (!this.state.selectDbId) {
        message.error("请选择数据库");
        return;
      }
      if (!this.state.bizType) {
        message.error("请选择调额类型");
        return;
      }
      if (!sqlText) {
        message.error("请编写sql内容");
        return;
      }
      dispatch({
        'type': 'adjustment_sql/submitSql',
        'payload': {
          sqlText: sqlText,
          dbConfigId: this.state.selectDbId,
          needStop: this.state.needStop,
          bizType: this.state.bizType,

        }
      });

      router.push("/in-credit/adjustment/adjustList");
    };

    const onFormat = () => {
      dispatch({
        'type': 'data_workspace/format',
        'payload': sqlText
      });
    };

    const handleStopChange = e => {
      dispatch({
        'type': 'adjustment_sql/setNeedStop',
        'payload': e.target.value,
      })
      this.setState({
        needStop: e.target.value,
      })
    }

    const handleTypeChange = e => {
      this.setState({
        bizType: e.target.value,
      });
    };
    const extra = (<div>
      <span>连接选择: </span>
      <Select style={{ width: 120 }} onChange={(value) => {
        dispatch({
          'type': 'data_workspace/selectDs',
          'payload': value
        })
        this.renderTree();
        this.setState({
          selectDbId: value
        })
      }}>
        {optionList}
      </Select>
    </div>);


    const sqlExtra = (

      <div>
        停顿点：
        <Radio.Group onChange={handleStopChange}>
          <Radio value={"1,3"}>人行前</Radio>
          <Radio value={"2,3"}>三方前</Radio>
          <Radio value={"3"}>行方前</Radio>
          {/*<Radio value={"4,6"}>分期人行前</Radio>*/}
          {/*<Radio value={"5,6"}>分期三方前</Radio>*/}
          {/*<Radio value={"6"}>分期行方前</Radio>*/}
        </Radio.Group>

        <p></p>
        调额类型：
        <Radio.Group onChange={handleTypeChange}>
          <Radio value={1}>调额</Radio>
          <Radio value={2}>分期</Radio>
          <Radio value={3}>调额+分期</Radio>
        </Radio.Group>
        {/*<Button style={{ marginRight: 8 }} onClick={onFormat}>格式化</Button>*/}
        <Button type="primary" onClick={onSubmit}>提交</Button>
      </div>
    );

    return (
      <PageHeaderWrapper
        type={"success"}
        title="工作台"
      >
        <Card style={{ margin: 8 }}>
          <Row>
            <Col span={6}>
              <Card title="配置区域"
                    style={{ margin: 8, height: 700 }}
                    extra={extra}
              >
                {this.renderTree()}
              </Card>
            </Col>
            <Col span={18}>
              <Card title="SQL区域"
                    style={{ margin: 8, height: 700 }}
                    extra={sqlExtra}
              >
                <CodeMirror value={sqlText}
                            options={options}
                            style={{ margin: 8 }}
                            onChange={
                              (e) => {
                                dispatch({
                                  type: 'adjustment_sql/setSql',
                                  payload: e.getValue(),
                                });
                              }}/>
              </Card>
            </Col>
          </Row>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default BySql;
