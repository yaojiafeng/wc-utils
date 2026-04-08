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
 *
 * ── 传递对象/函数类型 prop ──────────────────────────────────────────────────
 * React 适配器支持通过 JS property 直接传入对象/数组/函数。
 * 在 Vue 2/3 父组件中需要使用 .prop 修饰符：
 *
 *   ✅  :myProp.prop="someObject"   → element.myProp = someObject（property 赋值）
 *   ❌  :myProp="someObject"        → element.setAttribute(...)（字符串化，丢失对象）
 *
 * ── 自定义事件 ──────────────────────────────────────────────────────────────
 * options.events 中声明的每个事件名（如 'navigate'）会被转换为对应的 React
 * callback prop（如 onNavigate），React 组件调用该 callback 时，适配器自动
 * 在自定义元素上 dispatchEvent(new CustomEvent('navigate', { detail: ... }))。
 *
 * 与 Vue 2 不同，React 适配器的事件必须在 options.events 中声明才会生效。
 * ────────────────────────────────────────────────────────────────────────────
 */

import { propsToAttributes, kebabToCamel } from '../utils/attr.js';

const INTERFACE_METHODS = ['validate', 'getData', 'setData', 'reset'];
const DEFAULT_OBSERVED_ATTRS = ['process-id', 'task-id', 'biz-id', 'base-api-url', 'auth-token'];

/** 事件名 → React callback prop 名：'navigate' → 'onNavigate' */
function toReactEventProp(eventName) {
  return 'on' + eventName.charAt(0).toUpperCase() + eventName.slice(1);
}

/**
 * 将 React 组件注册为 Custom Element
 * @param {string} tagName
 * @param {Function} Component - React 组件（需 forwardRef）
 * @param {object} options
 * @param {object} options.React - React 对象（必须传入）
 * @param {object} options.ReactDOM - ReactDOM 对象（必须传入）
 * @param {boolean} [options.shadow=true]
 * @param {string[]} [options.props] - 接受的 props（camelCase）。
 *   ⚠️ React 适配器与 Vue 适配器不同：此处声明的 props 决定了
 *   observedAttributes 范围，未声明的字符串 prop 不会响应属性变化。
 *   对象/函数类型的 prop 通过 property setter 传入，不受此限制。
 * @param {string[]} [options.events] - 触发的自定义事件名。
 *   ⚠️ React 适配器与 Vue 适配器不同：事件必须在此处声明才会转发为
 *   CustomEvent。默认包含 'change'、'error'。
 */
export function registerReact(tagName, Component, options = {}) {
  const { React, ReactDOM, shadow = true, props = [], events = [] } = options;

  if (!React || !ReactDOM) {
    throw new Error('[wc-utils] React 适配器需要传入 React 和 ReactDOM：registerReact(tagName, Component, { React, ReactDOM })');
  }

  const observedAttrs = props.length ? propsToAttributes(props) : DEFAULT_OBSERVED_ATTRS;

  // 合并默认事件，保证 change / error 始终可用
  const allEvents = Array.from(new Set(['change', 'error', ...events]));

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
      /** @type {object} 当前 props 快照（含字符串 attribute 值和对象 property 值） */
      this._props = {};
      /** Shadow root 或 light DOM 容器 */
      this._container = null;
      /** React 18 root */
      this._reactRoot = null;

      // 在构造时为每个声明的 prop 设置 property getter/setter，
      // 这样父组件在元素连接 DOM 之前执行的 :prop.prop="obj" 赋值也能被捕获。
      props.forEach((propName) => {
        Object.defineProperty(this, propName, {
          get: () => this._props[propName],
          set: (value) => {
            this._props = { ...this._props, [propName]: value };
            // 仅在容器初始化后才触发重渲染，否则等待 connectedCallback 统一渲染
            if (this._container) this._render();
          },
          configurable: true,
          enumerable: true,
        });
      });
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

      // 读取初始字符串 attribute（对象类型 prop 已通过 property setter 存入 _props）
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
        this._reactRoot.unmount();
        this._reactRoot = null;
      } else {
        ReactDOM.unmountComponentAtNode(this._container);
      }
    }

    attributeChangedCallback(attrName, _oldValue, newValue) {
      const propName = kebabToCamel(attrName);
      this._props = { ...this._props, [propName]: newValue };

      if (this._container) {
        this._render();
      }
    }

    _render() {
      if (!this._container) return;

      // 将 allEvents 中的每个事件名动态转换为 React callback prop，
      // callback 被调用时向自定义元素派发对应的 CustomEvent。
      const eventHandlers = {};
      allEvents.forEach((eventName) => {
        eventHandlers[toReactEventProp(eventName)] = (detail) => {
          this.dispatchEvent(new CustomEvent(eventName, { detail, bubbles: true, composed: true }));
        };
      });

      const element = React.createElement(Component, {
        ...this._props,
        ref: this._ref,
        ...eventHandlers,
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
    events: allEvents,
    attributes: observedAttrs,
  };

  if (!customElements.get(tagName)) {
    customElements.define(tagName, ReactCustomElement);
  } else {
    console.warn(`[wc-utils] 自定义元素 "${tagName}" 已注册，跳过重复注册`);
  }

  return ReactCustomElement;
}
