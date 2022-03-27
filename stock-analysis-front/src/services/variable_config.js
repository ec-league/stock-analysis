import request from '@/utils/request';

export async function fetchVariableConfigById(id) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/variable-config?tokenId=${tokenId}&id=${id}`);
}

export async function fetchVariableConfigByVarId(varId) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/variable-config/variableId.json?tokenId=${tokenId}&variableId=${varId}`);
}

export async function fetchVariableConfigByPage(params) {
  console.log('fetchVariableConfigByPage:', params);
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/variable-config/page.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function addVarConfig(params) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/variable-config/add.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}


