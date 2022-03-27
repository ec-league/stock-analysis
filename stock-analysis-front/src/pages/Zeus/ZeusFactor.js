import React, { Fragment, PureComponent } from 'react';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import {Card, Tabs} from 'antd'
import {GrailTimeForm} from "@/components/Zeus/GrailTimeForm";
import GrailTotalNum from "@/components/Zeus/GrailTotalNum";
import GrailApproveNum from "@/components/Zeus/GrailApproveNum";
const { TabPane } = Tabs;
export default class ZeusFactor extends PureComponent {


  //componentDidMount() 方法会在组件已经被渲染到 DOM 中后运行
  componentDidMount() {
  }
//组件从 DOM 中被移除，React 就会调用 componentWillUnmount() 生命周期方法
  componentWillUnmount() {

  }
  render() {

    return (
      <PageHeaderWrapper>
        <Card title="规则列表" bordered={true}>
          <GrailTimeForm type="ZeusFactor" render={data => (
            <Tabs>
              <TabPane tab="调用量" key="1" >
                <GrailTotalNum data={data.treeData.countList}/>
              </TabPane>
              <TabPane tab="批核率" key="2">
                <GrailApproveNum data={data.treeData.aCountList}/>
              </TabPane>
            </Tabs>
          )}/>
        </Card>

      </PageHeaderWrapper>
    );
  }

}
