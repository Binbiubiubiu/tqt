/// <reference path="../../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const tbAddCalendarPlanReturn = Taro.tb.addCalendarPlan({
  startDate: "2019-12-24 14:00:00",
  endDate: "2019-12-24 14:05:00",
  title: "日历测试",
  description: "测试",
  remind: 10,
  success(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  fail(res: TqtTBGeneral.CallbackResult) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res: TqtTBGeneral.CallbackResult) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<TqtTBGeneral.CallbackResult>>(tbAddCalendarPlanReturn);

const tbCheckCalendarPlanIsExistReturn = Taro.tb.checkCalendarPlanIsExist({
  startDate: "2019-12-24 14:00:00",
  endDate: "2019-12-24 14:05:00",
  title: "日历测试",
  success(res) {
    expectType<Taro.tb.checkCalendarPlanIsExist.SuccessCallbackResult>(res);
    expectType<boolean>(res.isExist);
  },
  fail(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<Taro.tb.checkCalendarPlanIsExist.SuccessCallbackResult>>(
  tbCheckCalendarPlanIsExistReturn,
);

const tbCancelCalendarPlanReturn = Taro.tb.cancelCalendarPlan({
  startDate: "2019-12-24 14:00:00",
  endDate: "2019-12-24 14:05:00",
  title: "日历测试",
  success(res: TqtTBGeneral.CallbackResult) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  fail(res: TqtTBGeneral.CallbackResult) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res: TqtTBGeneral.CallbackResult) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<TqtTBGeneral.CallbackResult>>(tbCancelCalendarPlanReturn);
