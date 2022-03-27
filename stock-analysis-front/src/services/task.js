import request from '@/utils/request';

export async function addTask(params) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/config/task-manage/add-task.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function modifyTask(params) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/config/task-manage/modify-task.json?tokenId=${tokenId}`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function queryTaskList() {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/config/task-manage/task-list.json?tokenId=${tokenId}`);
}

export async function queryTaskDetail(taskId) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/config/task-manage/task-detail.json?tokenId=${tokenId}&taskId=${taskId}`);
}

export async function querySupportDataSources() {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/config/task-manage/support-data-sources.json?tokenId=${tokenId}`);
}

export async function queryRegressionRecord(taskId) {
  const tokenId = sessionStorage.getItem("tokenId");
  return request(`/api/config/task-manage/regression-record.json?tokenId=${tokenId}&taskId=${taskId}`);
}
