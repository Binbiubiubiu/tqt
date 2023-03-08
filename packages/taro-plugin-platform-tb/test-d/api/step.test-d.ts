/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const tbGetStepsHistoryReturn = Taro.tb.getStepsHistory(
  {
    startTime: "20210909",
    endTime: "20210909",
  },
  (res) => {
    expectType<Taro.tb.getStepsHistory.SuccessCallbackResult>(res);
    expectType<Array<number>>(res.stepsHistory);
  },
);
expectType<Promise<Taro.tb.getStepsHistory.SuccessCallbackResult>>(tbGetStepsHistoryReturn);

const tbGetDailyStepsReturn = Taro.tb.getDailySteps({}, (res) => {
  expectType<Taro.tb.getDailySteps.SuccessCallbackResult>(res);
  expectType<number>(res.todayTotalSteps);
});
expectType<Promise<Taro.tb.getDailySteps.SuccessCallbackResult>>(tbGetDailyStepsReturn);

const tbSupportStepCountReturn = Taro.tb.supportStepCount({}, (res) => {
  expectType<Taro.tb.supportStepCount.SuccessCallbackResult>(res);
  expectType<boolean>(res.support);
});
expectType<Promise<Taro.tb.supportStepCount.SuccessCallbackResult>>(tbSupportStepCountReturn);

const tbStepsAuthorizeStatusReturn = Taro.tb.stepsAuthorizeStatus({}, (res) => {
  expectType<Taro.tb.stepsAuthorizeStatus.SuccessCallbackResult>(res);
  expectType<boolean>(res.status);
});
expectType<Promise<Taro.tb.stepsAuthorizeStatus.SuccessCallbackResult>>(
  tbStepsAuthorizeStatusReturn,
);

const tbRequestStepsAuthorizationReturn = Taro.tb.requestStepsAuthorization({}, (res) => {
  expectType<Taro.tb.requestStepsAuthorization.SuccessCallbackResult>(res);
  expectType<boolean>(res.success);
});
expectType<Promise<Taro.tb.requestStepsAuthorization.SuccessCallbackResult>>(
  tbRequestStepsAuthorizationReturn,
);

const tbSetStepCountStatusReturn = Taro.tb.setStepCountStatus(
  {
    status: true,
  },
  (res) => {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
);
expectType<Promise<TqtTBGeneral.CallbackResult>>(tbSetStepCountStatusReturn);

const tbGetStepsStatusReturn = Taro.tb.getStepsStatus({}, (res) => {
  expectType<Taro.tb.getStepsStatus.SuccessCallbackResult>(res);
  expectType<boolean>(res.status);
});
expectType<Promise<Taro.tb.getStepsStatus.SuccessCallbackResult>>(tbGetStepsStatusReturn);

const tbRequestManufacturerPermissionReturn = Taro.tb.requestManufacturerPermission({}, (res) => {
  expectType<TqtTBGeneral.CallbackResult>(res);
});
expectType<Promise<TqtTBGeneral.CallbackResult>>(tbRequestManufacturerPermissionReturn);

const tbCheckManufacturerPermissionReturn = Taro.tb.checkManufacturerPermission({}, (res) => {
  expectType<Taro.tb.checkManufacturerPermission.SuccessCallbackResult>(res);
  expectType<boolean>(res.status);
});
expectType<Promise<Taro.tb.checkManufacturerPermission.SuccessCallbackResult>>(
  tbCheckManufacturerPermissionReturn,
);

const tbRequestSensorPermissionReturn = Taro.tb.requestSensorPermission({}, (res) => {
  expectType<TqtTBGeneral.CallbackResult>(res);
});
expectType<Promise<TqtTBGeneral.CallbackResult>>(tbRequestSensorPermissionReturn);

const tbCheckSensorPermissionReturn = Taro.tb.checkSensorPermission({}, (res) => {
  expectType<Taro.tb.checkSensorPermission.SuccessCallbackResult>(res);
  expectType<boolean>(res.status);
});
expectType<Promise<Taro.tb.checkSensorPermission.SuccessCallbackResult>>(
  tbCheckSensorPermissionReturn,
);
