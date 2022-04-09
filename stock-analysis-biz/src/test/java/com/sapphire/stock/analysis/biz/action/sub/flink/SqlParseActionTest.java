package com.sapphire.stock.analysis.biz.action.sub.flink;

import com.sapphire.stock.analysis.biz.entity.FlinkTaskEntity;
import com.sapphire.stock.analysis.core.model.FlinkSQLJob;
import com.sapphire.stock.analysis.core.model.JobConfig;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

/** 
* SqlParseAction Tester. 
* 
* @author baiyunpeng04
* @since <pre>4月 9, 2022</pre> 
* @version 1.0 
*/
public class SqlParseActionTest {

    @Before
    public void before() throws Exception {
    }

    @Test
    public void test_process_1() throws Exception {
        SqlParseAction service = new SqlParseAction();


        ProcessContext context = new ProcessContext();
        FlinkTaskEntity flinkTaskEntity = new FlinkTaskEntity();

        context.setEntity(flinkTaskEntity);

        FlinkSQLJob flinkSQLJob = new FlinkSQLJob();
        flinkTaskEntity.setFlinkSQLJob(flinkSQLJob);

        flinkSQLJob.setJobConfig(new JobConfig());
        flinkSQLJob.getJobConfig().setSql("insert overwrite a_test\n" +
                "select * from b_test");

        service.process(context);

        Assert.assertNotNull(flinkTaskEntity.getSqlNodeList());
    }

}
