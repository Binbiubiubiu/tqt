/// <reference path="../../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const loadSubPackageReturn = Taro.loadSubPackage({
  packages: ["root1", "root2"], // 必填，注意只能使用root名称
  preload: "wifi", // 可选，加上此字段表示下载需要要考虑网络网络，不加此字段表示不管什么网络都预下载
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
expectType<Promise<TqtTBGeneral.CallbackResult>>(loadSubPackageReturn);
