/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const qnQueryDBSizeReturn = Taro.qn.queryDBSize({
  success(res) {
    expectType<Taro.qn.queryDBSize.SuccessCallbackResult>(res);
    expectType<number>(res.dbSize);
    expectType<number>(res.warningLimit);
    expectType<number>(res.deleteLimit);
  },
  fail(res) {
    expectType<TqtQNGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtQNGeneral.CallbackResult>(res);
  },
});
expectType<Promise<Taro.qn.queryDBSize.SuccessCallbackResult>>(qnQueryDBSizeReturn);

const qnDatabaseReturn = Taro.qn.database({
  method: "",
  sql: "",
  success(res) {
    expectType<Taro.qn.database.SuccessCallbackResult>(res);
    expectType<string>(res.data);
    expectType<string>(res.errorMessage!);
  },
  fail(res) {
    expectType<TqtQNGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtQNGeneral.CallbackResult>(res);
  },
});
expectType<Promise<Taro.qn.database.SuccessCallbackResult>>(qnDatabaseReturn);

Taro.qn.onDatabaseLimitWarning((e) => {
  expectType<TqtQNGeneral.IAnyObject>(e);
});

Taro.qn.onDatabaseLimitDebug((e) => {
  expectType<TqtQNGeneral.IAnyObject>(e);
});
