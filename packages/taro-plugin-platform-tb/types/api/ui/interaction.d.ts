import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace showLoading {
    interface Option {
      /**
       * 延迟显示，单位 `ms`，默认 0。如果在此时间之前调用了 `my.hideLoading` 则不会显示。
       */
      delay?: number;
    }
  }

  namespace hideLoading {
    interface Option {
      /**
       * 具体指当前page实例，某些场景下，需要指明在哪个page执行hideLoading
       */
      page?: TqtTBGeneral.IAnyObject;
    }
  }

  namespace showActionSheet {
    interface Option {
      /**
       * 取消按钮文案，默认为「取消」
       * @default '取消''
       */
      cancelButtonText?: string;

      /**
       * OS特殊处理）指定按钮的索引号，从0开始，使用场景：需要删除或清除数据等类似场景，默认红色
       * @default 0
       */
      destructiveBtnIndex?: number;
    }
  }

  namespace multiLevelSelect {
    interface Option {
      /**
       * 标题
       */
      title?: string;

      /**
       * 选项一列表
       */
      list: Array<ListItem>;

      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: SuccessCallbackResult) => void;
    }

    interface SuccessCallbackResult extends TqtTBGeneral.CallbackResult {
      /** 选择的结果，如 [{"name":"杭州市"},{"name":"上城区"},{"name":"古翠街道"}] */
      result: Array<SelectedItem>;
    }

    type SelectedItem = Pick<ListItem, "name">;

    interface ListItem {
      /** 条目名称 */
      name: string;

      /** 子条目列表。subList 的结构与 list 相同，即支持多级嵌套 */
      subList?: Array<ListItem>;
    }
  }

  namespace optionsSelect {
    interface Option {
      /**
       * 头部标题信息。
       */
      title?: string;

      /**
       * 选项一列表
       */
      optionsOne: Array<string>;

      /**
       * 选项二列表
       */
      optionsTwo?: Array<string>;

      /**
       * 选项一默认选中
       * @default 0
       */
      selectedOneIndex?: number;

      /**
       * 选项二默认选中
       * @default 0
       */
      selectedTwoIndex?: number;

      /**
       * 确定按钮文案
       * @default "确定"
       */
      positiveString?: string;

      /**
       * 取消按钮文档
       * @default "取消"
       */
      negativeString?: string;

      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtTBGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: SuccessCallbackResult) => void;
    }

    interface SuccessCallbackResult extends TqtTBGeneral.CallbackResult {
      /** 选项一选择的值。若选择取消，则返回空字符串。 */
      selectedOneIndex: number;

      /** 选项一选择的内容。若选择取消，则返回空字符串。 */
      selectedOneOption: string;

      /** 选项二选择的值。若选择取消，则返回空字符串。 */
      selectedTwoIndex: number;

      /** 选项二选择的内容。若选择取消，则返回空字符串。 */
      selectedTwoOption: string;
    }
  }

  interface TaroStatic {
    /** 级联选择功能 API。主要用于选择多级关联数据，例如省市区的信息选择。 */
    multiLevelSelect(
      option: multiLevelSelect.Option,
    ): Promise<multiLevelSelect.SuccessCallbackResult>;
    /** 用于唤起 select 选择器，支持单列选择和二级数据选择。 */
    optionsSelect(option: optionsSelect.Option): Promise<optionsSelect.SuccessCallbackResult>;
  }
}
