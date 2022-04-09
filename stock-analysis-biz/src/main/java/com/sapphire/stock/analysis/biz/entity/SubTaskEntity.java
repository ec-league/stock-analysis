package com.sapphire.stock.analysis.biz.entity;

import com.sapphire.stock.analysis.core.model.FlinkGeneralSource;
import lombok.Data;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Data
public class SubTaskEntity extends FlinkTaskEntity {
    private FlinkGeneralSource source;
    private FlinkGeneralSource sink;
}
