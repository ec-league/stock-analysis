import request from "@/utils/request";

export async function queryAllLocalDataSourceConfigs() {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/data/query-local-data-source-configs.json?tokenId=${tokenId}`, {
    method: 'GET',
  });
}

export async function queryLocalDataSourceConfigBySceneCode(sceneCode) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/data/query-local-data-source-configs-by-sceneCode.json?tokenId=${tokenId}&sceneCode=${sceneCode}`, {
    method: 'GET',
  });
}
