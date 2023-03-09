/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const createWebViewContextReturn = Taro.createWebViewContext("web-view-1");
expectType<Taro.createWebViewContext.WebViewContext>(createWebViewContextReturn);

expectType<(e: TqtTBGeneral.IAnyObject) => void>(Taro.onMessage);
expectType<(e: TqtTBGeneral.IUnknownObject) => void>(Taro.postMessage);
