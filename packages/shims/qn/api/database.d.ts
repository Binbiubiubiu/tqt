import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace qn.queryDBSize {
    interface Option {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }
  }

  namespace qn.database {
    interface Option {
      /** 可选值为，单条处理：execSql，批量处理：batchSql */
      method: string;
      /** SQL语句 或 SQL 语句和参数的组合数组 */
      sql?: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.SuccessCallbackResult) => void;
    }

    interface SuccessCallbackResult extends TqtGeneral.CallbackResult {
      /** 当函数返回查询结果，以JSON字符串的形式返回，只有select查询语句会返回有效的数据，其他增删改语句该字段返回空串。批量处理返回值为空 */
      data: string;
    }
  }

  namespace qn.onDatabaseLimitWarning {
    interface Option {
      /** 可选值为，单条处理：execSql，批量处理：batchSql */
      method: string;
      /** SQL语句 或 SQL 语句和参数的组合数组 */
      sql?: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.SuccessCallbackResult) => void;
    }

    interface SuccessCallbackResult extends TqtGeneral.CallbackResult {
      /** 当函数返回查询结果，以JSON字符串的形式返回，只有select查询语句会返回有效的数据，其他增删改语句该字段返回空串。批量处理返回值为空 */
      data: string;
    }
  }

  namespace qn.onDatabaseLimitDebug {
    interface Option {
      /** 可选值为，单条处理：execSql，批量处理：batchSql */
      method: string;
      /** SQL语句 或 SQL 语句和参数的组合数组 */
      sql?: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.SuccessCallbackResult) => void;
    }

    interface SuccessCallbackResult extends TqtGeneral.CallbackResult {
      /** 当函数返回查询结果，以JSON字符串的形式返回，只有select查询语句会返回有效的数据，其他增删改语句该字段返回空串。批量处理返回值为空 */
      data: string;
    }
  }

  interface qn {
    /**
     * 查询当前数据库大小以及系统限制
     * @since 7.13.01N
     */
    queryDBSize(option: qn.queryDBSize.Option): Promise<TqtGeneral.CallbackResult>;
    /**
     * 窗口大小变化
     * @since 7.13.01N
     */
    database(option: qn.database.Option): Promise<qn.database.SuccessCallbackResult>;
    /**
     * 第一次使用 `Taro.qn.database` 时，会检查 `Taro.qn.database` 对应的数据库大小。当数据库大小超过警告值（PC 端默认 100MB）的时候，触发此事件。
     * @since 7.13.01N
     */
    onDatabaseLimitWarning(
      option: qn.onDatabaseLimitWarning.Option,
    ): Promise<qn.onDatabaseLimitWarning.SuccessCallbackResult>;
    /**
     * 第一次使用 `Taro.qn.database` 时，会检查 `Taro.qn.database` 对应的数据库大小。当数据库大小未超过警告值（PC 端默认 100MB）的时候，触发此事件。
     * @since 7.13.01N
     */
    onDatabaseLimitDebug(
      option: qn.onDatabaseLimitDebug.Option,
    ): Promise<qn.onDatabaseLimitDebug.SuccessCallbackResult>;
  }
}
