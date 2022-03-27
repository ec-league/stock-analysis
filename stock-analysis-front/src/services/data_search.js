import request from "@/utils/request";

export async function fetchSearch(params) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/data/search.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}
