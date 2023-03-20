package com.sapphire.stock.analysis.biz.entity;

import com.sapphire.stock.analysis.biz.entity.aware.PartitionDateAware;
import com.sapphire.stock.analysis.biz.entity.aware.StockCodeAware;
import com.sapphire.stock.analysis.biz.entity.aware.TaskChainAware;
import com.sapphire.stock.analysis.core.model.StockInfo;
import lombok.Getter;
import lombok.Setter;

/**
 * @author 柏云鹏
 * @since 2023/3/19.
 */
@Getter
@Setter
public class DigestEntity extends BaseEntity implements PartitionDateAware, TaskChainAware, StockCodeAware {

    private String code;

    private StockInfo stockInfo;

    private String partitionDate;

    private String startDate;

    private String endDate;

    @Override
    public String getNextDate() {
        return this.endDate;
    }

    @Override
    public String getTaskType() {
        return "STOCK_INFO_REGRESSION";
    }
}
