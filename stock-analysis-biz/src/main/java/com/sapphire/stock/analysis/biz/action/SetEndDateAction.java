package com.sapphire.stock.analysis.biz.action;

import com.sapphire.stock.analysis.biz.entity.DigestEntity;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import com.sapphire.stock.analysis.core.process.exception.ProcessException;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * @author 柏云鹏
 * @since 2023/3/19.
 */
@Action("setEndDateAction")
public class SetEndDateAction implements BusinessAction {
    @Override
    public void process(ProcessContext context) {

        DigestEntity entity = context.getEntity();

        try {
            Date start = new SimpleDateFormat("yyyy-MM-dd").parse(entity.getPartitionDate());
            Calendar instance = Calendar.getInstance();
            instance.setTime(start);
            instance.add(Calendar.YEAR, 1);

            String endDate = new SimpleDateFormat("yyyy-MM-dd").format(instance.getTime());

            entity.setEndDate(endDate);
        } catch (Exception e) {
            throw new ProcessException("PARSE_ERROR", "解析日期异常!");
        }
    }
}
