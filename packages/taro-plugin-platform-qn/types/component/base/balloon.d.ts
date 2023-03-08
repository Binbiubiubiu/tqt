declare module "@tarojs/components" {
  import { ComponentType } from "react";
  import { CommonEventFunction, StandardProps } from "@tarojs/components/types/common";

  interface BalloonProps extends StandardProps {
    /**
     * 样式类型 可选值: 'normal', 'primary'
     * @default 'normal'
     */
    type?: string;
    /**
     * 弹层当前显示的状态
     */
    visible?: boolean;
    /**
     * 弹层默认显示的状态
     * @default false
     */
    defaultVisible?: boolean;
    /**
     * 弹出层对齐方式
     * @default false
     */
    alignEdge?: boolean;
    /**
     * 是否显示关闭按钮
     * @default false
     */
    closable?: boolean;
    /**
     * 弹出层位置 可选值: 't'(上) 'r'(右) 'b'(下) 'l'(左) 'tl'(上左) 'tr'(上右) 'bl'(下左) 'br'(下右) 'lt'(左上) 'lb'(左下) 'rt'(右上) 'rb'(右下 及其 两两组合)
     * @default 'b'
     */
    align?: string;
    /**
     * 弹层相对于trigger的定位的微调, 接收数组[hoz, ver], 表示弹层在 left / top 上的增量 e.g. [100, 100] 表示往右(RTL 模式下是往左) 、下分布偏移100px
     * @default [0, 0]
     */
    offset?: string;
    /**
     * 当弹层由于页面滚动等情况不在可视区域时，是否自动调整定位以出现在可视区域
     * @default true
     */
    needAdjust?: boolean;
    /**
     * 弹层在触发以后的延时显示, 单位毫秒 ms
     */
    delay?: number;
    /**
     * 层出现后是否自动focus到内部第一个元素
     * @default true
     */
    autoFocus?: boolean;
    /**
     * 配置动画的播放方式
     * @default { in: 'zoomIn', out: 'zoomOut', }
     */
    animation?: { in: string; out: string } | TaroGeneral.IAnyObject;
    /**
     * 是否跟随滚动
     */
    followTrigger?: boolean;
    /**
     * 弹层在显示和隐藏触发的事件 签名: Function(visible: Boolean, type: String) => void 参数: visible: {Boolean} 弹层是否隐藏和显示 type: {String} 触发弹层显示或隐藏的来源， closeClick 表示由自带的关闭按钮触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
     */
    onVisibleChange?: CommonEventFunction;
    /**
     * 弹层关闭时触发事件的回调函数 签名: Function() => void
     */
    onClose?: CommonEventFunction;
    /**
     * 浮层关闭后触发的事件, 如果有动画，则在动画结束后触发 签名: Function() => void
     */
    onAfterClose?: CommonEventFunction;
  }
  export const Balloon: ComponentType<BalloonProps>;
}
