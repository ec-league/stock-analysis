import React, { PureComponent } from 'react';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Button, Card, Descriptions, Modal, PageHeader, Popconfirm, Select, Switch, Table } from 'antd';
import DescriptionList from '@/components/DescriptionList';

const ButtonGroup = Button.Group;
const { Description } = DescriptionList;

@connect(({ scene_detail, model_file_list }) => ({
  scene_detail, model_file_list,
}))

export default class SceneDetail extends PureComponent {

  state = {
    searchText: '',
    localSceneModels: [],
    visible: false,
    deleteVisual: false,
    currentModelId: null
  };

  componentDidMount() {
    const { dispatch, match } = this.props;
    const { params } = match;


    dispatch({
      type: 'scene_detail/fetchSceneDetail',
      payload: params.id,
    });
  }

  renderSceneDetail() {

    const formatDate = (time) => {
      const date = new Date(time);
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const strDate = date.getDate().toString().padStart(2, '0');
      return `${date.getFullYear()}-${month}-${strDate} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    };

    const { scene_detail: { current_scene_detail } } = this.props;

    let list = [];
    if (current_scene_detail) {
      list.push(<Descriptions.Item key="sceneName" label="场景名称">{current_scene_detail.sceneName}</Descriptions.Item>);
      list.push(<Descriptions.Item key="description"
                                   label="场景描述">{current_scene_detail.description}</Descriptions.Item>);

      list.push(<Descriptions.Item key="createDate"
                                   label="创建日期">{formatDate(current_scene_detail.gmtCreate)}</Descriptions.Item>);
      list.push(<Descriptions.Item key="modifyDate"
                                   label="修改日期">{formatDate(current_scene_detail.gmtModified)}</Descriptions.Item>);
    }

    return (
      <Card title="场景详情">
        <Descriptions bordered>
          {list}
        </Descriptions>
      </Card>
    );
  }


  switchChange(checked, row) {

    console.log("checked: ", checked);
    console.log("checked row: ", row);

    const { dispatch, scene_detail: { current_scene_detail } } = this.props;
    const { modelExtsDto } = current_scene_detail;

    const modelId = row.modelId;
    //遍历localSceneModels，找到modelId的item，设置flag为checked
    const newModelArray = modelExtsDto.map(function (item) {
      if (item.modelId == row.modelId) {
        //debugger
        if (checked == true) {
          item.flag = false;
        } else if (checked == false) {
          item.flag = true;
        }
      }
      return item;                     //一对一的关系，传进来一个值，返回一个对应的值。
    });

    const params = {
      'id': current_scene_detail.id,
      'sceneName': current_scene_detail.sceneName,
      'description': current_scene_detail.description,
      'modelExtsDto': newModelArray,
      'gmtCreate': current_scene_detail.gmtCreate,
      'gmtModified': current_scene_detail.gmtModified
    };

    console.log("switchChange: 更新", params);
    /*
        dispatch({
          type: 'scene_detail/updateCurrentModels',
          payload: params,
        });*/

    dispatch({
      type: 'scene_detail/updateScene',
      payload: params,
    });

  }

  switchCancel() {
    location.reload();
  }

  handleSwitchSubmit(value, row, index) {

    const { dispatch } = this.props;
    const { scene_detail: { current_scene_detail } } = this.props;

    dispatch({
      type: 'scene_detail/updateScene',
      payload: current_scene_detail,
    });
  }

  handleDeleteModal(value, row, index) {
    console.log(value, row, index);
    this.setState({
      deleteVisual: true,
      currentModelId: row.modelId
    })
  }

  handleDeleteCancel = () => {
    this.setState({
      deleteVisual: false,
    });
  };

  handleDeleteModalOk = () => {
    const { dispatch } = this.props;
    const { scene_detail: { current_scene_detail } } = this.props;

    const { modelExtsDto } = current_scene_detail;

    const tempModels = modelExtsDto;
    //从本地state删除改行
    tempModels.splice(tempModels.findIndex(item => item.modelId == this.state.currentModelId), 1);

    const params = {
      'id': current_scene_detail.id,
      'sceneName': current_scene_detail.sceneName,
      'description': current_scene_detail.description,
      'modelExtsDto': tempModels,
      'gmtCreate': current_scene_detail.gmtCreate,
      'gmtModified': current_scene_detail.gmtModified,
      'modelId': this.state.currentModelId
    };

    console.log("param", params);
    dispatch({
      type: 'scene_detail/deleteRelationModel',
      payload: params,
    });

    this.setState({
      deleteVisual: false
    })
  };

  handleDeleteRow(value, row, index) {

    const { dispatch } = this.props;
    const { scene_detail: { current_scene_detail } } = this.props;

    const { modelExtsDto } = current_scene_detail;

    const tempModels = modelExtsDto;
    //从本地state删除改行
    tempModels.splice(tempModels.findIndex(item => item.modelId == row.modelId), 1);

    const params = {
      'id': current_scene_detail.id,
      'sceneName': current_scene_detail.sceneName,
      'description': current_scene_detail.description,
      'modelExtsDto': tempModels,
    };

    dispatch({
      type: 'scene_detail/updateCurrentModels',
      payload: params,
    });

  }

  showModal = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'model_file_list/fuzzyQuery',
      payload: '',
    });
    this.setState({
      visible: true,
    });
  };

  handleAddModelOk = e => {
    const { dispatch } = this.props;
    const { scene_detail: { current_scene_detail } } = this.props;

    console.log('handleAddModelOk: ', current_scene_detail);

    dispatch({
      type: 'scene_detail/updateScene',
      payload: current_scene_detail,
    });

    this.setState({
      visible: false,
    });

  };

  handleAddModelCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };


  renderModelList() {

    //获取Model state
    const { scene_detail: { current_scene_detail }, model_file_list: { fuzzyModels } } = this.props;
    const { modelExtsDto } = current_scene_detail;

    //定义optional选项
    const modelItems = [];

    for (let [index, value] of fuzzyModels.entries()) {

      const id = value.id;
      let existed = modelExtsDto.some((item, index, array) => {
        return item.modelId == id;
      });

      if (!existed) {
        modelItems.push(<Select.Option key={value.id}>{value.name}</Select.Option>);
      }
    }

    //获取当前列表和分页数据
    const pagination = {
      current: 0,
      page: 1,
      pageSize: 10,
      disabled: true,
    };

    const pageData = modelExtsDto;


    const formatDate = (time) => {
      const date = new Date(time);
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const strDate = date.getDate().toString().padStart(2, '0');
      return `${date.getFullYear()}-${month}-${strDate} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    };

    const columns = [
      {
        title: '模型编号',
        dataIndex: 'modelId',
        key: 'modelId',
      },
      {
        title: '模型名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '模型描述',
        dataIndex: 'desc',
        key: 'desc',
      },
      {
        title: '开启',
        dataIndex: 'flag',
        key: 'flag',
        render: (text, row, index) => {
          return (
            <Popconfirm title="确认修改?" onConfirm={(value) => this.switchChange(text, row)}
                        onCancel={(value) => this.switchCancel(text, row)}>
              <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked={text}
              />
            </Popconfirm>);
        },
      },
      {
        title: '操作',
        key: 'os',
        render: (text, row, index) => {
          return (
            <span>
              <Button style={{ 'float': 'left' }} onClick={(value) => this.handleDeleteModal(value, row, index)}>
                delete
              </Button>
                <Modal
                  title="确认删除？"
                  visible={this.state.deleteVisual}
                  onOk={this.handleDeleteModalOk}
                  onCancel={this.handleDeleteCancel}
                >
                </Modal>
          </span>
          );
        },
      },
    ];

    return (
      <div>
        <Card title="模型列表">
          <PageHeader
            style={{
              border: '1px solid rgb(235, 237, 240)',
            }}
            extra={[
              <Button key="3" onClick={this.showModal}>添加</Button>
            ]}
          >
            <Table
              columns={columns}
              dataSource={pageData}
              pagination={pagination}
              rowKey={row => row.modelId}
              onChange={this.handleTableChange}
            />
          </PageHeader>,
        </Card>
        <Modal
          title="选择模型"
          visible={this.state.visible}
          onOk={this.handleAddModelOk}
          onCancel={this.handleAddModelCancel}
        >

          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="请选择一个模型"
            optionFilterProp="children"
            onChange={
              //e代表key,上面我们设定成model.id
              (e) => {

                console.log('onChange: ', e);
                //保存新增model到localModelState,然后提交
                const { dispatch } = this.props;
                const { scene_detail: { current_scene_detail } } = this.props;
                const { modelExtsDto } = current_scene_detail;

                const oldSceneModelArray = modelExtsDto;
                const newModelArray = [
                  {
                    'modelId': e,
                    'flag': true,
                  },
                ];
                //debugger
                const result = oldSceneModelArray.concat(newModelArray);

                const params = {
                  'id': current_scene_detail.id,
                  'sceneName': current_scene_detail.sceneName,
                  'description': current_scene_detail.description,
                  'modelExtsDto': result,
                };

                dispatch({
                  type: 'scene_detail/updateCurrentModels',
                  payload: params,
                });

              }
            }

            onSearch={
              (value) => {
                const { dispatch } = this.props;
                //fuzzy数组去重，去重已经存在的
                dispatch({
                  type: 'model_file_list/fuzzyQuery',
                  payload: value,
                });
              }
            }
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {modelItems}
          </Select>
        </Modal>

      </div>
    );
  }

  render() {

    return (
      <PageHeaderWrapper>
        {this.renderSceneDetail()}
        {this.renderModelList()}
      </PageHeaderWrapper>
    );
  }
}

