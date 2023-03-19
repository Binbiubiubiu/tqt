import BaseCI from "@tarojs/plugin-mini-ci/dist/BaseCi";
import { getNpmPkgSync } from "@tarojs/plugin-mini-ci/dist/utils/npm";
import spawn from "cross-spawn";
import { options2args } from "./util";

/** 文档地址： https://miniapp.open.taobao.com/docV3.htm?docId=119659&docType=1&tag=dev */
export default class TBCI extends BaseCI {
  init(): void {
    // @ts-ignore
    const { fs, printLog, processTypeEnum, chalk } = this.ctx.helper;
    try {
      getNpmPkgSync("taobaodev", process.cwd());
    } catch (error) {
      printLog(processTypeEnum.ERROR, chalk.red("请安装依赖：taobaodev"));
      process.exit(1);
    }

    // this.runActions(() => {
    //   this.action("login");
    // });
  }

  async open() {
    this.runActions(() => {
      this.action("build", { sim: true });
    });
  }

  async preview(debug?: boolean) {
    this.runActions(() => {
      this.action("build-preview", { debug });
    });
  }

  async upload() {
    this.runActions(() => {
      this.action("upload");
    });
  }

  runActions(cb: () => void) {
    // @ts-ignore
    const { chalk, printLog, processTypeEnum } = this.ctx.helper;
    try {
      cb();
    } catch (error: any) {
      printLog(processTypeEnum.ERROR, chalk.red(error.message));
    }
  }

  action(cmd: string, options?: Record<string, any>) {
    // @ts-ignore
    const args = [cmd, "--appId", this.pluginOpts.appId];
    if (options) {
      args.push(...options2args(options));
    }
    spawn.sync("taobaodev", args, {
      // @ts-ignore
      cwd: this.projectPath,
      stdio: ["ignore", "inherit", "inherit"],
    });
  }
}
