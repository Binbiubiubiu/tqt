# @tqtjs/taro-plugin-mini-ci

> Taro 小程序端构建后支持 CI（持续集成）的插件， 支持构建完毕后自动打开小程序开发这个工具、上传作为体验版、生成预览二维码. 目前支持 淘宝移动端 和 `千牛PC`

基于[taobaodev](https://miniapp.open.taobao.com/docV3.htm?docId=119659&docType=1&tag=dev)实现

## 使用

### 安装

```sh
npm i taobaodev -g
npm i @tqtjs/taro-plugin-mini-ci -D
```

### 使用插件

`/config/index.js`

```js
// 示例, 如果你使用 `vs code` 作为开发工具， 你还可以使用注释的语法引入插件包含的声明文件，可获得类似于typescript的友好提示
/**
 * @typedef { import("@tqtjs/taro-plugin-mini-ci").PluginOptions } PluginOptions
 * @type {PluginOptions}
 */
const PluginOptions = {
  projectPath: './dist',
  appId: 'xxxxx',
};
const config = {
  plugins: [['@tqtjs/taro-plugin-mini-ci', PluginOptions]],
};
```

除了给插件传入对象， 你也可以传入一个异步函数，在编译时动态返回相关配置。

```js
const CIPluginFn = async () => {
  // 可以在这里做一些异步事情， 比如请求接口获取配置
  /**
   * @typedef { import("@tqtjs/taro-plugin-mini-ci").PluginOptions } PluginOptions
   * @type {PluginOptions}
   */
  return {
    projectPath: './dist',
    appId: 'xxxxx',
  };
};

const config = {
  plugins: [['@tqtjs/taro-plugin-mini-ci', CIPluginFn]],
};
```

### 作为选项配合 build 命令使用

`package.json` 的 `scripts` 字段使用命令参数

```json
{
  "scripts": {
    //  构建完后自动 “打开开发者工具”
    "build:tb": "taro build --type tb --open",
    //  构建完后自动 “上传代码作为开发版并生成预览二维码”
    "build:tb:preview": "taro build --type tb --preview",
    //  构建完后自动“上传代码作为体验版”
    "build:tb:upload": "taro build --type tb --upload",
    //  构建完后自动“上传 dist/xxx 目录的代码作为体验版”， `--projectPath` 参数 适用于 taro 和 原生混合的场景
    "build:tb:upload": "taro build --type tb --upload --projectPath dist/xxx"
  }
}
```

由上面的示例可知，插件为 taro cli 命令扩展了 4 个选项：

- --open 类似于网页开发中自动打开谷歌浏览器
- --preview 上传代码作为开发版并生成预览二维码
- --upload 上传代码作为体验版

此 3 个选项在一条命令里不能同时使用（互斥）

- --projectPath 指定要操作（打开、预览、上传）的目录路径， 默认情况下是操作构建后目录路径，即 [outputRoot 选项](https://taro-docs.jd.com/taro/docs/next/config-detail#outputroot)；

此选项必须搭配上述三个选项之一一起使用；

此选项优先级为： 终端传入的`--projectPath` > CI 配置的`projectPath` 选项 > [outputRoot 选项](https://taro-docs.jd.com/taro/docs/next/config-detail#outputroot)。

### 作为命令单独使用

```json
{
  "scripts": {
    //  直接 “打开开发者工具并载入项目”
    "build:tb": "taro open --type tb  --projectPath dist/xxx",
    //  直接 “上传代码作为开发版并生成预览二维码”
    "build:tb:preview": "taro preview --type tb",
    //  直接“上传代码作为体验版”
    "build:tb:upload": "taro upload --type tb",
    //  上传指定目录代码作为体验版
    "build:tb:upload2": "taro upload --type tb --projectPath dist/xxx"
  }
}
```

由上面的示例可知，插件额外新增了 3 个独立命令，让你可以直接操作指定目录。适用于把 `taro` 作为项目一部分的使用场景。

当直接作为命令使用时，有两个选项：

- --type 传入平台名称
- --projectPath 传入路径。 此选项优先级为： 终端传入的`--projectPath` > CI 配置的`projectPath` 选项 > [outputRoot 选项](https://taro-docs.jd.com/taro/docs/next/config-detail#outputroot)

## API

### 插件配置

| 参数        | 类型   | 是否必填 | 说明                                                           |
| :---------- | :----- | :------- | :------------------------------------------------------------- |
| appId       | string | 是       | 项目的 appId                                                   |
| projectPath | string | 否       | 上传的小程序的路径（默认取的 outputRoot ）（3.6.0 版本已废弃） |

## Q&A

1. 如果提示用户未登录?

请先扫码登陆

```sh
taobaodev login
```
