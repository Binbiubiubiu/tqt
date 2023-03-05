import { Alipay } from "@tarojs/plugin-platform-alipay";
// import { qn as qnComponents } from "./components";

const PACKAGE_NAME = "@tqtjs/taro-plugin-platform-alipay-tb";
export const RUNATIME_PATH = `${PACKAGE_NAME}/dist/runtime`;

export default class TB extends Alipay {
  platform = "tb";
  runtimePath = RUNATIME_PATH;
  taroComponentsPath = `${PACKAGE_NAME}/dist/components-react`;

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
        this.modifyTemplate();
        // 覆盖alipay 插件方法
        this.generateProjectConfig("project.tb.json", "mini.project.json");
      },
    });
  }

  /**
   * 增加组件或修改组件属性
   */
  modifyTemplate() {
    // 处理钉钉与支付宝的组件差异
    // this.template.mergeComponents(this.ctx, qnComponents);
  }
}
