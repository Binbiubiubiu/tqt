import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace qn.openPlugin {
    interface Option extends TqtGeneral.IUnknownObject {
      /** 插件的`appkey`,和`category`之间必须填一个 */
      appkey?: string;
      /** 插槽类目(如：`shangpinguanli`、`jiaoyiguanli`)，和`appkey`之间必须填一个，如果都存在，`category`优先`appkey `*/
      category?: string;
      /** 打开插件传入的业务参数，等效于同名通用协议中的`extraData`。对于小程序类型的插件，`param`包含的参数，会作为小程序的全局启动参数；如果在`directPage`中指定了`url`，则自动拼在`url`后作为页面参数。 JSON格式字符串。*/
      param?: string;
      /** 传给小程序全局启动参数。只对移动端小程序插件有效，JSON格式字符串。*/
      appParam?: string;
      /** 用来打开小程序的指定页面, 和qap.json中pages的元素相对应。 JSON格式字符串 e.g. `{ "url": "pages/detail/detail"}` 或 `{"capability": "itemChoose"}` */
      directPage?: string;
      /** （PC）打开插件后跳转的页面 */
      pageName?: string;
      /** （PC）打开插件后跳转页面(千牛插件支持 千牛小程序不支持此功能) host应该与插件一致 */
      directUrl: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }
  }

  namespace qn.openCategory {
    interface Option extends TqtGeneral.IUnknownObject {
      /**
       * 插槽协议类型，如`shangpinguanli`，`jiaoyiguanli`
       *
       */
      category?: string;
      /**
       * 页面名称，如`itemList`，`itemDetail`，`tradeList`，`tradeDetail`
       *
       */
      pageName: string;
      /** 页面参数，JSON的string格式，参数格式见示例 */
      param?: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }
  }

  namespace qn.changePrice {
    interface Option extends TqtGeneral.IUnknownObject {
      /** 订单id
       *
       */
      tid: string;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: TqtGeneral.CallbackResult) => void;
    }
  }

  interface qn {
    /**
     * 打开插件通用API

     */
    openPlugin(option: qn.openPlugin.Option): Promise<TqtGeneral.CallbackResult>;
    /**
     * 打开千牛插件协议槽

     */
    openCategory(option: qn.openCategory.Option): Promise<TqtGeneral.CallbackResult>;
    /**
     * 打开千牛改价格窗口
     *
     */
    changePrice(option: qn.changePrice.Option): Promise<TqtGeneral.CallbackResult>;
  }
}
