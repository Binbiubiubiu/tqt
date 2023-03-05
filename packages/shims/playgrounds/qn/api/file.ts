import Taro from "@tarojs/taro";
import { expectType } from "@tqtjs/shared";

Taro.qn
  .chooseFile({
    count: 1,
    type: 0x01,
    success(res: Taro.qn.chooseFile.SuccessCallbackResult) {
      expectType<Array<string>>(res.apFilePaths);
    },
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: Taro.qn.chooseFile.SuccessCallbackResult) => {});

Taro.qn
  .chooseFileAndGetContent({
    count: 1,
    type: 0x01,
    success(res: Taro.qn.chooseFileAndGetContent.SuccessCallbackResult) {
      expectType<Array<string>>(res.fileContentList);
      expectType<Record<string, string>>(res.fileContentMap);
    },
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: Taro.qn.chooseFileAndGetContent.SuccessCallbackResult) => {});

Taro.qn
  .saveFileToDisk({
    apFilePath: "",
    defaultFileName: "",
    success(res: TqtGeneral.CallbackResult) {},
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: TqtGeneral.CallbackResult) => {});
