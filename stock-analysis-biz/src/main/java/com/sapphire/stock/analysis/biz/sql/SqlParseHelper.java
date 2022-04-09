package com.sapphire.stock.analysis.biz.sql;

import java.util.ArrayDeque;
import java.util.Deque;

import org.apache.calcite.config.Lex;
import org.apache.calcite.sql.*;
import org.apache.calcite.sql.parser.SqlParseException;
import org.apache.calcite.sql.parser.SqlParser;
import org.apache.flink.sql.parser.impl.FlinkSqlParserImpl;

/**
 * Author: 柏云鹏 Date: 2022/4/9.
 */
public class SqlParseHelper {

    private static final SqlParser.Config CONFIG = SqlParser.configBuilder()
        .setParserFactory(FlinkSqlParserImpl.FACTORY).setLex(Lex.MYSQL).build();

    public static Deque<SqlNode> parse(String sql) throws SqlParseException {
        SqlParser sqlParser = SqlParser.create(sql, CONFIG);
        SqlNode sqlNode = sqlParser.parseStmt();
        Deque<SqlNode> deque = new ArrayDeque<>();
        parse(sqlNode, deque);
        return deque;
    }

    public static SqlNodeList parseSqlNodeList(String sql) throws SqlParseException {
        SqlParser sqlParser = SqlParser.create(sql, CONFIG);

        return sqlParser.parseStmtList();
    }

    private static void parse(SqlNode sqlNode, Deque<SqlNode> deque) {
        deque.offer(sqlNode);
        SqlKind sqlKind = sqlNode.getKind();
        switch (sqlKind) {
            case INSERT:
                SqlNode sqlSource = ((SqlInsert) sqlNode).getSource();
                parse(sqlSource, deque);
                break;
            case SELECT:
                SqlNode sqlFrom = ((SqlSelect) sqlNode).getFrom();
                parse(sqlFrom, deque);
                break;
            case JOIN:
                SqlNode sqlLeft = ((SqlJoin) sqlNode).getLeft();
                SqlNode sqlRight = ((SqlJoin) sqlNode).getRight();
                parse(sqlLeft, deque);
                parse(sqlRight, deque);
                break;
            case AS:
                SqlNode sqlAs = ((SqlBasicCall) sqlNode).getOperands()[0];
                parse(sqlAs, deque);
                break;
            default:
                return;
        }
    }
}
