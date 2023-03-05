import Taro from "@tarojs/taro";
import { expectType } from "@tqtjs/shared";

Taro.qn
  .queryDBSize({
    success(res: Taro.qn.queryDBSize.SuccessCallbackResult) {
      expectType<number>(res.dbSize);
      expectType<number>(res.warningLimit);
      expectType<number>(res.deleteLimit);
    },
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: Taro.qn.queryDBSize.SuccessCallbackResult) => {});

Taro.qn
  .database({
    method: "",
    sql: "",
    success(res: Taro.qn.database.SuccessCallbackResult) {
      expectType<string>(res.data);
      expectType<string>(res.errorMessage!);
    },
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: Taro.qn.database.SuccessCallbackResult) => {});

Taro.qn.onDatabaseLimitWarning((e: TqtGeneral.IAnyObject) => {});

Taro.qn.onDatabaseLimitDebug((e: TqtGeneral.IAnyObject) => {});
