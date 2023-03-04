import type { Options } from "tsup";
import { defineConfig } from "tsup";

const libConfig = <Options>{
  entry: ["src/index.ts"],
  format: ["esm"],
  clean: true,
  sourcemap: true,
  dts: true,
  treeshake: true,
};

export default defineConfig([libConfig]);
