/**
 * @yxst/wc-utils
 * 流程引擎业务表单 Web Components 注册工具库
 *
 * 提供统一的 registerWC API，将 Vue 3 / Vue 2 / React 组件
 * 注册为自定义元素（Custom Elements），并自动处理：
 *   - 属性映射（kebab-case HTML 属性 ↔ camelCase props）
 *   - 接口方法代理（validate / getData / setData / reset）
 *   - 自定义事件转发（change / error）
 *   - Shadow DOM 样式隔离
 */

import { registerVue3 } from './adapters/vue3.js';
import { registerVue2 } from './adapters/vue2.js';
import { registerReact } from './adapters/react.js';

export { registerVue3, registerVue2, registerReact };
export { kebabToCamel, camelToKebab, propsToAttributes } from './utils/attr.js';

/** 默认 props（业务表单通用参数）*/
export const DEFAULT_PROPS = ['processId', 'taskId', 'bizId', 'baseApiUrl', 'authToken'];

/** 默认事件 */
export const DEFAULT_EVENTS = ['change', 'error'];

/**
 * 注册自定义元素（统一入口）
 *
 * @param {string} tagName - 自定义标签名（必须含连字符，如 'business-form'）
 * @param {object|Function} component - 框架组件（Vue 组件对象 或 React forwardRef 组件）
 * @param {string} framework - 'vue3' | 'vue' | 'vue2' | 'react'
 * @param {object} [options={}] - 可选配置
 * @param {boolean} [options.shadow=true] - 是否启用 Shadow DOM（默认开启，隔离样式）
 * @param {string[]} [options.props] - 组件接受的 props 列表（camelCase），默认使用 DEFAULT_PROPS
 * @param {string[]} [options.events] - 组件触发的事件列表，默认使用 DEFAULT_EVENTS
 * @param {object} [options.Vue] - Vue 2 构造函数（仅 vue2 模式需要）
 * @param {object} [options.React] - React 对象（仅 react 模式需要）
 * @param {object} [options.ReactDOM] - ReactDOM 对象（仅 react 模式需要）
 *
 * @returns {typeof HTMLElement | Promise<void>} 注册的 Custom Element 类（Vue 3 / React）
 *
 * @example
 * // Vue 3
 * import MyForm from './MyForm.vue';
 * registerWC('my-form', MyForm, 'vue3');
 *
 * @example
 * // React
 * import MyForm from './MyForm.jsx';
 * registerWC('my-form', MyForm, 'react', { React, ReactDOM });
 *
 * @example
 * // Vue 2
 * import Vue from 'vue';
 * import MyForm from './MyForm.vue';
 * registerWC('my-form', MyForm, 'vue2', { Vue });
 */
export function registerWC(tagName, component, framework, options = {}) {
  if (!tagName || !tagName.includes('-')) {
    throw new Error(`[wc-utils] 自定义元素标签名必须包含连字符（如 "my-form"），收到："${tagName}"`);
  }

  const opts = {
    shadow: true,
    props: DEFAULT_PROPS,
    events: DEFAULT_EVENTS,
    ...options,
  };

  switch (framework) {
    case 'vue3':
    case 'vue':
      return registerVue3(tagName, component, opts);

    case 'vue2':
      return registerVue2(tagName, component, opts);

    case 'react':
      return registerReact(tagName, component, opts);

    default:
      throw new Error(
        `[wc-utils] 不支持的框架类型: "${framework}"。支持的值: "vue3", "vue2", "react"`
      );
  }
}

/**
 * 动态加载业务表单脚本（业务方 UMD）
 * 脚本加载完成后，自定义元素即可在 DOM 中使用。
 *
 * @param {string} url - 脚本 URL
 * @param {object} [options]
 * @param {number} [options.timeout=10000] - 超时时间（ms）
 * @param {string} [options.wcTag] - 自定义元素标签名；传入后若元素已注册则直接跳过加载
 * @param {boolean} [options.bypassSandbox=false] - 是否绕过 qiankun 沙箱（默认关闭，保持原有行为）
 *   启用后使用 Node.prototype.appendChild 替代 document.head.appendChild，
 *   可避免脚本进入 qiankun 的 eval 沙箱，防止 HTMLElement.prototype 访问失败。
 *   适用于作为 qiankun 子应用运行，且 UMD 内部依赖 Custom Elements / class extends HTMLElement 的场景。
 * @returns {Promise<void>}
 *
 * @example
 * // 普通用法（与原来完全一致）
 * await loadFormScript('https://cdn.example.com/forms/my-form.umd.js');
 *
 * @example
 * // 在 qiankun 子应用中绕过沙箱
 * await loadFormScript('https://cdn.example.com/forms/my-form.umd.js', {
 *   wcTag: 'my-form',
 *   bypassSandbox: true,
 *   timeout: 15000,
 * });
 */
export function loadFormScript(url, { timeout = 10000, wcTag, bypassSandbox = false } = {}) {
  return new Promise((resolve, reject) => {
    // 若提供 wcTag，且自定义元素已注册，则跳过加载
    if (wcTag && window.customElements && window.customElements.get(wcTag)) {
      resolve();
      return;
    }

    // 同 src 的 script 已插入 DOM：等待其 load / error 事件，而非静默跳过
    const existing = document.querySelector(`script[src="${url}"]`);
    if (existing) {
      existing.addEventListener('load', resolve, { once: true });
      existing.addEventListener(
        'error',
        () => reject(new Error(`[wc-utils] 脚本加载失败（已插入）: ${url}`)),
        { once: true }
      );
      return;
    }

    const script = document.createElement('script');
    script.src = url;
    script.async = true;

    const timer = setTimeout(() => {
      reject(new Error(`[wc-utils] 脚本加载超时（${timeout}ms）: ${url}`));
      script.remove();
    }, timeout);

    script.onload = () => {
      clearTimeout(timer);
      resolve();
    };

    script.onerror = () => {
      clearTimeout(timer);
      reject(new Error(`[wc-utils] 脚本加载失败: ${url}`));
      script.remove();
    };

    if (bypassSandbox) {
      // 绕过 qiankun 对 HTMLHeadElement.prototype.appendChild 的 patch，
      // 直接调用 Node.prototype.appendChild 将 script 注入真实 DOM，
      // 脚本在原生浏览器上下文执行，不受 qiankun eval 沙箱限制。
      Node.prototype.appendChild.call(document.head, script);
    } else {
      document.head.appendChild(script);
    }
  });
}
