import { defineCustomElement as E } from "vue";
function m(e) {
  return e.replace(/-([a-z])/g, (n, i) => i.toUpperCase());
}
function w(e) {
  return e.replace(/([A-Z])/g, (n) => `-${n.toLowerCase()}`);
}
function v(e) {
  return e.map(w);
}
const R = ["validate", "getData", "setData", "reset"];
function b(e, n, i = {}) {
  const {
    shadow: o = !0,
    props: s = [],
    events: u = [],
    methods: d = R
  } = i, p = E(n, {
    shadowRoot: o
  });
  class l extends p {
    constructor() {
      super();
    }
    /**
     * 获取内部 Vue 组件实例（兼容 Vue 3 内部 API）
     * @private
     */
    _getVueInstance() {
      return this._instance;
    }
    /**
     * 从 exposed 或 proxy 上查找方法
     * @private
     */
    _callMethod(c, ...t) {
      const r = this._getVueInstance();
      if (!r) {
        console.warn(`[wc-utils] Vue 3 组件实例尚未挂载，无法调用 ${c}`);
        return;
      }
      const a = r.exposed;
      if (a && typeof a[c] == "function")
        return a[c](...t);
      const _ = r.proxy;
      if (_ && typeof _[c] == "function")
        return _[c](...t);
      console.warn(`[wc-utils] 组件未实现方法: ${c}，请确保已通过 defineExpose 暴露`);
    }
    validate() {
      const c = this._callMethod("validate");
      return c instanceof Promise ? c : Promise.resolve(c ?? !0);
    }
    getData() {
      return this._callMethod("getData") ?? {};
    }
    setData(c) {
      this._callMethod("setData", c);
    }
    reset() {
      this._callMethod("reset");
    }
  }
  return l._wcMeta = {
    tagName: e,
    framework: "vue3",
    props: s,
    events: u,
    attributes: s.map(w)
  }, customElements.get(e) ? console.warn(`[wc-utils] 自定义元素 "${e}" 已注册，跳过重复注册`) : customElements.define(e, l), l;
}
const C = ["validate", "getData", "setData", "reset"];
async function D(e, n, i = {}) {
  const { Vue: o, shadow: s = !0, props: u = [], events: d = [] } = i;
  if (!o)
    throw new Error("[wc-utils] Vue 2 适配器需要传入 Vue 构造函数：registerVue2(tagName, component, { Vue })");
  let f;
  try {
    f = (await new Function('return import("vue-custom-element")')()).default;
  } catch {
    throw new Error("[wc-utils] 请安装 vue-custom-element：npm install vue-custom-element");
  }
  if (o.__vue_custom_element_installed || (o.use(f), o.__vue_custom_element_installed = !0), customElements.get(e)) {
    console.warn(`[wc-utils] 自定义元素 "${e}" 已注册，跳过重复注册`);
    return;
  }
  o.customElement(e, n, {
    shadow: s,
    // vue-custom-element 会自动将 props 映射到 HTML 属性（kebab-case）
    props: u.length ? u : Object.keys(n.props || {}),
    events: d.length ? d : ["change", "error"],
    // 在 customElement 挂载后，代理接口方法到 Vue 实例
    connectedCallback() {
      const l = this;
      C.forEach((h) => {
        typeof l[h] > "u" && (l[h] = (...c) => {
          const t = l.__vue__;
          if (t && typeof t[h] == "function")
            return t[h](...c);
          console.warn(`[wc-utils] Vue 2 组件未实现方法: ${h}`);
        });
      });
    }
  });
  const p = customElements.get(e);
  p && (p._wcMeta = {
    tagName: e,
    framework: "vue2",
    props: u,
    events: d,
    attributes: u.map(w)
  });
}
const T = ["process-id", "task-id", "biz-id", "base-api-url", "auth-token"];
function g(e, n, i = {}) {
  const { React: o, ReactDOM: s, shadow: u = !0, props: d = [], events: f = [] } = i;
  if (!o || !s)
    throw new Error("[wc-utils] React 适配器需要传入 React 和 ReactDOM：registerReact(tagName, Component, { React, ReactDOM })");
  const p = d.length ? v(d) : T, l = typeof s.createRoot == "function";
  class h extends HTMLElement {
    constructor() {
      super(), this._ref = o.createRef(), this._props = {}, this._container = null, this._reactRoot = null;
    }
    static get observedAttributes() {
      return p;
    }
    connectedCallback() {
      u ? this.shadowRoot ? this._container = this.shadowRoot : this._container = this.attachShadow({ mode: "open" }) : this._container = this, p.forEach((t) => {
        const r = this.getAttribute(t);
        r !== null && (this._props[m(t)] = r);
      }), this._render();
    }
    disconnectedCallback() {
      this._container && (l && this._reactRoot ? (this._reactRoot.unmount(), this._reactRoot = null) : s.unmountComponentAtNode(this._container));
    }
    attributeChangedCallback(t, r, a) {
      const _ = m(t);
      this._props = { ...this._props, [_]: a }, this._container && this._render();
    }
    _render() {
      if (!this._container) return;
      const t = o.createElement(n, {
        ...this._props,
        ref: this._ref,
        onError: (r) => {
          this.dispatchEvent(new CustomEvent("error", { detail: r, bubbles: !0, composed: !0 }));
        },
        onChange: (r) => {
          this.dispatchEvent(new CustomEvent("change", { detail: r, bubbles: !0, composed: !0 }));
        }
      });
      l ? (this._reactRoot || (this._reactRoot = s.createRoot(this._container)), this._reactRoot.render(t)) : s.render(t, this._container);
    }
    // ─── 接口方法代理 ───────────────────────────────────────────────────────────
    validate() {
      var r, a;
      const t = (a = (r = this._ref.current) == null ? void 0 : r.validate) == null ? void 0 : a.call(r);
      return t instanceof Promise ? t : Promise.resolve(t ?? !0);
    }
    getData() {
      var t, r;
      return ((r = (t = this._ref.current) == null ? void 0 : t.getData) == null ? void 0 : r.call(t)) ?? {};
    }
    setData(t) {
      var r, a;
      (a = (r = this._ref.current) == null ? void 0 : r.setData) == null || a.call(r, t);
    }
    reset() {
      var t, r;
      (r = (t = this._ref.current) == null ? void 0 : t.reset) == null || r.call(t);
    }
  }
  return h._wcMeta = {
    tagName: e,
    framework: "react",
    props: d,
    events: f,
    attributes: p
  }, customElements.get(e) ? console.warn(`[wc-utils] 自定义元素 "${e}" 已注册，跳过重复注册`) : customElements.define(e, h), h;
}
const V = ["processId", "taskId", "bizId", "baseApiUrl", "authToken"], M = ["change", "error"];
function y(e, n, i, o = {}) {
  if (!e || !e.includes("-"))
    throw new Error(`[wc-utils] 自定义元素标签名必须包含连字符（如 "my-form"），收到："${e}"`);
  const s = {
    shadow: !0,
    props: V,
    events: M,
    ...o
  };
  switch (i) {
    case "vue3":
    case "vue":
      return b(e, n, s);
    case "vue2":
      return D(e, n, s);
    case "react":
      return g(e, n, s);
    default:
      throw new Error(
        `[wc-utils] 不支持的框架类型: "${i}"。支持的值: "vue3", "vue2", "react"`
      );
  }
}
function A(e, { timeout: n = 1e4 } = {}) {
  return new Promise((i, o) => {
    if (document.querySelector(`script[src="${e}"]`)) {
      i();
      return;
    }
    const s = document.createElement("script");
    s.src = e, s.async = !0;
    const u = setTimeout(() => {
      o(new Error(`[wc-utils] 脚本加载超时（${n}ms）: ${e}`)), s.remove();
    }, n);
    s.onload = () => {
      clearTimeout(u), i();
    }, s.onerror = () => {
      clearTimeout(u), o(new Error(`[wc-utils] 脚本加载失败: ${e}`)), s.remove();
    }, document.head.appendChild(s);
  });
}
export {
  M as DEFAULT_EVENTS,
  V as DEFAULT_PROPS,
  w as camelToKebab,
  m as kebabToCamel,
  A as loadFormScript,
  v as propsToAttributes,
  g as registerReact,
  D as registerVue2,
  b as registerVue3,
  y as registerWC
};
