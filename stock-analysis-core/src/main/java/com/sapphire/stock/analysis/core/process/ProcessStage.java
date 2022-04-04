package com.sapphire.stock.analysis.core.process;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Data
public class ProcessStage {
    private List<String> actions = new ArrayList();
    private String router = "defaultRouter";
}