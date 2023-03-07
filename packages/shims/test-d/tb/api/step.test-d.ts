/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

Taro.tb
  .getStepsHistory(
    {
      startTime: "20210909",
      endTime: "20210909",
    },
    (res: Taro.tb.getStepsHistory.SuccessCallbackResult) => {
      expectType<Array<number>>(res.stepsHistory);
    },
  )
  .then((res: Taro.tb.getStepsHistory.SuccessCallbackResult) => {});

Taro.tb
  .getDailySteps({}, (res: Taro.tb.getDailySteps.SuccessCallbackResult) => {
    expectType<number>(res.todayTotalSteps);
  })
  .then((res: Taro.tb.getDailySteps.SuccessCallbackResult) => {});

Taro.tb
  .supportStepCount({}, (res: Taro.tb.supportStepCount.SuccessCallbackResult) => {
    expectType<boolean>(res.support);
  })
  .then((res: Taro.tb.supportStepCount.SuccessCallbackResult) => {});

Taro.tb
  .stepsAuthorizeStatus({}, (res: Taro.tb.stepsAuthorizeStatus.SuccessCallbackResult) => {
    expectType<boolean>(res.status);
  })
  .then((res: Taro.tb.stepsAuthorizeStatus.SuccessCallbackResult) => {});

Taro.tb
  .requestStepsAuthorization({}, (res: Taro.tb.requestStepsAuthorization.SuccessCallbackResult) => {
    expectType<boolean>(res.success);
  })
  .then((res: Taro.tb.requestStepsAuthorization.SuccessCallbackResult) => {});

Taro.tb
  .setStepCountStatus(
    {
      status: true,
    },
    (res: TqtGeneral.CallbackResult) => {},
  )
  .then((res: TqtGeneral.CallbackResult) => {});

Taro.tb
  .getStepsStatus({}, (res: Taro.tb.getStepsStatus.SuccessCallbackResult) => {
    expectType<boolean>(res.status);
  })
  .then((res: Taro.tb.getStepsStatus.SuccessCallbackResult) => {});

Taro.tb
  .requestManufacturerPermission({}, (res: TqtGeneral.CallbackResult) => {})
  .then((res: TqtGeneral.CallbackResult) => {});

Taro.tb
  .checkManufacturerPermission(
    {},
    (res: Taro.tb.checkManufacturerPermission.SuccessCallbackResult) => {
      expectType<boolean>(res.status);
    },
  )
  .then((res: Taro.tb.checkManufacturerPermission.SuccessCallbackResult) => {});

Taro.tb
  .checkManufacturerPermission(
    {},
    (res: Taro.tb.checkManufacturerPermission.SuccessCallbackResult) => {
      expectType<boolean>(res.status);
    },
  )
  .then((res: Taro.tb.checkManufacturerPermission.SuccessCallbackResult) => {});

Taro.tb
  .requestSensorPermission({}, (res: TqtGeneral.CallbackResult) => {})
  .then((res: TqtGeneral.CallbackResult) => {});

Taro.tb
  .checkSensorPermission({}, (res: Taro.tb.checkSensorPermission.SuccessCallbackResult) => {
    expectType<boolean>(res.status);
  })
  .then((res: Taro.tb.checkSensorPermission.SuccessCallbackResult) => {});
