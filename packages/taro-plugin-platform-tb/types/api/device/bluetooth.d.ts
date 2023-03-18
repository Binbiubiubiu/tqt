import Taro from "@tarojs/taro";

declare module "@tarojs/taro" {
  namespace getConnectedBluetoothDevices {
    interface BluetoothDeviceInfo {
      /** 值与 name 一致 */
      deviceName: string;
      /** 广播设备名称 */
      localName: string;
      /** 设备信号强度 */
      RSSI: string;
      /** 设备的广播内容 */
      advertisData: string;
      /** 设备的manufacturerData */
      manufacturerData: string;
    }
  }

  namespace openBluetoothAdapter {
    interface SuccessCallbackResult extends TqtTBGeneral.CallbackResult {
      /** 是否支持 BLE */
      isSupportBLE: boolean;
    }
  }

  namespace onBluetoothDeviceFound {
    interface CallbackResultBlueToothDevice {
      /** 值与 name 一致 */
      deviceName: string;
    }
  }

  namespace writeBLECharacteristicValue {
    interface OptionTB extends Omit<Option, "value"> {
      /** 蓝牙设备特征值对应的值，16进制字符串，限制在20字节内 */
      value: string;
    }
  }

  namespace getConnectedBluetoothDevices {
    interface OptionTB extends Omit<Option, "services"> {
      /** 蓝牙设备 ID */
      deviceId?: string;
    }
  }

  namespace getBluetoothDevices {
    interface OptionTB {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TaroGeneral.BluetoothError) => void;
      /** 接口调用失败的回调函数 */
      fail?: (res: TaroGeneral.BluetoothError) => void;
      /** 接口调用成功的回调函数 */
      success?: (res: SuccessCallbackResultTB) => void;
    }
    interface SuccessCallbackResultTB extends TqtTBGeneral.CallbackResult {
      /** 已发现的设备列表 */
      devices: SuccessCallbackResultBlueToothDeviceTB[];
    }
    /** uuid 对应的的已连接设备列表 */
    interface SuccessCallbackResultBlueToothDeviceTB extends TaroGeneral.CallbackResult {
      /** 设备信号强度 */
      RSSI: number;
      /** 设备的广播内容 */
      advertisData: string;
      /** 设备 Id */
      deviceId: string;
      /** 广播设备名称 */
      localName: string;
      /** 蓝牙设备名称，某些设备可能没有 */
      name: string;
      /** 值与 name 一致 */
      deviceName: string;
      /** 设备的manufacturerData */
      manufactureData: TaroGeneral.IAnyObject;
    }
  }

  namespace readBLECharacteristicValue {
    interface OptionTB extends Omit<Option, "success"> {
      /** 接口调用成功的回调函数 */
      success?: (res: SuccessCallbackResultTB) => void;
    }

    interface SuccessCallbackResultTB extends TqtTBGeneral.CallbackResult {
      /** 设备特征值信息。 */
      characteristic: CharacteristicTB;
    }

    interface CharacteristicTB {
      /** 蓝牙设备特征值的 UUID */
      characteristicId: string;
      /** 蓝牙设备特征值对应服务的 UUID */
      serviceId: string;
      /** 蓝牙设备特征值的 value */
      value: string;
    }
  }

  interface TaroStatic {
    openBluetoothAdapter(
      option?: openBluetoothAdapter.Option,
    ): Promise<openBluetoothAdapter.SuccessCallbackResult>;

    writeBLECharacteristicValue(
      option: writeBLECharacteristicValue.OptionTB,
    ): Promise<writeBLECharacteristicValue.Promised>;

    readBLECharacteristicValue(
      option: readBLECharacteristicValue.OptionTB,
    ): Promise<readBLECharacteristicValue.SuccessCallbackResultTB>;

    getBluetoothDevices(
      option?: getBluetoothDevices.OptionTB,
    ): Promise<getBluetoothDevices.SuccessCallbackResultTB>;

    getConnectedBluetoothDevices(
      option: getConnectedBluetoothDevices.OptionTB,
    ): Promise<getConnectedBluetoothDevices.SuccessCallbackResult>;
  }
}
