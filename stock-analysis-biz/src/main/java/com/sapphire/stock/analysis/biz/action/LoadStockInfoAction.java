package com.sapphire.stock.analysis.biz.action;

import com.sapphire.stock.analysis.biz.entity.DigestEntity;
import com.sapphire.stock.analysis.core.model.StockInfo;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.process.exception.ProcessException;
import com.sapphire.stock.analysis.core.repo.StockInfoRepository;

import javax.annotation.Resource;

/**
 * @author 柏云鹏
 * @since 2023/3/19.
 */
@Action("loadStockInfoAction")
public class LoadStockInfoAction implements BusinessAction {

    @Resource
    private StockInfoRepository stockInfoRepository;

    @Override
    public void process(ProcessContext context) {
        DigestEntity entity = context.getEntity();

        StockInfo stockInfo = stockInfoRepository.selectByCode(entity.getCode());

        if (stockInfo == null) {
            throw new ProcessException("STOCK_CODE_NOT_EXISTS", "未配置股票标准信息, 无法回溯!");
        }
    }
}
