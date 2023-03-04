import { needPromiseSfcApis } from "./apis-list";
import { promisefy } from "@tqtjs/shared";

export function initApi(taro: any) {
  taro.qn = {};
  promisefy(taro.qn, my.qn, needPromiseSfcApis);
}
