import request from "@/utils/request";

export async function querySceneRouteList() {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/data/scene-route-list.json?tokenId=${tokenId}`, {
    method: 'GET',
  });
}

export async function fetchSceneRouteById(id) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/data/select-scene-route-by-id.json?id=${id}&tokenId=${tokenId}`, {
    method: 'GET',
  });
}

export async function updateSceneRouteById(params) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/data/update-scene-route-by-id.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function sceneRouteAdd(params) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/data/scene-route-add.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}
