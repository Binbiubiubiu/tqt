export const needPromiseApis = new Set([
  // 获取服务器时间
  "getServerTime",
  // 获取授权用户信息
  "getAuthUserInfo",
  // 退出当前小程序
  "exit",
  // 数据安全
  "rsa",
  // 小程序当前运行版本类型
  "getRunScene",
]);

export const needPromiseQnApis = new Set([
  // 路由
  "navigateToWebPage",
  "navigateToQAP",
  "closeQAP",
  // TabBar
  "switchTabEx",
  "showTabEx",
  "hideTabEx",
  "showTabBarRedDotEx",
  "hideTabBarRedDotEx",
  "setTabBarBadgeEx",
  "removeTabBarBadgeEx",
  // 数据库
  "queryDBSize",
  "database",
  // 文件
  "chooseFile",
  "chooseFileAndGetContent",
  "saveFileToDisk",
  // 用户授权
  "cleanToken",
  "showSubAccountAuth",
  // IM 功能
  "openChat",
  "imGetActiveUser",
  // 打开千牛组件
  "openPlugin",
  "openCategory",
  "changePrice",
]);
