/// <reference path="api/ui/interaction.d.ts" />
/// <reference path="api/ui/route.d.ts" />
/// <reference path="api/ui/tab-bar.d.ts" />
/// <reference path="api/authorize.d.ts" />
/// <reference path="api/base.d.ts" />
/// <reference path="api/database.d.ts" />
/// <reference path="api/file.d.ts" />
/// <reference path="api/im.d.ts" />
/// <reference path="api/plugin.d.ts" />

import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  interface qn {}
  interface TaroStatic {
    qn: qn;
  }
}
