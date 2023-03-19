/// <reference path="../../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const createCanvasReturn = Taro.createCanvas({
  id: "",
  success(res) {
    expectType<TqtTBGeneral.IAnyObject>(res);
  },
  fail(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<TqtTBGeneral.IAnyObject>>(createCanvasReturn);

const createOffscreenCanvasReturn = Taro.createOffscreenCanvas(10, 10);
expectType<Promise<TqtTBGeneral.IAnyObject>>(createOffscreenCanvasReturn);
