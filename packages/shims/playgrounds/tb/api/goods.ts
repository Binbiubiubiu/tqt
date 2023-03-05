import Taro from "@tarojs/taro";
import { expectType } from "@tqtjs/shared";

Taro.tb
  .collectGoods({
    id: 0,
    success(res: TqtGeneral.CallbackResult) {},
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: TqtGeneral.CallbackResult) => {});

Taro.tb
  .unCollectGoods({
    id: 0,
    success(res: TqtGeneral.CallbackResult) {},
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: TqtGeneral.CallbackResult) => {});

Taro.tb
  .checkGoodsCollectedStatus({
    id: 0,
    success(res: Taro.tb.checkGoodsCollectedStatus.SuccessCallbackResult) {
      expectType<number>(res.id);
      expectType<boolean>(res.isCollect);
    },
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: Taro.tb.checkGoodsCollectedStatus.SuccessCallbackResult) => {});

Taro.tb
  .openDetail({
    itemId: "576308890723",
    forceH5: true,
    success(res: TqtGeneral.CallbackResult) {},
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: TqtGeneral.CallbackResult) => {});
