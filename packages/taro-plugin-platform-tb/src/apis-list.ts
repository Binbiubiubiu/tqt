export const needPromiseApis = new Set([
  // "addCardAuth",
  // "getOpenUserInfo",
  // "chooseAlipayContact",
  // 分包加载
  "loadSubPackage",
  "loadPlugin",
  // 选择城市
  "chooseCity",
  // 选择日期
  "datePicker",
  "authorize",
  "getRunScene",
  "getServerTime",
  "rsa",
  "sendSMS",
  "optionsSelect",
  "prompt",
  "setCanPullDown",
  "showAuthGuide",
  "textRiskIdentification",
  "vibrate",
  "watchShake",
  // 传统蓝牙
  "connectBLEDevice",
  "disconnectBLEDevice",
  // "makeBluetoothPair",
  "setBLEMTU",
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
