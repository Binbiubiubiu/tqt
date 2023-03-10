import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TQT",
  description: "tb-mini & qn-mini & taro",
  themeConfig: {
    algolia: {
      appId: "WVDAY74UVI",
      apiKey: "9e1b563d86045011d9be1f98135dc356",
      indexName: "tqt",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "指南", link: "/introduce" },
      // { text: "配置", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "介绍",
        link: "/introduce",
      },
      {
        text: "淘宝移动端",
        items: [{ text: "快速上手", link: "/tb/quick-start" }],
      },
      {
        text: "千牛PC端",
        items: [{ text: "快速上手", link: "/qn/quick-start" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/Binbiubiubiu/tqtjs" }],
  },
  ignoreDeadLinks: true,
});
