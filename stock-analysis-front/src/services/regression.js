import request from '@/utils/request';

export async function fetchOneRegressionRecord(regressionRecordId) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/regression/regression-detail/regression-get.json?tokenId=${tokenId}&regressionRecordId=${regressionRecordId}`);
}
