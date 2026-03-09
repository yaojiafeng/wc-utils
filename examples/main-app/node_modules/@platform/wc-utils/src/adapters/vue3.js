/**
 * Vue 3 适配器
 * 利用 Vue 3 内置的 defineCustomElement 将 Vue 3 组件注册为自定义元素。
 *
 * Vue 组件需通过 defineExpose() 暴露以下方法（如适用）：
 *   - validate(): Promise<boolean>
 *   - getData(): object
 *   - setData(data: object): void
 *   - reset(): void
 *
 * defineCustomElement 生成的自定义元素实例会将 expose 的属性/方法
 * 直接代理到元素实例上，因此主应用可直接调用 formEl.validate() 等。
 */

import { defineCustomElement } from 'vue';
import { camelToKebab } from '../utils/attr.js';

/** 约定的接口方法名 */
const INTERFACE_METHODS = ['validate', 'getData', 'setData', 'reset'];

/**
 * 将 Vue 3 组件注册为 Custom Element
 * @param {string} tagName
 * @param {object} component - Vue 3 SFC 或 Options/Composition API 组件对象
 * @param {object} options
 * @param {boolean} [options.shadow=true] - 是否启用 Shadow DOM
 * @param {string[]} [options.props] - 接受的 props（camelCase）
 * @param {string[]} [options.events] - 触发的自定义事件名
 * @param {string[]} [options.methods] - 需要代理的方法名
 */
export function registerVue3(tagName, component, options = {}) {
  const {
    shadow = true,
    props = [],
    events = [],
    methods = INTERFACE_METHODS,
  } = options;

  // defineCustomElement 接收的配置
  // styles 数组会自动注入 Shadow DOM（Vue 3.2.11+）
  const ceOptions = {
    shadowRoot: shadow,
  };

  // 将组件包装为 Custom Element 类
  const VueCE = defineCustomElement(component, ceOptions);

  /**
   * 扩展 VueCE，在实例上显式代理 interface 方法，以兼容
   * 不使用 defineExpose 的旧式 Options API 组件。
   *
   * 对于使用 defineExpose 的 Composition API 组件，Vue 3 会自动将
   * exposed 方法代理到元素实例，此处的代理是多一层保险。
   */
  class WcVue3Element extends VueCE {
    constructor() {
      super();
    }

    /**
     * 获取内部 Vue 组件实例（兼容 Vue 3 内部 API）
     * @private
     */
    _getVueInstance() {
      // Vue 3 custom element 将组件实例存储在 _instance 上
      return this._instance;
    }

    /**
     * 从 exposed 或 proxy 上查找方法
     * @private
     */
    _callMethod(name, ...args) {
      const inst = this._getVueInstance();
      if (!inst) {
        console.warn(`[wc-utils] Vue 3 组件实例尚未挂载，无法调用 ${name}`);
        return undefined;
      }

      // 优先从 expose 中取（defineExpose 暴露的方法）
      const exposed = inst.exposed;
      if (exposed && typeof exposed[name] === 'function') {
        return exposed[name](...args);
      }

      // 回退到组件 proxy（Options API 的 methods 等）
      const proxy = inst.proxy;
      if (proxy && typeof proxy[name] === 'function') {
        return proxy[name](...args);
      }

      console.warn(`[wc-utils] 组件未实现方法: ${name}，请确保已通过 defineExpose 暴露`);
      return undefined;
    }

    validate() {
      const result = this._callMethod('validate');
      return result instanceof Promise ? result : Promise.resolve(result ?? true);
    }

    getData() {
      return this._callMethod('getData') ?? {};
    }

    setData(data) {
      this._callMethod('setData', data);
    }

    reset() {
      this._callMethod('reset');
    }
  }

  // 将 props 数组信息挂载到类上，供 Vue 3 用于 observedAttributes
  // （defineCustomElement 内部会读取 component.props 生成 observedAttributes）
  // 这里主要是为了向外暴露元信息
  WcVue3Element._wcMeta = {
    tagName,
    framework: 'vue3',
    props,
    events,
    attributes: props.map(camelToKebab),
  };

  if (!customElements.get(tagName)) {
    customElements.define(tagName, WcVue3Element);
  } else {
    console.warn(`[wc-utils] 自定义元素 "${tagName}" 已注册，跳过重复注册`);
  }

  return WcVue3Element;
}
