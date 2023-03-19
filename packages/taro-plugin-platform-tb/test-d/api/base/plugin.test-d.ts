/// <reference path="../../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const getParentAppIdSyncReturn = Taro.getParentAppIdSync();
expectType<Taro.getParentAppIdSync.SyncResult>(getParentAppIdSyncReturn);

const loadPluginReturn = Taro.loadPlugin({
  plugin: "2019235609092837@*",
  success(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  fail(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<TqtTBGeneral.CallbackResult>>(loadPluginReturn);
