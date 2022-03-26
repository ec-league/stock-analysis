import { request } from 'umi';

export async function fetchScheduleConfig() {
    return request('/api/config/scheduler-config/list.json', {
        method: 'GET',
    });
}