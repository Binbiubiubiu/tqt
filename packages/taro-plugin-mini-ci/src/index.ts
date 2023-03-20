import type { IPluginContext } from "@tarojs/service";
import minimist from "minimist";
import path from "path";
import { type PluginOptions, validOptions } from "./options";
import TBCI from "./TBCI";

const enum EnumAction {
  /** 自动打开预览工具 */
  open = "open",
  /** 预览小程序（上传代码，作为“开发版”小程序） */
  preview = "preview",
  /** 上传小程序（上传代码，可设置为“体验版”小程序） */
  upload = "upload",
}

interface ActionCmd {
  action: EnumAction;
  optionsMap?: Record<string, string>;
}

interface MinimistArgs {
  /** 自定义要处理的项目目录 */
  projectPath: string;
  /** 自动打开预览工具 */
  open: boolean;
  /** 预览小程序 */
  preview: boolean;
  /** 上传小程序 */
  upload: boolean;
}
export type { PluginOptions } from "./options";
export default (ctx: IPluginContext, _pluginOpts: PluginOptions | (() => PluginOptions)) => {
  const args = minimist<MinimistArgs>(process.argv.slice(2), {
    boolean: [EnumAction.open, EnumAction.preview, EnumAction.upload, "debug"],
    string: ["projectPath"],
    default: {
      projectPath: "",
    },
  });
  const command = args._[0];
  validOptions(ctx);

  const doAction = async (platform: string, action: EnumAction, projectPath: string) => {
    const { printLog, processTypeEnum, fs } = ctx.helper;
    if (typeof platform !== "string") {
      printLog(processTypeEnum.ERROR, "请传入正确的编译类型！");
      process.exit(0);
    }
    // 可通过异步函数获取插件选项
    const pluginOpts = typeof _pluginOpts === "function" ? await _pluginOpts() : _pluginOpts;
    // @ts-ignore
    let ci: BaseCI | null = null;
    switch (platform) {
      case "tb":
      case "qn":
        // @ts-ignore
        ci = new TBCI(ctx, pluginOpts);
        break;
      default:
        break;
    }

    if (!ci) {
      printLog(
        processTypeEnum.WARNING,
        `"@tqtjs/taro-plugin-mini-ci" 插件暂时不支持 "${platform}" 平台`,
      );
      return;
    }

    projectPath = projectPath || pluginOpts.projectPath || ctx.paths.outputPath;
    projectPath = path.isAbsolute(projectPath)
      ? projectPath
      : path.join(ctx.paths.appPath, projectPath);

    if (!fs.pathExistsSync(projectPath)) {
      printLog(processTypeEnum.ERROR, `"projectPath"选项配置的路径不存在:${projectPath}`);
      process.exit(0);
    }
    ci.setProjectPath(projectPath);

    ci.init();

    switch (action) {
      case EnumAction.open:
        ci.open();
        break;
      case EnumAction.upload:
        ci.upload();
        break;
      case EnumAction.preview:
        ci.preview(args.debug);
        break;
    }
    process.exit(0);
  };

  // 构建小程序后执行
  if (command === "build") {
    const onBuildDone = ctx.onBuildComplete || ctx.onBuildFinish;
    onBuildDone(async () => {
      let action: EnumAction | null = null;
      switch (true) {
        case args[EnumAction.open]:
          action = EnumAction.open;
          break;
        case args[EnumAction.preview]:
          action = EnumAction.preview;
          break;
        case args[EnumAction.upload]:
          action = EnumAction.upload;
          break;
      }
      if (action) {
        await doAction(ctx.runOpts.options.platform, action, args.projectPath);
      }
    });
  }

  const cmds: Array<ActionCmd> = [
    {
      action: EnumAction.open,
    },
    {
      action: EnumAction.preview,
      optionsMap: {
        "--debug": "此操作会唤出浏览器来显示调试器页面。",
      },
    },
    {
      action: EnumAction.upload,
    },
  ];
  cmds.forEach(({ action, optionsMap }) => {
    ctx.registerCommand({
      name: action,
      optionsMap: Object.assign(
        {
          "--type [typeName]": `${action} type, 支持 tb/qn`,
          "--projectPath": `${action} 目录, 不传默认为配置项 'outputRoot' 配置目录`,
        },
        optionsMap,
      ),
      synopsisList: [`taro ${action} --type tb`, `taro ${action} --type qn`],
      async fn({ options }) {
        doAction(options.type, action, options.projectPath);
      },
    });
  });
};
