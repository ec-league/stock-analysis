package com.sapphire.stock.analysis.web.page;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Author: 柏云鹏
 * Date: 2019/7/29.
 */
@RestController("/stock")
public class StockController {

    @RequestMapping("/test")
    @ResponseBody
    public String test() {
        return "Test";
    }
}
