/// <reference path="../../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

Taro.hideLoading({
  page: {},
});

Taro.showLoading({
  title: "",
  delay: 1000,
});

Taro.showActionSheet({
  cancelButtonText: "",
  destructiveBtnIndex: 0,
  itemList: [],
});

const multiLevelSelectReturn = Taro.multiLevelSelect({
  title: "多级联选择器",
  list: [
    {
      name: "杭州市",
      subList: [
        {
          name: "西湖区",
          subList: [{ name: "古翠街道" }, { name: "文新街道" }],
        },
        {
          name: "上城区",
          subList: [{ name: "延安街道" }, { name: "龙翔桥街道" }],
        },
      ],
    },
  ],
  success(res) {
    expectType<Taro.multiLevelSelect.SuccessCallbackResult>(res);
    expectType<Taro.multiLevelSelect.SelectedItem[]>(res.result);
  },
  fail(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<Taro.multiLevelSelect.SuccessCallbackResult>>(multiLevelSelectReturn);

const optionsSelectReturn = Taro.optionsSelect({
  title: "出生年月选择",
  optionsOne: ["2014年", "2013年", "2012年", "2011年", "2010年", "2009年", "2008年"],
  optionsTwo: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ],
  selectedOneIndex: 3,
  selectedTwoIndex: 5,
  success(res) {
    expectType<Taro.optionsSelect.SuccessCallbackResult>(res);
    expectType<number>(res.selectedOneIndex);
    expectType<string>(res.selectedOneOption);
    expectType<number>(res.selectedTwoIndex);
    expectType<string>(res.selectedTwoOption);
  },
  fail(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtTBGeneral.CallbackResult>(res);
  },
});
expectType<Promise<Taro.optionsSelect.SuccessCallbackResult>>(optionsSelectReturn);
