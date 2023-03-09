/// <reference path="../../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const cityPickerReturn = Taro.chooseCity({
  cities: [
    {
      city: "朝阳区",
      adCode: "110105",
      spell: "chaoyang",
    },
    {
      city: "海淀区",
      adCode: "110108",
      spell: "haidian",
    },
    {
      city: "丰台区",
      adCode: "110106",
      spell: "fengtai",
    },
    {
      city: "东城区",
      adCode: "110101",
      spell: "dongcheng",
    },
    {
      city: "西城区",
      adCode: "110102",
      spell: "xicheng",
    },
    {
      city: "房山区",
      adCode: "110111",
      spell: "fangshan",
    },
  ],
  hotCities: [
    {
      city: "朝阳区",
      adCode: "110105",
    },
    {
      city: "海淀区",
      adCode: "110108",
    },
    {
      city: "丰台区",
      adCode: "110106",
    },
  ],
  success(res) {
    expectType<Taro.chooseCity.SuccessCallbackResult>(res);
  },
  fail(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<Taro.chooseCity.SuccessCallbackResult>>(cityPickerReturn);
