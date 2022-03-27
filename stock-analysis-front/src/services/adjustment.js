import request from '@/utils/request';

export async function adjustFileAdd(fileId) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/adjust/by-file.json?batchId=${fileId}&tokenId=${tokenId}`, {
    method: 'POST',
  });
}

export async function fetchReadyList(params) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/adjust/fetchReadyList.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function fetchSqlList(params) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/adjust/fetchSqlList.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function fetchFinishList(params) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/adjust/fetchFinishList.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function fetchSearch(params) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/adjust/fetchSearch.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}


export async function submitSql(params) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/adjust/submit-sql.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    }
  });
}

export async function downAdjustResult(params) {
  console.log("param", params);
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/adjust/downAdjustResult.json?batchId=${params}&tokenId=${tokenId}`, {
    method: 'POST',
    responseType: 'blob',
  });
}

export async function downSqlResult(params) {
  console.log("param", params);
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/adjust/downSqlResult.json?batchId=${params}&tokenId=${tokenId}`, {
    method: 'POST',
    responseType: 'blob',
  });
}

export async function executeSqlAdjust(fileId) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/adjust/executeSqlAdjust.json?batchId=${fileId}&tokenId=${tokenId}`);
}

