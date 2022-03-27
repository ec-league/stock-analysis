import React, { Fragment, PureComponent } from "react";
import { Button, Col, Row } from "antd";
import { connect } from "dva";
import router from 'umi/router';
import styles from "./style.less";
import Result from "@/components/Result";


@connect(({ task_add }) => ({
  task_add: task_add
}))
class Step3 extends PureComponent {
  state = { visible: false, freq: 'single' };

  handleSubmit = e => {
    const { dispatch, form } = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({
          type: 'model_file_add/submitModelFile',
          payload: values,
        });
      }
    });
  };


  render() {
    const {
      task_add : { newTask, models }
    } = this.props;

    const onFinish = () => {
      router.push('/regression/task-manage/task-add/info');
    };

    if (newTask.taskName === '') {
      router.push('/regression/task-manage/task-add/info');
    }

    const renderMsg = () => {
      if (newTask.taskType === 'single') {
        return (<span>从数据源{newTask.dataSource}捞取日期从{newTask.startDate}到{newTask.endDate}至多{newTask.recordNum}条数据</span>);
      } else if (newTask.taskType === 'multi'){
        return (<span>从数据源{newTask.dataSource}按照频率每天进行回溯至多{newTask.recordNum}条数据</span>);
      }
    };

    const taskType = () => {
      if (newTask.taskType === 'single') {
        return '单次任务';
      } else if (newTask.taskType === 'hour') {
        return '多次/每小时执行';
      } else if (newTask.taskType === 'day') {
        return '多次/每天执行';
      }
    };

    const information = (
      <div className={styles.information}>
        <Row>
          <Col xs={24} sm={8} className={styles.label}>
            任务名称:
          </Col>
          <Col xs={24} sm={16}>
            {newTask.taskName}
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={8} className={styles.label}>
            任务描述：
          </Col>
          <Col xs={24} sm={16}>
            {newTask.taskDesc}
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={8} className={styles.label}>
            任务类型：
          </Col>
          <Col xs={24} sm={16}>
            {taskType()}
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={8} className={styles.label}>
            使用模型：
          </Col>
          <Col xs={24} sm={16}>
            <a href={`/model/model-file-detail/${newTask.modelId}`}>{models[newTask.modelId]}</a>
          </Col>
        </Row>
      </div>
    );

    const onList = () => {
      router.push('/regression/task-manage/settings');
    };

    const actions = (
      <Fragment>
        <Button type="primary" onClick={onFinish}>
          继续新增任务
        </Button>
        <Button onClick={onList}>任务列表</Button>
      </Fragment>
    );

    return (
      <Result
        type="success"
        title="操作成功"
        description="任务新增成功"
        extra={information}
        actions={actions}
        className={styles.result}
      />
    );
  }
}

export default Step3;
