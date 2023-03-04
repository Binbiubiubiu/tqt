/// <reference path="api/authorize.d.ts" />
/// <reference path="api/base.d.ts" />
/// <reference path="api/database.d.ts" />
/// <reference path="api/file.d.ts" />
/// <reference path="api/im.d.ts" />
/// <reference path="api/navigation.d.ts" />
/// <reference path="api/plugin.d.ts" />
/// <reference path="api/route.d.ts" />

import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  interface qn {}
  interface TaroStatic {
    qn: qn;
  }
}
