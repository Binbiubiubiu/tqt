declare module "@tarojs/components" {
  import { ComponentType } from "react";
  import { CommonEventFunction, StandardProps } from "@tarojs/components/types/common";

  interface BalloonProps extends Omit<StandardProps, "animation"> {
    /**
     * 样式类型 可选值: 'normal', 'primary'
     * @default 'normal'
     */
    type?: keyof BalloonProps.Type;
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
    align?: keyof BalloonProps.Align;
    /**
     * 弹层相对于trigger的定位的微调, 接收数组[hoz, ver], 表示弹层在 left / top 上的增量 e.g. [100, 100] 表示往右(RTL 模式下是往左) 、下分布偏移100px
     * @default [0, 0]
     */
    offset?: [number, number];
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
    animation?: { in: string; out: string } | boolean;
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
  namespace BalloonProps {
    interface Type {
      normal: any;
      primary: any;
    }

    interface Align {
      /** 上 */
      t: any;
      /** 右 */
      r: any;
      /** 下 */
      b: any;
      /** 左 */
      l: any;
      /** 上左 */
      tl: any;
      /** 上右 */
      tr: any;
      /** 下左 */
      bl: any;
      /** 下右 */
      br: any;
      /** 左上 */
      lt: any;
      /** 左下 */
      lb: any;
      /** 右上 */
      rt: any;
      /** 右下 */
      rb: any;
    }
  }
  export const Balloon: ComponentType<BalloonProps>;

  interface TooltipProps extends StandardProps {
    /**
     * 弹出层位置 可选值: 't'(上) 'r'(右) 'b'(下) 'l'(左) 'tl'(上左) 'tr'(上右) 'bl'(下左) 'br'(下右) 'lt'(左上) 'lb'(左下) 'rt'(右上) 'rb'(右下 及其 两两组合)
     * @default 'b'
     */
    align?: keyof TooltipProps.Align;

    /**
     * 触发行为 鼠标悬浮, 鼠标点击('hover','click')或者它们组成的数组，如['hover', 'click'], 强烈不建议使用'focus'，若有复杂交互，推荐使用triggerType为click的Balloon组件
     * @default 'click'
     */
    triggerType?: keyof TooltipProps.TriggerType | Array<keyof TooltipProps>;

    /**
     * 是否跟随滚动
     */
    followTrigger?: boolean;
  }
  namespace TooltipProps {
    interface TriggerType {
      hover: any;
      click: any;
    }

    interface Align {
      /** 上 */
      t: any;
      /** 右 */
      r: any;
      /** 下 */
      b: any;
      /** 左 */
      l: any;
      /** 上左 */
      tl: any;
      /** 上右 */
      tr: any;
      /** 下左 */
      bl: any;
      /** 下右 */
      br: any;
      /** 左上 */
      lt: any;
      /** 左下 */
      lb: any;
      /** 右上 */
      rt: any;
      /** 右下 */
      rb: any;
    }
  }
  export const Tooltip: ComponentType<TooltipProps>;
}
