import React,{Component} from 'react';
import Graph from "@/components/AntVG6/IdentifyGraph.js";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";

class RelationFlowList extends Component{
  render(){
    return(
      <PageHeaderWrapper>
        <Graph/>
      </PageHeaderWrapper>
    )
  }
}
export default RelationFlowList
