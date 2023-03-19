/// <reference path="../../setup.d.ts" />

import React from "react";
import { DatePicker, MonthPicker, RangePicker, YearPicker } from "@tarojs/components";

<DatePicker
  size="small"
  state="error"
  placeholder=""
  value=""
  defaultValue=""
  format=""
  showTime
  resetTime
  onChange={() => {}}
  disabled
  hasClear
  visible
  defaultVisible
  startDate=""
  endDate=""
/>;

<MonthPicker
  size="small"
  state="loading"
  placeholder=""
  value=""
  defaultValue=""
  format=""
  onChange={() => {}}
  disabled
  hasClear
  visible
  defaultVisible
  onVisibleChange={() => {}}
/>;

<RangePicker
  size="small"
  value=""
  defaultValue=""
  format=""
  showTime
  resetTime
  onChange={() => {}}
  state="loading"
  disabled
  hasClear
  visible
  defaultVisible
  onVisibleChange={() => {}}
/>;

<YearPicker
  size="small"
  state="loading"
  placeholder=""
  value=""
  defaultValue=""
  format=""
  onChange={() => {}}
  disabled
  hasClear
  visible
  defaultVisible
  onVisibleChange={() => {}}
/>;
