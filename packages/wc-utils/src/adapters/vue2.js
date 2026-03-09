/**
 * Vue 2 适配器
 * 依赖第三方库 vue-custom-element（需在主应用或业务方安装）。
 *
 * 使用方式：
 *   import Vue from 'vue';
 *   import { registerVue2 } from '@yxst/wc-utils';
 *   registerVue2('my-form', MyFormComponent, { Vue });
 *
 * 注意：Vue 2 已停止维护（EOL 2023-12-31），建议迁移至 Vue 3。
 */

import { camelToKebab } from '../utils/attr.js';

const INTERFACE_METHODS = ['validate', 'getData', 'setData', 'reset'];

/**
 * 将 Vue 2 组件注册为 Custom Element
 * @param {string} tagName
 * @param {object} component - Vue 2 组件选项对象
 * @param {object} options
 * @param {object} options.Vue - Vue 2 构造函数（必须传入，避免重复打包）
 * @param {boolean} [options.shadow=true] - 是否启用 Shadow DOM
 * @param {string[]} [options.props] - 接受的 props（camelCase）
 * @param {string[]} [options.events] - 触发的自定义事件名
 */
export async function registerVue2(tagName, component, options = {}) {
  const { Vue, shadow = true, props = [], events = [] } = options;

  if (!Vue) {
    throw new Error('[wc-utils] Vue 2 适配器需要传入 Vue 构造函数：registerVue2(tagName, component, { Vue })');
  }

  // 动态加载 vue-custom-element（使用者需自行安装此包）
  let vueCustomElement;
  try {
    // 使用 Function 构造器绕过静态分析，避免打包时将此包误判为依赖
    // eslint-disable-next-line no-new-func
    vueCustomElement = (await new Function('return import("vue-custom-element")')()).default;
  } catch {
    throw new Error('[wc-utils] 请安装 vue-custom-element：npm install vue-custom-element');
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
    // vue-custom-element 会自动将 props 映射到 HTML 属性（kebab-case）
    props: props.length ? props : Object.keys(component.props || {}),
    events: events.length ? events : ['change', 'error'],
    // 在 customElement 挂载后，代理接口方法到 Vue 实例
    connectedCallback() {
      const el = this;
      INTERFACE_METHODS.forEach((method) => {
        if (typeof el[method] === 'undefined') {
          el[method] = (...args) => {
            const vueInst = el.__vue__;
            if (vueInst && typeof vueInst[method] === 'function') {
              return vueInst[method](...args);
            }
            console.warn(`[wc-utils] Vue 2 组件未实现方法: ${method}`);
          };
        }
      });
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
