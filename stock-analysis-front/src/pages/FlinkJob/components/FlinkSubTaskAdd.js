/* eslint-disable */
import React, { Fragment, PureComponent } from 'react'
import { Form, Input, Modal, Select, InputNumber, Table, Row, Col } from 'antd'
import { connect } from 'dva'
import FlinkConsoleCodeMirror from './FlinkConsoleCodeMirror'

const { TextArea } = Input
const FormItem = Form.Item
const Option = Select.Option
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
    md: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
    md: { span: 14 }
  }
}

const sqlTableColumn = [
  {
    title: '字段名',
    dataIndex: 'columnName',
    width: '75%'
  },
  {
    title: '字段类型',
    dataIndex: 'columnType',
    width: '25%'
  }
]
@connect(({ console_state_manager, data_sync, data_workspace, ftp_setting_info, flink_converter }) => ({
  console_state_manager,
  data_sync,
  data_workspace,
  ftp_setting_info,
  flink_converter
}))
@Form.create()
class FlinkSubTaskAdd extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      type:'atomic',
      selectedDB: '',
      selectedSchema: '',
      selectedTable: '',
      selectedRowKeys: [],
      codeValue: ''
    }
  }
  componentDidMount() {
    const { dispatch } = this.props

    dispatch({
      type: 'ftp_setting_info/fetch'
    })
  }
  handleOk = e =>{
    const { id } = this.props
    const {type} = this.state
    const formData = this.props.form.getFieldsValue()
    let rst
    if(!formData.replaceParams){
      formData.replaceParams='';
    }
    switch (type) {
      case 'ftp':
        rst = {
          name:formData.name,
          type:formData.type,
          jobConfig:{
            ftp:{
              id:formData.id,
              localPath:formData.localPath,
              ftpPath:formData.ftpPath,
              encode:formData.encode,
              fileName:formData.fileName
            }
          },
          extInfo:{
            replaceParams:JSON.parse(formData.replaceParams===''?'{}':formData.replaceParams),
            executeFactor:formData.executeFactor
          }
        }
        break
      case 'syncFile':
        rst = {
          name:formData.name,
          type:formData.type,
          jobConfig:{
            sourcePath:formData.sourcePath,
            targetPath:formData.targetPath
          },
          extInfo:{
            replaceParams:JSON.parse(formData.replaceParams===''?'{}':formData.replaceParams),
            executeFactor:formData.executeFactor
          }
        }
        break
      default:
        rst = {
          name:formData.name,
          type:formData.type,
          jobConfig:{
            sourceIds: [],
            sinkIds: [],
            sinkDbId: formData.sinkDbId?formData.sinkDbId:'',
            sinkFileName:formData.sinkFileName?formData.sinkFileName:'',
            sql: formData.sql?formData.sql:''
          },
          extInfo:{
            replaceParams:JSON.parse(formData.replaceParams===''?'{}':formData.replaceParams),
            executeFactor:formData.executeFactor
          },
          flinkConfig:{
            parallelism:formData.parallelism
          }
        }
        break
    }
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { dispatch } = this.props
        // console.log(rst)
        dispatch({
          type: 'console_state_manager/addScheduleSqlJob',
          payload: {
            id:id,
            obj:rst
          }
        }).then(res=>{
          if(res){
            this.props.refreshWindow()
          }
          this.handleCancel();
        })
      }
    })
  }
  handleCancel = e =>{
    this.props.form.resetFields()
    this.setState({
      selectedRowKeys: [],
      codeValue: '',
      type: 'atomic',
      selectedDB: '',
      selectedSchema: '',
      selectedTable: ''
    })
    this.props.closeWindow()
  }

  changeTypeHandler(val){
    this.setState({
      type:val
    })
  }

  handleDBChange = val => {
    const { dispatch } = this.props;
    dispatch({
      type: 'data_workspace/selectDs',
      payload: val
    });
    this.props.form.setFieldsValue({
      selectedSchema: '',
      selectedTable: ''
    });
    this.setState({
      selectedDB: val,
      selectedSchema: '',
      selectedTable: ''
    });
  }

  handleSchemaChange = val => {
    const { data_workspace: { dbTree } } = this.props;
    this.props.form.setFieldsValue({
      selectedTable: ''
    });
    this.setState({
      selectedSchema: val,
      selectedTable: ''
    });
  }

  handleTableChange = val => {
    this.setState({
      selectedTable: val
    })
  }

  onSelectChange = (selectedKeys, selectedRows) => {
    const { selectedTable } = this.state;
    const rdNumber = Math.floor(Math.random()* 1000000);
    const codeValue = `insert into ${selectedTable}${rdNumber} select ${''} from ${selectedTable}`
    let field = '';
    if (selectedKeys.length) {
      selectedRows.forEach((item, index) => {
        if (index === selectedRows.length - 1) {
          field += item.columnName;
          return;
        }
        field += `${item.columnName}, `;
      });
      this.props.form.setFieldsValue({
        sql: `insert into ${selectedTable}_${rdNumber} select ${field} from ${selectedTable};`
      })
    }
    this.setState({
      selectedRowKeys: selectedKeys,
      codeValue: `insert into ${selectedTable}_${rdNumber} select ${field} from ${selectedTable};`
    });
  }

  renderForm(){
    const {
      form:{ getFieldDecorator }
    } = this.props
    const { type } = this.state
    return (
      <Form>
        <FormItem {...formItemLayout} label="名称">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: '请填写名称'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="类型">
          {getFieldDecorator('type', {
            rules: [
              {
                required: true,
                message: '请填写类型'
              }
            ]
          })(
            <Select
              placeholder="选择类型"
              onChange={value => {
                this.changeTypeHandler(value)
              }}
            >
              <Option key="atomic">FlinkSQL</Option>
              <Option key="delete">原生SQL</Option>
              {/*<Option key="mysqlImportFile">新增表到文件</Option>*/}
            </Select>
          )}
        </FormItem>
        {
          type === 'ftp'?this.renderFTP():type === 'syncFile'?this.renderSyncFile():this.renderSql()
        }
        <Form.Item {...formItemLayout} label="替换参数">
          {getFieldDecorator('replaceParams', {
            rules: [
              {
                required: false,
                message: 'replaceParams'
              }
            ]
          })(
            <TextArea
              placeholder="json格式信息，平铺的map<String,String>"
              autoSize={{minRows: 1, maxRows: 10}}
            />
          )}
        </Form.Item>
      </Form>
    )
  }
  renderSql(){
    const {
      data_sync: { data },
      data_workspace: { dataSourceList, dbTree },
      form:{ getFieldDecorator }
    } = this.props
    const { type, selectedSchema, selectedTable, selectedRowKeys, codeValue } = this.state
    const optionList = []
    const schemaOptionList = []
    const tableOptionList = []
    let fieldListData = []
    const rowSelection = {
      onChange: this.onSelectChange,
      selectedRowKeys
    }

    if (dataSourceList) {
      dataSourceList.forEach(ds => {
        optionList.push(<Option key={ds.id}>{ds.name}</Option>)
      })
    }
    if (dbTree) {
      dbTree.forEach(sc => {
        if (sc.tables) {
          schemaOptionList.push(<Option key={sc.schemaName}>{sc.schemaName}</Option>)
        }
        if (selectedSchema === String(sc.schemaName)) {
          sc.tables.forEach(tb => {
            tableOptionList.push(<Option key={tb.name}>{tb.name}</Option>)
            if (selectedTable === String(tb.name) && tb.fieldList) {
              fieldListData = tb.fieldList
            }
          })
        }
      })
    }


    return(
      <Fragment>
        {
          type === 'delete'?(
            <Form.Item {...formItemLayout} label="数据库配置">
              {getFieldDecorator('sinkDbId',{
                rules: [
                  {
                    required: true,
                    message: '请填写数据库配置'
                  }
                ]
              })(
                <Select placeholder="选择删除sql对应数据库连接">
                  {optionList}
                </Select>)}
            </Form.Item>
          ):null
        }
        {
          type === 'rcsVars'?(
            <FormItem {...formItemLayout} label="文件名">
              {getFieldDecorator('sinkFileName')(<Input />)}
            </FormItem>
          ):<FormItem {...formItemLayout} label="并发度">
            {getFieldDecorator('parallelism', {
              rules: [
                {
                  required: false,
                  message: 'parallelism'
                }
              ]
            })(<InputNumber min={1} max={8} defaultValue={1}/>)}
          </FormItem>
        }
        {type === 'mysqlImportFile' &&
          <Form.Item {...formItemLayout} label="选择数据库">
            {getFieldDecorator('selectedDB', {
              rules: [{
                required: true,
                message: '选择数据库'
              }]
            })(<Select onChange={this.handleDBChange}>
              {optionList}
            </Select>)}
          </Form.Item>
        }
        {type === 'mysqlImportFile' &&
          <Form.Item {...formItemLayout} label="选择schema">
            {getFieldDecorator('selectedSchema', {
              rules: [{
                required: true,
                message: '选择schema'
              }]
            })(<Select onChange={this.handleSchemaChange}>
              {schemaOptionList}
            </Select>)}
          </Form.Item>
        }
        {type === 'mysqlImportFile' &&
          <Form.Item {...formItemLayout} label="选择表">
            {getFieldDecorator('selectedTable', {
              rules: [{
                required: true,
                message: '选择表'
              }]
            })(<Select onChange={this.handleTableChange}>
              {tableOptionList}
            </Select>)}
          </Form.Item>
        }
        {type === 'mysqlImportFile' && fieldListData.length > 0 &&
          <Row style={{marginBottom: '20px'}}>
            <Col xs={{ span: 24 }} sm={{ span: 12, offset: 7 }} md={{ span: 14, offset: 5}}>
              <Table rowSelection={rowSelection} dataSource={fieldListData} columns={sqlTableColumn} scroll={{y: 360}} pagination={false} bordered />
            </Col>
          </Row>
        }
        {
          type === 'rcsVars'? null:
        <Form.Item {...formItemLayout} label="sql">
          {getFieldDecorator('sql', {
            rules: [
              {
                required: true,
                message: '请填写sql语句'
              }
            ],
          })(
            <FlinkConsoleCodeMirror formValue={codeValue}></FlinkConsoleCodeMirror>
          )}
        </Form.Item>
        }
      </Fragment>
    )
  }
  renderFTP(){
    const {
      form:{ getFieldDecorator },
      ftp_setting_info:{ data }
    } = this.props
    const optionList = []
    if (data) {
      data.forEach(ds => {
        optionList.push(<Option key={ds.id}>{ds.ip+':'+ds.port}</Option>)
      })
    }
    return(
      <Fragment>
        <Form.Item {...formItemLayout} label="ftp连接">
          {getFieldDecorator('id', {
            rules: [
              {
                required: true,
                message: '请选择ftp连接'
              }
            ],
          })(
            <Select placeholder="选择ftp连接">
              {optionList}
            </Select>)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="ftp目录">
          {getFieldDecorator('ftpPath', {
            rules: [
              {
                required: true,
                message: '请填写ftp路径'
              }
            ],
          })(<Input/>)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="本地目录">
          {getFieldDecorator('localPath', {
            rules: [
              {
                required: true,
                message: '请填写本地路径'
              }
            ],
          })(<Input/>)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="文件名">
          {getFieldDecorator('fileName', {
            rules: [
              {
                required: true,
                message: '请填写文件名'
              }
            ],
          })(
            <Input/>)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="编码格式">
          {getFieldDecorator('encode', {
            initialValue:'utf-8',
            rules: [
              {
                required: true,
                message: '请填写编码格式'
              }
            ],
          })(<Input/>)}
        </Form.Item>
      </Fragment>
    )
  }
  renderSyncFile(){
    const {
      form:{ getFieldDecorator }
    } = this.props
    return (
      <Fragment>
        <Form.Item {...formItemLayout} label="源文件">
          {getFieldDecorator('sourcePath', {
            rules: [
              {
                required: true,
                message: '请填写源文件路径'
              }
            ],
          })(<Input/>)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="目标文件">
          {getFieldDecorator('targetPath', {
            rules: [
              {
                required: true,
                message: '请填写目标文件路径'
              }
            ],
          })(<Input/>)}
        </Form.Item>
      </Fragment>
    )
  }
  render() {
    const {
      visible
    } = this.props
    return (
      <Modal
        width={'60%'}
        title="新增任务"
        visible={visible}
        onOk={this.handleOk}
        okText="添加"
        onCancel={this.handleCancel}
      >
        {this.renderForm()}
      </Modal>
    )
  }
}

export default FlinkSubTaskAdd
