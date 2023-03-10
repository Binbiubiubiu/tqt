---
outline: deep
---

# 快速上手

通过本章节来了解如何快速上手并使用`千牛PC小程序`平台插件

## 安装

::: code-group

```sh [npm]
npm install -D @tqtjs/taro-plugin-platform-qn
```

```sh [yarn]
yarn add -D @tqtjs/taro-plugin-platform-qn
```

```sh [pnpm]
pnpm add -D @tqtjs/taro-plugin-platform-qn
```

:::

### 配置插件

```js
/**
 * @typedef { import("@tqtjs/taro-plugin-platform-qn").PluginOptions } PluginOptions
 * @type {PluginOptions}
 */
const pluginOptions = {
  menuLevel: 2, // 默认值
};

// Taro 项目配置
module.exports = {
  // ...
  plugins: [['@tqtjs/taro-plugin-platform-qn', pluginOptions]],
};
```

### 编译为`千牛PC小程序`

```shell
taro build --type qn
taro build --type qn --watch
```

## 其它

### 平台判断

```js
if (process.TARO_ENV === 'qn') {
  // ...
}
```

### API

千牛 PC 小程序拓展了一些独有 API，可以通过 `Taro.qn.xxx` 来调用，如：

```js
Taro.qn.navigateToWebPage({}).then((res) => console.log(res));
```

## Typings

开发者在 `global.d.ts` 中加入 `/// <reference types="@tqtjs/taro-plugin-platform-qn/shims-qn" />` 即可获得类型提示。

例子：

```ts
/// <reference types="@tqtjs/taro-plugin-platform-qn/shims-qn" />
/// <reference types="@tarojs/taro" />

declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd' | 'qn';
  }
}
```
