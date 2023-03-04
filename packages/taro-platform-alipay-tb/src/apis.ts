import { needPromiseSfcApis, needPromiseCbApis } from "./apis-list";
import { promisefy } from "@tqtjs/shared";

export function initApi(taro: any) {
  taro.tb = {};
  promisefy(taro.tb, my.tb, needPromiseSfcApis, needPromiseCbApis);
}
