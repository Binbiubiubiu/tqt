/// <reference path="../../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const tbCollectGoodsReturn = Taro.tb.collectGoods({
  id: 0,
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
expectType<Promise<TqtTBGeneral.CallbackResult>>(tbCollectGoodsReturn);

const tbUnCollectGoodsReturn = Taro.tb.unCollectGoods({
  id: 0,
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
expectType<Promise<TqtTBGeneral.CallbackResult>>(tbUnCollectGoodsReturn);

const tbCheckGoodsCollectedStatusReturn = Taro.tb.checkGoodsCollectedStatus({
  id: 0,
  success(res) {
    expectType<Taro.tb.checkGoodsCollectedStatus.SuccessCallbackResult>(res);
    expectType<number>(res.id);
    expectType<boolean>(res.isCollect);
  },
  fail(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<Taro.tb.checkGoodsCollectedStatus.SuccessCallbackResult>>(
  tbCheckGoodsCollectedStatusReturn,
);

const tbOpenDetailReturn = Taro.tb.openDetail({
  itemId: "576308890723",
  forceH5: true,
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
expectType<Promise<TqtTBGeneral.CallbackResult>>(tbOpenDetailReturn);
