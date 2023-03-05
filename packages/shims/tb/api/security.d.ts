import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace tb.textRiskIdentification {
    interface Option extends TqtGeneral.IAnyOption {
      data: Data;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: SuccessCallbackResult) => void;
    }

    interface Data extends TqtGeneral.IAnyOption {
      /** 待检查的文本，最大长度10000 */
      text: string;
    }

    interface SuccessCallbackResult extends TqtGeneral.CallbackResult {
      /** 综合结果建议。建议用户执行的操作，取值范围：
       * - `pass`：文本正常；
       * - `review`：需要人工审核；
       * - `block`：文本违规，可以直接删除或者做限制处理
       */
      suggestion: string;
      /** 检查结果 */
      check_results: Array<CheckResult>;
    }

    interface CheckResult {
      /** 检查的场景标签。
       * - `normal`：正常文本
       * - `spam`：含垃圾信息；
       * - `ad`：广告；
       * - `politics`：涉政；
       * - `terrorism`：暴恐；
       * - `abus`e：辱骂；
       * - `porn`：色情；
       * - `flood`：灌水；
       * - `contraband`：违禁；
       * - `meaningless`：无意义
       */
      label: string;
      /**
       * 结果建议，建议用户执行的操作，取值范围：
       * - `pass`：文本正常；
       * - `review`：需要人工审核；
       * - `block`：文本违规，可以直接删除或者做限制处理
       */
      suggestion: string;
      /** 结果准确度 */
      rate: string;
      /** 检查的场景。
       * - `porn`：涉黄；
       * - `terrorism`：暴恐涉政
       */
      scene: string;
    }
  }

  namespace tb.imgRisk {
    interface Option extends TqtGeneral.IAnyOption {
      data: Data;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: SuccessCallbackResult) => void;
    }

    interface Data extends TqtGeneral.IAnyOption {
      /** 云存储中返回的fileId */
      cloudFileId: string;
    }

    interface SuccessCallbackResult extends TqtGeneral.CallbackResult {
      /** 综合结果建议。建议用户执行的操作，取值范围：
       * - `pass`：文本正常；
       * - `review`：需要人工审核；
       * - `block`：文本违规，可以直接删除或者做限制处理
       */
      suggestion: string;
      /** 检查结果 */
      check_results: Array<CheckResult>;
    }

    interface CheckResult {
      /** 检查的场景标签。
       * - `normal`：正常文本
       * - `spam`：含垃圾信息；
       * - `ad`：广告；
       * - `politics`：涉政；
       * - `terrorism`：暴恐；
       * - `abus`e：辱骂；
       * - `porn`：色情；
       * - `flood`：灌水；
       * - `contraband`：违禁；
       * - `meaningless`：无意义
       */
      label: string;
      /**
       * 结果建议，建议用户执行的操作，取值范围：
       * - `pass`：文本正常；
       * - `review`：需要人工审核；
       * - `block`：文本违规，可以直接删除或者做限制处理
       */
      suggestion: string;
      /** 结果准确度 */
      rate: string;
      /** 检查的场景。
       * - `porn`：涉黄；
       * - `terrorism`：暴恐涉政
       */
      scene: string;
    }
  }

  namespace tb.preventCheat {
    interface Option extends TqtGeneral.IAnyOption {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TqtGeneral.CallbackResult) => void;
      /** 接口调用成功的回调函数 */
      success?: (result: SuccessCallbackResult) => void;
    }

    interface SuccessCallbackResult extends TqtGeneral.CallbackResult {
      /** 用户风险安全等级，
       * - 0：高风险、
       * - 1~3中风险、
       * - 4-6低风险
       *
       * 目前riskRank字段已经废弃，请使用safe字段
       */
      riskRank: number;
      /** 账号是否安全。如果是safe = false，则说明当前用户账号是风险账号，建议直接拦截后续业务逻辑。 */
      safe: boolean;
    }
  }

  interface tb {
    /**
     * 文本风险识别
     */
    textRiskIdentification(
      option: tb.textRiskIdentification.Option,
    ): Promise<tb.textRiskIdentification.SuccessCallbackResult>;
    /**
     * 图片内容安全
     */
    imgRisk(option: tb.imgRisk.Option): Promise<tb.imgRisk.SuccessCallbackResult>;
    /**
     * 业务风控营销反作弊
     */
    preventCheat(option: tb.preventCheat.Option): Promise<tb.preventCheat.SuccessCallbackResult>;
  }
}
