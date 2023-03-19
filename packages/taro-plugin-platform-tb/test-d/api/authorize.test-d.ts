/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const authorizeReturn = Taro.authorize({
  scope: "",
  scopes: "",
  success(res) {
    expectType<Taro.authorizes.SuccessCallbackResult>(res);
    expectType<string>(res.accessToken);
    expectType<TqtTBGeneral.IAnyObject>(res.authErrorScope);
    expectType<Array<string>>(res.authSucessScope);
  },
  fail(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<Taro.authorizes.SuccessCallbackResult>>(authorizeReturn);
