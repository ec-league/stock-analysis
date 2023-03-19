package com.sapphire.stock.analysis.biz.action;

import com.sapphire.stock.analysis.biz.entity.DigestEntity;
import com.sapphire.stock.analysis.common.dal.model.StockDailyDigestDO;
import com.sapphire.stock.analysis.common.integration.client.HistoryStockClient;
import com.sapphire.stock.analysis.core.converter.DomainConverter;
import com.sapphire.stock.analysis.core.model.StockDailyDigest;
import com.sapphire.stock.analysis.core.model.StockInfo;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.repo.PartitionDateRepository;
import com.sapphire.stock.analysis.core.repo.StockDailyDigestRepository;
import com.sapphire.stock.analysis.core.repo.StockInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author 柏云鹏
 * @since 2023/3/19.
 */
@Action("queryHistoryDailyDigestAction")
public class QueryHistoryDailyDigestAction implements BusinessAction {

    @Resource
    private HistoryStockClient historyStockClient;

    @Resource
    private StockInfoRepository stockInfoRepository;

    @Resource
    private StockDailyDigestRepository stockDailyDigestRepo;

    @Resource
    private PartitionDateRepository partitionDateRepository;

    @Override
    public void process(ProcessContext context) {
        DigestEntity entity = context.getEntity();

        String code = entity.getCode();
        String startDate = entity.getStartDate();
        String endDate = entity.getEndDate();

        StockInfo stockInfo = entity.getStockInfo();

        List<StockDailyDigestDO> stockDailyDigestDOS = historyStockClient.queryStockHistory(
                code, startDate, endDate);

        String partitionDate = null;

        for (StockDailyDigestDO stockDailyDigestDO : stockDailyDigestDOS) {
            StockDailyDigest domain = DomainConverter.toDomain(stockDailyDigestDO);
            domain.setName(stockInfo.getStockName());
            stockDailyDigestRepo.save(domain);
            partitionDate = stockDailyDigestDO.getPartitionDate();
            partitionDateRepository.save(stockDailyDigestDO.getPartitionDate());
        }

        if (partitionDate != null) {
            stockInfo.getExtInfo().put("partitionDate", partitionDate);

            stockInfoRepository.save(stockInfo);
            partitionDateRepository.save(partitionDate);
        }
    }
}
