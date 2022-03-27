import request from "@/utils/request";

export async function queryDataLinkList() {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/database/database-resource-list.json?tokenId=${tokenId}`, {
    method: 'GET',
  });
}

export async function fetchDataLinkById(id) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/database/select-database-resource-by-id.json?id=${id}&tokenId=${tokenId}`, {
    method: 'GET',
  });
}

export async function updateDataLinkById(params) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/database/update-database-resource-by-id.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function dataLinkAdd(params) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/database/database-resource-add.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function synDatabseStruct(id) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/database/syn-database-struct-by-id.json?id=${id}&tokenId=${tokenId}`, {
    method: 'GET',
  });
}


export async function resetSynDatabseStruct(id) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/database/reset-syn-database-struct.json?id=${id}&tokenId=${tokenId}`, {
    method: 'GET',
  });
}
