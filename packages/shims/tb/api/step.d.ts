import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace tb.getStepsHistory {
    interface Option {
      /** 查询步数开始时间 格式：`yyyyMMdd` 如`20210909` */
      startTime: string;
      /** 查询步数开始时间 格式：`yyyyMMdd` 如`20210909` */
      endTime: string;
    }

    interface Callback {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      (e: SuccessCallbackResult): void;
    }

    interface SuccessCallbackResult extends TqtGeneral.CallbackResult {
      /** 历史步数列表 */
      stepsHistory: Array<number>;
    }
  }

  namespace tb.getDailySteps {
    interface Option {}

    interface Callback {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      (e: SuccessCallbackResult): void;
    }

    interface SuccessCallbackResult extends TqtGeneral.CallbackResult {
      /** 当日步数 */
      todayTotalSteps: number;
    }
  }

  namespace tb.supportStepCount {
    interface Option {}

    interface Callback {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      (e: SuccessCallbackResult): void;
    }

    interface SuccessCallbackResult extends TqtGeneral.CallbackResult {
      /** 是否支持 */
      support: boolean;
    }
  }

  namespace tb.stepsAuthorizeStatus {
    interface Option {}

    interface Callback {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      (e: SuccessCallbackResult): void;
    }

    interface SuccessCallbackResult extends TqtGeneral.CallbackResult {
      /** 是否授权 */
      status: boolean;
    }
  }

  namespace tb.requestStepsAuthorization {
    interface Option {}

    interface Callback {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      (e: SuccessCallbackResult): void;
    }

    interface SuccessCallbackResult extends TqtGeneral.CallbackResult {
      /** 申请是否成功 */
      success: boolean;
    }
  }

  namespace tb.setStepCountStatus {
    interface Option {
      /**
       * 设置步数自动上传状态
       * @defaultValue true */
      status: boolean;
    }

    interface Callback {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      (e: TqtGeneral.CallbackResult): void;
    }
  }

  namespace tb.getStepsStatus {
    interface Option {}

    interface Callback {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      (e: SuccessCallbackResult): void;
    }

    interface SuccessCallbackResult extends TqtGeneral.CallbackResult {
      /** 是否成功 */
      status: boolean;
    }
  }

  namespace tb.requestManufacturerPermission {
    interface Option {}
    interface Callback {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      (e: TqtGeneral.CallbackResult): void;
    }
  }

  namespace tb.checkManufacturerPermission {
    interface Option {}
    interface Callback {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      (e: SuccessCallbackResult): void;
    }

    interface SuccessCallbackResult extends TqtGeneral.CallbackResult {
      /** 是否授权 */
      status: boolean;
    }
  }

  namespace tb.requestSensorPermission {
    interface Option {}
    interface Callback {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      (e: TqtGeneral.CallbackResult): void;
    }
  }

  namespace tb.checkSensorPermission {
    interface Option {}

    interface Callback {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      (e: SuccessCallbackResult): void;
    }

    interface SuccessCallbackResult extends TqtGeneral.CallbackResult {
      /** 是否授权，`true`已授权 */
      status: boolean;
    }
  }

  interface tb {
    /**
     * 获取历史步数
     */
    getStepsHistory(
      option: tb.getStepsHistory.Option,
      callback?: tb.getStepsHistory.Callback,
    ): Promise<tb.getStepsHistory.SuccessCallbackResult>;
    /**
     * 获取当天步数
     */
    getDailySteps(
      option: tb.getDailySteps.Option,
      callback?: tb.getDailySteps.Callback,
    ): Promise<tb.getDailySteps.SuccessCallbackResult>;
    /**
     * 判断手机是否支持计步
     */
    supportStepCount(
      option: tb.supportStepCount.Option,
      callback?: tb.supportStepCount.Callback,
    ): Promise<tb.supportStepCount.SuccessCallbackResult>;
    /**
     * 判断手机健康权限是否申请
     */
    stepsAuthorizeStatus(
      option: tb.stepsAuthorizeStatus.Option,
      callback?: tb.stepsAuthorizeStatus.Callback,
    ): Promise<tb.stepsAuthorizeStatus.SuccessCallbackResult>;
    /**
     * 申请步数权限
     */
    requestStepsAuthorization(
      option: tb.requestStepsAuthorization.Option,
      callback?: tb.requestStepsAuthorization.Callback,
    ): Promise<tb.requestStepsAuthorization.SuccessCallbackResult>;
    /**
     * 设置步数自动上传状态
     */
    setStepCountStatus(
      option: tb.setStepCountStatus.Option,
      callback?: tb.setStepCountStatus.Callback,
    ): Promise<TqtGeneral.CallbackResult>;
    /**
     * 获取步数自动上传状态
     */
    getStepsStatus(
      option: tb.getStepsStatus.Option,
      callback?: tb.getStepsStatus.Callback,
    ): Promise<tb.getStepsStatus.SuccessCallbackResult>;
    /**
     * 申请厂商权限
     */
    requestManufacturerPermission(
      option?: tb.requestManufacturerPermission.Option,
      callback?: tb.requestManufacturerPermission.Callback,
    ): Promise<TqtGeneral.CallbackResult>;
    /**
     * 检查厂商健康授权状态
     */
    checkManufacturerPermission(
      option: tb.checkManufacturerPermission.Option,
      callback?: tb.checkManufacturerPermission.Callback,
    ): Promise<tb.checkManufacturerPermission.SuccessCallbackResult>;
    /**
     * 申请sensors权限
     */
    requestSensorPermission(
      option?: tb.requestSensorPermission.Option,
      callback?: tb.requestSensorPermission.Callback,
    ): Promise<TqtGeneral.CallbackResult>;
    /**
     * 检查sensors权限
     */
    checkSensorPermission(
      option: tb.checkSensorPermission.Option,
      callback?: tb.checkSensorPermission.Callback,
    ): Promise<tb.checkSensorPermission.SuccessCallbackResult>;
  }
}
