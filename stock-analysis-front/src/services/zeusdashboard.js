import request from '@/utils/request';
//调用zeus基本总数
export async function queryZeusModelStatistics() {
  const tokenId = sessionStorage.getItem('tokenId');
  return request('/api/strategy/dashboard/model-statistics.json?tokenId=' + tokenId);
}

//zeus规则
export async function queryZeusRuleStatistics() {
  const tokenId = sessionStorage.getItem('tokenId');
  return request('/api/strategy/dashboard/rulepercent-statistics.json?tokenId=' + tokenId);
}
//zeus因子
export async function queryZeusFactorStatistics() {
  const tokenId = sessionStorage.getItem('tokenId');
  return request('/api/strategy/dashboard/factorpercent-statistics.json?tokenId=' + tokenId);
}
//zeus大盘基本数据
export async function queryZeusCallVolumeStatistics() {
  const tokenId = sessionStorage.getItem('tokenId');
  return request('/api/strategy/dashboard/CallVolume-statistics.json?tokenId=' + tokenId);
}
//zeus大盘基本数据
export async function queryPercentVolumeStatistics() {
  const tokenId = sessionStorage.getItem('tokenId');
  return request('/api/strategy/dashboard/PercentVolume-statistics.json?tokenId=' + tokenId);
}
//批核率
export async function queryZeusApprovalStatistics(params) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/strategy/dashboard/approval-statistics.json?tokenId==${tokenId}&startTime=${params.startTime}&endTime=${params.endTime}`);
}

//zeus大盘top
export async function queryZeusRejectedStatistics() {
  const tokenId = sessionStorage.getItem('tokenId');
  return request('/api/strategy/dashboard/rejected-statistics.json?tokenId=' + tokenId);
}
//zeus四条流
export async function queryZeusTolStatistics(params) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/strategy/dashboard/tol-statistics.json?tokenId==${tokenId}&startTime=${params.startTime}&endTime=${params.endTime}`);
}

//zeus最新规则
export async function queryZeusNewRuleStatistics() {
  const tokenId = sessionStorage.getItem('tokenId');
  return request('/api/strategy/dashboard/newrule-statistics.json?tokenId=' + tokenId);
}
//zeus策略包
export async function queryZeusPackageStatistics() {
  const tokenId = sessionStorage.getItem('tokenId');
  return request('/api/strategy/dashboard/package-statistics.json?tokenId=' + tokenId);
}
//zeus客群分布
export async function queryZeusCustGroupStatistics() {
  const tokenId = sessionStorage.getItem('tokenId');
  return request('/api/strategy/dashboard/custgroup-statistics.json?tokenId=' + tokenId);
}
//zeus客户等级
export async function queryZeusCustLevelStatistics() {
  const tokenId = sessionStorage.getItem('tokenId');
  return request('/api/strategy/dashboard/custLevel-statistics.json?tokenId=' + tokenId);
}
//zeus客户风险
export async function queryZeusRiskStatistics() {
  const tokenId = sessionStorage.getItem('tokenId');
  return request('/api/strategy/dashboard/risk-statistics.json?tokenId=' + tokenId);
}
//zeus命中规则
export async function queryZeusHitRuleStatistics() {
  const tokenId = sessionStorage.getItem('tokenId');
  return request('/api/strategy/dashboard/hitRule-statistics.json?tokenId=' + tokenId);
}
//假请求
export async function fetchDecisionFlowService(params) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/strategy/decision/decision-flow.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}
