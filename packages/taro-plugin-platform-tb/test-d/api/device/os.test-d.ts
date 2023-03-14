/// <reference path="../../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

Taro.getSystemInfo({
  success(res) {
    expectType<number>(res.titleBarHeight);
  },
});

const getSystemInfoSyncReturn = Taro.getSystemInfoSync();
expectType<number>(getSystemInfoSyncReturn.titleBarHeight);
