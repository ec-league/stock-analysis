package com.sapphire.stock.analysis.common.integration.client;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.sapphire.stock.analysis.common.integration.out.FlinkResponse;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Service
public class FlinkClient {
    private static final Logger logger                  = LoggerFactory
        .getLogger(FlinkClient.class);

    private static final String QUERY_JOB_STATUS_FORMAT = "http://%s/jobs/%s";

    private static final String QUERY_FREE_SLOT         = "http://%s/taskmanagers";

    private static final String STOP_JOB_FORMAT         = "http://%s/jobs/%s/yarn-cancel";

    private static final String QUERY_FREE_SLOT_URL     = "http://%s/overview";

    private static final String FLINK_HOST              = "flinkHost";

    @Value("${flink.host:127.0.0.1:8081}")
    private String              flinkHost;

    @Autowired
    private RestTemplate        restTemplate;

    /**
     * 查询任务状态, 当查询成功的情况下, 返回成功, 上游需要依赖状态码
     * 当查询失败的情况下, 返回失败
     * @param jobId
     * @return
     */
    public FlinkResponse queryJobStatus(String jobId) {
        String url = String.format(QUERY_JOB_STATUS_FORMAT, flinkHost, jobId);

        ResponseEntity<String> responseEntity = restTemplate.getForEntity(url, String.class);

        if (responseEntity.getStatusCode().is2xxSuccessful()) {
            FlinkResponse response = new FlinkResponse();

            response.setSuccess(true);
            String body = responseEntity.getBody();

            JSONObject jsonObject = JSON.parseObject(body);

            String state = jsonObject.getString("state");

            Map<String, String> context = new HashMap<String, String>();
            context.put("state", state);
            response.setContext(context);

            return response;
        } else {
            FlinkResponse response = new FlinkResponse();
            response.setSuccess(false);
            response.setErrorCode(responseEntity.getStatusCode().name());
            response.setErrorMsg(responseEntity.getStatusCode().getReasonPhrase());
            return response;
        }
    }

    public int queryFreeSlotNum() {
        String url = String.format(QUERY_FREE_SLOT_URL, flinkHost);

        ResponseEntity<String> responseEntity = restTemplate.getForEntity(url, String.class);

        if (responseEntity.getStatusCode().is2xxSuccessful()) {
            String body = responseEntity.getBody();
            JSONObject jsonObject = JSON.parseObject(body);
            int maxFreeSlot = jsonObject.getInteger("slots-available");

            return maxFreeSlot - 1;
        } else {
            return -1;
        }
    }

    /**
     * 查询任务状态, 如果是不是FINISHED则停止
     * 当查停止失败的情况下, 返回失败
     * @param jobId
     * @return
     */
    public boolean stopFlinkJob(String jobId) {
        try {
            FlinkResponse flinkResponse = queryJobStatus(jobId);
            if (!flinkResponse.isSuccess()) {
                return false;
            }

            String state = flinkResponse.getContext().get("state");
            if (StringUtils.equals(state, "FINISHED")) {
                return true;
            }

            String url = String.format(STOP_JOB_FORMAT, flinkHost, jobId);
            ResponseEntity<String> responseEntity = restTemplate.getForEntity(url, String.class);

            if (responseEntity.getStatusCode().is2xxSuccessful()) {
                return true;
            } else {
                return false;
            }
        } catch (Exception e) {
            return false;
        }
    }

    /**
     * 查询可用slot数量
     * @return
     */
    public FlinkResponse queryFreeSlot() {

        String url = String.format(QUERY_FREE_SLOT, flinkHost);

        ResponseEntity<String> responseEntity = restTemplate.getForEntity(url, String.class);

        if (responseEntity.getStatusCode().is2xxSuccessful()) {
            FlinkResponse response = new FlinkResponse();

            response.setSuccess(true);
            String body = responseEntity.getBody();

            JSONObject jsonObject = JSON.parseObject(body);

            JSONArray taskmanagers = jsonObject.getJSONArray("taskmanagers");
            long maxFreeSlot = 0;
            for (int size = 0; size < taskmanagers.size(); size++) {
                JSONObject taskManageInfo = taskmanagers.getJSONObject(size);
                long freeSlots = taskManageInfo.getLong("freeSlots");
                if (freeSlots > maxFreeSlot) {
                    maxFreeSlot = freeSlots;
                }
            }

            Map<String, String> context = new HashMap<String, String>();
            context.put("freeSlots", String.valueOf(maxFreeSlot));
            response.setContext(context);

            return response;
        } else {
            FlinkResponse response = new FlinkResponse();
            response.setSuccess(false);
            response.setErrorCode(responseEntity.getStatusCode().name());
            response.setErrorMsg(responseEntity.getStatusCode().getReasonPhrase());
            return response;
        }
    }
}
