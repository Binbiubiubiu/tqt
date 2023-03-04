import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace tb.chooseAddress {
    interface Option {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }

    interface SuccessCallbackResult extends TqtGeneral.CallbackResult {
      /** 返回结构类型。`deliveryAddress`：收货地址 */
      type: string;
      /** 收货人名称或者商户名 */
      name: string;
      /** 电话号码 */
      telNumber: string;
      /** 省 */
      provinceName: string;
      /** 市 */
      cityName: string;
      /** 区/县 */
      countyName: string;
      /** 街道 */
      streetName: string;
      /** 街道编码 */
      streetCode: string;
      /** 详细地址 */
      detailInfo: string;
    }
  }

  interface tb {
    /**
     * 打开收货地址选择器
     */
    chooseAddress(option: tb.chooseAddress.Option): Promise<tb.chooseAddress.SuccessCallbackResult>;
  }
}
