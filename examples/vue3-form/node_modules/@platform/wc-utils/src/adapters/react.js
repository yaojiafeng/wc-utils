/**
 * React 适配器
 * 手动实现 HTMLElement 子类，将 React 组件渲染到 Shadow DOM（或 Light DOM）。
 *
 * React 组件需使用 forwardRef + useImperativeHandle 暴露以下方法：
 *   - validate(): Promise<boolean>
 *   - getData(): object
 *   - setData(data: object): void
 *   - reset(): void
 *
 * 示例：
 *   const MyForm = React.forwardRef((props, ref) => {
 *     React.useImperativeHandle(ref, () => ({ validate, getData, setData, reset }));
 *     return <form>...</form>;
 *   });
 */

import { propsToAttributes, kebabToCamel } from '../utils/attr.js';

const INTERFACE_METHODS = ['validate', 'getData', 'setData', 'reset'];
const DEFAULT_OBSERVED_ATTRS = ['process-id', 'task-id', 'biz-id', 'base-api-url', 'auth-token'];

/**
 * 将 React 组件注册为 Custom Element
 * @param {string} tagName
 * @param {Function} Component - React 组件（需 forwardRef）
 * @param {object} options
 * @param {object} options.React - React 对象（必须传入）
 * @param {object} options.ReactDOM - ReactDOM 对象（必须传入）
 * @param {boolean} [options.shadow=true]
 * @param {string[]} [options.props] - 接受的 props（camelCase）
 * @param {string[]} [options.events] - 触发的自定义事件名
 */
export function registerReact(tagName, Component, options = {}) {
  const { React, ReactDOM, shadow = true, props = [], events = [] } = options;

  if (!React || !ReactDOM) {
    throw new Error('[wc-utils] React 适配器需要传入 React 和 ReactDOM：registerReact(tagName, Component, { React, ReactDOM })');
  }

  const observedAttrs = props.length ? propsToAttributes(props) : DEFAULT_OBSERVED_ATTRS;

  /**
   * 判断是否为 React 18 的 createRoot API
   * React 18 推荐 ReactDOM.createRoot，React 17 及以下使用 ReactDOM.render
   */
  const isReact18 = typeof ReactDOM.createRoot === 'function';

  class ReactCustomElement extends HTMLElement {
    constructor() {
      super();
      /** @type {React.RefObject} */
      this._ref = React.createRef();
      /** @type {object} 当前 props 快照 */
      this._props = {};
      /** Shadow root 或 light DOM 容器 */
      this._container = null;
      /** React 18 root */
      this._reactRoot = null;
    }

    static get observedAttributes() {
      return observedAttrs;
    }

    connectedCallback() {
      // 初始化容器
      if (shadow) {
        if (!this.shadowRoot) {
          this._container = this.attachShadow({ mode: 'open' });
        } else {
          this._container = this.shadowRoot;
        }
      } else {
        this._container = this;
      }

      // 读取初始属性
      observedAttrs.forEach((attr) => {
        const value = this.getAttribute(attr);
        if (value !== null) {
          this._props[kebabToCamel(attr)] = value;
        }
      });

      this._render();
    }

    disconnectedCallback() {
      if (!this._container) return;

      if (isReact18 && this._reactRoot) {
        // React 18: unmount via root
        this._reactRoot.unmount();
        this._reactRoot = null;
      } else {
        // React 17 及以下
        ReactDOM.unmountComponentAtNode(this._container);
      }
    }

    attributeChangedCallback(attrName, _oldValue, newValue) {
      const propName = kebabToCamel(attrName);
      this._props = { ...this._props, [propName]: newValue };

      // 组件已挂载时更新 props
      if (this._container) {
        this._render();
      }
    }

    _render() {
      if (!this._container) return;

      const element = React.createElement(Component, {
        ...this._props,
        ref: this._ref,
        onError: (detail) => {
          this.dispatchEvent(new CustomEvent('error', { detail, bubbles: true, composed: true }));
        },
        onChange: (detail) => {
          this.dispatchEvent(new CustomEvent('change', { detail, bubbles: true, composed: true }));
        },
      });

      if (isReact18) {
        if (!this._reactRoot) {
          this._reactRoot = ReactDOM.createRoot(this._container);
        }
        this._reactRoot.render(element);
      } else {
        ReactDOM.render(element, this._container);
      }
    }

    // ─── 接口方法代理 ───────────────────────────────────────────────────────────

    validate() {
      const result = this._ref.current?.validate?.();
      return result instanceof Promise ? result : Promise.resolve(result ?? true);
    }

    getData() {
      return this._ref.current?.getData?.() ?? {};
    }

    setData(data) {
      this._ref.current?.setData?.(data);
    }

    reset() {
      this._ref.current?.reset?.();
    }
  }

  ReactCustomElement._wcMeta = {
    tagName,
    framework: 'react',
    props,
    events,
    attributes: observedAttrs,
  };

  if (!customElements.get(tagName)) {
    customElements.define(tagName, ReactCustomElement);
  } else {
    console.warn(`[wc-utils] 自定义元素 "${tagName}" 已注册，跳过重复注册`);
  }

  return ReactCustomElement;
}
