package com.sapphire.stock.analysis.core.cache.impl;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.sapphire.stock.analysis.core.cache.ConfigCache;

/**
 * Author: 柏云鹏
 * Date: 2022/2/23.
 */
@Service
public class ConfigCacheImpl implements ConfigCache {

    @Value("${schedule.master:true}")
    private boolean master;

    @Override
    public boolean isMaster() {
        return this.master;
    }
}
