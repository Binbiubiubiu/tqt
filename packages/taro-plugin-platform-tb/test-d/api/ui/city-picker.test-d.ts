/// <reference path="../../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const cityPickerReturn = Taro.chooseCity({
  showLocatedCity: true,
  setLocatedCity: true,
  showHotCities: true,
  customHistoryCities: [
    {
      city: "朝阳区",
      adCode: "110105",
      spell: "chaoyang",
    },
  ],
  cities: [
    {
      city: "朝阳区",
      adCode: "110105",
      spell: "chaoyang",
    },
  ],
  hotCities: [
    {
      city: "朝阳区",
      adCode: "110105",
      spell: "",
    },
  ],
  success(res) {
    expectType<Taro.chooseCity.SuccessCallbackResult>(res);
    expectType<string>(res.adCode);
    expectType<string>(res.city);
    expectType<number>(res.latitude);
    expectType<number>(res.longitude);
  },
  fail(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<Taro.chooseCity.SuccessCallbackResult>>(cityPickerReturn);
