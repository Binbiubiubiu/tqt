export const needPromiseApis = new Set([
  "getAuthUserInfo",
  // 分包加载
  "loadSubPackage",
  "loadPlugin",
  // 交互反馈
  "prompt",
  // 选择城市
  "chooseCity",
  // 选择日期
  "datePicker",
  // 设置页面是否支持下拉
  "setCanPullDown",
  // 选项选择器
  "optionsSelect",

  // 发短信
  "sendSMS",
  // 获取服务器时间
  "getServerTime",
  // 权限引导
  "showAuthGuide",
  // 摇一摇
  "watchShake",
  // 振动
  "vibrate",
  // 传统蓝牙
  "connectBLEDevice",
  "disconnectBLEDevice",
  "setBLEMTU",
  // 退出当前小程序
  "exit",
  // 数据安全
  "rsa",
  // 小程序当前运行版本类型
  "getRunScene",
  // 小部件
  "getRelationAppId",
  "getRelationAppInfo",
  "setGestureMode",
  "navigateToRelationMiniProgram",
  "widgetDowngrade",
  "getSceneInfo",
  "getBizData",
]);

export const needPromiseTBSfcApis = new Set([
  // 发起请求
  "request",
  // 跳转淘宝官方页面
  "navigateToTaobaoPage",
  // 添加轻应用
  "checkAddedStatus",
  // 获取用户设备ID
  "getDeviceId",
  // 自定义【更多】菜单
  "setActionSheet",
  // 配置导航栏扩展能力
  "addMenu",
  // 日历提醒
  "addCalendarPlan",
  "checkCalendarPlanIsExist",
  "cancelCalendarPlan",
  // 添加到桌面
  "addToDesktop",
  // 错误页
  "showErrorView",
  "hideErrorView",
  // 安全
  "textRiskIdentification",
  "imgRisk",
  "preventCheat",
  // SKU
  "showSku",
  "hideSku",
  // 商品
  "collectGoods",
  "unCollectGoods",
  "checkGoodsCollectedStatus",
  "openDetail",
  // 店铺
  "favorShop",
  "checkShopFavoredStatus",
  "unFavorShop",
  // 购物车
  "openCart",
  "addToCart",
  // 收货地址
  "chooseAddress",
  // 消息
  "openMessage",
  "subscribe",
  // 订单
  "confirmCustomOrder",
  // 小部件
  "openScuCombination",
]);

export const needPromiseTBCbApis = new Set([
  // 计步
  "getStepsHistory",
  "getDailySteps",
  "supportStepCount",
  "stepsAuthorizeStatus",
  "requestStepsAuthorization",
  "setStepCountStatus",
  "getStepsStatus",
  "requestManufacturerPermission",
  "checkManufacturerPermission",
  "requestSensorPermission",
  "checkSensorPermission",
]);
