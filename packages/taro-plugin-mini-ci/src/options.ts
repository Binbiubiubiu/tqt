import type { IPluginContext } from "@tarojs/service";

export interface PluginOptions {
  /** 目标项目目录，对所有小程序生效（不传默认取 outputRoot 字段 ） */
  projectPath?: string;
  appId: string;
}

export function validOptions(ctx: IPluginContext) {
  ctx.addPluginOptsSchema((joi) => {
    return joi.object({
      projectPath: joi.string(),
      appId: joi.string().required(),
    });
  });
}
