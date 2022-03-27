import React, { Component } from "react";
import { Table,Tabs ,Card, Col,  Row} from "antd";
import { connect } from "dva";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import GrailChartCard from "@/components/Zeus/GrailChartCard"
import GrailBasic from "@/components/Zeus/GrailBasic"
import GrailCheckPeople from "@/components/Zeus/GrailCheckPeople";
import GrailApproveNum from "@/components/Zeus/GrailApproveNum";
import GrailTotalNum from "@/components/Zeus/GrailTotalNum";
const { TabPane } = Tabs;
const formatDate = (time) => {
  const date = new Date(time);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const strDate = date.getDate().toString().padStart(2, '0');
  return `${date.getFullYear()}-${month}-${strDate} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
};
@connect(({ zeusgrail }) => ({
  zeusgrail
}))
export default class ZeusGrail extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const params = {
      startTime:null,
      endTime:null
    };
    dispatch({
      type: "zeusgrail/fetch",
      payload:params
    });
  }

  render() {

    const {
      zeusgrail: {
        callVolumeStatistics,approvalStatistics,rejectedStatistics,
        percentVolumeStatistics,tolStatistics, newRuleStatistics,packageStatistics
      }
    } = this.props;


    const ruleColumns=[
      {
        title: '序号',
        render:(text,record,index)=>`${index+1}`,
      },
      {
        title: '规则名字',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
      },
      {
        title: '规则描述',
        dataIndex: 'alias',
        key: 'alias',
        align: 'center',
      },
      {
        title: '生成时间',
        dataIndex: 'addtime',
        key: 'addtime',
        align: 'center',
        render: text => <span>{formatDate(text)}</span>

      },
      {
        title: '修改时间',
        dataIndex: 'modtime',
        key: 'modtime',
        align: 'center',
        render: text => <span>{formatDate(text)}</span>

      },
    ]
    const columns = [
      {
        title: '序号',
        render:(text,record,index)=>`${index+1}`,

      },
      {
        title: '策略包',
        dataIndex: 'nameCn',
        key: 'nameCn',
        sorter: false,
        //render: sceneName => `${sceneName.first} ${sceneName.last}`,
        //...this.getColumnSearchProps('sceneName'),
        align: 'center',

      },
      {
        title: '策略包英文名',
        dataIndex: 'name',
        key: 'name',
        align: 'center',

      },

      {
        title: '拉取时间',
        dataIndex: 'addtime',
        key: 'addtime',
        render: text => <span>{formatDate(text)}</span>
      }
    ];

    const mymargin=1;
    const heightratio=0.673
    const widthratio=0.37
    const param={data:{total:callVolumeStatistics.totalCount,weekflag:percentVolumeStatistics.weekTotalFlag,dayflag:percentVolumeStatistics.dayTotalFlag,weekvalue:percentVolumeStatistics.weekTotalPercent+"%",dayvalue:percentVolumeStatistics.dayTotalPercent+"%"},title:"调用量",atitle:"调用量概要说明",pmargin:mymargin};
    const param1={data:{total:callVolumeStatistics.passCount,weekflag:percentVolumeStatistics.weekPassFlag,dayflag:percentVolumeStatistics.dayPassFlag,weekvalue:percentVolumeStatistics.weekPassPercent+"%",dayvalue:percentVolumeStatistics.dayPassPercent+"%"},title:"批核件数",atitle:"批核件数概要说明",pmargin:mymargin};
    const param2={data:{total:callVolumeStatistics.rejectCount,weekflag:percentVolumeStatistics.weekRejectFlag,dayflag:percentVolumeStatistics.dayRejectFlag,weekvalue:percentVolumeStatistics.weekRejectPercent+"%",dayvalue:percentVolumeStatistics.dayRejectPercent+"%"},title:"拒绝件数",atitle:"拒绝件数概要说明",pmargin:mymargin};
    const param3={data:{total:callVolumeStatistics.manualCount,weekflag:percentVolumeStatistics.weekManualFlag,dayflag:percentVolumeStatistics.dayManualFlag,weekvalue:percentVolumeStatistics.weekManualPercent+"%",dayvalue:percentVolumeStatistics.dayManualPercent+"%"},title:"转人工件数",atitle:"转人工件数概要说明",pmargin:mymargin};
    const param4={width:widthratio,height:heightratio,item1:"调用量",item4:"批核率", data:tolStatistics,pmargin:mymargin};
    const param5={height:0.885,data:rejectedStatistics,color:"#496f7c",pmargin:mymargin};
    //左下角的高度
    let lrownums=0;
    let rrownums=0;
    if(newRuleStatistics==undefined||packageStatistics==undefined){
      lrownums=1;
      rrownums=0;
    }else{
      lrownums=newRuleStatistics.length;
      rrownums=packageStatistics.length;
    }
    const param8left={height:37.5*lrownums+rrownums*7,data:approvalStatistics.countList};
    const param8rigth={height:37.5*lrownums+rrownums*7,data:approvalStatistics.aCountList};
    return (
      <PageHeaderWrapper
      >
        <Row >
          <Col span={6}>
            {new GrailChartCard(param).render()}
          </Col>
          <Col span={6}>
            {new GrailChartCard(param1).render()}
          </Col>
          <Col span={6}>
            {new GrailChartCard(param2).render()}
          </Col>
          <Col span={6}>
            {new GrailChartCard(param3).render()}
          </Col>
        </Row>
        <Row >
          <Col span={12}  >
            <Card  >
              {new GrailCheckPeople(param4).render()}
            </Card>
          </Col>
          <Col span={12}  >
            <Card>
              {new GrailBasic(param5).render()}
            </Card>
          </Col>
        </Row>
        <Row >
          <Col span={12}  >
            <Card>
            <Tabs>
              <TabPane tab="调用量" key="1" >
                <GrailTotalNum data={param8left}/>
              </TabPane>
              <TabPane tab="批核率" key="2">
                <GrailApproveNum data={param8rigth}/>
              </TabPane>
            </Tabs>
            </Card>
          </Col>
          <Col span={12} >
            <Row >
              <Col span={24} >
                <Card  title="最近拉取策略详情">
                  <Table dataSource={packageStatistics} columns={columns} scroll={{y: "300px",scrollToFirstRowOnChange:true}} />
                </Card>
              </Col>
            </Row >
            <Row  >
              <Col span={24} >
                <Card  title="最近修改规则详情">
                  <Table dataSource={newRuleStatistics} columns={ruleColumns} scroll={{y: "300px",scrollToFirstRowOnChange:true}}/>
                </Card>
              </Col>
            </Row>

          </Col>
        </Row>
      </PageHeaderWrapper>
    );
  }
}
