# taro-plugin-platform-alipay-tb

Taro 插件。用于支持编译为淘宝小程序。

## 使用

#### 1. 配置插件

```js
// Taro 项目配置
module.exports = {
  // ...
  plugins: ['taro-plugin-platform-alipay-tb'],
};
```

#### 2. 编译为淘宝小程序

```shell
taro build --type tb
taro build --type tb --watch
```

#### 其它

##### 平台判断

```js
if (process.TARO_ENV === 'tb') {
  // ...
}
```

##### API

淘宝小程序拓展了一些独有 API，可以通过 `Taro.tb.xxx` 来调用，如：

```js
Taro.tb.navigateToTaobaoPage({}).then((res) => console.log(res));
```

## Typings

开发者在 `global.d.ts` 中加入 `/// <reference types="@tqtjs/taro-plugin-platform-alipay-tb/shims-tb" />` 即可获得类型提示。

例子：

```
/// <reference types="@tqtjs/taro-plugin-platform-alipay-tb/shims-tb" />
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
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd' | 'tb'
  }
}
```
