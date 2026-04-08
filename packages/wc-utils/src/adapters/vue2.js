/**
 * Vue 2 适配器
 * 依赖第三方库 vue-custom-element（已作为 @yxst/wc-utils 的依赖内置安装，使用者无需单独安装）。
 *
 * 使用方式：
 *   import Vue from 'vue';
 *   import { registerVue2 } from '@yxst/wc-utils';
 *   registerVue2('my-form', MyFormComponent, { Vue });
 *
 * 注意：Vue 2 已停止维护（EOL 2023-12-31），建议迁移至 Vue 3。
 *
 * ── 传递对象/函数类型 prop ──────────────────────────────────────────────────
 * HTML attribute 只能是字符串，直接 :prop="obj" 会变成 "[object Object]"。
 * 对于 Object / Array / Function 类型的 prop，必须在父组件中加 .prop 修饰符：
 *
 *   ✅  :myProp.prop="someObject"   → element.myProp = someObject（JS property）
 *   ❌  :myProp="someObject"        → element.setAttribute('my-prop', '[object Object]')
 *
 * vue-custom-element 的 property setter 在检测到 typeof value === 'object' 时会
 * 跳过 setAttribute，直接注入 Vue 实例，从而保留原始对象引用。
 * ────────────────────────────────────────────────────────────────────────────
 *
 * ── options.props 说明 ───────────────────────────────────────────────────────
 * 对于同步 Vue 2 组件，vue-custom-element 直接从 componentDefinition.props 中
 * 提取需要观察的 props，options.props 不参与 observedAttributes 的计算。
 * 因此 options.props 在此处主要用于：
 *   1. 文档 / 接口契约声明（记录哪些 prop 是对外公开的）
 *   2. wc-utils 内部的 _wcMeta 元信息（供工具链静态分析）
 * 如需精确控制哪些 prop 可被观察，应直接在 Vue 组件的 props 选项中声明。
 * ────────────────────────────────────────────────────────────────────────────
 */

import { camelToKebab } from '../utils/attr.js';
import vueCustomElement from 'vue-custom-element';

const INTERFACE_METHODS = ['validate', 'getData', 'setData', 'reset'];

/** 检测某个 prop 在 Vue 组件定义中声明的类型 */
function getPropType(component, propName) {
  const propsDef = component.props;
  if (!propsDef) return null;
  if (Array.isArray(propsDef)) return null;
  const def = propsDef[propName];
  if (!def) return null;
  const type = def.type || def;
  return Array.isArray(type) ? type[0] : type;
}

const OBJECT_LIKE_TYPES = [Object, Array, Function];

/**
 * 将 Vue 2 组件注册为 Custom Element
 * @param {string} tagName
 * @param {object} component - Vue 2 组件选项对象
 * @param {object} options
 * @param {object} options.Vue - Vue 2 构造函数（必须传入，避免重复打包）
 * @param {boolean} [options.shadow=true] - 是否启用 Shadow DOM
 * @param {string[]} [options.props] - 对外公开的 props 列表（文档/元信息用途，camelCase）
 * @param {string[]} [options.events] - 组件触发的事件列表
 */
export async function registerVue2(tagName, component, options = {}) {
  const { Vue, shadow = true, props = [], events = [] } = options;

  if (!Vue) {
    throw new Error('[wc-utils] Vue 2 适配器需要传入 Vue 构造函数：registerVue2(tagName, component, { Vue })');
  }

  if (!Vue.__vue_custom_element_installed) {
    Vue.use(vueCustomElement);
    Vue.__vue_custom_element_installed = true;
  }

  if (customElements.get(tagName)) {
    console.warn(`[wc-utils] 自定义元素 "${tagName}" 已注册，跳过重复注册`);
    return;
  }

  Vue.customElement(tagName, component, {
    shadow,
    // 对同步组件，vue-custom-element 实际上从 component.props 自行提取，此项仅作备用
    props: props.length ? props : Object.keys(component.props || {}),
    events: events.length ? events : ['change', 'error'],
    // 在 customElement 挂载后执行：代理接口方法 + 检测对象 prop 是否误用 attribute 传入
    vueInstanceCreatedCallback() {
      const el = this;

      // 代理接口方法到 Vue 实例
      INTERFACE_METHODS.forEach((method) => {
        if (typeof el[method] === 'undefined') {
          el[method] = (...args) => {
            const vueInst = el.__vue_custom_element__ && el.__vue_custom_element__.$children[0];
            if (vueInst && typeof vueInst[method] === 'function') {
              return vueInst[method](...args);
            }
            console.warn(`[wc-utils] Vue 2 组件未实现方法: ${method}`);
          };
        }
      });

      // 开发模式下：检测 Object/Array/Function 类型的 prop 是否被错误地当 attribute 传入
      if (process.env.NODE_ENV !== 'production') {
        const allProps = Object.keys(component.props || {});
        allProps.forEach((propName) => {
          const type = getPropType(component, propName);
          if (!OBJECT_LIKE_TYPES.includes(type)) return;

          const attrName = camelToKebab(propName);
          const attrVal = el.getAttribute(attrName);
          if (attrVal === '[object Object]' || attrVal === '[object Array]' || attrVal === 'function () {}') {
            console.warn(
              `[wc-utils] <${tagName}> prop "${propName}" 收到了字符串 "${attrVal}"，` +
              `但其声明类型为 ${type.name}。\n` +
              `对象/数组/函数类型的 prop 无法通过 HTML attribute 传递，请在父组件中使用 .prop 修饰符：\n` +
              `  ✅  :${propName}.prop="value"\n` +
              `  ❌  :${propName}="value"（当前用法）`
            );
          }
        });
      }
    },
  });

  // 附加元信息
  const elClass = customElements.get(tagName);
  if (elClass) {
    elClass._wcMeta = {
      tagName,
      framework: 'vue2',
      props,
      events,
      attributes: props.map(camelToKebab),
    };
  }
}
