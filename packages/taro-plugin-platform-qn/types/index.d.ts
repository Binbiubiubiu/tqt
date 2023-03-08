import { IPluginContext } from "@tarojs/service";

interface PluginOptions {
  menuLevel?: number;
}

declare const _default: (ctx: IPluginContext, pluginOpts: PluginOptions) => void;

export { PluginOptions, _default as default };
