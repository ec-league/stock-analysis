import request from "@/utils/request";

export async function queryUserList() {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/user/userList.json?tokenId=${tokenId}`);
}

export async function currentUser() {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/user/currentUser.json?tokenId=${tokenId}`)
}

export async function login(params) {
  return request('/api/user/login.json', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function queryUserById(userId) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/user/queryUserById.json?userId=${userId}&tokenId=${tokenId}`);
}

export async function register(params) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/user/register.json?${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function modifyUser(params) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/user/modifyUser.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function modifyUserAuthority(params) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/user/modifyAuthority.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function modifyUserPassword(params) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/user/modifyPassword.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function invalidateUser(params) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/user/invalidUser.json?tokenId=${tokenId}&userId=${params}`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}
