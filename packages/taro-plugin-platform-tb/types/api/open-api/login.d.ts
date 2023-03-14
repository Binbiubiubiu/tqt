import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace login {
    interface SuccessCallbackResult extends Taro.authorizes.SuccessCallbackResult {}
  }
}
