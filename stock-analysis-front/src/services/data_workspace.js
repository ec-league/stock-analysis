import request from '@/utils/request';

export async function queryJobList() {
  const tokenId = sessionStorage.getItem('tokenId');
  return request('/api/data/sql-job-list.json?tokenId=' + tokenId);
}

export async function formatSql(sql) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request('/api/data/format-sql.json?tokenId=' + tokenId, {
    method: 'POST',
    data: {
      sqlText: sql,
    }
  });
}

export async function submitSql(params) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request('/api/data/submit-sql.json?tokenId=' + tokenId, {
    method: 'POST',
    data: {
      ...params,
    }
  });
}

export async function querySchemasById(params) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request(`/api/data/query-schemas-by-id.json?tokenId=${tokenId}&id=${params}`);
}

export async function executeRecord(params) {
  const tokenId = sessionStorage.getItem('tokenId');
  return request('/api/data/execute-record.json?tokenId=' + tokenId, {
    method: 'POST',
    data: {
      ...params,
    }
  });
}
