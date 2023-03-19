import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace tb.navigateToTaobaoPage {
    interface Option extends TqtTBGeneral.IUnknownObject {
      /**
       * 跳转官方业务页面定义的AppCode。目前支持：
       * - `shop`（打开店铺页）；
       * - `cardCoupon`（打开红包卡券页，9.17.0及以上版本）；
       * - `orderDetail`（打开订单详情页，9.18.0及以上版）；
       * - `orderList`（打开订单列表页，9.18.0及以上版本）；
       * - `liveRoom`（打开直播间，9.24.0及以上版本）
       *
       */
      appCode: string;
      /**
       * `appCode` 配套参数，需要和 `appCode` 搭配使用。
       *
       */
      appParams?: AppParams;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtTBGeneral.CallbackResult) => void;
    }

    interface AppParams extends TqtTBGeneral.IUnknownObject {
      /**
       * 对应appCode需为：`orderList`。
       *
       * 指定订单列表对应的tab，支持：
       * - `total_orders`: 全部订单；
       * - `wait_to_pay`: 待付款；
       * - `wait_to_shipments`: 待发货；
       * - `wait_to_confirm`: 待收货；
       * - `wait_to_evaluate`: 待评价
       *
       */
      orderListType?: string;
      /**
       * 对应`appCode`需为：`orderDetail`。
       *
       * 当`appCode`为`orderDetail`时，指定订单Id
       *
       */
      orderId?: string;
      /**
       * 对应`appCode`需为：`cardCoupon`。
       *
       * 指定红包卡券页对应`tab`，支持：
       * - `coupon `优惠券；
       * - `redEnvelope` 红包；
       * - `card` 卡；
       * - `ticket` 票；
       * - `other` 其它。
       *
       * （不传tabType时，默认打开 优惠券 tab）
       *
       */
      tabType?: string;
      /**
       * 对应`appCode`需为：`shop`。
       *
       * 店铺顶部的子Tab，支持：
       * - `shopindex`首页（`shopTab`需为`shopindexbar`）
       * - `newitems`：新品（`shopTab`需为`shopindexbar`）
       *
       */
      weexShopSubTab?: string;
      /**
       * 对应appCode需为：`shop`。
       *
       * 店铺底部`Tab`名称，支持：
       * - `shopindexbar`首页
       * - `allitemsbar`全部宝贝
       * - `dongtaibar`微淘
       * - `categorybar`分类
       * -` memberbar`会员、
       *
       */
      weexShopTab?: string;
      /**
       * 对应`appCode`需为：`shop`。
       *
       * 当`appCode`为`shop`时，指定店铺Id
       *
       */
      shopId?: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtTBGeneral.CallbackResult) => void;
    }
  }

  interface tb {
    /**
     * 打开淘宝官方页面
     */
    navigateToTaobaoPage(
      option: tb.navigateToTaobaoPage.Option,
    ): Promise<TqtTBGeneral.CallbackResult>;
  }
}
