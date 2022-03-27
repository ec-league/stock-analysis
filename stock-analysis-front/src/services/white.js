import request from '@/utils/request';

export async function whiteFileAdd(batchId) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/white/by-file.json?batchId=${batchId}&tokenId=${tokenId}`);
}

export async function fetchWhiteList(params) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/white/fetchWhiteList.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function fetchSearch(params) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/white/fetchSearch.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function downResultFile(params) {
  console.log("param",params);
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/white/downResultFile.json?batchId=${params}&tokenId=${tokenId}`, {
    method: 'POST',
    responseType: 'blob',
  });
}


