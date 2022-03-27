import request from '@/utils/request';

export async function fetchAllBasicVariables(params) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/variable/basic-variable-get.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function queryStatistics(params) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/variable/variable-statistics.json?tokenId=${tokenId}&id=${params}`, {
    method: 'GET',
  });
}

export async function queryStatisticsByInterval(params) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`
  /api/variable/variable-interval.json?tokenId=${tokenId}&id=${params}`, {
    method: 'GET',
  });
}

export async function queryOfflineStatistics(params) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/variable/variable-statistics-offline.json?tokenId=${tokenId}&id=${params}`, {
    method: 'GET',
  });
}

export async function fetchBasicVariableById(id) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/variable/variable-detail.json?id=${id}&tokenId=${tokenId}`);
}

export async function fetchBasicVariableByName(variableName) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/variable/variable-detail-by-name.json?variableName=${variableName}&tokenId=${tokenId}`);
}

export async function queryDerivedVariableList(params) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/variable/derived-variable-list.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function queryDerivedVariableDetail(id) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/variable/variable-detail.json?id=${id}&tokenId=${tokenId}`);
}

export async function queryDerivedVariableByName(variableName) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/variable/variable-detail-by-name.json?variableName=${variableName}&tokenId=${tokenId}`);
}

export async function addVariable(params) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/variable/add-variable.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function derivedVariableAdd(params) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/variable/derived-variable-add.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function modifyVariable(params) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/variable/modify-variable.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function varifyParams(params) {
  console.log("params", params);
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/variable/varify-param.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}
