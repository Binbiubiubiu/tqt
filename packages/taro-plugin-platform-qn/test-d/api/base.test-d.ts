/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

Taro.qn.onStartUp((e) => {
  expectType<TqtQNGeneral.IAnyObject>(e);
});

Taro.qn.onWindowResized((e) => {
  expectType<TqtQNGeneral.IAnyObject>(e);
});

Taro.qn.onImActiveContactChanged((e) => {
  expectType<TqtQNGeneral.IAnyObject>(e);
});
