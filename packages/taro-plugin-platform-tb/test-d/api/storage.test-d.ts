/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const getStorageInfoReturn = Taro.getStorageInfo({
  success(res) {
    expectType<Taro.getStorageInfo.SuccessCallbackOption>(res);
  },
});
expectType<Promise<Taro.getStorageInfo.SuccessCallbackOption>>(getStorageInfoReturn);
