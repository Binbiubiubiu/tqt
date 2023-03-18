/// <reference path="../../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const createArCameraContextReturn = Taro.createArCameraContext("arcamera");
expectType<Promise<TqtTBGeneral.IAnyObject>>(createArCameraContextReturn);
