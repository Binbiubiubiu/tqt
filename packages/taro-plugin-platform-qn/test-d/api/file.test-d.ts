/// <reference path="../setup.d.ts" />

import Taro from "@tarojs/taro";
import { expectType } from "tsd";

const qnChooseFileReturn = Taro.qn.chooseFile({
  count: 1,
  type: 0x01,
  success(res) {
    expectType<Taro.qn.chooseFile.SuccessCallbackResult>(res);
    expectType<Array<string>>(res.apFilePaths);
  },
  fail(res) {
    expectType<TqtQNGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtQNGeneral.CallbackResult>(res);
  },
});
expectType<Promise<Taro.qn.chooseFile.SuccessCallbackResult>>(qnChooseFileReturn);

const qnChooseFileAndGetContentReturn = Taro.qn.chooseFileAndGetContent({
  count: 1,
  type: 0x01,
  success(res) {
    expectType<Taro.qn.chooseFileAndGetContent.SuccessCallbackResult>(res);
    expectType<Array<string>>(res.fileContentList);
    expectType<Record<string, string>>(res.fileContentMap);
  },
  fail(res) {
    expectType<TqtQNGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtQNGeneral.CallbackResult>(res);
  },
});
expectType<Promise<Taro.qn.chooseFileAndGetContent.SuccessCallbackResult>>(
  qnChooseFileAndGetContentReturn,
);

const qnSaveFileToDiskReturn = Taro.qn.saveFileToDisk({
  apFilePath: "",
  defaultFileName: "",
  success(res) {
    expectType<TqtQNGeneral.CallbackResult>(res);
  },
  fail(res) {
    expectType<TqtQNGeneral.CallbackResult>(res);
  },
  complete(res) {
    expectType<TqtQNGeneral.CallbackResult>(res);
  },
});
expectType<Promise<TqtQNGeneral.CallbackResult>>(qnSaveFileToDiskReturn);
