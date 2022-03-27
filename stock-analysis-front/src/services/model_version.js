import request from '@/utils/request';

export async function queryModelVersionList(fileId) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/model/model-version-list.json?fileId=${fileId}&tokenId=${tokenId}`);
}

export async function modelVersionAdd(params) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/model/model-version-add.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function validateModel(id) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/model/model-version-validate.json?id=${id}&tokenId=${tokenId}`);
}

export async function modelVersionDelete(id) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/model/model-version-delete.json?id=${id}&tokenId=${tokenId}`);
}
