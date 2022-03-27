import React, { Component } from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Card, Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;

class Product extends Component {
  render() {
    return (
      <PageHeaderWrapper>
        <Card>
          <Typography>
            <Title level={2}>产品介绍</Title>
            <Paragraph>
              <Text strong>RC-MODEL产品主要负责的是模型的录入, 管理, 变量回溯, 评估模型的可用性, 灰度接入数据源计算等功能</Text>
            </Paragraph>
            <Title level={3}>模型录入</Title>
            <Paragraph>
              当美团侧进行了用户数据的初步评估后, 可以产出<Text code>PMML</Text>模型描述文件, 然后通过对模型描述文件的管理, 我们便可以进行模型的录入
            </Paragraph>
            <Title level={3}>变量回溯</Title>
            <Paragraph>
              当美团侧的模型进行简单的管理之后, 便可以初步评估该模型的可用性, 但是毕竟<Text strong>美团侧数据</Text>与<Text strong>通联侧数据</Text>的用户群体不同, 便需要针对特定的数据类型进行变量回溯, 重新将变量通过对应的模型进行回归, 回溯
            </Paragraph>
            <Title level={3}>模型评估</Title>
            <Paragraph>
              当回溯的数据完成后, 便可以将回溯的数据进行分析, 通过对回溯数据的分析, 可以判断模型是否可以进行使用.
            </Paragraph>
            <Title level={3}>模型介绍</Title>
            <Paragraph>
              我们提供了如下模型的支持, 如:
            </Paragraph>
            <Paragraph>
              <ul>
                <li>评分卡模型(Scorecard)</li>
                <li>回归模型(RegressionModel)</li>
                <li>集群模型(AssociationModel)</li>
                <li>贝叶斯网络模型(BayesianNetworkModel)</li>
                <li>聚类模型(ClusteringModel)</li>
                <li>高斯过程模型(GaussianProcessModel)</li>
                <li>通用回归模型(GeneralRegressionModel)</li>
                <li>挖掘模型(MiningModel/XGBoost)</li>
                <li>朴素贝叶斯模型(NaiveBayesModel)</li>
                <li>近邻模型(NearestNeighborModel)</li>
                <li>神经网络(NeuralNetwork)</li>
                <li>规则集模型(RuleSetModel)</li>
                <li>序列模型(SequenceModel)</li>
                <li>支持向量机模型(SupportVectorMachineModel)</li>
                <li>文本模型(TextModel)</li>
                <li>时序模型(TimeSeriesModel)</li>
                <li>决策树模型(TreeModel)</li>
              </ul>
            </Paragraph>
            <Paragraph>
              针对如上的模型, 进行回归, 评估测试模型的可用性, 并且将模型一键应用到<Text code>application</Text>链路上
            </Paragraph>
          </Typography>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Product;
