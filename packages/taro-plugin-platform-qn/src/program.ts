import { TaroPlatformBase } from "@tarojs/service";

import { components } from "./components";
import { Template } from "./template";

const PACKAGE_NAME = "@tqtjs/taro-plugin-platform-qn";
export const RUNATIME_PATH = `${PACKAGE_NAME}/dist/runtime`;

export default class QN extends TaroPlatformBase {
  platform = "qn";
  globalObject = "my";
  runtimePath = RUNATIME_PATH;
  taroComponentsPath = `${PACKAGE_NAME}/dist/components-react`;
  fileType = {
    templ: ".axml",
    style: ".acss",
    config: ".json",
    script: ".js",
    xs: ".sjs",
  };

  template = new Template();

  /**
   * 1. setupTransaction - init
   * 2. setup
   * 3. setupTransaction - close
   * 4. buildTransaction - init
   * 5. build
   * 6. buildTransaction - close
   */
  constructor(ctx, config) {
    super(ctx, config);

    this.setupTransaction.addWrapper({
      close: () => {
        this.modifyMiniConfigs();
        this.modifyComponents();
        this.modifyWebpackConfig();
        this.generateProjectConfig("project.qn.json", "mini.project.json");
      },
    });
  }

  /**
   * 转换用户编写的配置（微信小程序标准）为支付宝小程序标准
   */
  modifyMiniConfigs() {
    this.ctx.modifyMiniConfigs(({ configMap }) => {
      const replaceKeyMap = {
        color: "textColor",
        custom: "customize",
        enablePullDownRefresh: "pullRefresh",
        iconPath: "icon",
        list: "items",
        navigationBarTitleText: "defaultTitle",
        navigationBarBackgroundColor: "titleBarColor",
        selectedIconPath: "activeIcon",
        subpackages: "subPackages",
        text: "name",
      };
      Object.keys(configMap).forEach((key) => {
        const item = configMap[key];
        if (item.content) {
          this.recursiveReplaceObjectKeys(item.content, replaceKeyMap);
        }
      });
    });
  }

  /**
   * 增加组件或修改组件属性
   */
  modifyComponents() {
    const { internalComponents } = this.template;
    this.template.mergeComponents(this.ctx, components);
    this.modifyInput(internalComponents.Input);
    this.modifyTextarea(internalComponents.Textarea);
  }

  /**
   * 修改 Input 组件属性
   */
  modifyInput(input) {
    input["maxLength"] = input["maxlength"];
  }

  /**
   * 修改 TextArea 组件属性
   */
  modifyTextarea(textArea) {
    textArea["maxLength"] = textArea["maxlength"];
  }

  /**
   * 修改 Webpack 配置
   */
  modifyWebpackConfig() {
    this.ctx.modifyWebpackChain(({ chain }) => {
      // 支付宝系小程序全局就有 navigator 对象，不需要模拟
      chain.plugin("providerPlugin").tap((args) => {
        const newArgs = Object.assign({}, args[0]);
        delete newArgs.navigator;
        return [newArgs];
      });

      const { compiler, framework } = this.ctx.initialConfig;
      if (
        framework === "react" &&
        compiler &&
        (compiler === "webpack4" || (typeof compiler === "object" && compiler.type === "webpack4"))
      ) {
        chain.node.set("setImmediate", false);
      }
    });
  }
}
