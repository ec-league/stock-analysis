import React, { PureComponent } from "react";
import { connect } from "dva";
import { Button, Card, Form, Input, Select, Table } from "antd";
import router from "umi/router";
import './index.css';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';


const FormItem = Form.Item;
const { Option } = Select;
const { Search } = Input;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
    md: { span: 10 },
  },
};

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: false,
  };

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  renderCell = form => {
    this.form = form;
    const { children, dataIndex, record, title } = this.props;
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`,
            },
          ],
          initialValue: record[dataIndex],
        })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save}/>)}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={this.toggleEdit}
      >
        {children}
      </div>
    );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}

@connect(({ derived_variable_add }) => ({
  derived_variable_add: derived_variable_add,
}))
@Form.create()
class DerivedVariableAdd extends PureComponent {
  componentDidMount() {
    const { location: { query }, dispatch } = this.props;

    if (query && query.initParam) {
      dispatch({
        type: 'derived_variable_add/setNewVariableInfo',
        payload: {
          variableName: query.initParam,
        },
      });
    }
  }

  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'name',
        dataIndex: 'name',
        width: '20%',
      },
      {
        title: 'description',
        dataIndex: 'description',
        width: '20%',
      },
      {
        title: 'paramValue',
        dataIndex: 'paramValue',
        width: '20%',
        editable: true,
      },
    ];

    this.state = {
      dataSource: [],
      count: 0,
    };
  }

  componentWillUnmount() {
    this.props.derived_variable_add.dataSource = [];
    this.setState({
      dataSource: [],
    })
  }

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.derived_variable_add.dataSource !== nextProps.derived_variable_add.dataSource) {
      this.setState({
        dataSource: nextProps.derived_variable_add.dataSource,
      });
    }
  }

  render() {
    const {
      form: { getFieldDecorator },
      dispatch,
      derived_variable_add: { newVariable, dataSource },
    } = this.props;

    if (this.state.dataSource.length < 1) {
      this.setState({ dataSource: dataSource });
    }

    const add = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          dispatch({
            type: 'derived_variable_add/derivedVariableAdd',
            payload: {
              ...newVariable,
              variableParams: this.state.dataSource,
            },
          });
          this.setState({ dataSource: [] }, () => {
            router.push("/data/variable/derived-variable-list");
          })
        }
      });
    };

    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <PageHeaderWrapper title="衍生变量添加">
        <Card bordered={false}>
          <Card>
            <Form hideRequiredMark style={{ marginTop: 8 }}>
              <FormItem {...formItemLayout} label="衍生变量名称">
                {getFieldDecorator('variableName', {
                  rules: [
                    {
                      required: true,
                      message: "请输入衍生变量名称",
                    },
                  ],
                })(
                  <Input
                    placeholder="请输入衍生变量名称"
                    style={{ width: 480 }}
                    onChange={(e) => {
                      dispatch({
                        type: 'derived_variable_add/setNewVariableInfo',
                        payload: {
                          ...newVariable,
                          variableName: e.target.value,
                        },
                      });
                    }}/>)}
              </FormItem>
              <FormItem {...formItemLayout} label="算子名称">
                {getFieldDecorator('functorId', {
                  rules: [
                    {
                      required: true,
                      message: "请输入算子名称",
                    },
                  ],
                })(
                  <Search
                    placeholder="请输入算子名称"
                    enterButton
                    style={{ width: 480 }}
                    onSearch={value => {
                      dispatch({
                        type: 'derived_variable_add/fetchFunctor',
                        payload: value
                      });

                      dispatch({
                        type: 'derived_variable_add/setNewVariableInfo',
                        payload: {
                          ...newVariable,
                          functorName: value,
                        },
                      });
                    }}/>)}
              </FormItem>
            </Form>
          </Card>

          <Table
            components={components}
            rowClassName={() => 'editable-row'}
            bordered
            dataSource={this.state.dataSource}
            columns={columns}
            style={{ marginTop: 16 }}
          />
          <Button style={{ marginLeft: 16 }} type="primary" onClick={add}>
            添加
          </Button>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default DerivedVariableAdd;
