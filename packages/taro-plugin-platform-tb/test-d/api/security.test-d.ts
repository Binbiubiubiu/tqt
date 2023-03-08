/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const tbTextRiskIdentificationReturn = Taro.tb.textRiskIdentification({
  data: {
    text: "xxxxxx",
  },
  success(res) {
    expectType<Taro.tb.textRiskIdentification.SuccessCallbackResult>(res);
    expectType<string>(res.suggestion);
    const item = res.check_results[0];
    expectType<string>(item.label);
    expectType<string>(item.suggestion);
    expectType<string>(item.rate);
    expectType<string>(item.scene);
  },
  fail(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<Taro.tb.textRiskIdentification.SuccessCallbackResult>>(
  tbTextRiskIdentificationReturn,
);

const tbImgRiskReturn = Taro.tb.imgRisk({
  data: {
    cloudFileId: "xxxxxx",
  },
  success(res) {
    expectType<Taro.tb.imgRisk.SuccessCallbackResult>(res);
    expectType<string>(res.suggestion);
    const item = res.check_results[0];
    expectType<string>(item.label);
    expectType<string>(item.suggestion);
    expectType<string>(item.rate);
    expectType<string>(item.scene);
  },
  fail(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<Taro.tb.imgRisk.SuccessCallbackResult>>(tbImgRiskReturn);

const tbRreventCheatReturn = Taro.tb.preventCheat({
  success(res) {
    expectType<Taro.tb.preventCheat.SuccessCallbackResult>(res);
    expectType<number>(res.riskRank);
    expectType<boolean>(res.safe);
  },
  fail(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<Taro.tb.preventCheat.SuccessCallbackResult>>(tbRreventCheatReturn);
