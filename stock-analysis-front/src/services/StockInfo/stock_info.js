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
