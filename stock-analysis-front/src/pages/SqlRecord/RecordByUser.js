import React, { PureComponent } from "react";
import { connect } from "dva";
import { Card, Table } from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import './index.css';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/eclipse.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/sql/sql';
import 'codemirror/addon/hint/sql-hint.js';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint.js';


@connect(({ sql_record }) => ({
  sql_record
}))
class RecordByUser extends PureComponent {

  componentDidMount() {
    const { dispatch, match } = this.props;
    const { params } = match;

    dispatch({
      type: 'sql_record/fetchByUserId',
      payload: {
        count: 8,
        userId: params.userId
      },
    });
  }

  recordListByUser = () => {
    const { sql_record: { recordByUser }, dispatch} = this.props;

    const formatDate = (time) => {
      const date = new Date(time);
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const strDate = date.getDate().toString().padStart(2, '0');
      return `${date.getFullYear()}-${month}-${strDate} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    };

    const columns = [
      { title: 'jobId', dataIndex: 'jobId', width: '20%' },
      { title: 'jobType', dataIndex: 'jobType', width: '20%' },
      { title: 'jobInfo', dataIndex: 'jobInfo', ellipsis: true, width: '25%' },
      { title: 'status', dataIndex: 'status', width: '10%' },
      {
        title: 'gmtCreate',
        dataIndex: 'gmtCreate',
        key: 'gmtCreate',
        width: '15%',
        render: text => <span>{formatDate(text)}</span>
      },
      {
        title: '操作',
        width: '10%',
        render: (text, record) => (
          <span>
            <a disabled={record.status !== 'SUCCESS'} onClick={() => {
              dispatch({
                type: 'sql_record/downResultFile',
                payload: {
                  id: record.id,
                  filePath: record.filePath
                }
              });
            }}>下载文件</a>
          </span>
        ),
      }
    ]

    const options = {
      lineNumbers: true,
      keyMap: 'sublime',
      theme: 'monokai',
      mode: 'sql',
    };

    return (
      <Card style={{ marginTop: 16 }}>
        <Table style={{ marginTop: 16 }}
               columns={columns}
               expandedRowRender={record => <CodeMirror
                 value={record.jobInfo}
                 options={options}></CodeMirror>}
               dataSource={recordByUser}
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

export default RecordByUser;
