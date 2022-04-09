import request from '@/utils/request';

/*risk_market_file_board*/

export async function queryFileStructList() {
  return request(`/api/risk-market/flink/queryFileStructList`, {
    method: 'GET',
  })
}

export async function queryFileInfo(id) {
  return request(`/api/risk-market/flink/queryFileInfo?id=${id}`, {
    method: 'GET',
  });
}

export async function queryColumnsById(id) {
  return request(`/api/risk-market/queryColumnsById?id=${id}`, {
    method: 'GET',
  });
}

export async function queryFilePreviewDataByPage(params) {
  const { id } = params;
  const { pageIndex } = params;
  const { pageSize } = params;
  return request(`/api/risk-market/flink/queryFilePreviewDataByPage?id=${id}&pageIndex=${pageIndex}&pageSize=${pageSize}`, {
    method: 'GET',
  });
}

/*risk_flink_home operation*/
export async function queryTableList(type) {
  return request('/api/data-source/list.json', {
    method: 'GET',
  })
}

export async function updateFlinkTable(params) {
  return request(`/api/risk-market/flink/updateTable`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function deleteFlinkTableById(tableId) {
  return request(`/api/risk-market/flink/deleteTable?tableId=${tableId}`, {
    method: 'GET',
  });
}

export async function searchFlinkTableByName(tableName) {
  return request(`/api/risk-market/flink/fetchFlinkTablesByFuzzyName?tableName=${tableName}`, {
    method: 'GET',
  });
}

export async function addFlinkTable(params) {
  return request(`/api/data-source/add.json`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function cleanFlinkFile(params) {
  return request(`/api/risk-market/flink/cleanFlinkFile`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function exportFlinkFile(params) {
  return request(`/api/risk-market/flink/exportFlinkFile?tableId=${params}`, {
    method: 'GET',
    responseType: 'blob',
  })
}

export async function exportFlinkTableConfigs(params) {
  return request(`/api/risk-market/flink/exportFlinkTableConfigs`, {
    method: 'POST',
    data: {
      ...params,
    },
    responseType: 'blob',
  });
}

export async function copyFileListAction(params) {
  return request(`/api/risk-market/flink/copyFileListAction`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

/*risk_flink_table operation*/
export async function fetchTableInfoById(tableId) {
  return request(`/api/risk-market/flink/fetchTableInfo?tableId=${tableId}`, {
    method: 'GET',
  });
}

export async function fetchColumnsByTableId(tableId) {
  return request(`/api/risk-market/flink/fetchColumnsInfo?tableId=${tableId}`, {
    method: 'GET',
  });
}

export async function fetchColumnsByFileId(fileId) {
  return request(`/api/risk-market/flink/fetchColumnsByFileId?fileId=${fileId}`, {
    method: 'GET',
  });
}

export async function deleteTableColumn(columnId) {
  return request(`/api/risk-market/flink/deleteTableColumn?columnId=${columnId}`, {
    method: 'POST',
    data: {
      ...columnId,
    },
  })
}

export async function queryGraph(tableName) {
  return request(`/bmarket/data-set-relation/graph.json?name=${tableName}`);
}

export async function updateTableColumn(params) {
  return request(`/api/risk-market/flink/updateTableColumn`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function adjustColumnOrder(params) {
  return request(`/api/risk-market/flink/adjustColumnOrder`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

export async function queryDataSetFlow(dataSetName) {
  return request(`/bmarket/data-set-event-flow/flow.json?dataSetName=${dataSetName}`);
}

/*risk_flink_column operation*/
export async function addTableColumn(params) {
  return request(`/api/risk-market/flink/addTableColumn`, {
    method: 'POST',
    data: {
      ...params,
    },
  })
}

//上传文档
export function uploadFlinkFile(payload) {
  return request(`/api/risk-market/flink/uploadFile`, {
    method: 'POST',
    data: payload,
  })
}


