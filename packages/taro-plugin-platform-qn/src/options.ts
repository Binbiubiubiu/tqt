import type { IPluginContext } from "@tarojs/service";
import store from "./store";

export interface PluginOptions {
  menuLevel?: number;
}

export function validOptions(ctx: IPluginContext, pluginOpts: PluginOptions) {
  ctx.addPluginOptsSchema((joi) => {
    return joi.object({
      menuLevel: joi.number(),
    });
  });

  store.initStore(pluginOpts);
}
