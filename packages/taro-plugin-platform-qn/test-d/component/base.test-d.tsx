/// <reference path="../setup.d.ts" />

import React from "react";
import { Progress, Tab, TabItem } from "@tarojs/components";

export const App = () => {
  return (
    <Progress
      size="medium"
      shape="circle"
      percent={30}
      state="normal"
      progressive={false}
      hasBorder={false}
      color=""
      backgroundColor=""
    />
  );
};

export const App2 = () => {
  return (
    <>
      <Tab
        activeKey=""
        size="medium"
        shape="pure"
        defaultActiveKey=""
        animation
        excessMode="slide"
        tabPosition="top"
        triggerType="click"
        onTap={() => {}}
        onChange={() => {}}
        onClose={() => {}}
      >
        <TabItem title="" closeable disabled />
      </Tab>
    </>
  );
};
