import request from '@/utils/request';

export async function queryModelFileList() {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/model/model-file-list.json?tokenId=${tokenId}`);
}

export async function fuzzyQueryModelList(namePre) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/model/fuzzy-model-list.json?tokenId=${tokenId}&prefix=${namePre}`);
}

export async function queryModelFileDetail(id) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/model/model-file-detail.json?id=${id}&tokenId=${tokenId}`);
}

export async function queryModelParams(fileId) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/model/model-file-param.json?fileId=${fileId}&tokenId=${tokenId}`);
}

export async function validateFile(fileId) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/model/model-file-validate.json?fileId=${fileId}&tokenId=${tokenId}`)
}

export async function invalidateFile(fileId) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/model/model-file-invalidate.json?fileId=${fileId}&tokenId=${tokenId}`)
}

export async function calcuateVariable(params) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/variable/calculate-variable.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function modelAdd(fileId) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/model/model-file-add.json?fileId=${fileId}&tokenId=${tokenId}`);
}

export async function queryModelUseDetail(id) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/model/model-use-detail.json?id=${id}&tokenId=${tokenId}`);
}
