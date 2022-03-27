import React, { PureComponent } from "react";
import { connect } from "dva";
import { Button, Card, Form, Input, Select, Table } from "antd";
import router from "umi/router";

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

  getInput = () => {
    if (this.props.dataIndex === 'dataType') {
      return <Select ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save}>
        <Option value="INTEGER">整数</Option>
        <Option value="DOUBLE">浮点数</Option>
        <Option value="STRING">字符串</Option>
      </Select>;
    }
    return <Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save}/>;
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
    const { children, dataIndex, record, title, } = this.props;
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
        })(this.getInput())}
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

@connect(({ functor_add }) => ({
  functor_add: functor_add,
}))

class FunctorAddStep2 extends PureComponent {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'name',
        dataIndex: 'name',
        width: '30%',
      },
      {
        title: 'description',
        dataIndex: 'description',
        width: '30%',
        editable: true,
      },
      {
        title: 'dataType',
        dataIndex: 'dataType',
        width: '30%',
        editable: true,
      },
    ];

    this.state = {
      dataSource: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.dataSource.length < 1) {
      this.setState({
        dataSource: nextProps.functor_add.expressionParams,
      });

    }
  }

  componentWillUnmount() {
    this.props.functor_add.expressionParams = [];
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

  render() {
    const {
      dispatch,
      functor_add: { newFunctor, },
    } = this.props;

    if (newFunctor.name === '') {
      router.push('/data/functor/functor-add/info');
    }

    const { dataSource } = this.state;
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
      <Card bordered={false}>

        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
        />


        <Button type="primary" onClick={() => {
          router.push('/data/functor/functor-add/info')
        }}>
          上一步
        </Button>
        <Button style={{ marginLeft: 16 }} type="primary" onClick={() => {

          dispatch({
            type: 'functor_add/functorAdd',
            payload: {
              ...newFunctor,
              functorParams: dataSource,
            },
          });
          router.push('/data/functor/functor-add/result');
        }}>
          下一步
        </Button>
      </Card>
    );
  }
}

export default FunctorAddStep2;
