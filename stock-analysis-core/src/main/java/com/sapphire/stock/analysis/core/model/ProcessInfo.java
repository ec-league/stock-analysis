package com.sapphire.stock.analysis.core.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Author: 柏云鹏
 * Date: 2021/11/2.
 */
public class ProcessInfo {
    private Date         startTime;
    private List<String> infos = new ArrayList<>();

    public List<String> getInfos() {
        return infos;
    }

    public void setInfos(List<String> infos) {
        this.infos = infos;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }
}
