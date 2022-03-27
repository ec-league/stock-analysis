import request from '@/utils/request';

export async function queryModelStatistics() {
  const tokenId = sessionStorage.getItem('tokenId');
  return request('/api/dashboard/model-statistics.json?tokenId=' + tokenId);
}

export async function queryDataSourceStatistics() {
  const tokenId = sessionStorage.getItem('tokenId');
  return request('/api/dashboard/datasource-statistics.json?tokenId=' + tokenId);
}

export async function queryVariableStatistics() {
  const tokenId = sessionStorage.getItem('tokenId');
  return request('/api/dashboard/variable-statistics.json?tokenId=' + tokenId);
}

export async function queryModelCalcStatistics() {
  const tokenId = sessionStorage.getItem('tokenId');
  return request('/api/dashboard/model-calculate-statistics.json?tokenId=' + tokenId);
}
