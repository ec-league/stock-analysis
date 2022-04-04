package com.sapphire.stock.analysis.core.exception;

import com.sapphire.stock.analysis.common.util.exception.ErrorCode;
import com.sapphire.stock.analysis.core.process.exception.ProcessException;

/**
 * Author: 柏云鹏 Date: 2022/4/4.
 */
public class AthenaException extends ProcessException {
    public AthenaException(String msg) {
        super(ErrorCode.SYSTEM_ERROR.name(), msg);
    }

    public AthenaException(Exception e) {
        this(e.getClass().getSimpleName(), e.getMessage());
    }

    public AthenaException(ErrorCode errorCode) {
        super(errorCode.name(), errorCode.getMsg());
    }

    public AthenaException(String errorCode, String errorMsg) {
        super(errorCode, errorMsg);
    }

    public AthenaException(ErrorCode errorCode, String errorMsg) {
        super(errorCode.name(), errorCode.getMsg() + ":" + errorMsg);
    }
}
