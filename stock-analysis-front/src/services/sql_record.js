import request from "@/utils/request";

export async function fetchByUserId() {
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/sql/queryRecordByUser.json?tokenId=${tokenId}`, {
    method: 'GET',
  });
}

export async function downResultFile(params) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/sql/downResultFile.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params
    },
    responseType: 'blob',
  });
}

