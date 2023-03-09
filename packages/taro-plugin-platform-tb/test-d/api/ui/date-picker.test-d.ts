/// <reference path="../../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const datePickerReturn = Taro.datePicker({
  format: "yyyy-MM-dd",
  currentDate: "2012-12-12",
  startDate: "2012-12-10",
  endDate: "2012-12-15",
  success(res) {
    expectType<Taro.datePicker.SuccessCallbackResult>(res);
  },
  fail(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<Taro.datePicker.SuccessCallbackResult>>(datePickerReturn);
