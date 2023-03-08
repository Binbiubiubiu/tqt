import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace tb.openCart {
    interface Option extends TqtGeneral.IUnknownObject {
      /** 购物车类型。tmall：天猫超市购物车。taobao: 淘宝购物车 */
      cartType?: string;
      /** 是否打开H5类型的页面 */
      forceH5?: boolean;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }
  }

  namespace tb.addToCart {
    interface Option extends TqtGeneral.IUnknownObject {
      /** 商品ID信息,多个以逗号隔开，格式为`itemid_skuid_count`。只有`itemId`也可以加购。 */
      itemIds: string;
      /** `exts`,使用`|`分割的`k:v`模式。 */
      exts?: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }
  }

  interface tb {
    /**
     * 打开购物车
     */
    openCart(option: tb.openCart.Option): Promise<TqtGeneral.CallbackResult>;
    /**
     * 加入购物车
     */
    addToCart(option: tb.addToCart.Option): Promise<TqtGeneral.CallbackResult>;
  }
}
