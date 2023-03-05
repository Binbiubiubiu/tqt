import Taro from "@tarojs/taro";
import { expectType } from "@tqtjs/shared";

Taro.tb
  .request({
    url: "",
    method: "",
    headers: { "content-type": "application/json", "x-ada": "dasd" },
    params: { aaa: "bbb", ccc: "dddd" },
    options: { enableSystemParams: true, timeout: 6000 },
    body: { "1111": "22222", "3333": "4444" },
    success(res: Taro.tb.request.SuccessCallbackResult) {
      expectType<string>(res.code);
      expectType<string>(res.content);
    },
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: Taro.tb.request.SuccessCallbackResult) => {});
