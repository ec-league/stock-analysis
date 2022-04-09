import React, { Fragment, PureComponent } from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper'
import { Button, Card, Form, Input, message, Modal, Radio, Select, Spin, Table, Upload } from 'antd'
import { connect } from 'dva'
import { isEmpty } from "@/utils/CommonUtils";

@connect(({ risk_flink_home }) => ({
  risk_flink_home
}))
export default class GeneralSourceList extends PureComponent {
  componentDidMount() {
    this.initData()
  }

  state = {
    filter: '',
    visible: false,
    fileList: [],
    containHeadLine: 'false',
    uploadTableId: '',
    uploading: false,
    copying: false,
    exportConfigVisible: false,
    importConfigVisible: false,
    singleImportVisible: false,
    fileCopyVisible: false,
  }

  initData() {
    const { dispatch } = this.props
    dispatch({
      type: 'risk_flink_home/fetch',
    })
  }

  handleChange = e => {
    const { value } = e.target
    this.setState({
      filter: value
    })
  }

  handleSearch = e => {
    const { filter } = this.state
    const { dispatch } = this.props
    dispatch({
      type: 'risk_flink_home/searchFlink',
      payload: filter
    })
  }

  handleFileCopyOk = e => {
    const {
      dispatch,
      risk_flink_home: {
        fileCopyDir,
        copyTargetKeys,
      }
    } = this.props;

    if (copyTargetKeys.length < 1) {
      message.info("目标文件列表不能为空，请选择需要拷贝的文件！");
      return;
    }

    if (isEmpty(fileCopyDir)) {
      message.info("拷贝目标目录不能为空，请填写！");
      return;
    }

    this.setState({
      copying: true,
    });

    dispatch({
      type: 'risk_flink_home/copyFileAction',
      payload: {
        fileCopyDir: fileCopyDir,
        tableIds: copyTargetKeys,
      }
    }).then(response => {
      this.setState({
        fileCopyVisible: false,
        copying: false,
      })
    });
  }

  handleTargetChange = targetKeys => {
    const { dispatch } = this.props;
    dispatch({
      type: 'risk_flink_home/updateTargetKeys',
      payload: targetKeys,
    })
  };

  handleCopyTargetChange = copyTargetKeys => {
    const { dispatch } = this.props;
    dispatch({
      type: 'risk_flink_home/updateCopyTargetKeys',
      payload: copyTargetKeys,
    })
  };

  render() {
    const {
      risk_flink_home: {
        tableFromFlink,
      }
    } = this.props;
    const { filter, fileList } = this.state

    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '数据源标识',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '类型',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: '操作',
        dataIndex: 'id',
        render: (id) => {
          return (
            <div>
              <a href={"/stock-analysis/data-source-list/detail/" + id}>详情</a>
            </div>
          )
        }
      }
    ];

    const extra = (
      <Fragment>
        <Button
          type="primary"
          onClick={() => {
            this.setState({
              visible: true
            })
          }}
        >
          新增数据源
        </Button>
      </Fragment>
    )

    return (
      <PageHeaderWrapper title="数据源列表" content="" extra={extra}>
        <Card>
          <div style={{ display: 'flex', width: 400, marginBottom: 20 }}>
            <span style={{
              width: 80,
              textAlign: 'center',
              marginTop: 'auto',
              marginBottom: 'auto',
              marginRight: 12
            }}>文件名:</span>
            <Input value={filter}
                   onChange={this.handleChange}
            />
            <Button type="primary"
                    style={{ marginLeft: 12 }}
                    onClick={this.handleSearch}>搜索</Button>
          </div>
          <Table dataSource={tableFromFlink} columns={columns}/>
        </Card>
        <Modal
          visible={this.state.visible}
          title={"新增数据源"}
          onCancel={() => this.setState({visible: false})}
          >

        </Modal>
      </PageHeaderWrapper>
    )
  }
}
