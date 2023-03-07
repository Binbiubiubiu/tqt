/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const qnChooseFileReturn = Taro.qn.chooseFile({
  count: 1,
  type: 0x01,
  success(res: Taro.qn.chooseFile.SuccessCallbackResult) {
    expectType<Array<string>>(res.apFilePaths);
  },
  fail(res: TqtGeneral.CallbackResult) {},
  complete(res: TqtGeneral.CallbackResult) {},
});
expectType<Promise<Taro.qn.chooseFile.SuccessCallbackResult>>(qnChooseFileReturn);

const qnChooseFileAndGetContentReturn = Taro.qn.chooseFileAndGetContent({
  count: 1,
  type: 0x01,
  success(res: Taro.qn.chooseFileAndGetContent.SuccessCallbackResult) {
    expectType<Array<string>>(res.fileContentList);
    expectType<Record<string, string>>(res.fileContentMap);
  },
  fail(res: TqtGeneral.CallbackResult) {},
  complete(res: TqtGeneral.CallbackResult) {},
});
expectType<Promise<Taro.qn.chooseFileAndGetContent.SuccessCallbackResult>>(
  qnChooseFileAndGetContentReturn,
);

const qnSaveFileToDiskReturn = Taro.qn.saveFileToDisk({
  apFilePath: "",
  defaultFileName: "",
  success(res: TqtGeneral.CallbackResult) {},
  fail(res: TqtGeneral.CallbackResult) {},
  complete(res: TqtGeneral.CallbackResult) {},
});
expectType<Promise<TqtGeneral.CallbackResult>>(qnSaveFileToDiskReturn);
