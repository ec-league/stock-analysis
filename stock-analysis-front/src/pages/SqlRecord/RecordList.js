import React, { PureComponent } from "react";
import { connect } from "dva";
import { Button, Card, Col, Form, Input, Row, Select, Table } from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import './index.css';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/eclipse.css';
import 'codemirror/theme/monokai.css';

const FormItem = Form.Item;
const { Option } = Select;


@connect(({ sql_record }) => ({
  sql_record,
}))
@Form.create()
class RecordList extends PureComponent {

  onSubmit = () => {
    const { dispatch, log_manage: { param } } = this.props;
    dispatch({
      type: 'sql_record/fetchByUserId',
      payload: param,
    });
  };


  recordListByUser = () => {
    const { sql_record: { recordByUser } } = this.props;

    const columns = [
      { title: 'jobId', dataIndex: 'indexName', key: 'indexName', width: '15%' },
      { title: 'sqlType', dataIndex: 'serialNo', key: 'serialNo', width: '15%' },
      { title: 'sqlInfo', dataIndex: 'certNo', key: 'certNo', width: '15%' },
      { title: 'status', dataIndex: 'userName', key: 'userName', width: '10%' },
      { title: 'extInfo', dataIndex: 'externalSerialNo', key: 'externalSerialNo', width: '18%' },
      { title: 'gmtCreate', dataIndex: 'gmtCreate', key: 'gmtCreate', width: '15%' },
    ]
    const options = {
      lineNumbers: true,
      keyMap: 'sublime',
      theme: 'monokai',
      mode: 'json',
    };
    return (
      <Card style={{ marginTop: 16 }}>
        <Table style={{ marginTop: 16 }}
               columns={columns}
               expandedRowRender={record => <CodeMirror
                 value={JSON.stringify(JSON.parse(record.sqlInfo), null, 2)}
                 options={options}>{record.sqlInfo}</CodeMirror>}
               dataSource={recordByUser.sqlInfo}
        />
      </Card>
    );
  }

  render() {
    const {
      sql_record: { recordByUser },
    } = this.props;

    return (
      <PageHeaderWrapper
        title="sql执行记录"
      >

        <Card>
          {recordByUser ? this.recordListByUser() : <div></div>}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default RecordList;
