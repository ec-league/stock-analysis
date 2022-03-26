import { PageContainer } from "@ant-design/pro-layout";
import { Table } from "antd";
import { fetchScheduleConfig } from "@/services/Config/ScheduleConfig";
import { useRequest } from "umi";


const ScheduleConfig = () => {

    const { data, loading } = useRequest(() => {
        return fetchScheduleConfig();
    });

    console.log(data);

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '任务类型',
            dataIndex: 'taskType',
            key: 'taskType',
        },
        {
            title: 'cron表达式',
            dataIndex: 'cronExpression',
            key: '',
        },
        {
            title: '捞取条数',
            dataIndex: 'recordLimit',
            key: 'taskType',
        },
        {
            title: '是否生效',
            dataIndex: 'status',
            key: 'taskType',
        },
        {
            title: '配置',
            dataIndex: 'status',
            key: 'taskType',
        },
    ];
    return (
        <PageContainer>
            <Table
                columns={columns}
                loading={loading}
                dataSource={data ? data : []}
            />
        </PageContainer>
    );
}

export default ScheduleConfig;
