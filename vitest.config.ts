/// <reference types="vitest" />

// import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  define: {
    __DEV__: "true",
  },
  resolve: {
    // alias: {
    //   "@": resolve("src"),
    // },
  },
  test: {
    deps: {
      inline: ["@tarojs/runtime"],
    },
    coverage: {
      provider: "c8",
      reporter: ["text", "json", "html"],
    },
  },
});
