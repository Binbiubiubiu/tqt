/// <reference path="../../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

Taro.compressImage({
  src: "",
  compressLevel: 1,
  success(res) {
    expectType<Array<string>>(res.apFilePaths);
  },
});

const saveImageReturn = Taro.saveImage({
  url: "",
  showActionSheet: false,
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
expectType<Promise<TqtTBGeneral.CallbackResult>>(saveImageReturn);
