package com.sapphire.stock.analysis.biz.process;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang.builder.ToStringBuilder;
import org.springframework.core.io.Resource;

import com.sapphire.stock.analysis.common.util.JsonUtils;
import com.sapphire.stock.analysis.core.process.ProcessConfig;
import com.sapphire.stock.analysis.core.process.ProcessConfigImpl;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.process.cache.ProcessConfigCache;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Slf4j
public class ProcessConfigCacheImpl implements ProcessConfigCache {

    private Resource[]                 resources;

    private Map<String, ProcessConfig> processConfigMap;

    @PostConstruct
    private void init() {
        if (resources == null || resources.length == 0) {
            log.warn("ProcessConfigCache init failed! Templates is empty!");
            return;
        }

        Map<String, ProcessConfig> tempMap = new HashMap<>();

        try {
            for (Resource resource : resources) {
                String fileName = resource.getFilename();
                String key = fileName.substring(0, fileName.indexOf(".json"));

                String content = IOUtils.toString(resource.getInputStream());

                ProcessConfig config = JsonUtils.fromJson(content, ProcessConfigImpl.class);

                tempMap.put(key, config);
            }

            processConfigMap = tempMap;

            log.info("ProcessConfigCache init success! configMap="
                     + ToStringBuilder.reflectionToString(processConfigMap));
        } catch (Exception e) {
            log.error("ProcessConfigCache init failed!", e);
        }
    }

    @Override
    public ProcessConfig getProcessConfig(ProcessContext processContext) {
        String key = null;
        ProcessConfig config = null;
        try {
            key = processContext.getProductCode() + "_" + processContext.getBusinessCode();

            config = processConfigMap.get(key);

            return config;
        } finally {
            log.info("Select processConfig, key={}, config={}", key, config);
        }
    }

    public void setResources(Resource[] resources) {
        this.resources = resources;
    }
}
