import request from '@/utils/request';

export async function queryDataSourceDetail(param) {
  return request(`/api/data-source/detail.json?id=${param}`)
}
