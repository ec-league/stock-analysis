package com.sapphire.stock.analysis.biz.entity;

import com.sapphire.stock.analysis.biz.entity.aware.PartitionDateAware;
import com.sapphire.stock.analysis.biz.entity.aware.StockCodeAware;
import com.sapphire.stock.analysis.biz.entity.aware.TaskChainAware;
import com.sapphire.stock.analysis.common.util.DateUtils;
import com.sapphire.stock.analysis.core.model.StockDailyDigest;
import com.sapphire.stock.analysis.core.model.StockInfo;
import com.sapphire.stock.analysis.core.model.StockWideDailyDigest;
import lombok.Getter;
import lombok.Setter;

/**
 * @author 柏云鹏
 * @since 2023/3/19.
 */
@Getter
@Setter
public class WideDigestEntity extends BaseEntity implements PartitionDateAware, TaskChainAware, StockCodeAware {

    private String code;

    private StockInfo stockInfo;

    private String partitionDate;

    private String startDate;

    private String endDate;

    private String lastTradingDay;

    private StockWideDailyDigest lastWideDigest;

    private StockDailyDigest currentDigest;

    private StockWideDailyDigest currentWideDigest;

    @Override
    public String getNextDate() {
        return DateUtils.plusDay(this.partitionDate);
    }

    @Override
    public String getTaskType() {
        return "WIDE_DIGEST_REGRESSION";
    }
}
