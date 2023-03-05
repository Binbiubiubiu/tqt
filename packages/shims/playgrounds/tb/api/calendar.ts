import Taro from "@tarojs/taro";
import { expectType } from "@tqtjs/shared";

Taro.tb
  .addCalendarPlan({
    startDate: "2019-12-24 14:00:00",
    endDate: "2019-12-24 14:05:00",
    title: "日历测试",
    description: "测试",
    remind: 10,
    success(res: TqtGeneral.CallbackResult) {},
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: TqtGeneral.CallbackResult) => {});

Taro.tb
  .checkCalendarPlanIsExist({
    startDate: "2019-12-24 14:00:00",
    endDate: "2019-12-24 14:05:00",
    title: "日历测试",
    success(res: Taro.tb.checkCalendarPlanIsExist.SuccessCallbackResult) {
      expectType<boolean>(res.isExist);
    },
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: Taro.tb.checkCalendarPlanIsExist.SuccessCallbackResult) => {});

Taro.tb
  .cancelCalendarPlan({
    startDate: "2019-12-24 14:00:00",
    endDate: "2019-12-24 14:05:00",
    title: "日历测试",
    success(res: TqtGeneral.CallbackResult) {},
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: TqtGeneral.CallbackResult) => {});
