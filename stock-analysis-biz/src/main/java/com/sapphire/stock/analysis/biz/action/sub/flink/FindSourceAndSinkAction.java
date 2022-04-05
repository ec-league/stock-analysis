package com.sapphire.stock.analysis.biz.action.sub.flink;

import com.sapphire.stock.analysis.biz.action.Action;
import com.sapphire.stock.analysis.biz.entity.FlinkTaskEntity;
import com.sapphire.stock.analysis.biz.entity.helper.SourceModel;
import com.sapphire.stock.analysis.core.process.BusinessAction;
import com.sapphire.stock.analysis.core.process.ProcessContext;
import org.apache.calcite.sql.*;
import org.apache.calcite.sql.fun.SqlCase;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
@Action("findSourceAndSinkAction")
public class FindSourceAndSinkAction implements BusinessAction {
    private static final Logger logger = LoggerFactory.getLogger(FindSourceAndSinkAction.class);

    @Override
    public void process(ProcessContext processContext) {
        FlinkTaskEntity entity = processContext.getEntity();

        SqlNodeList sqlNodeList = entity.getSqlNodeList();

        Map<String, SourceModel> sourceModelMap = new HashMap<>();
        Map<String, SourceModel> sinkModelMap = new HashMap<>();

        for (SqlNode sqlNode : sqlNodeList) {
            visit(sqlNode, sourceModelMap, sinkModelMap);
        }

        entity.setSourceModelMap(sourceModelMap);
        entity.setSinkModelMap(sinkModelMap);

        logger.info("Start to check if exists ");
    }

    private void visit(SqlNode sqlNode, Map<String, SourceModel> sourceModelMap,
                       Map<String, SourceModel> sinkModelMap) {
        if (sqlNode instanceof SqlInsert) {
            SqlInsert sqlInsert = (SqlInsert) sqlNode;

            SqlNode targetTable = sqlInsert.getTargetTable();
            register(targetTable.toString(), sinkModelMap);

            SqlNode source = sqlInsert.getSource();
            visit(source, sourceModelMap);
        } else if (sqlNode instanceof SqlSelect) {
            SqlSelect sqlSelect = (SqlSelect) sqlNode;

            SqlNode from = sqlSelect.getFrom();

            if (from instanceof SqlBasicCall) {
                SqlBasicCall sqlBasicCall = (SqlBasicCall) from;
                visit(sqlBasicCall, sourceModelMap);
            } else if (from instanceof SqlJoin) {
                SqlJoin sqlJoin = (SqlJoin) from;

                SqlNode left = sqlJoin.getLeft();
                SqlNode right = sqlJoin.getRight();

                visit(left, sourceModelMap);
                visit(right, sourceModelMap);
            } else if (from instanceof SqlIdentifier) {
                SqlIdentifier sqlIdentifier = (SqlIdentifier) from;
                register(sqlIdentifier.toString(), sourceModelMap);
            }

            visit(sqlSelect.getWhere(), sourceModelMap);
        }
    }

    private void visit(SqlNode sqlNode, Map<String, SourceModel> sourceModelMap) {
        if (sqlNode == null) {
            return;
        }

        if (sqlNode instanceof SqlBasicCall) {
            SqlBasicCall sqlBasicCall = (SqlBasicCall) sqlNode;

            SqlNode[] operands = sqlBasicCall.getOperands();

            if (sqlBasicCall.getKind() == SqlKind.AS) {
                visit(operands[0], sourceModelMap);
            } else if (sqlBasicCall.getKind() == SqlKind.IN
                    || sqlBasicCall.getKind() == SqlKind.NOT_IN) {
                SqlNode operand = operands[1];

                if (operand instanceof SqlSelect) {
                    visit(operand, sourceModelMap);
                }
            } else {
                for (SqlNode operand : operands) {
                    if (operand instanceof SqlIdentifier) {
                        continue;
                    }
                    visit(operand, sourceModelMap);
                }
            }
        } else if (sqlNode instanceof SqlIdentifier) {
            SqlIdentifier sqlIdentifier = (SqlIdentifier) sqlNode;
            register(sqlIdentifier.toString(), sourceModelMap);
        } else if (sqlNode instanceof SqlSelect) {
            SqlSelect sqlSelect = (SqlSelect) sqlNode;
            visit(sqlSelect.getFrom(), sourceModelMap);
            SqlNodeList selectList = sqlSelect.getSelectList();
            List<SqlNode> list = selectList.getList();

            for (SqlNode node : list) {
                if (node instanceof SqlIdentifier) {
                    continue;
                }
                visitSelectNode(node, sourceModelMap);
            }

            visit(sqlSelect.getWhere(), sourceModelMap);
        } else if (sqlNode instanceof SqlJoin) {
            SqlJoin sqlJoin = (SqlJoin) sqlNode;
            visit(sqlJoin.getLeft(), sourceModelMap);
            visit(sqlJoin.getRight(), sourceModelMap);
        } else if (sqlNode instanceof SqlOrderBy) {
            SqlOrderBy orderBy = (SqlOrderBy) sqlNode;
            visit(orderBy.query, sourceModelMap);
        } else if (sqlNode instanceof SqlCase) {
            SqlCase sqlCase = (SqlCase) sqlNode;

            for (SqlNode whenOperand : sqlCase.getWhenOperands()) {
                if (whenOperand instanceof SqlIdentifier) {
                    continue;
                }

                visitSelectNode(whenOperand, sourceModelMap);
            }

            for (SqlNode thenOperand : sqlCase.getThenOperands()) {
                if (thenOperand instanceof SqlIdentifier) {
                    continue;
                }

                visitSelectNode(thenOperand, sourceModelMap);
            }

            visitSelectNode(sqlCase.getElseOperand(), sourceModelMap);
        }
    }

    private void visitSelectNode(SqlNode sqlNode, Map<String, SourceModel> sourceModelMap) {
        if (sqlNode == null) {
            return;
        }

        if (sqlNode instanceof SqlIdentifier) {
            return;
        } else if (sqlNode instanceof SqlBasicCall) {
            SqlBasicCall sqlBasicCall = (SqlBasicCall) sqlNode;

            switch (sqlBasicCall.getKind()) {
                case IN:
                case NOT_IN:
                    visit(sqlBasicCall.getOperands()[1], sourceModelMap);
                    return;
                case AS:
                    SqlNode node = sqlBasicCall.getOperands()[0];

                    if (node instanceof SqlIdentifier) {
                        return;
                    }

                    visit(node, sourceModelMap);
                    return;
                default:
                    for (SqlNode operand : sqlBasicCall.getOperands()) {
                        if (operand instanceof SqlIdentifier) {
                            continue;
                        }
                        visit(operand, sourceModelMap);
                    }
            }
        }
    }

    private void register(String name, Map<String, SourceModel> sourceMap) {
        if (sourceMap.containsKey(name)) {
            return;
        }

        String schema = "";
        String tableName = name;

        if (name.contains(".")) {
            String[] ss = name.split("\\.");
            schema = ss[0];
            tableName = ss[1];
        }

        SourceModel sourceModel = new SourceModel();
        sourceModel.setSchemaName(schema);
        sourceModel.setTableName(tableName);

        sourceMap.put(name, sourceModel);
    }

}
