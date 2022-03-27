import React, { Fragment, PureComponent } from "react";
import { Button, Col, Row } from "antd";
import { connect } from "dva";
import router from 'umi/router';
import Result from "@/components/Result";


@connect(({ functor_add }) => ({
  functor_add: functor_add
}))
class FunctorAddStep3 extends PureComponent {
  state = { visible: false, returnType: 'STRING' };

  handleSubmit = e => {
    const { dispatch, form } = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({
          type: '/functor_add/functorAdd',
          payload: values,
        });
      }
    });
  };

  render() {
    const returnType = () => {
      if (newFunctor.returnType === 'BOOLEAN') {
        return '布尔值';
      } else if (newFunctor.returnType === 'LONG') {
        return '整数';
      } else if (newFunctor.returnType === 'DOUBLE') {
        return '浮点数';
      } else if (newFunctor.returnType === 'STRING') {
        return '字符串';
      } else if (newFunctor.returnType === 'ARRAY') {
        return '数组';
      } else if (newFunctor.returnType === 'MAP') {
        return '映射表';
      }
    };

    const {
      functor_add: { newFunctor, functorParam }
    } = this.props;

    const onFinish = () => {
      router.push('/data/functor/functor-add/info');
    };

    if (newFunctor.name === '') {
      router.push('/data/functor/functor-add/info');
    }


    const information = (
      <div>
        <Row>
          <Col xs={24} sm={8}>
            算子名称:
          </Col>
          <Col xs={24} sm={16}>
            {newFunctor.name}
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={8}>
            算子描述：
          </Col>
          <Col xs={24} sm={16}>
            {newFunctor.description}
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={8}>
            返回值类型：
          </Col>
          <Col xs={24} sm={16}>
            {returnType()}
          </Col>
        </Row>
      </div>
    );

    const onList = () => {
      router.push('/data/functor/functor-list');
    };

    const actions = (
      <Fragment>
        <Button type="primary" onClick={onFinish}>
          继续新增算子
        </Button>
        <Button onClick={onList}>算子列表</Button>
      </Fragment>
    );

    return (
      <Result
        type="success"
        title="操作成功"
        description="算子新增成功"
        extra={information}
        actions={actions}
      />
    );
  }
}

export default FunctorAddStep3;
