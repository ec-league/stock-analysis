import request from '@/utils/request';


export async function fetchStockInfoList() {
  return request("/api/stock-info/list.json");
}

export async function saveStockInfo(params) {
  return request("/api/stock-info/save.json", {
    method: 'POST',
    data: params
  })
}

export async function startRegression(params) {
  return request("/api/stock-info/start-regression.json?code=" + params, {
    method: 'POST'
  });
}
