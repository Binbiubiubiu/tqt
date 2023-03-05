import Taro from "@tarojs/taro";
import { expectType } from "@tqtjs/shared";

Taro.tb
  .textRiskIdentification({
    data: {
      text: "xxxxxx",
    },
    success(res: Taro.tb.textRiskIdentification.SuccessCallbackResult) {
      expectType<string>(res.suggestion);
      const item = res.check_results[0];
      expectType<string>(item.label);
      expectType<string>(item.suggestion);
      expectType<string>(item.rate);
      expectType<string>(item.scene);
    },
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: Taro.tb.textRiskIdentification.SuccessCallbackResult) => {});

Taro.tb
  .imgRisk({
    data: {
      cloudFileId: "xxxxxx",
    },
    success(res: Taro.tb.imgRisk.SuccessCallbackResult) {
      expectType<string>(res.suggestion);
      const item = res.check_results[0];
      expectType<string>(item.label);
      expectType<string>(item.suggestion);
      expectType<string>(item.rate);
      expectType<string>(item.scene);
    },
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: Taro.tb.imgRisk.SuccessCallbackResult) => {});

Taro.tb
  .preventCheat({
    success(res: Taro.tb.preventCheat.SuccessCallbackResult) {
      expectType<number>(res.riskRank);
      expectType<boolean>(res.safe);
    },
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: Taro.tb.preventCheat.SuccessCallbackResult) => {});
