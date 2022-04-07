import React, { PureComponent } from "react";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import router from "umi/router";
import { connect } from "dva";
import { Button, Card, Form, Input } from "antd";
import { submitFormLayout } from "@/utils/CommonUtils";
import { formItemLayout } from "@/Common";

@connect(({ schedule_job_add }) => ({
  schedule_job_add
}))
@Form.create()
export default class ScheduleAddJob extends PureComponent {
  state = {
    job_info: {}
  }

  handleSubmit = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'schedule_job_add/addScheduleJob',
      payload: this.state.job_info
    })
  }

  handleReset = () => {
    router.push(`/stock-analysis/schedule-job-list`)
  }

  render() {
    return (
      <PageHeaderWrapper title="新增调度任务" content="">
        <Card bordered={false}>
          <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
            <Form.Item {...formItemLayout} name="name" label="任务名称" rules={[{ required: true, message: 'name' }]}>
              <Input
                onChange={e => {
                  this.state.job_info.name = e.target.value
                }}
              />
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              name="cronExpression"
              label="cron表达式"
              rules={[{ required: false, message: 'cronExpression' }]}
            >
              <Input
                onChange={e => {
                  this.state.job_info.cronExpression = e.target.value
                }}
              />
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              name="description"
              label="任务描述"
              rules={[{ required: true, message: 'description' }]}
            >
              <Input
                onChange={e => {
                  this.state.job_info.description = e.target.value
                }}
              />
            </Form.Item>
            <Form.Item {...submitFormLayout}>
              <Button type="primary" onClick={this.handleSubmit}>
                保存
              </Button>
              <Button htmlType="button" onClick={this.handleReset}>
                取消
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </PageHeaderWrapper>
    )
  }
}
