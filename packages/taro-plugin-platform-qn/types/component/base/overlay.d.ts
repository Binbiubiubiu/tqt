declare module "@tarojs/components" {
  import { ComponentType } from "react";
  import { CommonEventFunction, StandardProps } from "@tarojs/components/types/common";

  interface OverlayProps extends Omit<StandardProps, "animation"> {
    /**
     * 是否显示弹层
     */
    visible?: boolean;
    /**
     * 弹层相对于参照元素的定位 align 的值可以是由空格隔开的字符串，如 tl bl，其中 tl 代表目标元素的左上方，bl 代表基准元素的左下方，所以 tl bl 的意思是目标元素的左上方对齐基准元素左下方。其中定位的可选值有 tl, tc, tr, cl, cc, cr, bl, bc, br。t 为 top 的缩写，b 为 bottom 的缩写，c 为 center 的缩写，l 为 left 的缩写，r 为 right 的缩写. 合法的定义格式为：'xx xx';
     * @default 'tl bl'
     */
    align?: `${keyof OverlayProps.Align} ${keyof OverlayProps.Align}`;
    /**
     * 弹层相对于trigger的定位的微调, 接收数组[hoz, ver], 表示弹层在 left / top 上的增量 e.g. [100, 100] 表示往右(RTL 模式下是往左) 、下分布偏移100px
     * @default [0, 0]
     */
    offset?: [number, number];
    /**
     * 渲染组件的容器，传入该 DOM 的 id
     * @default document.body
     */
    container?: string;
    /**
     * 渲染组件的容器，传入该 DOM 的 id
     * @default document.body
     */
    target?: string;
    /**
     * 是否显示遮罩
     * @default false
     */
    hasMask?: boolean;
    /**
     * 是否支持 esc 按键关闭弹层
     * @default true
     */
    canCloseByEsc?: boolean;
    /**
     * 点击弹层外的区域是否关闭弹层，不显示遮罩时生效
     * @default true
     */
    canCloseByOutSideClick?: boolean;
    /**
     * 点击遮罩区域是否关闭弹层，显示遮罩时生效
     * @default true
     */
    canCloseByMask?: boolean;
    /**
     * 是否在每次弹层重新渲染后强制更新定位信息，一般用于弹层内容区域大小发生变化时，仍需保持原来的定位方式
     * @default false
     */
    shouldUpdatePosition?: boolean;
    /**
     * 弹层打开时是否让其中的元素自动获取焦点
     * @default false
     */
    autoFocus?: boolean;
    /**
     * 当弹层由于页面滚动等情况不在可视区域时，是否自动调整定位以出现在可视区域
     * @default true
     */
    needAdjust?: boolean;
    /**
     * 是否禁用页面滚动
     * @default false
     */
    disableScroll?: boolean;
    /**
     * 隐藏时是否保留子节点
     * @default false
     */
    cache?: boolean;
    /**
     * 安全节点，当点击 document 的时候，如果包含该节点则不会关闭弹层，传入该 DOM 的 id
     */
    safeNode?: string;
    /**
     * 弹层的根节点的样式类
     */
    wrapperClassName?: string;
    /**
     * 弹层的根节点的内联样式
     */
    wrapperStyle?: string;
    /**
     * 是否开启动效
     * @default true
     */
    animation?: { in: string; out: string } | boolean;
    /**
     * 弹层请求关闭时触发事件的回调函数 签名: Function(type: String, [type: String, e: Object]) => void 参数: type: {String} 弹层关闭的来源 _e_: {Object} DOM 事件
     */
    onRequestClose?: CommonEventFunction;
    /**
     * 弹层打开时触发事件的回调函数 签名: Function() => void
     */
    onOpen?: CommonEventFunction;
    /**
     * 弹层关闭时触发事件的回调函数 签名: Function() => void
     */
    onClose?: CommonEventFunction;
    /**
     * 弹层定位完成时触发的事件 签名: Function(config: Object, [config: Object, node: Object]) => void 参数: config: {Object} 定位的参数 config.align: {Array} 对齐方式，如 ['cc', 'cc']（如果开启 needAdjust，可能和预先设置的 align 不同） config.top: {Number} 距离视口顶部距离 config.left: {Number} 距离视口左侧距离 node: {Object} 定位参照的容器节点
     */
    onPosition?: CommonEventFunction;
  }
  namespace OverlayProps {
    interface Align {
      /** 上左 */
      tl: any;
      /** 上中 */
      tc: any;
      /** 上右 */
      tr: any;
      /** 中左 */
      cl: any;
      /** 中 */
      c: any;
      /** 中右 */
      cr: any;
      /** 下左 */
      bl: any;
      /** 下中 */
      bc: any;
      /** 下右 */
      br: any;
    }
  }
  export const Overlay: ComponentType<OverlayProps>;
}
