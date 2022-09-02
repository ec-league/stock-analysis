package com.sapphire.stock.analysis.biz.entity;

import com.sapphire.stock.analysis.core.model.FlinkGeneralSource;

import lombok.Getter;
import lombok.Setter;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Getter
@Setter
public class SubTaskEntity extends FlinkTaskEntity {
    private FlinkGeneralSource source;
    private FlinkGeneralSource sink;
}
