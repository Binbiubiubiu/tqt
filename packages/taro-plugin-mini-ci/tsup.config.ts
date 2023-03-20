import { defineConfig } from "tsup";
import type { Options } from "tsup";

// 供 CLI 编译时使用的 Taro 插件入口
const comileConfig = <Options>{
  entry: ["src/index.ts"],
  format: ["cjs"],
  clean: true,
  sourcemap: true,
  dts: false,
  treeshake: true,
};

const dtsConfig = <Options>{
  entry: ["src/index.ts"],
  dts: true,
  format: [],
  outDir: "types",
};

export default defineConfig([dtsConfig, comileConfig]);
