import Taro from "@tarojs/taro";

Taro.tb
  .openCart({
    cartType: "tmail",
    forceH5: true,
    success(res: TqtGeneral.CallbackResult) {},
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: TqtGeneral.CallbackResult) => {});

Taro.tb
  .addToCart({
    itemIds: "574141925233_4018047819826_4",
    exts: "text:text|123:456",
    success(res: TqtGeneral.CallbackResult) {},
    fail(res: TqtGeneral.CallbackResult) {},
    complete(res: TqtGeneral.CallbackResult) {},
  })
  .then((res: TqtGeneral.CallbackResult) => {});
