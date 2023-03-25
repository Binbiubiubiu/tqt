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

  modifyLoopBody = (child: string, _nodeName: string) => {
    // if (nodeName === "picker-view") {
    //   return `<picker-view-column class="{{item.cl}}" style="{{item.st}}">
    //     <view a:for="{{item.cn}}" a:key="sid">
    //       ${child}
    //     </view>
    //   </picker-view-column>`;
    // }

    return child;
  };

  modifyLoopContainer = (children: string, nodeName: string) => {
    if (nodeName === "overlay") {
      return `
  <view>${children}</view>
  `;
    }

    if (nodeName === "select") {
      const [option, optionGroup] = ["option", "option-group"].map((key) => {
        return {
          nn: this.componentsAlias[key]._num,
          attributes: this.miniComponents[key],
        };
      });

      return `
        <block a:for="{{i.cn}}" a:key="uid" a:for-item="i">
          <option a:if="{{i.nn==='${option.nn}'}}" ${this.buildAttribute2(
        option.attributes,
        "option",
      )} id="{{i.uid || i.sid}}" data-sid="{{i.sid}}">
            <block a:for="{{item.cn}}" a:key="sid">
              <template is="{{xs.e(0)}}" data="{{i:item}}" />
            </block>
          </option>
          <option-group a:if="{{i.nn==='${optionGroup.nn}'}}" ${this.buildAttribute2(
        optionGroup.attributes,
        "option-group",
      )} id="{{i.uid || i.sid}}" data-sid="{{item.sid}}" >
            <block a:for="{{item.cn}}" a:key="sid" a:for-item="i">
            <option a:if="{{i.nn==='${option.nn}'}}" ${this.buildAttribute2(
        option.attributes,
        "option",
      )} id="{{i.uid || i.sid}}" data-sid="{{i.sid}}">
                  <block a:for="{{item.cn}}" a:key="sid">
                    <template is="{{xs.e(0)}}" data="{{i:item}}" />
                  </block>
                </option>
              <template a:else is="{{xs.e(0)}}" data="{{i:item}}" />
            </block>
          </option-group>
        </block>
      `;
    }

    if (nodeName === "tab") {
      const attributes = this.miniComponents["tab-item"];
      return `
      <block a:for="{{xs.fTab(i.cn)}}" a:key="sid" a:for-item="i">
        <tab-item ${this.buildAttribute2(attributes, "tab-item")} id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
          <block a:for="{{item.cn}}" a:key="sid">
            <template is="{{xs.e(0)}}" data="{{i:item}}" />
          </block>
        </tab-item>
      </block>
    `;
    }
    if (nodeName === "table") {
      const attributes = this.miniComponents["table-column"];
      const slotAlias = this.componentsAlias.slot._num;
      return `
      <table-column a:for="{{i.cn}}" a:key="sid" a:for-item="i" ${this.buildAttribute2(
        attributes,
        "table-column",
      )} id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
        <!-- <block a:for="{{i.cn}}" a:key="sid">
          <view a:if="{{item.nn==='${slotAlias}'}}" slot-scope="row" class="{{item.cl}}" style="{{item.st}}" id="{{item.uid || item.sid}}" data-sid="{{item.sid}}">
            <block a:for="{{item.cn}}" a:key="sid">
              <template is="{{xs.e(0)}}" data="{{i:item}}" />
            </block>
          </view>
          <template a:else is="{{xs.e(0)}}" data="{{i:item}}" />
        </block> -->
      </table-column>
    `;
    }
    if (nodeName === "balloon" || nodeName === "tooltip") {
      const slot = this.componentsAlias.slot;
      const slotAlias = slot._num;
      return `
      <block a:for="{{i.cn}}" a:key="uid">
        <button a:if="{{item.nn==='${slotAlias}'}}" slot="{{item.p0}}" class="{{item.cl}}" style="{{item.st}}" id="{{item.uid || item.sid}}" data-sid="{{item.sid}}">
          <block a:for="{{item.cn}}" a:key="sid">
            <template is="{{xs.e(0)}}" data="{{i:item}}" />
          </block>
        </button>
        <template a:else is="{{xs.e(0)}}" data="{{i:item}}" />
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
    <block a:for="{{${itemName}.cn}}" a:key="sid" a:for-item="i">
      <item a:if="{{i.nn === '${item.nn}' }}" ${this.buildAttribute2(item.attributes, "item")} id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
          ${render(level - 1)}
      </item>
      <sub-menu a:elif="{{i.nn === '${subMenu.nn}' }}" ${this.buildAttribute2(
          item.attributes,
          "item",
        )} id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
          ${render(level - 1)}
      </sub-menu>
      <group a:elif="{{i.nn === '${group.nn}' }}" ${this.buildAttribute2(item.attributes, "item")} id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
          ${render(level - 1)}
      </group>
      <divider a:elif="{{i.nn === '${divider.nn}' }}" ${this.buildAttribute2(
          item.attributes,
          "item",
        )} id="{{i.uid||i.sid}}" data-sid="{{i.sid}}"/>
    </block>
  `;
      };
      return render(store.getState().menuLevel, "i");
    }

    return children;
  };

  modifyTemplateResult = (res: string, nodeName: string) => {
    if (
      nodeName === "tab-item" ||
      nodeName === "table-column" ||
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
    if (nodeName === "balloon") {
      return res.replace('visible="{{i.p12}}"', "{{i.p12!==undefined?'visible=\"{{i.p12}}\"':''}}");
    }

    if (nodeName === "checkbox" || nodeName === "radio") {
      return res.replace('checked="{{i.p0}}"', "{{i.p0!==undefined?'checked=\"{{i.p0}}\"':''}}");
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
