package com.sapphire.stock.analysis.web.page;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.sapphire.stock.analysis.core.model.StockInfo;
import com.sapphire.stock.analysis.core.repo.StockInfoRepository;
import com.sapphire.stock.analysis.web.dto.Response;

/**
 * Author: 柏云鹏
 * Date: 2019/7/29.
 */
@RestController
@RequestMapping("/api/stock-info")
public class StockInfoController {

    @Autowired
    private StockInfoRepository stockInfoRepository;

    @GetMapping("/list.json")
    public Response<List<StockInfo>> selectAll() {

        List<StockInfo> stockInfoDos = stockInfoRepository.selectAll();

        Response<List<StockInfo>> response = new Response<>();

        response.setData(stockInfoDos);

        return response;
    }

    @PostMapping("/save.json")
    public Response saveStockInfo(@RequestBody StockInfo stockInfo) {

        Response response = new Response();

        response.setSuccess(stockInfoRepository.save(stockInfo));

        return response;
    }
}
