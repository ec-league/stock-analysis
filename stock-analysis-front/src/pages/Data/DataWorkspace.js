import React, { Fragment, PureComponent } from "react";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import './index.css';
import { Button, Card, Col, Input, Row, Select, Table, Tree } from 'antd';
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

@connect(({ data_workspace }) => ({
  data_workspace
}))
class DataWorkspace extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({
      'type': 'data_workspace/fetch',
    });

    this.state = {
      selectDbId: 0,
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

  queryExecuteRecord = () => {

    this.timer = setInterval(
      () => {
        const {
          dispatch,
          data_workspace: {
            jobRecord
          }
        } = this.props;
        dispatch({
          'type': 'data_workspace/executeRecord',
          payload: {
            filePath: jobRecord.filePath,
          }
        });
      },
      5000
    );
  };

  renderExecuteResult() {
    const {
      data_workspace: {
        executeRecord
      }
    } = this.props;

    const columns = [];
    if (executeRecord.header && executeRecord.header.length > 0) {
      for (let i = 0; i < executeRecord.header.length; i++) {
        columns.push({
          title: executeRecord.header[i],
          dataIndex: executeRecord.header[i],
        })
      }
    }

    return (
      <div>

        <Table columns={columns} dataSource={executeRecord.resultData} pagination={{ pageSize: 50 }}
               scroll={{ y: 240 }}/>

      </div>
    )
  }

  render() {

    const {
      dispatch, data_workspace: {
        dataSourceList, sqlText,
      }
    } = this.props;

    const action = (
      <Fragment>
        <Button type="primary" onClick={() => {
          router.push("/data/sql-record-by-user");
        }}>sql执行记录</Button>
      </Fragment>
    );

    const optionList = [];

    if (dataSourceList) {
      dataSourceList.forEach(ds => {
        optionList.push(<Option value={ds.id}>{ds.name}</Option>)
      });
    }

    const onSubmit = () => {
      dispatch({
        'type': 'data_workspace/submitSql',
        'payload': {
          sqlText: sqlText,
          dbConfigId: this.state.selectDbId,
        }
      });

      this.queryExecuteRecord();
    };

    const onFormat = () => {
      dispatch({
        'type': 'data_workspace/format',
        'payload': sqlText
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

    const sqlExtra = (<div>
      <Button style={{ marginRight: 8 }} onClick={onFormat}>格式化</Button>
      <Button type="primary" onClick={onSubmit}>提交</Button>
    </div>);

    return (
      <PageHeaderWrapper
        type={"success"}
        title="工作台"
        extra={action}
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
                                  type: 'data_workspace/setSql',
                                  payload: e.getValue(),
                                });
                              }}/>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card title="执行区域" style={{ margin: 8, height: 500 }}>
          {this.renderExecuteResult()}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default DataWorkspace;
