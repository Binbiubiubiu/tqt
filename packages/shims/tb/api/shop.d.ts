import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace tb.favorShop {
    interface Option {
      /** 店铺归属的卖家Id */
      id: number;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }
  }

  namespace tb.checkShopFavoredStatus {
    interface Option {
      /** 商品id */
      id: number;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }

    interface SuccessCallbackResult extends TqtGeneral.CallbackResult {
      /** 店铺归属的卖家Id */
      id: number;
      /** 是否关注了该店铺 */
      isFavor: boolean;
    }
  }

  namespace tb.unFavorShop {
    interface Option {
      /** 店铺归属的卖家Id */
      id: number;
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
     * 关注店铺
     * @基础库最低版本 8.11.0
     */
    favorShop(option: tb.favorShop.Option): Promise<TqtGeneral.CallbackResult>;
    /**
     * 查询店铺关注状态
     * @基础库最低版本 8.11.0
     */
    checkShopFavoredStatus(
      option: tb.checkShopFavoredStatus.Option,
    ): Promise<tb.checkShopFavoredStatus.SuccessCallbackResult>;
    /**
     * 取消关注店铺
     * @基础库最低版本 8.11.0
     */
    unFavorShop(option: tb.unFavorShop.Option): Promise<TqtGeneral.CallbackResult>;
  }
}
