import React, { Fragment, PureComponent } from 'react';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Card} from 'antd';
import GrailCheckPeople from "@/components/Zeus/GrailCheckPeople";
import {GrailTimeForm} from "@/components/Zeus/GrailTimeForm";

export default class ZeusRule extends React.Component {

  componentWillMount() {
    // console.log('第一步：ZeusRule将要加入dom')
  }
  componentDidMount() {
    // console.log('第二步：zeusRule已经加入dom')
  }
  componentWillReceiveProps(newProps) {
    // console.log('第三步：zeusRule将要接收参数：接收到的newProps'+newProps)
  }
  shouldComponentUpdate(newProps, newState) {
    // console.log('第四步：zeusRule是否应该更新组件：接收到的newProps'+newProps)
    // console.log('第四步：zeusRule是否应该更新状态：接收到的newState'+newState)

    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    // console.log('第五步：zeusRule组件将要更新，接收到的nextProps'+nextProps)
    // console.log('第五步：zeusRule组件将要更新，接收到的nextState'+nextState)
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('第六步骤：zeusRule组件已经更新，之前接收到的组件：'+prevProps)
    // console.log('第六步骤：zeusRule组件已经更新，之前接收到的状态：'+prevState)
  }
  componentWillUnmount() {
    // console.log('第七步骤：zeusRule组件将要被移除')
  }
  render() {

    return (
      <PageHeaderWrapper>
        <Card title="场景路由统计" bordered={true}>
          <GrailTimeForm type="ZeusRule" render={data => (
            <GrailCheckPeople data={data} />
          )}/>
        </Card>

      </PageHeaderWrapper>
    );
  }

}
