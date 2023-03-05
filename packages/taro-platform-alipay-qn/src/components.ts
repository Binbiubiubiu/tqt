import { singleQuote } from "@tarojs/shared";

export const qn = {
  Progress: {
    size: singleQuote("medium"),
    shape: singleQuote("line"),
    percent: "0",
    state: singleQuote("normal"),
    progressive: "false",
    hasBorder: "false",
    color: "",
    backgroundColor: "",
  },
  Icon: {
    type: "",
    size: singleQuote("medium"),
    custom: "false",
  },
  // ======== 额外组件 ========
  Tab: {
    "active-key": "",
    // size: singleQuote("medium"),
    // shape: singleQuote("pure"),
    // defaultActiveKey: "",
    // animation: "true",
    // excessMode: singleQuote("slide"),
    // tabPosition: singleQuote("top"),
    // triggerType: singleQuote("click"),
    // bindTap: "",
    // bindChange: "",
    // bindClose: "",
  },
  TabItem: {
    title: "",
    "item-key": "",
    // closeable: "false",
    // disabled: "false",
  },
};
