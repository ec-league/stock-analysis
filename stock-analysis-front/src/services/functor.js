import request from '@/utils/request';

// 算子
export async function fetchFunctorList(params) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/functor/functor-list.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function fetchFunctorById(id) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/functor/functor-detail.json?id=${id}&tokenId=${tokenId}`);
}

export async function functorAdd(params) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/functor/functor-add.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function functorModify(params) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/functor/functor-modify.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function fetchFunctorByName(name) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/functor/functor-by-name.json?name=${name}&tokenId=${tokenId}`);
}

export async function calculatorFunctor(params) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/functor/functor-calculate.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}
export async function fetchExpressionParams(param) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/functor/expression-param.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: param,
  })
}
