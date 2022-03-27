import request from '@/utils/request';

export async function querySchedulerConfigList() {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/config/scheduler-config-list.json?tokenId=${tokenId}`, {
    method: 'GET',
  });
}

export async function fetchConfigById(id) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/config/select-config-by-id.json?id=${id}&tokenId=${tokenId}`, {
    method: 'GET',
  });
}

export async function updateConfigById(params) {
  console.log("param", params);
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/config/update-config-by-id.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function queryDynamicResourceList() {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/config/dynamic-resource-list.json?tokenId=${tokenId}`, {
    method: 'GET',
  });
}

export async function fetchResourceById(id) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/config/select-resource-by-id.json?id=${id}&tokenId=${tokenId}`, {
    method: 'GET',
  });
}

export async function updateResourceById(params) {
  console.log("param", params);
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/config/update-resource-by-id.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function dynamicResourceAdd(params) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/config/dynamic-resource-add.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}
