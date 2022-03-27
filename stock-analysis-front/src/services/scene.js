import request from '@/utils/request';

export async function fetchSceneDetailService(sceneId) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/scene/scene-get-detail.json?tokenId=${tokenId}&sceneId=${sceneId}`);
}

export async function fetchSceneListService(params) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/scene/scene-get-List.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function addScene(params) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/scene/add-scene.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function updateSceneDetailService(params) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/scene/update-scene.json?tokenId=${tokenId}`, {
    method: 'PUT',
    data: {
      ...params,
    },
  });
}

export async function deleteRelationModel(params) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/scene/delete-scene-model.json?tokenId=${tokenId}&modelId=${params.modelId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}
