import { defineConfig } from "tsup";
import type { Options } from "tsup";

const base = <Options>{
  sourcemap: true,
  dts: false,
  outExtension() {
    return {
      js: ".js",
    };
  },
  treeshake: true,
};

// 供 CLI 编译时使用的 Taro 插件入口
const comileConfig = <Options>{
  entry: ["src/index.ts"],
  format: ["cjs"],
  clean: true,
  ...base,
};

// 供 Loader 使用的运行时入口
const runtimeConfig = <Options>{
  entry: ["src/runtime.ts"],
  format: ["esm"],
  ...base,
};

// React 下 webpack 会 alias @tarojs/components 为此文件
const otherConfig = <Options>{
  entry: ["src/components-react.ts"],
  format: ["esm"],
  ...base,
};

const dtsConfig = <Options>{
  entry: ["src/*.ts"],
  dts: true,
  format: [],
  outDir: "types",
  clean: true,
};

export default defineConfig([dtsConfig, comileConfig, runtimeConfig, otherConfig]);
