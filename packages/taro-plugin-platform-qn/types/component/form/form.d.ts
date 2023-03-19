declare module "@tarojs/components" {
  import { ComponentType } from "react";
  import { CommonEventFunction } from "@tarojs/components/types/common";
  import { FormProps as OldProps } from "@tarojs/components/types/Form";

  interface FormProps extends OldProps {
    /**
     * 是否要开启内联模式
     * @default false
     */
    inline?: boolean;

    /**
     * 单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。 可选值: 'large'(大) 'medium'(中) 'small'(小)
     * @default 'medium'
     */
    size?: keyof FormProps.Size;

    /**
     * 标签的位置 可选值: 'top'(上) 'left'(左) 'inset'(内) 如不生效，请参考"注意事项"
     * @default 'left'
     */
    labelAlign?: keyof FormProps.LabelAlign;

    /**
     * 标签的左右对齐方式 可选值: 'left'(左) 'right'(右)
     */
    labelTextAlign?: keyof FormProps.LabelTextAlign;

    /**
     * 弹层是否与按钮宽度相同
     * @default true
     */
    value?: TqtQNGeneral.IUnknownObject;

    /**
     * 控制第一级 Item 的 labelCol
     */
    labelCol?: TqtQNGeneral.IUnknownObject;

    /**
     * 控制第一级 Item 的 wrapperCol
     */
    wrapperCol?: TqtQNGeneral.IUnknownObject;

    /**
     * 表单变化回调
     */
    onChange?: CommonEventFunction;
  }
  namespace FormProps {
    interface Size {
      large: any;
      medium: any;
      small: any;
    }

    interface LabelAlign {
      top: any;
      left: any;
      inset: any;
    }

    interface LabelTextAlign {
      left: any;
      right: any;
    }
  }
  export const Form: ComponentType<FormProps>;
}
