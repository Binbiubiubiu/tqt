import { needPromiseSfcApis } from "./apis-list";
import { promisefy } from "@tqtjs/shared/convert";

export function initApi(taro: any) {
  taro.qn = {};
  promisefy(taro.qn, my.qn, needPromiseSfcApis);
}
