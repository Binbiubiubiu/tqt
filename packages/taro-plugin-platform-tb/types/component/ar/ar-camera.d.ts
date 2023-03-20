declare module "@tarojs/components" {
  import { ComponentType } from "react";
  import { CommonEventFunction, StandardProps } from "@tarojs/components/types/common";
  interface ArCameraProps extends StandardProps {
    /**
     * AR模式选择
     */
    mode: string;

    /**
     * AR相机初始化成功回调
     */
    onInit?: CommonEventFunction;

    /**
     * AR相机帧回调
     */
    onARFrame?: CommonEventFunction<ArCameraProps.Frame>;

    /**
     * AR相机停止回调
     */
    onStop?: CommonEventFunction;

    /**
     * 错误回调
     */
    onError?: CommonEventFunction;

    /**
     * 当mode选择markerTracking时，需要设置一张图片的Marker图
     */
    marker?: ArCameraProps.Marker;

    /**
     * 如果设置为true，将会在onARFrame中返回相机帧的arraybuffer.( 手淘版本 >= 9.6.0 开始支持 )
     */
    useCapturedImage?: boolean;
  }
  export namespace ArCameraProps {
    interface Marker {
      /** marker图片链接 */
      url: string;
      /** marker高度 */
      height: number;
      /** marker宽度 */
      width: number;
      /** 图片marker id，唯一标识 */
      identifier: string;
    }

    interface Frame extends TqtTBGeneral.IAnyObject {
      /** 检测到的物体列表 */
      anchors: Array<Anchor>;
      /** 视频帧高度 */
      height: number;
      /** 视频帧宽度 */
      width: number;
    }

    /** 检测到的物体的信息(image，object) */
    interface Anchor {
      /** anchor唯一标识 */
      identifier: string;
      /** anchor相对世界坐标系的位置(4x4) */
      transform: Array<number>;
    }
  }
  export const ArCamera: ComponentType<ArCameraProps>;
}
