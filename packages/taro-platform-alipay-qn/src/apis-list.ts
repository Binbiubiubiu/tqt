export const needPromiseSfcApis = new Set([
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
