import { capitalize, toCamelCase } from "@tarojs/shared";
import { Attributes, RecursiveTemplate } from "@tarojs/shared/dist/template";
import store from "./store";

export class Template extends RecursiveTemplate {
  exportExpr = "export default";
  supportXS = true;
  Adapter = {
    if: "a:if",
    else: "a:else",
    elseif: "a:elif",
    for: "a:for",
    forItem: "a:for-item",
    forIndex: "a:for-index",
    key: "a:key",
    xs: "sjs",
    type: "qn",
  };

  buildXsTemplate() {
    return '<import-sjs name="xs" from="./utils.sjs" />';
  }

  replacePropName(name, value, compName, componentAlias) {
    if (value === "eh") return name.replace("bind", "on");

    if (compName === "map") {
      const polygonsAlias = componentAlias.polygons;
      if (value.includes(polygonsAlias)) {
        name = "polygon";
      }
    }

    return name;
  }

  getEvents() {
    return {
      onTap: "eh",
      onTouchMove: "eh",
      onTouchEnd: "eh",
      onTouchCancel: "eh",
      onLongTap: "eh",
    };
  }

  buildThirdPartyAttr(attrs: Set<string>) {
    return [...attrs].reduce((str, attr) => {
      if (attr.startsWith("@")) {
        return `${str}on${capitalize(attr.slice(1))}="eh" `;
      } else if (attr.startsWith("bind")) {
        return `${str}${attr}="eh" `;
      } else if (attr.startsWith("on")) {
        return `${str}${attr}="eh" `;
      }

      return `${str}${attr}="{{ i.${toCamelCase(attr)} }}" `;
    }, "");
  }

  createMiniComponents(components): any {
    const result = super.createMiniComponents(components);

    // 兼容支付宝 2.0 构建
    delete result.slot;
    delete result["slot-view"];
    delete result["native-slot"];

    return result;
  }

  // TODO: 因为在baseTemplate是私有的,所以copy一份,后续如果public就去除
  buildAttribute2(attrs: Attributes, nodeName: string): string {
    return Object.keys(attrs)
      .map(
        (k) =>
          `${k}="${
            k.startsWith("bind") || k.startsWith("on") || k.startsWith("catch")
              ? attrs[k]
              : `{${this.getAttrValue(attrs[k], k, nodeName)}}`
          }" `,
      )
      .join("");
  }

  modifyLoopBody = (child: string, nodeName: string) => {
    if (nodeName === "picker-view") {
      return `<picker-view-column class="{{item.cl}}" style="{{item.st}}">
        <view a:for="{{item.cn}}" a:key="sid">
          ${child}
        </view>
      </picker-view-column>`;
    }

    return child;
  };

  modifyLoopContainer = (children: string, nodeName: string) => {
    if (nodeName === "picker" || nodeName === "overlay") {
      return `
  <view>${children}</view>
  `;
    }

    if (nodeName === "tab") {
      const attributes = this.miniComponents["tab-item"];
      return `
      <block a:for="{{xs.fTab(i.cn)}}" a:key="sid">
        <tab-item ${this.buildAttribute2(attributes, "tab-item")} id="{{item.uid||item.sid}}" data-sid="{{item.sid}}">
          <block a:for="{{item.cn}}" a:key="sid">
            <template is="{{xs.e(0)}}" data="{{i:item}}" />
          </block>
        </tab-item>
      </block>
    `;
    }
    if (nodeName === "menu") {
      const [item, group, subMenu, divider] = ["item", "group", "sub-menu", "divider"].map(
        (key) => {
          return {
            nn: this.componentsAlias[key]._num,
            attributes: this.miniComponents[key],
          };
        },
      );
      const render = (level: number, itemName = "item") => {
        if (level < 1) {
          return `<template is="{{xs.e(0)}}" data="{{i:item}}" />`;
        }
        return `
    <block a:for="{{${itemName}.cn}}" a:key="sid">
      <item a:if="{{item.nn === '${item.nn}' }}" ${this.buildAttribute2(item.attributes, "item")} id="{{item.uid||item.sid}}" data-sid="{{item.sid}}">
          ${render(level - 1)}
      </item>
      <sub-menu a:elif="{{item.nn === '${subMenu.nn}' }}" ${this.buildAttribute2(
          item.attributes,
          "item",
        )} id="{{item.uid||item.sid}}" data-sid="{{item.sid}}">
          ${render(level - 1)}
      </sub-menu>
      <group a:elif="{{item.nn === '${group.nn}' }}" ${this.buildAttribute2(
          item.attributes,
          "item",
        )} id="{{item.uid||item.sid}}" data-sid="{{item.sid}}">
          ${render(level - 1)}
      </group>
      <divider a:elif="{{item.nn === '${divider.nn}' }}" ${this.buildAttribute2(
          item.attributes,
          "item",
        )} id="{{item.uid||item.sid}}" data-sid="{{item.sid}}"/>
      <block a:else >
        <template is="{{xs.e(0)}}" data="{{i:item}}" />
      </block>
    </block>
  `;
      };
      return render(store.getState().menuLevel, "i");
    }

    return children;
  };

  modifyTemplateResult = (res: string, nodeName: string) => {
    if (
      nodeName === "picker-view-column" ||
      nodeName === "tab-item" ||
      // nodeName === "item" ||
      nodeName === "group" ||
      nodeName === "divider" ||
      nodeName === "sub-menu"
    )
      return "";
    if (nodeName === "tab") {
      return res.replace(
        'activeKey="{{i.p0}}"',
        "{{i.p0!==undefined?'activeKey=\"{{i.p0}}\"':''}}",
      );
    }
    if (nodeName === "menu-button") {
      return res.replace('visible="{{i.p4}}"', "{{i.p4!==undefined?'visible=\"{{i.p4}}\"':''}}");
    }
    return res;
  };

  modifyThirdPartyLoopBody = () => {
    // 兼容支付宝 2.0 构建
    const slot = this.componentsAlias.slot;
    const slotAlias = slot._num;
    const slotNamePropAlias = slot.name;

    return `<view a:if="{{item.nn==='${slotAlias}'}}" slot="{{item.${slotNamePropAlias}}}" id="{{item.uid||item.sid}}" data-sid="{{item.sid}}">
        <block a:for="{{item.cn}}" a:key="sid">
          <template is="{{xs.e(0)}}" data="{{i:item}}" />
        </block>
      </view>
      <template a:else is="{{xs.e(0)}}" data="{{i:item}}" />`;
  };

  buildXSTmpExtra() {
    const tabItemAlias = this.componentsAlias["tab-item"]._num;
    return `fTab: function (l) {
    return l.filter(function (i) {return i.nn === '${tabItemAlias}'})
  },json:function(v){return JSON.stringify(v);},`;
  }
}
