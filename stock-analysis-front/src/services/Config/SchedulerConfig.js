import request from '@/utils/request';

export async function querySchedulerConfigList() {
  return request(`/api/config/scheduler-config/list.json`, {
    method: 'GET',
  });
}

export async function fetchConfigById(id) {
  return request(`/api/config/scheduler-config/detail.json?id=${id}`, {
    method: 'GET',
  });
}

export async function updateConfigById(params) {
  return request(`/api/config/scheduler-config/update.json`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}
