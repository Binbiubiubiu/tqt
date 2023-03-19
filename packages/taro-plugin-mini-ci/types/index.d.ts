import { IPluginContext } from "@tarojs/service";

interface PluginOptions {
  /** 目标项目目录，对所有小程序生效（不传默认取 outputRoot 字段 ） */
  projectPath?: string;
  appId: string;
}

declare const _default: (
  ctx: IPluginContext,
  _pluginOpts: PluginOptions | (() => PluginOptions),
) => void;

export { PluginOptions, _default as default };
