/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ke(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const q = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, At = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], z = () => {
}, Fs = () => !1, Kt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), an = (e) => e.startsWith("onUpdate:"), Y = Object.assign, lo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ti = Object.prototype.hasOwnProperty, H = (e, t) => ti.call(e, t), P = Array.isArray, vt = (e) => Wt(e) === "[object Map]", ni = (e) => Wt(e) === "[object Set]", Bo = (e) => Wt(e) === "[object Date]", A = (e) => typeof e == "function", J = (e) => typeof e == "string", et = (e) => typeof e == "symbol", W = (e) => e !== null && typeof e == "object", uo = (e) => (W(e) || A(e)) && A(e.then) && A(e.catch), oi = Object.prototype.toString, Wt = (e) => oi.call(e), fo = (e) => Wt(e).slice(8, -1), ao = (e) => Wt(e) === "[object Object]", po = (e) => J(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, It = /* @__PURE__ */ Ke(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), si = /* @__PURE__ */ Ke(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), wn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ri = /-\w/g, pe = wn(
  (e) => e.replace(ri, (t) => t.slice(1).toUpperCase())
), ii = /\B([A-Z])/g, de = wn(
  (e) => e.replace(ii, "-$1").toLowerCase()
), Dn = wn((e) => e.charAt(0).toUpperCase() + e.slice(1)), st = wn(
  (e) => e ? `on${Dn(e)}` : ""
), it = (e, t) => !Object.is(e, t), Vt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, pn = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, ci = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, qo = (e) => {
  const t = J(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Go;
const Xe = () => Go || (Go = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ho(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = J(o) ? ai(o) : ho(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (J(e) || W(e))
    return e;
}
const li = /;(?![^(]*\))/g, ui = /:([^]+)/, fi = /\/\*[^]*?\*\//g;
function ai(e) {
  const t = {};
  return e.replace(fi, "").split(li).forEach((n) => {
    if (n) {
      const o = n.split(ui);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function _o(e) {
  let t = "";
  if (J(e))
    t = e;
  else if (P(e))
    for (let n = 0; n < e.length; n++) {
      const o = _o(e[n]);
      o && (t += o + " ");
    }
  else if (W(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const pi = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", di = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", hi = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", _i = /* @__PURE__ */ Ke(pi), mi = /* @__PURE__ */ Ke(di), gi = /* @__PURE__ */ Ke(hi), vi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ei = /* @__PURE__ */ Ke(vi);
function Hs(e) {
  return !!e || e === "";
}
function bi(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let o = 0; n && o < e.length; o++)
    n = mo(e[o], t[o]);
  return n;
}
function mo(e, t) {
  if (e === t) return !0;
  let n = Bo(e), o = Bo(t);
  if (n || o)
    return n && o ? e.getTime() === t.getTime() : !1;
  if (n = et(e), o = et(t), n || o)
    return e === t;
  if (n = P(e), o = P(t), n || o)
    return n && o ? bi(e, t) : !1;
  if (n = W(e), o = W(t), n || o) {
    if (!n || !o)
      return !1;
    const s = Object.keys(e).length, r = Object.keys(t).length;
    if (s !== r)
      return !1;
    for (const i in e) {
      const c = e.hasOwnProperty(i), u = t.hasOwnProperty(i);
      if (c && !u || !c && u || !mo(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Oe(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ae;
class yi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = ae, !t && ae && (this.index = (ae.scopes || (ae.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = ae;
      try {
        return ae = this, t();
      } finally {
        ae = n;
      }
    } else process.env.NODE_ENV !== "production" && Oe("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ae, ae = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ae = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Ni() {
  return ae;
}
let K;
const $n = /* @__PURE__ */ new WeakSet();
class Us {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ae && ae.active && ae.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, $n.has(this) && ($n.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ks(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Yo(this), Ws(this);
    const t = K, n = ye;
    K = this, ye = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && K !== this && Oe(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Bs(this), K = t, ye = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Eo(t);
      this.deps = this.depsTail = void 0, Yo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? $n.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    qn(this) && this.run();
  }
  get dirty() {
    return qn(this);
  }
}
let ks = 0, Rt, $t;
function Ks(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = $t, $t = e;
    return;
  }
  e.next = Rt, Rt = e;
}
function go() {
  ks++;
}
function vo() {
  if (--ks > 0)
    return;
  if ($t) {
    let t = $t;
    for ($t = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Rt; ) {
    let t = Rt;
    for (Rt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Ws(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Bs(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const s = o.prevDep;
    o.version === -1 ? (o === n && (n = s), Eo(o), Oi(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s;
  }
  e.deps = t, e.depsTail = n;
}
function qn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (qs(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function qs(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Lt) || (e.globalVersion = Lt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !qn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = K, o = ye;
  K = e, ye = !0;
  try {
    Ws(e);
    const s = e.fn(e._value);
    (t.version === 0 || it(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    K = n, ye = o, Bs(e), e.flags &= -3;
  }
}
function Eo(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: s } = e;
  if (o && (o.nextSub = s, e.prevSub = void 0), s && (s.prevSub = o, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = s), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Eo(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Oi(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let ye = !0;
const Gs = [];
function we() {
  Gs.push(ye), ye = !1;
}
function De() {
  const e = Gs.pop();
  ye = e === void 0 ? !0 : e;
}
function Yo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = K;
    K = void 0;
    try {
      t();
    } finally {
      K = n;
    }
  }
}
let Lt = 0;
class wi {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ys {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!K || !ye || K === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== K)
      n = this.activeLink = new wi(K, this), K.deps ? (n.prevDep = K.depsTail, K.depsTail.nextDep = n, K.depsTail = n) : K.deps = K.depsTail = n, Js(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = K.depsTail, n.nextDep = void 0, K.depsTail.nextDep = n, K.depsTail = n, K.deps === n && (K.deps = o);
    }
    return process.env.NODE_ENV !== "production" && K.onTrack && K.onTrack(
      Y(
        {
          effect: K
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Lt++, this.notify(t);
  }
  notify(t) {
    go();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            Y(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      vo();
    }
  }
}
function Js(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        Js(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Gn = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), Yn = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Ft = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function X(e, t, n) {
  if (ye && K) {
    let o = Gn.get(e);
    o || Gn.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || (o.set(n, s = new Ys()), s.map = o, s.key = n), process.env.NODE_ENV !== "production" ? s.track({
      target: e,
      type: t,
      key: n
    }) : s.track();
  }
}
function Ie(e, t, n, o, s, r) {
  const i = Gn.get(e);
  if (!i) {
    Lt++;
    return;
  }
  const c = (u) => {
    u && (process.env.NODE_ENV !== "production" ? u.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: s,
      oldTarget: r
    }) : u.trigger());
  };
  if (go(), t === "clear")
    i.forEach(c);
  else {
    const u = P(e), d = u && po(n);
    if (u && n === "length") {
      const a = Number(o);
      i.forEach((f, m) => {
        (m === "length" || m === Ft || !et(m) && m >= a) && c(f);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && c(i.get(n)), d && c(i.get(Ft)), t) {
        case "add":
          u ? d && c(i.get("length")) : (c(i.get(ct)), vt(e) && c(i.get(Yn)));
          break;
        case "delete":
          u || (c(i.get(ct)), vt(e) && c(i.get(Yn)));
          break;
        case "set":
          vt(e) && c(i.get(ct));
          break;
      }
  }
  vo();
}
function ht(e) {
  const t = /* @__PURE__ */ M(e);
  return t === e ? t : (X(t, "iterate", Ft), /* @__PURE__ */ _e(e) ? t : t.map(at));
}
function bo(e) {
  return X(e = /* @__PURE__ */ M(e), "iterate", Ft), e;
}
function Ye(e, t) {
  return /* @__PURE__ */ ke(e) ? Ht(/* @__PURE__ */ lt(e) ? at(t) : t) : at(t);
}
const Di = {
  __proto__: null,
  [Symbol.iterator]() {
    return Mn(this, Symbol.iterator, (e) => Ye(this, e));
  },
  concat(...e) {
    return ht(this).concat(
      ...e.map((t) => P(t) ? ht(t) : t)
    );
  },
  entries() {
    return Mn(this, "entries", (e) => (e[1] = Ye(this, e[1]), e));
  },
  every(e, t) {
    return Le(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Le(
      this,
      "filter",
      e,
      t,
      (n) => n.map((o) => Ye(this, o)),
      arguments
    );
  },
  find(e, t) {
    return Le(
      this,
      "find",
      e,
      t,
      (n) => Ye(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Le(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Le(
      this,
      "findLast",
      e,
      t,
      (n) => Ye(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Le(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Le(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return jn(this, "includes", e);
  },
  indexOf(...e) {
    return jn(this, "indexOf", e);
  },
  join(e) {
    return ht(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return jn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Le(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ct(this, "pop");
  },
  push(...e) {
    return Ct(this, "push", e);
  },
  reduce(e, ...t) {
    return Jo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Jo(this, "reduceRight", e, t);
  },
  shift() {
    return Ct(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Le(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ct(this, "splice", e);
  },
  toReversed() {
    return ht(this).toReversed();
  },
  toSorted(e) {
    return ht(this).toSorted(e);
  },
  toSpliced(...e) {
    return ht(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ct(this, "unshift", e);
  },
  values() {
    return Mn(this, "values", (e) => Ye(this, e));
  }
};
function Mn(e, t, n) {
  const o = bo(e), s = o[t]();
  return o !== e && !/* @__PURE__ */ _e(e) && (s._next = s.next, s.next = () => {
    const r = s._next();
    return r.done || (r.value = n(r.value)), r;
  }), s;
}
const Vi = Array.prototype;
function Le(e, t, n, o, s, r) {
  const i = bo(e), c = i !== e && !/* @__PURE__ */ _e(e), u = i[t];
  if (u !== Vi[t]) {
    const f = u.apply(e, r);
    return c ? at(f) : f;
  }
  let d = n;
  i !== e && (c ? d = function(f, m) {
    return n.call(this, Ye(e, f), m, e);
  } : n.length > 2 && (d = function(f, m) {
    return n.call(this, f, m, e);
  }));
  const a = u.call(i, d, o);
  return c && s ? s(a) : a;
}
function Jo(e, t, n, o) {
  const s = bo(e);
  let r = n;
  return s !== e && (/* @__PURE__ */ _e(e) ? n.length > 3 && (r = function(i, c, u) {
    return n.call(this, i, c, u, e);
  }) : r = function(i, c, u) {
    return n.call(this, i, Ye(e, c), u, e);
  }), s[t](r, ...o);
}
function jn(e, t, n) {
  const o = /* @__PURE__ */ M(e);
  X(o, "iterate", Ft);
  const s = o[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ dn(n[0]) ? (n[0] = /* @__PURE__ */ M(n[0]), o[t](...n)) : s;
}
function Ct(e, t, n = []) {
  we(), go();
  const o = (/* @__PURE__ */ M(e))[t].apply(e, n);
  return vo(), De(), o;
}
const Ci = /* @__PURE__ */ Ke("__proto__,__v_isRef,__isVue"), zs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(et)
);
function xi(e) {
  et(e) || (e = String(e));
  const t = /* @__PURE__ */ M(this);
  return X(t, "has", e), t.hasOwnProperty(e);
}
class Zs {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return o === (s ? r ? or : nr : r ? tr : er).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = P(t);
    if (!s) {
      let u;
      if (i && (u = Di[n]))
        return u;
      if (n === "hasOwnProperty")
        return xi;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Q(t) ? t : o
    );
    if ((et(n) ? zs.has(n) : Ci(n)) || (s || X(t, "get", n), r))
      return c;
    if (/* @__PURE__ */ Q(c)) {
      const u = i && po(n) ? c : c.value;
      return s && W(u) ? /* @__PURE__ */ zn(u) : u;
    }
    return W(c) ? s ? /* @__PURE__ */ zn(c) : /* @__PURE__ */ yo(c) : c;
  }
}
class Xs extends Zs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    const i = P(t) && po(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ ke(r);
      if (!/* @__PURE__ */ _e(o) && !/* @__PURE__ */ ke(o) && (r = /* @__PURE__ */ M(r), o = /* @__PURE__ */ M(o)), !i && /* @__PURE__ */ Q(r) && !/* @__PURE__ */ Q(o))
        return d ? (process.env.NODE_ENV !== "production" && Oe(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (r.value = o, !0);
    }
    const c = i ? Number(n) < t.length : H(t, n), u = Reflect.set(
      t,
      n,
      o,
      /* @__PURE__ */ Q(t) ? t : s
    );
    return t === /* @__PURE__ */ M(s) && (c ? it(o, r) && Ie(t, "set", n, o, r) : Ie(t, "add", n, o)), u;
  }
  deleteProperty(t, n) {
    const o = H(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && Ie(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!et(n) || !zs.has(n)) && X(t, "has", n), o;
  }
  ownKeys(t) {
    return X(
      t,
      "iterate",
      P(t) ? "length" : ct
    ), Reflect.ownKeys(t);
  }
}
class Qs extends Zs {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Oe(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Oe(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Si = /* @__PURE__ */ new Xs(), Ti = /* @__PURE__ */ new Qs(), Pi = /* @__PURE__ */ new Xs(!0), Ai = /* @__PURE__ */ new Qs(!0), Jn = (e) => e, Xt = (e) => Reflect.getPrototypeOf(e);
function Ii(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = /* @__PURE__ */ M(s), i = vt(r), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, d = s[e](...o), a = n ? Jn : t ? Ht : at;
    return !t && X(
      r,
      "iterate",
      u ? Yn : ct
    ), Y(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: f, done: m } = d.next();
          return m ? { value: f, done: m } : {
            value: c ? [a(f[0]), a(f[1])] : a(f),
            done: m
          };
        }
      }
    );
  };
}
function Qt(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Oe(
        `${Dn(e)} operation ${n}failed: target is readonly.`,
        /* @__PURE__ */ M(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ri(e, t) {
  const n = {
    get(s) {
      const r = this.__v_raw, i = /* @__PURE__ */ M(r), c = /* @__PURE__ */ M(s);
      e || (it(s, c) && X(i, "get", s), X(i, "get", c));
      const { has: u } = Xt(i), d = t ? Jn : e ? Ht : at;
      if (u.call(i, s))
        return d(r.get(s));
      if (u.call(i, c))
        return d(r.get(c));
      r !== i && r.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && X(/* @__PURE__ */ M(s), "iterate", ct), s.size;
    },
    has(s) {
      const r = this.__v_raw, i = /* @__PURE__ */ M(r), c = /* @__PURE__ */ M(s);
      return e || (it(s, c) && X(i, "has", s), X(i, "has", c)), s === c ? r.has(s) : r.has(s) || r.has(c);
    },
    forEach(s, r) {
      const i = this, c = i.__v_raw, u = /* @__PURE__ */ M(c), d = t ? Jn : e ? Ht : at;
      return !e && X(u, "iterate", ct), c.forEach((a, f) => s.call(r, d(a), d(f), i));
    }
  };
  return Y(
    n,
    e ? {
      add: Qt("add"),
      set: Qt("set"),
      delete: Qt("delete"),
      clear: Qt("clear")
    } : {
      add(s) {
        !t && !/* @__PURE__ */ _e(s) && !/* @__PURE__ */ ke(s) && (s = /* @__PURE__ */ M(s));
        const r = /* @__PURE__ */ M(this);
        return Xt(r).has.call(r, s) || (r.add(s), Ie(r, "add", s, s)), this;
      },
      set(s, r) {
        !t && !/* @__PURE__ */ _e(r) && !/* @__PURE__ */ ke(r) && (r = /* @__PURE__ */ M(r));
        const i = /* @__PURE__ */ M(this), { has: c, get: u } = Xt(i);
        let d = c.call(i, s);
        d ? process.env.NODE_ENV !== "production" && zo(i, c, s) : (s = /* @__PURE__ */ M(s), d = c.call(i, s));
        const a = u.call(i, s);
        return i.set(s, r), d ? it(r, a) && Ie(i, "set", s, r, a) : Ie(i, "add", s, r), this;
      },
      delete(s) {
        const r = /* @__PURE__ */ M(this), { has: i, get: c } = Xt(r);
        let u = i.call(r, s);
        u ? process.env.NODE_ENV !== "production" && zo(r, i, s) : (s = /* @__PURE__ */ M(s), u = i.call(r, s));
        const d = c ? c.call(r, s) : void 0, a = r.delete(s);
        return u && Ie(r, "delete", s, void 0, d), a;
      },
      clear() {
        const s = /* @__PURE__ */ M(this), r = s.size !== 0, i = process.env.NODE_ENV !== "production" ? vt(s) ? new Map(s) : new Set(s) : void 0, c = s.clear();
        return r && Ie(
          s,
          "clear",
          void 0,
          void 0,
          i
        ), c;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = Ii(s, e, t);
  }), n;
}
function Vn(e, t) {
  const n = Ri(e, t);
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    H(n, s) && s in o ? n : o,
    s,
    r
  );
}
const $i = {
  get: /* @__PURE__ */ Vn(!1, !1)
}, Mi = {
  get: /* @__PURE__ */ Vn(!1, !0)
}, ji = {
  get: /* @__PURE__ */ Vn(!0, !1)
}, Li = {
  get: /* @__PURE__ */ Vn(!0, !0)
};
function zo(e, t, n) {
  const o = /* @__PURE__ */ M(n);
  if (o !== n && t.call(e, o)) {
    const s = fo(e);
    Oe(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const er = /* @__PURE__ */ new WeakMap(), tr = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap();
function Fi(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Hi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Fi(fo(e));
}
// @__NO_SIDE_EFFECTS__
function yo(e) {
  return /* @__PURE__ */ ke(e) ? e : Cn(
    e,
    !1,
    Si,
    $i,
    er
  );
}
// @__NO_SIDE_EFFECTS__
function Ui(e) {
  return Cn(
    e,
    !1,
    Pi,
    Mi,
    tr
  );
}
// @__NO_SIDE_EFFECTS__
function zn(e) {
  return Cn(
    e,
    !0,
    Ti,
    ji,
    nr
  );
}
// @__NO_SIDE_EFFECTS__
function Re(e) {
  return Cn(
    e,
    !0,
    Ai,
    Li,
    or
  );
}
function Cn(e, t, n, o, s) {
  if (!W(e))
    return process.env.NODE_ENV !== "production" && Oe(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Hi(e);
  if (r === 0)
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const c = new Proxy(
    e,
    r === 2 ? o : n
  );
  return s.set(e, c), c;
}
// @__NO_SIDE_EFFECTS__
function lt(e) {
  return /* @__PURE__ */ ke(e) ? /* @__PURE__ */ lt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ke(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function _e(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function dn(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function M(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ M(t) : e;
}
function ki(e) {
  return !H(e, "__v_skip") && Object.isExtensible(e) && pn(e, "__v_skip", !0), e;
}
const at = (e) => W(e) ? /* @__PURE__ */ yo(e) : e, Ht = (e) => W(e) ? /* @__PURE__ */ zn(e) : e;
// @__NO_SIDE_EFFECTS__
function Q(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function sr(e) {
  return /* @__PURE__ */ Q(e) ? e.value : e;
}
const Ki = {
  get: (e, t, n) => t === "__v_raw" ? e : sr(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return /* @__PURE__ */ Q(s) && !/* @__PURE__ */ Q(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function rr(e) {
  return /* @__PURE__ */ lt(e) ? e : new Proxy(e, Ki);
}
class Wi {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ys(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Lt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    K !== this)
      return Ks(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return qs(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && Oe("Write operation failed: computed value is readonly");
  }
}
// @__NO_SIDE_EFFECTS__
function Bi(e, t, n = !1) {
  let o, s;
  A(e) ? o = e : (o = e.get, s = e.set);
  const r = new Wi(o, s, n);
  return process.env.NODE_ENV, r;
}
const en = {}, hn = /* @__PURE__ */ new WeakMap();
let rt;
function qi(e, t = !1, n = rt) {
  if (n) {
    let o = hn.get(n);
    o || hn.set(n, o = []), o.push(e);
  } else process.env.NODE_ENV !== "production" && !t && Oe(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Gi(e, t, n = q) {
  const { immediate: o, deep: s, once: r, scheduler: i, augmentJob: c, call: u } = n, d = (S) => {
    (n.onWarn || Oe)(
      "Invalid watch source: ",
      S,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, a = (S) => s ? S : /* @__PURE__ */ _e(S) || s === !1 || s === 0 ? ze(S, 1) : ze(S);
  let f, m, _, N, C = !1, L = !1;
  if (/* @__PURE__ */ Q(e) ? (m = () => e.value, C = /* @__PURE__ */ _e(e)) : /* @__PURE__ */ lt(e) ? (m = () => a(e), C = !0) : P(e) ? (L = !0, C = e.some((S) => /* @__PURE__ */ lt(S) || /* @__PURE__ */ _e(S)), m = () => e.map((S) => {
    if (/* @__PURE__ */ Q(S))
      return S.value;
    if (/* @__PURE__ */ lt(S))
      return a(S);
    if (A(S))
      return u ? u(S, 2) : S();
    process.env.NODE_ENV !== "production" && d(S);
  })) : A(e) ? t ? m = u ? () => u(e, 2) : e : m = () => {
    if (_) {
      we();
      try {
        _();
      } finally {
        De();
      }
    }
    const S = rt;
    rt = f;
    try {
      return u ? u(e, 3, [N]) : e(N);
    } finally {
      rt = S;
    }
  } : (m = z, process.env.NODE_ENV !== "production" && d(e)), t && s) {
    const S = m, te = s === !0 ? 1 / 0 : s;
    m = () => ze(S(), te);
  }
  const j = Ni(), $ = () => {
    f.stop(), j && j.active && lo(j.effects, f);
  };
  if (r && t) {
    const S = t;
    t = (...te) => {
      S(...te), $();
    };
  }
  let R = L ? new Array(e.length).fill(en) : en;
  const ee = (S) => {
    if (!(!(f.flags & 1) || !f.dirty && !S))
      if (t) {
        const te = f.run();
        if (s || C || (L ? te.some((me, ne) => it(me, R[ne])) : it(te, R))) {
          _ && _();
          const me = rt;
          rt = f;
          try {
            const ne = [
              te,
              // pass undefined as the old value when it's changed for the first time
              R === en ? void 0 : L && R[0] === en ? [] : R,
              N
            ];
            R = te, u ? u(t, 3, ne) : (
              // @ts-expect-error
              t(...ne)
            );
          } finally {
            rt = me;
          }
        }
      } else
        f.run();
  };
  return c && c(ee), f = new Us(m), f.scheduler = i ? () => i(ee, !1) : ee, N = (S) => qi(S, !1, f), _ = f.onStop = () => {
    const S = hn.get(f);
    if (S) {
      if (u)
        u(S, 4);
      else
        for (const te of S) te();
      hn.delete(f);
    }
  }, process.env.NODE_ENV !== "production" && (f.onTrack = n.onTrack, f.onTrigger = n.onTrigger), t ? o ? ee(!0) : R = f.run() : i ? i(ee.bind(null, !0), !0) : f.run(), $.pause = f.pause.bind(f), $.resume = f.resume.bind(f), $.stop = $, $;
}
function ze(e, t = 1 / 0, n) {
  if (t <= 0 || !W(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Q(e))
    ze(e.value, t, n);
  else if (P(e))
    for (let o = 0; o < e.length; o++)
      ze(e[o], t, n);
  else if (ni(e) || vt(e))
    e.forEach((o) => {
      ze(o, t, n);
    });
  else if (ao(e)) {
    for (const o in e)
      ze(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && ze(e[o], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ut = [];
function tn(e) {
  ut.push(e);
}
function nn() {
  ut.pop();
}
let Ln = !1;
function w(e, ...t) {
  if (Ln) return;
  Ln = !0, we();
  const n = ut.length ? ut[ut.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Yi();
  if (o)
    yt(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var i, c;
          return (c = (i = r.toString) == null ? void 0 : i.call(r)) != null ? c : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${Jt(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...Ji(s)), console.warn(...r);
  }
  De(), Ln = !1;
}
function Yi() {
  let e = ut[ut.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Ji(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...zi(n));
  }), t;
}
function zi({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${Jt(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...Zi(e.props), r] : [s + r];
}
function Zi(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...ir(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function ir(e, t, n) {
  return J(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : /* @__PURE__ */ Q(t) ? (t = ir(e, /* @__PURE__ */ M(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : A(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = /* @__PURE__ */ M(t), n ? t : [`${e}=`, t]);
}
const No = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function yt(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    Bt(s, t, n);
  }
}
function Me(e, t, n, o) {
  if (A(e)) {
    const s = yt(e, t, n, o);
    return s && uo(s) && s.catch((r) => {
      Bt(r, t, n);
    }), s;
  }
  if (P(e)) {
    const s = [];
    for (let r = 0; r < e.length; r++)
      s.push(Me(e[r], t, n, o));
    return s;
  } else process.env.NODE_ENV !== "production" && w(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Bt(e, t, n, o = !0) {
  const s = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || q;
  if (t) {
    let c = t.parent;
    const u = t.proxy, d = process.env.NODE_ENV !== "production" ? No[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const a = c.ec;
      if (a) {
        for (let f = 0; f < a.length; f++)
          if (a[f](e, u, d) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      we(), yt(r, null, 10, [
        e,
        u,
        d
      ]), De();
      return;
    }
  }
  Xi(e, n, s, o, i);
}
function Xi(e, t, n, o = !0, s = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = No[t];
    if (n && tn(n), w(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && nn(), o)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
const re = [];
let Pe = -1;
const Et = [];
let Je = null, gt = 0;
const cr = /* @__PURE__ */ Promise.resolve();
let _n = null;
const Qi = 100;
function lr(e) {
  const t = _n || cr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ec(e) {
  let t = Pe + 1, n = re.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = re[o], r = Ut(s);
    r < e || r === e && s.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function xn(e) {
  if (!(e.flags & 1)) {
    const t = Ut(e), n = re[re.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ut(n) ? re.push(e) : re.splice(ec(t), 0, e), e.flags |= 1, ur();
  }
}
function ur() {
  _n || (_n = cr.then(pr));
}
function fr(e) {
  P(e) ? Et.push(...e) : Je && e.id === -1 ? Je.splice(gt + 1, 0, e) : e.flags & 1 || (Et.push(e), e.flags |= 1), ur();
}
function Zo(e, t, n = Pe + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < re.length; n++) {
    const o = re[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || process.env.NODE_ENV !== "production" && Oo(t, o))
        continue;
      re.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function ar(e) {
  if (Et.length) {
    const t = [...new Set(Et)].sort(
      (n, o) => Ut(n) - Ut(o)
    );
    if (Et.length = 0, Je) {
      Je.push(...t);
      return;
    }
    for (Je = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), gt = 0; gt < Je.length; gt++) {
      const n = Je[gt];
      process.env.NODE_ENV !== "production" && Oo(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Je = null, gt = 0;
  }
}
const Ut = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function pr(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => Oo(e, n) : z;
  try {
    for (Pe = 0; Pe < re.length; Pe++) {
      const n = re[Pe];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), yt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Pe < re.length; Pe++) {
      const n = re[Pe];
      n && (n.flags &= -2);
    }
    Pe = -1, re.length = 0, ar(e), _n = null, (re.length || Et.length) && pr(e);
  }
}
function Oo(e, t) {
  const n = e.get(t) || 0;
  if (n > Qi) {
    const o = t.i, s = o && Gr(o.type);
    return Bt(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let $e = !1;
const on = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Xe().__VUE_HMR_RUNTIME__ = {
  createRecord: Fn(dr),
  rerender: Fn(oc),
  reload: Fn(sc)
});
const pt = /* @__PURE__ */ new Map();
function tc(e) {
  const t = e.type.__hmrId;
  let n = pt.get(t);
  n || (dr(t, e.type), n = pt.get(t)), n.instances.add(e);
}
function nc(e) {
  pt.get(e.type.__hmrId).instances.delete(e);
}
function dr(e, t) {
  return pt.has(e) ? !1 : (pt.set(e, {
    initialDef: mn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function mn(e) {
  return Yr(e) ? e.__vccOpts : e;
}
function oc(e, t) {
  const n = pt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, mn(o.type).render = t), o.renderCache = [], $e = !0, o.job.flags & 8 || o.update(), $e = !1;
  }));
}
function sc(e, t) {
  const n = pt.get(e);
  if (!n) return;
  t = mn(t), Xo(n.initialDef, t);
  const o = [...n.instances];
  for (let s = 0; s < o.length; s++) {
    const r = o[s], i = mn(r.type);
    let c = on.get(i);
    c || (i !== n.initialDef && Xo(i, t), on.set(i, c = /* @__PURE__ */ new Set())), c.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (c.add(r), r.ceReload(t.styles), c.delete(r)) : r.parent ? xn(() => {
      r.job.flags & 8 || ($e = !0, r.parent.update(), $e = !1, c.delete(r));
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  fr(() => {
    on.clear();
  });
}
function Xo(e, t) {
  Y(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Fn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let be, Tt = [], Zn = !1;
function qt(e, ...t) {
  be ? be.emit(e, ...t) : Zn || Tt.push({ event: e, args: t });
}
function wo(e, t) {
  var n, o;
  be = e, be ? (be.enabled = !0, Tt.forEach(({ event: s, args: r }) => be.emit(s, ...r)), Tt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    wo(r, t);
  }), setTimeout(() => {
    be || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Zn = !0, Tt = []);
  }, 3e3)) : (Zn = !0, Tt = []);
}
function rc(e, t) {
  qt("app:init", e, t, {
    Fragment: Ae,
    Text: Gt,
    Comment: Ne,
    Static: cn
  });
}
function ic(e) {
  qt("app:unmount", e);
}
const cc = /* @__PURE__ */ Do(
  "component:added"
  /* COMPONENT_ADDED */
), hr = /* @__PURE__ */ Do(
  "component:updated"
  /* COMPONENT_UPDATED */
), lc = /* @__PURE__ */ Do(
  "component:removed"
  /* COMPONENT_REMOVED */
), uc = (e) => {
  be && typeof be.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !be.cleanupBuffer(e) && lc(e);
};
// @__NO_SIDE_EFFECTS__
function Do(e) {
  return (t) => {
    qt(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const fc = /* @__PURE__ */ _r(
  "perf:start"
  /* PERFORMANCE_START */
), ac = /* @__PURE__ */ _r(
  "perf:end"
  /* PERFORMANCE_END */
);
function _r(e) {
  return (t, n, o) => {
    qt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function pc(e, t, n) {
  qt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let he = null, mr = null;
function gn(e) {
  const t = he;
  return he = e, mr = e && e.type.__scopeId || null, t;
}
function dc(e, t = he, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && ds(-1);
    const r = gn(t);
    let i;
    try {
      i = e(...s);
    } finally {
      gn(r), o._d && ds(1);
    }
    return (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && hr(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function gr(e) {
  si(e) && w("Do not use built-in directive ids as custom directive id: " + e);
}
function nt(e, t, n, o) {
  const s = e.dirs, r = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    r && (c.oldValue = r[i].value);
    let u = c.dir[o];
    u && (we(), Me(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), De());
  }
}
function hc(e, t) {
  if (process.env.NODE_ENV !== "production" && (!Z || Z.isMounted) && w("provide() can only be used inside setup()."), Z) {
    let n = Z.provides;
    const o = Z.parent && Z.parent.provides;
    o === n && (n = Z.provides = Object.create(o)), n[e] = t;
  }
}
function sn(e, t, n = !1) {
  const o = Wr();
  if (o || bt) {
    let s = bt ? bt._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && A(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && w(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && w("inject() can only be used inside setup() or functional components.");
}
const _c = /* @__PURE__ */ Symbol.for("v-scx"), mc = () => {
  {
    const e = sn(_c);
    return e || process.env.NODE_ENV !== "production" && w(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Hn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !A(t) && w(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), vr(e, t, n);
}
function vr(e, t, n = q) {
  const { immediate: o, deep: s, flush: r, once: i } = n;
  process.env.NODE_ENV !== "production" && !t && (o !== void 0 && w(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && w(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && w(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = Y({}, n);
  process.env.NODE_ENV !== "production" && (c.onWarn = w);
  const u = t && o || !t && r !== "post";
  let d;
  if (kt) {
    if (r === "sync") {
      const _ = mc();
      d = _.__watcherHandles || (_.__watcherHandles = []);
    } else if (!u) {
      const _ = () => {
      };
      return _.stop = z, _.resume = z, _.pause = z, _;
    }
  }
  const a = Z;
  c.call = (_, N, C) => Me(_, a, N, C);
  let f = !1;
  r === "post" ? c.scheduler = (_) => {
    fe(_, a && a.suspense);
  } : r !== "sync" && (f = !0, c.scheduler = (_, N) => {
    N ? _() : xn(_);
  }), c.augmentJob = (_) => {
    t && (_.flags |= 4), f && (_.flags |= 2, a && (_.id = a.uid, _.i = a));
  };
  const m = Gi(e, t, c);
  return kt && (d ? d.push(m) : u && m()), m;
}
function gc(e, t, n) {
  const o = this.proxy, s = J(e) ? e.includes(".") ? Er(o, e) : () => o[e] : e.bind(o, o);
  let r;
  A(t) ? r = t : (r = t.handler, n = t);
  const i = Yt(this), c = vr(s, r.bind(o), n);
  return i(), c;
}
function Er(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
const vc = /* @__PURE__ */ Symbol("_vte"), Ec = (e) => e.__isTeleport, bc = /* @__PURE__ */ Symbol("_leaveCb");
function Vo(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Vo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function yc(e, t) {
  return A(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Y({ name: e.name }, t, { setup: e })
  ) : e;
}
function br(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Qo = /* @__PURE__ */ new WeakSet();
function es(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const vn = /* @__PURE__ */ new WeakMap();
function Mt(e, t, n, o, s = !1) {
  if (P(e)) {
    e.forEach(
      (C, L) => Mt(
        C,
        t && (P(t) ? t[L] : t),
        n,
        o,
        s
      )
    );
    return;
  }
  if (jt(o) && !s) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && Mt(e, t, n, o.component.subTree);
    return;
  }
  const r = o.shapeFlag & 4 ? Ro(o.component) : o.el, i = s ? null : r, { i: c, r: u } = e;
  if (process.env.NODE_ENV !== "production" && !c) {
    w(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, a = c.refs === q ? c.refs = {} : c.refs, f = c.setupState, m = /* @__PURE__ */ M(f), _ = f === q ? Fs : (C) => process.env.NODE_ENV !== "production" && (H(m, C) && !/* @__PURE__ */ Q(m[C]) && w(
    `Template ref "${C}" used on a non-ref value. It will not work in the production build.`
  ), Qo.has(m[C])) || es(a, C) ? !1 : H(m, C), N = (C, L) => !(process.env.NODE_ENV !== "production" && Qo.has(C) || L && es(a, L));
  if (d != null && d !== u) {
    if (ts(t), J(d))
      a[d] = null, _(d) && (f[d] = null);
    else if (/* @__PURE__ */ Q(d)) {
      const C = t;
      N(d, C.k) && (d.value = null), C.k && (a[C.k] = null);
    }
  }
  if (A(u))
    yt(u, c, 12, [i, a]);
  else {
    const C = J(u), L = /* @__PURE__ */ Q(u);
    if (C || L) {
      const j = () => {
        if (e.f) {
          const $ = C ? _(u) ? f[u] : a[u] : N(u) || !e.k ? u.value : a[e.k];
          if (s)
            P($) && lo($, r);
          else if (P($))
            $.includes(r) || $.push(r);
          else if (C)
            a[u] = [r], _(u) && (f[u] = a[u]);
          else {
            const R = [r];
            N(u, e.k) && (u.value = R), e.k && (a[e.k] = R);
          }
        } else C ? (a[u] = i, _(u) && (f[u] = i)) : L ? (N(u, e.k) && (u.value = i), e.k && (a[e.k] = i)) : process.env.NODE_ENV !== "production" && w("Invalid template ref type:", u, `(${typeof u})`);
      };
      if (i) {
        const $ = () => {
          j(), vn.delete(e);
        };
        $.id = -1, vn.set(e, $), fe($, n);
      } else
        ts(e), j();
    } else process.env.NODE_ENV !== "production" && w("Invalid template ref type:", u, `(${typeof u})`);
  }
}
function ts(e) {
  const t = vn.get(e);
  t && (t.flags |= 8, vn.delete(e));
}
Xe().requestIdleCallback;
Xe().cancelIdleCallback;
const jt = (e) => !!e.type.__asyncLoader, Co = (e) => e.type.__isKeepAlive;
function Nc(e, t) {
  yr(e, "a", t);
}
function Oc(e, t) {
  yr(e, "da", t);
}
function yr(e, t, n = Z) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Sn(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Co(s.parent.vnode) && wc(o, t, n, s), s = s.parent;
  }
}
function wc(e, t, n, o) {
  const s = Sn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Nr(() => {
    lo(o[t], s);
  }, n);
}
function Sn(e, t, n = Z, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      we();
      const c = Yt(n), u = Me(t, n, e, i);
      return c(), De(), u;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = st(No[e].replace(/ hook$/, ""));
    w(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const We = (e) => (t, n = Z) => {
  (!kt || e === "sp") && Sn(e, (...o) => t(...o), n);
}, Dc = We("bm"), Vc = We("m"), Cc = We(
  "bu"
), xc = We("u"), Sc = We(
  "bum"
), Nr = We("um"), Tc = We(
  "sp"
), Pc = We("rtg"), Ac = We("rtc");
function Ic(e, t = Z) {
  Sn("ec", e, t);
}
const Rc = /* @__PURE__ */ Symbol.for("v-ndc"), Xn = (e) => e ? Br(e) ? Ro(e) : Xn(e.parent) : null, ft = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Y(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Re(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Re(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Re(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Re(e.refs) : e.refs,
    $parent: (e) => Xn(e.parent),
    $root: (e) => Xn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => __VUE_OPTIONS_API__ ? Dr(e) : e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      xn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = lr.bind(e.proxy)),
    $watch: (e) => __VUE_OPTIONS_API__ ? gc.bind(e) : z
  })
), xo = (e) => e === "_" || e === "$", Un = (e, t) => e !== q && !e.__isScriptSetup && H(e, t), Or = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: s, props: r, accessCache: i, type: c, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    if (t[0] !== "$") {
      const m = i[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Un(o, t))
          return i[t] = 1, o[t];
        if (__VUE_OPTIONS_API__ && s !== q && H(s, t))
          return i[t] = 2, s[t];
        if (H(r, t))
          return i[t] = 3, r[t];
        if (n !== q && H(n, t))
          return i[t] = 4, n[t];
        (!__VUE_OPTIONS_API__ || Qn) && (i[t] = 0);
      }
    }
    const d = ft[t];
    let a, f;
    if (d)
      return t === "$attrs" ? (X(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && bn()) : process.env.NODE_ENV !== "production" && t === "$slots" && X(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (a = c.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== q && H(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      f = u.config.globalProperties, H(f, t)
    )
      return f[t];
    process.env.NODE_ENV !== "production" && he && (!J(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== q && xo(t[0]) && H(s, t) ? w(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === he && w(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return Un(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && H(s, t) ? (w(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : __VUE_OPTIONS_API__ && o !== q && H(o, t) ? (o[t] = n, !0) : H(e.props, t) ? (process.env.NODE_ENV !== "production" && w(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && w(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, props: r, type: i }
  }, c) {
    let u;
    return !!(n[c] || __VUE_OPTIONS_API__ && e !== q && c[0] !== "$" && H(e, c) || Un(t, c) || H(r, c) || H(o, c) || H(ft, c) || H(s.config.globalProperties, c) || (u = i.__cssModules) && u[c]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : H(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Or.ownKeys = (e) => (w(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function $c(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(ft).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => ft[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: z
    });
  }), t;
}
function Mc(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: z
    });
  });
}
function jc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(/* @__PURE__ */ M(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (xo(o[0])) {
        w(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: z
      });
    }
  });
}
function ns(e) {
  return P(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Lc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? w(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Qn = !0;
function Fc(e) {
  const t = Dr(e), n = e.proxy, o = e.ctx;
  Qn = !1, t.beforeCreate && os(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: r,
    methods: i,
    watch: c,
    provide: u,
    inject: d,
    // lifecycle
    created: a,
    beforeMount: f,
    mounted: m,
    beforeUpdate: _,
    updated: N,
    activated: C,
    deactivated: L,
    beforeDestroy: j,
    beforeUnmount: $,
    destroyed: R,
    unmounted: ee,
    render: S,
    renderTracked: te,
    renderTriggered: me,
    errorCaptured: ne,
    serverPrefetch: ie,
    // public API
    expose: je,
    inheritAttrs: Be,
    // assets
    components: ve,
    directives: zt,
    filters: Ho
  } = t, qe = process.env.NODE_ENV !== "production" ? Lc() : null;
  if (process.env.NODE_ENV !== "production") {
    const [U] = e.propsOptions;
    if (U)
      for (const F in U)
        qe("Props", F);
  }
  if (d && Hc(d, o, qe), i)
    for (const U in i) {
      const F = i[U];
      A(F) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, U, {
        value: F.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[U] = F.bind(n), process.env.NODE_ENV !== "production" && qe("Methods", U)) : process.env.NODE_ENV !== "production" && w(
        `Method "${U}" has type "${typeof F}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    process.env.NODE_ENV !== "production" && !A(s) && w(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const U = s.call(n, n);
    if (process.env.NODE_ENV !== "production" && uo(U) && w(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !W(U))
      process.env.NODE_ENV !== "production" && w("data() should return an object.");
    else if (e.data = /* @__PURE__ */ yo(U), process.env.NODE_ENV !== "production")
      for (const F in U)
        qe("Data", F), xo(F[0]) || Object.defineProperty(o, F, {
          configurable: !0,
          enumerable: !0,
          get: () => U[F],
          set: z
        });
  }
  if (Qn = !0, r)
    for (const U in r) {
      const F = r[U], Ve = A(F) ? F.bind(n, n) : A(F.get) ? F.get.bind(n, n) : z;
      process.env.NODE_ENV !== "production" && Ve === z && w(`Computed property "${U}" has no getter.`);
      const An = !A(F) && A(F.set) ? F.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        w(
          `Write operation failed: computed property "${U}" is readonly.`
        );
      } : z, Nt = Rl({
        get: Ve,
        set: An
      });
      Object.defineProperty(o, U, {
        enumerable: !0,
        configurable: !0,
        get: () => Nt.value,
        set: (dt) => Nt.value = dt
      }), process.env.NODE_ENV !== "production" && qe("Computed", U);
    }
  if (c)
    for (const U in c)
      wr(c[U], o, n, U);
  if (u) {
    const U = A(u) ? u.call(n) : u;
    Reflect.ownKeys(U).forEach((F) => {
      hc(F, U[F]);
    });
  }
  a && os(a, e, "c");
  function ce(U, F) {
    P(F) ? F.forEach((Ve) => U(Ve.bind(n))) : F && U(F.bind(n));
  }
  if (ce(Dc, f), ce(Vc, m), ce(Cc, _), ce(xc, N), ce(Nc, C), ce(Oc, L), ce(Ic, ne), ce(Ac, te), ce(Pc, me), ce(Sc, $), ce(Nr, ee), ce(Tc, ie), P(je))
    if (je.length) {
      const U = e.exposed || (e.exposed = {});
      je.forEach((F) => {
        Object.defineProperty(U, F, {
          get: () => n[F],
          set: (Ve) => n[F] = Ve,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === z && (e.render = S), Be != null && (e.inheritAttrs = Be), ve && (e.components = ve), zt && (e.directives = zt), ie && br(e);
}
function Hc(e, t, n = z) {
  P(e) && (e = eo(e));
  for (const o in e) {
    const s = e[o];
    let r;
    W(s) ? "default" in s ? r = sn(
      s.from || o,
      s.default,
      !0
    ) : r = sn(s.from || o) : r = sn(s), /* @__PURE__ */ Q(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[o] = r, process.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function os(e, t, n) {
  Me(
    P(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function wr(e, t, n, o) {
  let s = o.includes(".") ? Er(n, o) : () => n[o];
  if (J(e)) {
    const r = t[e];
    A(r) ? Hn(s, r) : process.env.NODE_ENV !== "production" && w(`Invalid watch handler specified by key "${e}"`, r);
  } else if (A(e))
    Hn(s, e.bind(n));
  else if (W(e))
    if (P(e))
      e.forEach((r) => wr(r, t, n, o));
    else {
      const r = A(e.handler) ? e.handler.bind(n) : t[e.handler];
      A(r) ? Hn(s, r, e) : process.env.NODE_ENV !== "production" && w(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else process.env.NODE_ENV !== "production" && w(`Invalid watch option: "${o}"`, e);
}
function Dr(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = r.get(t);
  let u;
  return c ? u = c : !s.length && !n && !o ? u = t : (u = {}, s.length && s.forEach(
    (d) => En(u, d, i, !0)
  ), En(u, t, i)), W(t) && r.set(t, u), u;
}
function En(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && En(e, r, n, !0), s && s.forEach(
    (i) => En(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && w(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = Uc[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const Uc = {
  data: ss,
  props: rs,
  emits: rs,
  // objects
  methods: Pt,
  computed: Pt,
  // lifecycle
  beforeCreate: se,
  created: se,
  beforeMount: se,
  mounted: se,
  beforeUpdate: se,
  updated: se,
  beforeDestroy: se,
  beforeUnmount: se,
  destroyed: se,
  unmounted: se,
  activated: se,
  deactivated: se,
  errorCaptured: se,
  serverPrefetch: se,
  // assets
  components: Pt,
  directives: Pt,
  // watch
  watch: Kc,
  // provide / inject
  provide: ss,
  inject: kc
};
function ss(e, t) {
  return t ? e ? function() {
    return Y(
      A(e) ? e.call(this, this) : e,
      A(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function kc(e, t) {
  return Pt(eo(e), eo(t));
}
function eo(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function se(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Pt(e, t) {
  return e ? Y(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function rs(e, t) {
  return e ? P(e) && P(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Y(
    /* @__PURE__ */ Object.create(null),
    ns(e),
    ns(t ?? {})
  ) : t;
}
function Kc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Y(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = se(e[o], t[o]);
  return n;
}
function Vr() {
  return {
    app: null,
    config: {
      isNativeTag: Fs,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Wc = 0;
function Bc(e, t) {
  return function(o, s = null) {
    A(o) || (o = Y({}, o)), s != null && !W(s) && (process.env.NODE_ENV !== "production" && w("root props passed to app.mount() must be an object."), s = null);
    const r = Vr(), i = /* @__PURE__ */ new WeakSet(), c = [];
    let u = !1;
    const d = r.app = {
      _uid: Wc++,
      _component: o,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: gs,
      get config() {
        return r.config;
      },
      set config(a) {
        process.env.NODE_ENV !== "production" && w(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(a, ...f) {
        return i.has(a) ? process.env.NODE_ENV !== "production" && w("Plugin has already been applied to target app.") : a && A(a.install) ? (i.add(a), a.install(d, ...f)) : A(a) ? (i.add(a), a(d, ...f)) : process.env.NODE_ENV !== "production" && w(
          'A plugin must either be a function or an object with an "install" function.'
        ), d;
      },
      mixin(a) {
        return __VUE_OPTIONS_API__ ? r.mixins.includes(a) ? process.env.NODE_ENV !== "production" && w(
          "Mixin has already been applied to target app" + (a.name ? `: ${a.name}` : "")
        ) : r.mixins.push(a) : process.env.NODE_ENV !== "production" && w("Mixins are only available in builds supporting Options API"), d;
      },
      component(a, f) {
        return process.env.NODE_ENV !== "production" && ro(a, r.config), f ? (process.env.NODE_ENV !== "production" && r.components[a] && w(`Component "${a}" has already been registered in target app.`), r.components[a] = f, d) : r.components[a];
      },
      directive(a, f) {
        return process.env.NODE_ENV !== "production" && gr(a), f ? (process.env.NODE_ENV !== "production" && r.directives[a] && w(`Directive "${a}" has already been registered in target app.`), r.directives[a] = f, d) : r.directives[a];
      },
      mount(a, f, m) {
        if (u)
          process.env.NODE_ENV !== "production" && w(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && a.__vue_app__ && w(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const _ = d._ceVNode || Qe(o, s);
          return _.appContext = r, m === !0 ? m = "svg" : m === !1 && (m = void 0), process.env.NODE_ENV !== "production" && (r.reload = () => {
            const N = tt(_);
            N.el = null, e(N, a, m);
          }), e(_, a, m), u = !0, d._container = a, a.__vue_app__ = d, (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && (d._instance = _.component, rc(d, gs)), Ro(_.component);
        }
      },
      onUnmount(a) {
        process.env.NODE_ENV !== "production" && typeof a != "function" && w(
          `Expected function as first argument to app.onUnmount(), but got ${typeof a}`
        ), c.push(a);
      },
      unmount() {
        u ? (Me(
          c,
          d._instance,
          16
        ), e(null, d._container), (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && (d._instance = null, ic(d)), delete d._container.__vue_app__) : process.env.NODE_ENV !== "production" && w("Cannot unmount an app that is not mounted.");
      },
      provide(a, f) {
        return process.env.NODE_ENV !== "production" && a in r.provides && (H(r.provides, a) ? w(
          `App already provides property with key "${String(a)}". It will be overwritten with the new value.`
        ) : w(
          `App already provides property with key "${String(a)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[a] = f, d;
      },
      runWithContext(a) {
        const f = bt;
        bt = d;
        try {
          return a();
        } finally {
          bt = f;
        }
      }
    };
    return d;
  };
}
let bt = null;
const qc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${pe(t)}Modifiers`] || e[`${de(t)}Modifiers`];
function Gc(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || q;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: a,
      propsOptions: [f]
    } = e;
    if (a)
      if (!(t in a))
        (!f || !(st(pe(t)) in f)) && w(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${st(pe(t))}" prop.`
        );
      else {
        const m = a[t];
        A(m) && (m(...n) || w(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const r = t.startsWith("update:"), i = r && qc(o, t.slice(7));
  if (i && (i.trim && (s = n.map((a) => J(a) ? a.trim() : a)), i.number && (s = n.map(ci))), (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && pc(e, t, s), process.env.NODE_ENV !== "production") {
    const a = t.toLowerCase();
    a !== t && o[st(a)] && w(
      `Event "${a}" is emitted in component ${Jt(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${de(
        t
      )}" instead of "${t}".`
    );
  }
  let c, u = o[c = st(t)] || // also try camelCase event handler (#2249)
  o[c = st(pe(t))];
  !u && r && (u = o[c = st(de(t))]), u && Me(
    u,
    e,
    6,
    s
  );
  const d = o[c + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Me(
      d,
      e,
      6,
      s
    );
  }
}
const Yc = /* @__PURE__ */ new WeakMap();
function Cr(e, t, n = !1) {
  const o = __VUE_OPTIONS_API__ && n ? Yc : t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let i = {}, c = !1;
  if (__VUE_OPTIONS_API__ && !A(e)) {
    const u = (d) => {
      const a = Cr(d, t, !0);
      a && (c = !0, Y(i, a));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !c ? (W(e) && o.set(e, null), null) : (P(r) ? r.forEach((u) => i[u] = null) : Y(i, r), W(e) && o.set(e, i), i);
}
function Tn(e, t) {
  return !e || !Kt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, de(t)) || H(e, t));
}
let to = !1;
function bn() {
  to = !0;
}
function is(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: s,
    propsOptions: [r],
    slots: i,
    attrs: c,
    emit: u,
    render: d,
    renderCache: a,
    props: f,
    data: m,
    setupState: _,
    ctx: N,
    inheritAttrs: C
  } = e, L = gn(e);
  let j, $;
  process.env.NODE_ENV !== "production" && (to = !1);
  try {
    if (n.shapeFlag & 4) {
      const S = s || o, te = process.env.NODE_ENV !== "production" && _.__isScriptSetup ? new Proxy(S, {
        get(me, ne, ie) {
          return w(
            `Property '${String(
              ne
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(me, ne, ie);
        }
      }) : S;
      j = Ee(
        d.call(
          te,
          S,
          a,
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Re(f) : f,
          _,
          m,
          N
        )
      ), $ = c;
    } else {
      const S = t;
      process.env.NODE_ENV !== "production" && c === f && bn(), j = Ee(
        S.length > 1 ? S(
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Re(f) : f,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return bn(), /* @__PURE__ */ Re(c);
            },
            slots: i,
            emit: u
          } : { attrs: c, slots: i, emit: u }
        ) : S(
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Re(f) : f,
          null
        )
      ), $ = t.props ? c : Jc(c);
    }
  } catch (S) {
    Bt(S, e, 1), j = Qe(Ne);
  }
  let R = j, ee;
  if (process.env.NODE_ENV !== "production" && j.patchFlag > 0 && j.patchFlag & 2048 && ([R, ee] = xr(j)), $ && C !== !1) {
    const S = Object.keys($), { shapeFlag: te } = R;
    if (S.length) {
      if (te & 7)
        r && S.some(an) && ($ = zc(
          $,
          r
        )), R = tt(R, $, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !to && R.type !== Ne) {
        const me = Object.keys(c), ne = [], ie = [];
        for (let je = 0, Be = me.length; je < Be; je++) {
          const ve = me[je];
          Kt(ve) ? an(ve) || ne.push(ve[2].toLowerCase() + ve.slice(3)) : ie.push(ve);
        }
        ie.length && w(
          `Extraneous non-props attributes (${ie.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), ne.length && w(
          `Extraneous non-emits event listeners (${ne.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !cs(R) && w(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), R = tt(R, null, !1, !0), R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !cs(R) && w(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Vo(R, n.transition)), process.env.NODE_ENV !== "production" && ee ? ee(R) : j = R, gn(L), j;
}
const xr = (e) => {
  const t = e.children, n = e.dynamicChildren, o = So(t, !1);
  if (o) {
    if (process.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return xr(o);
  } else return [e, void 0];
  const s = t.indexOf(o), r = n ? n.indexOf(o) : -1, i = (c) => {
    t[s] = c, n && (r > -1 ? n[r] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [Ee(o), i];
};
function So(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (Pn(s)) {
      if (s.type !== Ne || s.children === "v-if") {
        if (n)
          return;
        if (n = s, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return So(n.children);
      }
    } else
      return;
  }
  return n;
}
const Jc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Kt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, zc = (e, t) => {
  const n = {};
  for (const o in e)
    (!an(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, cs = (e) => e.shapeFlag & 7 || e.type === Ne;
function Zc(e, t, n) {
  const { props: o, children: s, component: r } = e, { props: i, children: c, patchFlag: u } = t, d = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (s || c) && $e || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? ls(o, i, d) : !!i;
    if (u & 8) {
      const a = t.dynamicProps;
      for (let f = 0; f < a.length; f++) {
        const m = a[f];
        if (Sr(i, o, m) && !Tn(d, m))
          return !0;
      }
    }
  } else
    return (s || c) && (!c || !c.$stable) ? !0 : o === i ? !1 : o ? i ? ls(o, i, d) : !0 : !!i;
  return !1;
}
function ls(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const r = o[s];
    if (Sr(t, e, r) && !Tn(n, r))
      return !0;
  }
  return !1;
}
function Sr(e, t, n) {
  const o = e[n], s = t[n];
  return n === "style" && W(o) && W(s) ? !mo(o, s) : o !== s;
}
function Xc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Tr = {}, Pr = () => Object.create(Tr), Ar = (e) => Object.getPrototypeOf(e) === Tr;
function Qc(e, t, n, o = !1) {
  const s = {}, r = Pr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ir(e, t, s, r);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  process.env.NODE_ENV !== "production" && $r(t || {}, s, e), n ? e.props = o ? s : /* @__PURE__ */ Ui(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function el(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function tl(e, t, n, o) {
  const {
    props: s,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, c = /* @__PURE__ */ M(s), [u] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && el(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const a = e.vnode.dynamicProps;
      for (let f = 0; f < a.length; f++) {
        let m = a[f];
        if (Tn(e.emitsOptions, m))
          continue;
        const _ = t[m];
        if (u)
          if (H(r, m))
            _ !== r[m] && (r[m] = _, d = !0);
          else {
            const N = pe(m);
            s[N] = no(
              u,
              c,
              N,
              _,
              e,
              !1
            );
          }
        else
          _ !== r[m] && (r[m] = _, d = !0);
      }
    }
  } else {
    Ir(e, t, s, r) && (d = !0);
    let a;
    for (const f in c)
      (!t || // for camelCase
      !H(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = de(f)) === f || !H(t, a))) && (u ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[a] !== void 0) && (s[f] = no(
        u,
        c,
        f,
        void 0,
        e,
        !0
      )) : delete s[f]);
    if (r !== c)
      for (const f in r)
        (!t || !H(t, f)) && (delete r[f], d = !0);
  }
  d && Ie(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && $r(t || {}, s, e);
}
function Ir(e, t, n, o) {
  const [s, r] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let u in t) {
      if (It(u))
        continue;
      const d = t[u];
      let a;
      s && H(s, a = pe(u)) ? !r || !r.includes(a) ? n[a] = d : (c || (c = {}))[a] = d : Tn(e.emitsOptions, u) || (!(u in o) || d !== o[u]) && (o[u] = d, i = !0);
    }
  if (r) {
    const u = /* @__PURE__ */ M(n), d = c || q;
    for (let a = 0; a < r.length; a++) {
      const f = r[a];
      n[f] = no(
        s,
        u,
        f,
        d[f],
        e,
        !H(d, f)
      );
    }
  }
  return i;
}
function no(e, t, n, o, s, r) {
  const i = e[n];
  if (i != null) {
    const c = H(i, "default");
    if (c && o === void 0) {
      const u = i.default;
      if (i.type !== Function && !i.skipFactory && A(u)) {
        const { propsDefaults: d } = s;
        if (n in d)
          o = d[n];
        else {
          const a = Yt(s);
          o = d[n] = u.call(
            null,
            t
          ), a();
        }
      } else
        o = u;
      s.ce && s.ce._setProp(n, o);
    }
    i[
      0
      /* shouldCast */
    ] && (r && !c ? o = !1 : i[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === de(n)) && (o = !0));
  }
  return o;
}
const nl = /* @__PURE__ */ new WeakMap();
function Rr(e, t, n = !1) {
  const o = __VUE_OPTIONS_API__ && n ? nl : t.propsCache, s = o.get(e);
  if (s)
    return s;
  const r = e.props, i = {}, c = [];
  let u = !1;
  if (__VUE_OPTIONS_API__ && !A(e)) {
    const a = (f) => {
      u = !0;
      const [m, _] = Rr(f, t, !0);
      Y(i, m), _ && c.push(..._);
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!r && !u)
    return W(e) && o.set(e, At), At;
  if (P(r))
    for (let a = 0; a < r.length; a++) {
      process.env.NODE_ENV !== "production" && !J(r[a]) && w("props must be strings when using array syntax.", r[a]);
      const f = pe(r[a]);
      us(f) && (i[f] = q);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !W(r) && w("invalid props options", r);
    for (const a in r) {
      const f = pe(a);
      if (us(f)) {
        const m = r[a], _ = i[f] = P(m) || A(m) ? { type: m } : Y({}, m), N = _.type;
        let C = !1, L = !0;
        if (P(N))
          for (let j = 0; j < N.length; ++j) {
            const $ = N[j], R = A($) && $.name;
            if (R === "Boolean") {
              C = !0;
              break;
            } else R === "String" && (L = !1);
          }
        else
          C = A(N) && N.name === "Boolean";
        _[
          0
          /* shouldCast */
        ] = C, _[
          1
          /* shouldCastTrue */
        ] = L, (C || H(_, "default")) && c.push(f);
      }
    }
  }
  const d = [i, c];
  return W(e) && o.set(e, d), d;
}
function us(e) {
  return e[0] !== "$" && !It(e) ? !0 : (process.env.NODE_ENV !== "production" && w(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function ol(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function $r(e, t, n) {
  const o = /* @__PURE__ */ M(t), s = n.propsOptions[0], r = Object.keys(e).map((i) => pe(i));
  for (const i in s) {
    let c = s[i];
    c != null && sl(
      i,
      o[i],
      c,
      process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Re(o) : o,
      !r.includes(i)
    );
  }
}
function sl(e, t, n, o, s) {
  const { type: r, required: i, validator: c, skipCheck: u } = n;
  if (i && s) {
    w('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !u) {
      let d = !1;
      const a = P(r) ? r : [r], f = [];
      for (let m = 0; m < a.length && !d; m++) {
        const { valid: _, expectedType: N } = il(t, a[m]);
        f.push(N || ""), d = _;
      }
      if (!d) {
        w(cl(e, t, f));
        return;
      }
    }
    c && !c(t, o) && w('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const rl = /* @__PURE__ */ Ke(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function il(e, t) {
  let n;
  const o = ol(t);
  if (o === "null")
    n = e === null;
  else if (rl(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else o === "Object" ? n = W(e) : o === "Array" ? n = P(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function cl(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Dn).join(" | ")}`;
  const s = n[0], r = fo(t), i = fs(t, s), c = fs(t, r);
  return n.length === 1 && as(s) && !ll(s, r) && (o += ` with value ${i}`), o += `, got ${r} `, as(r) && (o += `with value ${c}.`), o;
}
function fs(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function as(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function ll(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const To = (e) => e === "_" || e === "_ctx" || e === "$stable", Po = (e) => P(e) ? e.map(Ee) : [Ee(e)], ul = (e, t, n) => {
  if (t._n)
    return t;
  const o = dc((...s) => (process.env.NODE_ENV !== "production" && Z && !(n === null && he) && !(n && n.root !== Z.root) && w(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Po(t(...s))), n);
  return o._c = !1, o;
}, Mr = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if (To(s)) continue;
    const r = e[s];
    if (A(r))
      t[s] = ul(s, r, o);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && w(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const i = Po(r);
      t[s] = () => i;
    }
  }
}, jr = (e, t) => {
  process.env.NODE_ENV !== "production" && !Co(e.vnode) && w(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Po(t);
  e.slots.default = () => n;
}, oo = (e, t, n) => {
  for (const o in t)
    (n || !To(o)) && (e[o] = t[o]);
}, fl = (e, t, n) => {
  const o = e.slots = Pr();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (oo(o, t, n), n && pn(o, "_", s, !0)) : Mr(t, o);
  } else t && jr(e, t);
}, al = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let r = !0, i = q;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? process.env.NODE_ENV !== "production" && $e ? (oo(s, t, n), Ie(e, "set", "$slots")) : n && c === 1 ? r = !1 : oo(s, t, n) : (r = !t.$stable, Mr(t, s)), i = t;
  } else t && (jr(e, t), i = { default: 1 });
  if (r)
    for (const c in s)
      !To(c) && i[c] == null && delete s[c];
};
let xt, He;
function _t(e, t) {
  e.appContext.config.performance && yn() && He.mark(`vue-${t}-${e.uid}`), (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && fc(e, t, yn() ? He.now() : Date.now());
}
function mt(e, t) {
  if (e.appContext.config.performance && yn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end", s = `<${Jt(e, e.type)}> ${t}`;
    He.mark(o), He.measure(s, n, o), He.clearMeasures(s), He.clearMarks(n), He.clearMarks(o);
  }
  (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && ac(e, t, yn() ? He.now() : Date.now());
}
function yn() {
  return xt !== void 0 || (typeof window < "u" && window.performance ? (xt = !0, He = window.performance) : xt = !1), xt;
}
function pl() {
  const e = [];
  if (typeof __VUE_OPTIONS_API__ != "boolean" && (process.env.NODE_ENV !== "production" && e.push("__VUE_OPTIONS_API__"), Xe().__VUE_OPTIONS_API__ = !0), typeof __VUE_PROD_DEVTOOLS__ != "boolean" && (process.env.NODE_ENV !== "production" && e.push("__VUE_PROD_DEVTOOLS__"), Xe().__VUE_PROD_DEVTOOLS__ = !1), typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" && (process.env.NODE_ENV !== "production" && e.push("__VUE_PROD_HYDRATION_MISMATCH_DETAILS__"), Xe().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = !1), process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const fe = gl;
function dl(e) {
  return hl(e);
}
function hl(e, t) {
  pl();
  const n = Xe();
  n.__VUE__ = !0, (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && wo(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: s,
    patchProp: r,
    createElement: i,
    createText: c,
    createComment: u,
    setText: d,
    setElementText: a,
    parentNode: f,
    nextSibling: m,
    setScopeId: _ = z,
    insertStaticContent: N
  } = e, C = (l, p, h, b = null, g = null, v = null, D = void 0, O = null, y = process.env.NODE_ENV !== "production" && $e ? !1 : !!p.dynamicChildren) => {
    if (l === p)
      return;
    l && !St(l, p) && (b = Zt(l), Ge(l, g, v, !0), l = null), p.patchFlag === -2 && (y = !1, p.dynamicChildren = null);
    const { type: E, ref: T, shapeFlag: V } = p;
    switch (E) {
      case Gt:
        L(l, p, h, b);
        break;
      case Ne:
        j(l, p, h, b);
        break;
      case cn:
        l == null ? $(p, h, b, D) : process.env.NODE_ENV !== "production" && R(l, p, h, D);
        break;
      case Ae:
        zt(
          l,
          p,
          h,
          b,
          g,
          v,
          D,
          O,
          y
        );
        break;
      default:
        V & 1 ? te(
          l,
          p,
          h,
          b,
          g,
          v,
          D,
          O,
          y
        ) : V & 6 ? Ho(
          l,
          p,
          h,
          b,
          g,
          v,
          D,
          O,
          y
        ) : V & 64 || V & 128 ? E.process(
          l,
          p,
          h,
          b,
          g,
          v,
          D,
          O,
          y,
          wt
        ) : process.env.NODE_ENV !== "production" && w("Invalid VNode type:", E, `(${typeof E})`);
    }
    T != null && g ? Mt(T, l && l.ref, v, p || l, !p) : T == null && l && l.ref != null && Mt(l.ref, null, v, l, !0);
  }, L = (l, p, h, b) => {
    if (l == null)
      o(
        p.el = c(p.children),
        h,
        b
      );
    else {
      const g = p.el = l.el;
      p.children !== l.children && d(g, p.children);
    }
  }, j = (l, p, h, b) => {
    l == null ? o(
      p.el = u(p.children || ""),
      h,
      b
    ) : p.el = l.el;
  }, $ = (l, p, h, b) => {
    [l.el, l.anchor] = N(
      l.children,
      p,
      h,
      b,
      l.el,
      l.anchor
    );
  }, R = (l, p, h, b) => {
    if (p.children !== l.children) {
      const g = m(l.anchor);
      S(l), [p.el, p.anchor] = N(
        p.children,
        h,
        g,
        b
      );
    } else
      p.el = l.el, p.anchor = l.anchor;
  }, ee = ({ el: l, anchor: p }, h, b) => {
    let g;
    for (; l && l !== p; )
      g = m(l), o(l, h, b), l = g;
    o(p, h, b);
  }, S = ({ el: l, anchor: p }) => {
    let h;
    for (; l && l !== p; )
      h = m(l), s(l), l = h;
    s(p);
  }, te = (l, p, h, b, g, v, D, O, y) => {
    if (p.type === "svg" ? D = "svg" : p.type === "math" && (D = "mathml"), l == null)
      me(
        p,
        h,
        b,
        g,
        v,
        D,
        O,
        y
      );
    else {
      const E = l.el && l.el._isVueCE ? l.el : null;
      try {
        E && E._beginPatch(), je(
          l,
          p,
          g,
          v,
          D,
          O,
          y
        );
      } finally {
        E && E._endPatch();
      }
    }
  }, me = (l, p, h, b, g, v, D, O) => {
    let y, E;
    const { props: T, shapeFlag: V, transition: x, dirs: I } = l;
    if (y = l.el = i(
      l.type,
      v,
      T && T.is,
      T
    ), V & 8 ? a(y, l.children) : V & 16 && ie(
      l.children,
      y,
      null,
      b,
      g,
      kn(l, v),
      D,
      O
    ), I && nt(l, null, b, "created"), ne(y, l, l.scopeId, D, b), T) {
      for (const G in T)
        G !== "value" && !It(G) && r(y, G, null, T[G], v, b);
      "value" in T && r(y, "value", null, T.value, v), (E = T.onVnodeBeforeMount) && Te(E, b, l);
    }
    (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && (pn(y, "__vnode", l, !0), pn(y, "__vueParentComponent", b, !0)), I && nt(l, null, b, "beforeMount");
    const k = _l(g, x);
    k && x.beforeEnter(y), o(y, p, h), ((E = T && T.onVnodeMounted) || k || I) && fe(() => {
      E && Te(E, b, l), k && x.enter(y), I && nt(l, null, b, "mounted");
    }, g);
  }, ne = (l, p, h, b, g) => {
    if (h && _(l, h), b)
      for (let v = 0; v < b.length; v++)
        _(l, b[v]);
    if (g) {
      let v = g.subTree;
      if (process.env.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && (v = So(v.children) || v), p === v || Hr(v.type) && (v.ssContent === p || v.ssFallback === p)) {
        const D = g.vnode;
        ne(
          l,
          D,
          D.scopeId,
          D.slotScopeIds,
          g.parent
        );
      }
    }
  }, ie = (l, p, h, b, g, v, D, O, y = 0) => {
    for (let E = y; E < l.length; E++) {
      const T = l[E] = O ? Ue(l[E]) : Ee(l[E]);
      C(
        null,
        T,
        p,
        h,
        b,
        g,
        v,
        D,
        O
      );
    }
  }, je = (l, p, h, b, g, v, D) => {
    const O = p.el = l.el;
    (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && (O.__vnode = p);
    let { patchFlag: y, dynamicChildren: E, dirs: T } = p;
    y |= l.patchFlag & 16;
    const V = l.props || q, x = p.props || q;
    let I;
    if (h && ot(h, !1), (I = x.onVnodeBeforeUpdate) && Te(I, h, p, l), T && nt(p, l, h, "beforeUpdate"), h && ot(h, !0), process.env.NODE_ENV !== "production" && $e && (y = 0, D = !1, E = null), (V.innerHTML && x.innerHTML == null || V.textContent && x.textContent == null) && a(O, ""), E ? (Be(
      l.dynamicChildren,
      E,
      O,
      h,
      b,
      kn(p, g),
      v
    ), process.env.NODE_ENV !== "production" && rn(l, p)) : D || Ve(
      l,
      p,
      O,
      null,
      h,
      b,
      kn(p, g),
      v,
      !1
    ), y > 0) {
      if (y & 16)
        ve(O, V, x, h, g);
      else if (y & 2 && V.class !== x.class && r(O, "class", null, x.class, g), y & 4 && r(O, "style", V.style, x.style, g), y & 8) {
        const k = p.dynamicProps;
        for (let G = 0; G < k.length; G++) {
          const B = k[G], le = V[B], ue = x[B];
          (ue !== le || B === "value") && r(O, B, le, ue, g, h);
        }
      }
      y & 1 && l.children !== p.children && a(O, p.children);
    } else !D && E == null && ve(O, V, x, h, g);
    ((I = x.onVnodeUpdated) || T) && fe(() => {
      I && Te(I, h, p, l), T && nt(p, l, h, "updated");
    }, b);
  }, Be = (l, p, h, b, g, v, D) => {
    for (let O = 0; O < p.length; O++) {
      const y = l[O], E = p[O], T = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === Ae || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !St(y, E) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 198) ? f(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      C(
        y,
        E,
        T,
        null,
        b,
        g,
        v,
        D,
        !0
      );
    }
  }, ve = (l, p, h, b, g) => {
    if (p !== h) {
      if (p !== q)
        for (const v in p)
          !It(v) && !(v in h) && r(
            l,
            v,
            p[v],
            null,
            g,
            b
          );
      for (const v in h) {
        if (It(v)) continue;
        const D = h[v], O = p[v];
        D !== O && v !== "value" && r(l, v, O, D, g, b);
      }
      "value" in h && r(l, "value", p.value, h.value, g);
    }
  }, zt = (l, p, h, b, g, v, D, O, y) => {
    const E = p.el = l ? l.el : c(""), T = p.anchor = l ? l.anchor : c("");
    let { patchFlag: V, dynamicChildren: x, slotScopeIds: I } = p;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    ($e || V & 2048) && (V = 0, y = !1, x = null), I && (O = O ? O.concat(I) : I), l == null ? (o(E, h, b), o(T, h, b), ie(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      h,
      T,
      g,
      v,
      D,
      O,
      y
    )) : V > 0 && V & 64 && x && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren && l.dynamicChildren.length === x.length ? (Be(
      l.dynamicChildren,
      x,
      h,
      g,
      v,
      D,
      O
    ), process.env.NODE_ENV !== "production" ? rn(l, p) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (p.key != null || g && p === g.subTree) && rn(
        l,
        p,
        !0
        /* shallow */
      )
    )) : Ve(
      l,
      p,
      h,
      T,
      g,
      v,
      D,
      O,
      y
    );
  }, Ho = (l, p, h, b, g, v, D, O, y) => {
    p.slotScopeIds = O, l == null ? p.shapeFlag & 512 ? g.ctx.activate(
      p,
      h,
      b,
      D,
      y
    ) : qe(
      p,
      h,
      b,
      g,
      v,
      D,
      y
    ) : ce(l, p, y);
  }, qe = (l, p, h, b, g, v, D) => {
    const O = l.component = Dl(
      l,
      b,
      g
    );
    if (process.env.NODE_ENV !== "production" && O.type.__hmrId && tc(O), process.env.NODE_ENV !== "production" && (tn(l), _t(O, "mount")), Co(l) && (O.ctx.renderer = wt), process.env.NODE_ENV !== "production" && _t(O, "init"), Cl(O, !1, D), process.env.NODE_ENV !== "production" && mt(O, "init"), process.env.NODE_ENV !== "production" && $e && (l.el = null), O.asyncDep) {
      if (g && g.registerDep(O, U, D), !l.el) {
        const y = O.subTree = Qe(Ne);
        j(null, y, p, h), l.placeholder = y.el;
      }
    } else
      U(
        O,
        l,
        p,
        h,
        g,
        v,
        D
      );
    process.env.NODE_ENV !== "production" && (nn(), mt(O, "mount"));
  }, ce = (l, p, h) => {
    const b = p.component = l.component;
    if (Zc(l, p, h))
      if (b.asyncDep && !b.asyncResolved) {
        process.env.NODE_ENV !== "production" && tn(p), F(b, p, h), process.env.NODE_ENV !== "production" && nn();
        return;
      } else
        b.next = p, b.update();
    else
      p.el = l.el, b.vnode = p;
  }, U = (l, p, h, b, g, v, D) => {
    const O = () => {
      if (l.isMounted) {
        let { next: V, bu: x, u: I, parent: k, vnode: G } = l;
        {
          const xe = Lr(l);
          if (xe) {
            V && (V.el = G.el, F(l, V, D)), xe.asyncDep.then(() => {
              fe(() => {
                l.isUnmounted || E();
              }, g);
            });
            return;
          }
        }
        let B = V, le;
        process.env.NODE_ENV !== "production" && tn(V || l.vnode), ot(l, !1), V ? (V.el = G.el, F(l, V, D)) : V = G, x && Vt(x), (le = V.props && V.props.onVnodeBeforeUpdate) && Te(le, k, V, G), ot(l, !0), process.env.NODE_ENV !== "production" && _t(l, "render");
        const ue = is(l);
        process.env.NODE_ENV !== "production" && mt(l, "render");
        const Ce = l.subTree;
        l.subTree = ue, process.env.NODE_ENV !== "production" && _t(l, "patch"), C(
          Ce,
          ue,
          // parent may have changed if it's in a teleport
          f(Ce.el),
          // anchor may have changed if it's in a fragment
          Zt(Ce),
          l,
          g,
          v
        ), process.env.NODE_ENV !== "production" && mt(l, "patch"), V.el = ue.el, B === null && Xc(l, ue.el), I && fe(I, g), (le = V.props && V.props.onVnodeUpdated) && fe(
          () => Te(le, k, V, G),
          g
        ), (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && hr(l), process.env.NODE_ENV !== "production" && nn();
      } else {
        let V;
        const { el: x, props: I } = p, { bm: k, m: G, parent: B, root: le, type: ue } = l, Ce = jt(p);
        ot(l, !1), k && Vt(k), !Ce && (V = I && I.onVnodeBeforeMount) && Te(V, B, p), ot(l, !0);
        {
          le.ce && le.ce._hasShadowRoot() && le.ce._injectChildStyle(ue), process.env.NODE_ENV !== "production" && _t(l, "render");
          const xe = l.subTree = is(l);
          process.env.NODE_ENV !== "production" && mt(l, "render"), process.env.NODE_ENV !== "production" && _t(l, "patch"), C(
            null,
            xe,
            h,
            b,
            l,
            g,
            v
          ), process.env.NODE_ENV !== "production" && mt(l, "patch"), p.el = xe.el;
        }
        if (G && fe(G, g), !Ce && (V = I && I.onVnodeMounted)) {
          const xe = p;
          fe(
            () => Te(V, B, xe),
            g
          );
        }
        (p.shapeFlag & 256 || B && jt(B.vnode) && B.vnode.shapeFlag & 256) && l.a && fe(l.a, g), l.isMounted = !0, (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && cc(l), p = h = b = null;
      }
    };
    l.scope.on();
    const y = l.effect = new Us(O);
    l.scope.off();
    const E = l.update = y.run.bind(y), T = l.job = y.runIfDirty.bind(y);
    T.i = l, T.id = l.uid, y.scheduler = () => xn(T), ot(l, !0), process.env.NODE_ENV !== "production" && (y.onTrack = l.rtc ? (V) => Vt(l.rtc, V) : void 0, y.onTrigger = l.rtg ? (V) => Vt(l.rtg, V) : void 0), E();
  }, F = (l, p, h) => {
    p.component = l;
    const b = l.vnode.props;
    l.vnode = p, l.next = null, tl(l, p.props, b, h), al(l, p.children, h), we(), Zo(l), De();
  }, Ve = (l, p, h, b, g, v, D, O, y = !1) => {
    const E = l && l.children, T = l ? l.shapeFlag : 0, V = p.children, { patchFlag: x, shapeFlag: I } = p;
    if (x > 0) {
      if (x & 128) {
        Nt(
          E,
          V,
          h,
          b,
          g,
          v,
          D,
          O,
          y
        );
        return;
      } else if (x & 256) {
        An(
          E,
          V,
          h,
          b,
          g,
          v,
          D,
          O,
          y
        );
        return;
      }
    }
    I & 8 ? (T & 16 && Ot(E, g, v), V !== E && a(h, V)) : T & 16 ? I & 16 ? Nt(
      E,
      V,
      h,
      b,
      g,
      v,
      D,
      O,
      y
    ) : Ot(E, g, v, !0) : (T & 8 && a(h, ""), I & 16 && ie(
      V,
      h,
      b,
      g,
      v,
      D,
      O,
      y
    ));
  }, An = (l, p, h, b, g, v, D, O, y) => {
    l = l || At, p = p || At;
    const E = l.length, T = p.length, V = Math.min(E, T);
    let x;
    for (x = 0; x < V; x++) {
      const I = p[x] = y ? Ue(p[x]) : Ee(p[x]);
      C(
        l[x],
        I,
        h,
        null,
        g,
        v,
        D,
        O,
        y
      );
    }
    E > T ? Ot(
      l,
      g,
      v,
      !0,
      !1,
      V
    ) : ie(
      p,
      h,
      b,
      g,
      v,
      D,
      O,
      y,
      V
    );
  }, Nt = (l, p, h, b, g, v, D, O, y) => {
    let E = 0;
    const T = p.length;
    let V = l.length - 1, x = T - 1;
    for (; E <= V && E <= x; ) {
      const I = l[E], k = p[E] = y ? Ue(p[E]) : Ee(p[E]);
      if (St(I, k))
        C(
          I,
          k,
          h,
          null,
          g,
          v,
          D,
          O,
          y
        );
      else
        break;
      E++;
    }
    for (; E <= V && E <= x; ) {
      const I = l[V], k = p[x] = y ? Ue(p[x]) : Ee(p[x]);
      if (St(I, k))
        C(
          I,
          k,
          h,
          null,
          g,
          v,
          D,
          O,
          y
        );
      else
        break;
      V--, x--;
    }
    if (E > V) {
      if (E <= x) {
        const I = x + 1, k = I < T ? p[I].el : b;
        for (; E <= x; )
          C(
            null,
            p[E] = y ? Ue(p[E]) : Ee(p[E]),
            h,
            k,
            g,
            v,
            D,
            O,
            y
          ), E++;
      }
    } else if (E > x)
      for (; E <= V; )
        Ge(l[E], g, v, !0), E++;
    else {
      const I = E, k = E, G = /* @__PURE__ */ new Map();
      for (E = k; E <= x; E++) {
        const oe = p[E] = y ? Ue(p[E]) : Ee(p[E]);
        oe.key != null && (process.env.NODE_ENV !== "production" && G.has(oe.key) && w(
          "Duplicate keys found during update:",
          JSON.stringify(oe.key),
          "Make sure keys are unique."
        ), G.set(oe.key, E));
      }
      let B, le = 0;
      const ue = x - k + 1;
      let Ce = !1, xe = 0;
      const Dt = new Array(ue);
      for (E = 0; E < ue; E++) Dt[E] = 0;
      for (E = I; E <= V; E++) {
        const oe = l[E];
        if (le >= ue) {
          Ge(oe, g, v, !0);
          continue;
        }
        let Se;
        if (oe.key != null)
          Se = G.get(oe.key);
        else
          for (B = k; B <= x; B++)
            if (Dt[B - k] === 0 && St(oe, p[B])) {
              Se = B;
              break;
            }
        Se === void 0 ? Ge(oe, g, v, !0) : (Dt[Se - k] = E + 1, Se >= xe ? xe = Se : Ce = !0, C(
          oe,
          p[Se],
          h,
          null,
          g,
          v,
          D,
          O,
          y
        ), le++);
      }
      const ko = Ce ? ml(Dt) : At;
      for (B = ko.length - 1, E = ue - 1; E >= 0; E--) {
        const oe = k + E, Se = p[oe], Ko = p[oe + 1], Wo = oe + 1 < T ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ko.el || Fr(Ko)
        ) : b;
        Dt[E] === 0 ? C(
          null,
          Se,
          h,
          Wo,
          g,
          v,
          D,
          O,
          y
        ) : Ce && (B < 0 || E !== ko[B] ? dt(Se, h, Wo, 2) : B--);
      }
    }
  }, dt = (l, p, h, b, g = null) => {
    const { el: v, type: D, transition: O, children: y, shapeFlag: E } = l;
    if (E & 6) {
      dt(l.component.subTree, p, h, b);
      return;
    }
    if (E & 128) {
      l.suspense.move(p, h, b);
      return;
    }
    if (E & 64) {
      D.move(l, p, h, wt);
      return;
    }
    if (D === Ae) {
      o(v, p, h);
      for (let V = 0; V < y.length; V++)
        dt(y[V], p, h, b);
      o(l.anchor, p, h);
      return;
    }
    if (D === cn) {
      ee(l, p, h);
      return;
    }
    if (b !== 2 && E & 1 && O)
      if (b === 0)
        O.beforeEnter(v), o(v, p, h), fe(() => O.enter(v), g);
      else {
        const { leave: V, delayLeave: x, afterLeave: I } = O, k = () => {
          l.ctx.isUnmounted ? s(v) : o(v, p, h);
        }, G = () => {
          v._isLeaving && v[bc](
            !0
            /* cancelled */
          ), V(v, () => {
            k(), I && I();
          });
        };
        x ? x(v, k, G) : G();
      }
    else
      o(v, p, h);
  }, Ge = (l, p, h, b = !1, g = !1) => {
    const {
      type: v,
      props: D,
      ref: O,
      children: y,
      dynamicChildren: E,
      shapeFlag: T,
      patchFlag: V,
      dirs: x,
      cacheIndex: I
    } = l;
    if (V === -2 && (g = !1), O != null && (we(), Mt(O, null, h, l, !0), De()), I != null && (p.renderCache[I] = void 0), T & 256) {
      p.ctx.deactivate(l);
      return;
    }
    const k = T & 1 && x, G = !jt(l);
    let B;
    if (G && (B = D && D.onVnodeBeforeUnmount) && Te(B, p, l), T & 6)
      ei(l.component, h, b);
    else {
      if (T & 128) {
        l.suspense.unmount(h, b);
        return;
      }
      k && nt(l, null, p, "beforeUnmount"), T & 64 ? l.type.remove(
        l,
        p,
        h,
        wt,
        b
      ) : E && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !E.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== Ae || V > 0 && V & 64) ? Ot(
        E,
        p,
        h,
        !1,
        !0
      ) : (v === Ae && V & 384 || !g && T & 16) && Ot(y, p, h), b && In(l);
    }
    (G && (B = D && D.onVnodeUnmounted) || k) && fe(() => {
      B && Te(B, p, l), k && nt(l, null, p, "unmounted");
    }, h);
  }, In = (l) => {
    const { type: p, el: h, anchor: b, transition: g } = l;
    if (p === Ae) {
      process.env.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && g && !g.persisted ? l.children.forEach((D) => {
        D.type === Ne ? s(D.el) : In(D);
      }) : Qr(h, b);
      return;
    }
    if (p === cn) {
      S(l);
      return;
    }
    const v = () => {
      s(h), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (l.shapeFlag & 1 && g && !g.persisted) {
      const { leave: D, delayLeave: O } = g, y = () => D(h, v);
      O ? O(l.el, v, y) : y();
    } else
      v();
  }, Qr = (l, p) => {
    let h;
    for (; l !== p; )
      h = m(l), s(l), l = h;
    s(p);
  }, ei = (l, p, h) => {
    process.env.NODE_ENV !== "production" && l.type.__hmrId && nc(l);
    const { bum: b, scope: g, job: v, subTree: D, um: O, m: y, a: E } = l;
    ps(y), ps(E), b && Vt(b), g.stop(), v && (v.flags |= 8, Ge(D, l, p, h)), O && fe(O, p), fe(() => {
      l.isUnmounted = !0;
    }, p), (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && uc(l);
  }, Ot = (l, p, h, b = !1, g = !1, v = 0) => {
    for (let D = v; D < l.length; D++)
      Ge(l[D], p, h, b, g);
  }, Zt = (l) => {
    if (l.shapeFlag & 6)
      return Zt(l.component.subTree);
    if (l.shapeFlag & 128)
      return l.suspense.next();
    const p = m(l.anchor || l.el), h = p && p[vc];
    return h ? m(h) : p;
  };
  let Rn = !1;
  const Uo = (l, p, h) => {
    let b;
    l == null ? p._vnode && (Ge(p._vnode, null, null, !0), b = p._vnode.component) : C(
      p._vnode || null,
      l,
      p,
      null,
      null,
      null,
      h
    ), p._vnode = l, Rn || (Rn = !0, Zo(b), ar(), Rn = !1);
  }, wt = {
    p: C,
    um: Ge,
    m: dt,
    r: In,
    mt: qe,
    mc: ie,
    pc: Ve,
    pbc: Be,
    n: Zt,
    o: e
  };
  return {
    render: Uo,
    hydrate: void 0,
    createApp: Bc(Uo)
  };
}
function kn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ot({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function _l(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function rn(e, t, n = !1) {
  const o = e.children, s = t.children;
  if (P(o) && P(s))
    for (let r = 0; r < o.length; r++) {
      const i = o[r];
      let c = s[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = s[r] = Ue(s[r]), c.el = i.el), !n && c.patchFlag !== -2 && rn(i, c)), c.type === Gt && (c.patchFlag === -1 && (c = s[r] = Ue(c)), c.el = i.el), c.type === Ne && !c.el && (c.el = i.el), process.env.NODE_ENV !== "production" && c.el && (c.el.__vnode = c);
    }
}
function ml(e) {
  const t = e.slice(), n = [0];
  let o, s, r, i, c;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const d = e[o];
    if (d !== 0) {
      if (s = n[n.length - 1], e[s] < d) {
        t[o] = s, n.push(o);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        c = r + i >> 1, e[n[c]] < d ? r = c + 1 : i = c;
      d < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
function Lr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Lr(t);
}
function ps(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Fr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Fr(t.subTree) : null;
}
const Hr = (e) => e.__isSuspense;
function gl(e, t) {
  t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : fr(e);
}
const Ae = /* @__PURE__ */ Symbol.for("v-fgt"), Gt = /* @__PURE__ */ Symbol.for("v-txt"), Ne = /* @__PURE__ */ Symbol.for("v-cmt"), cn = /* @__PURE__ */ Symbol.for("v-stc");
let Ze = null, Ao = 1;
function ds(e, t = !1) {
  Ao += e, e < 0 && Ze && t && (Ze.hasOnce = !0);
}
function Pn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function St(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = on.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const vl = (...e) => kr(
  ...e
), Ur = ({ key: e }) => e ?? null, ln = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? J(e) || /* @__PURE__ */ Q(e) || A(e) ? { i: he, r: e, k: t, f: !!n } : e : null);
function El(e, t = null, n = null, o = 0, s = null, r = e === Ae ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ur(t),
    ref: t && ln(t),
    scopeId: mr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: he
  };
  return c ? (Io(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= J(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && w("VNode created with invalid key (NaN). VNode type:", u.type), Ao > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ze && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && Ze.push(u), u;
}
const Qe = process.env.NODE_ENV !== "production" ? vl : kr;
function kr(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === Rc) && (process.env.NODE_ENV !== "production" && !e && w(`Invalid vnode type when creating vnode: ${e}.`), e = Ne), Pn(e)) {
    const c = tt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Io(c, n), Ao > 0 && !r && Ze && (c.shapeFlag & 6 ? Ze[Ze.indexOf(e)] = c : Ze.push(c)), c.patchFlag = -2, c;
  }
  if (Yr(e) && (e = e.__vccOpts), t) {
    t = bl(t);
    let { class: c, style: u } = t;
    c && !J(c) && (t.class = _o(c)), W(u) && (/* @__PURE__ */ dn(u) && !P(u) && (u = Y({}, u)), t.style = ho(u));
  }
  const i = J(e) ? 1 : Hr(e) ? 128 : Ec(e) ? 64 : W(e) ? 4 : A(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && /* @__PURE__ */ dn(e) && (e = /* @__PURE__ */ M(e), w(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), El(
    e,
    t,
    n,
    o,
    s,
    i,
    r,
    !0
  );
}
function bl(e) {
  return e ? /* @__PURE__ */ dn(e) || Ar(e) ? Y({}, e) : e : null;
}
function tt(e, t, n = !1, o = !1) {
  const { props: s, ref: r, patchFlag: i, children: c, transition: u } = e, d = t ? Nl(s || {}, t) : s, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Ur(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? P(r) ? r.concat(ln(t)) : [r, ln(t)] : ln(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && P(c) ? c.map(Kr) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ae ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && tt(e.ssContent),
    ssFallback: e.ssFallback && tt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && o && Vo(
    a,
    u.clone(a)
  ), a;
}
function Kr(e) {
  const t = tt(e);
  return P(e.children) && (t.children = e.children.map(Kr)), t;
}
function yl(e = " ", t = 0) {
  return Qe(Gt, null, e, t);
}
function Ee(e) {
  return e == null || typeof e == "boolean" ? Qe(Ne) : P(e) ? Qe(
    Ae,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Pn(e) ? Ue(e) : Qe(Gt, null, String(e));
}
function Ue(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : tt(e);
}
function Io(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (P(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Io(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Ar(t) ? t._ctx = he : s === 3 && he && (he.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else A(t) ? (t = { default: t, _ctx: he }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [yl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Nl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = _o([t.class, o.class]));
      else if (s === "style")
        t.style = ho([t.style, o.style]);
      else if (Kt(s)) {
        const r = t[s], i = o[s];
        i && r !== i && !(P(r) && r.includes(i)) && (t[s] = r ? [].concat(r, i) : i);
      } else s !== "" && (t[s] = o[s]);
  }
  return t;
}
function Te(e, t, n, o = null) {
  Me(e, t, 7, [
    n,
    o
  ]);
}
const Ol = Vr();
let wl = 0;
function Dl(e, t, n) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || Ol, r = {
    uid: wl++,
    vnode: e,
    type: o,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new yi(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Rr(o, s),
    emitsOptions: Cr(o, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: q,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: q,
    data: q,
    props: q,
    attrs: q,
    slots: q,
    refs: q,
    setupState: q,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? r.ctx = $c(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Gc.bind(null, r), e.ce && e.ce(r), r;
}
let Z = null;
const Wr = () => Z || he;
let Nn, so;
{
  const e = Xe(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((i) => i(r)) : s[0](r);
    };
  };
  Nn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Z = n
  ), so = t(
    "__VUE_SSR_SETTERS__",
    (n) => kt = n
  );
}
const Yt = (e) => {
  const t = Z;
  return Nn(e), e.scope.on(), () => {
    e.scope.off(), Nn(t);
  };
}, hs = () => {
  Z && Z.scope.off(), Nn(null);
}, Vl = /* @__PURE__ */ Ke("slot,component");
function ro(e, { isNativeTag: t }) {
  (Vl(e) || t(e)) && w(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Br(e) {
  return e.vnode.shapeFlag & 4;
}
let kt = !1;
function Cl(e, t = !1, n = !1) {
  t && so(t);
  const { props: o, children: s } = e.vnode, r = Br(e);
  Qc(e, o, r, t), fl(e, s, n || t);
  const i = r ? xl(e, t) : void 0;
  return t && so(!1), i;
}
function xl(e, t) {
  const n = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (n.name && ro(n.name, e.appContext.config), n.components) {
      const s = Object.keys(n.components);
      for (let r = 0; r < s.length; r++)
        ro(s[r], e.appContext.config);
    }
    if (n.directives) {
      const s = Object.keys(n.directives);
      for (let r = 0; r < s.length; r++)
        gr(s[r]);
    }
    n.compilerOptions && Sl() && w(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Or), process.env.NODE_ENV !== "production" && Mc(e);
  const { setup: o } = n;
  if (o) {
    we();
    const s = e.setupContext = o.length > 1 ? Pl(e) : null, r = Yt(e), i = yt(
      o,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Re(e.props) : e.props,
        s
      ]
    ), c = uo(i);
    if (De(), r(), (c || e.sp) && !jt(e) && br(e), c) {
      if (i.then(hs, hs), t)
        return i.then((u) => {
          _s(e, u, t);
        }).catch((u) => {
          Bt(u, e, 0);
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const u = Jt(e, n);
        w(
          `Component <${u}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      _s(e, i, t);
  } else
    qr(e, t);
}
function _s(e, t, n) {
  A(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : W(t) ? (process.env.NODE_ENV !== "production" && Pn(t) && w(
    "setup() should not return VNodes directly - return a render function instead."
  ), (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && (e.devtoolsRawSetupState = t), e.setupState = rr(t), process.env.NODE_ENV !== "production" && jc(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && w(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), qr(e, n);
}
const Sl = () => !0;
function qr(e, t, n) {
  const o = e.type;
  if (e.render || (e.render = o.render || z), __VUE_OPTIONS_API__) {
    const s = Yt(e);
    we();
    try {
      Fc(e);
    } finally {
      De(), s();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && e.render === z && !t && (o.template ? w(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : w("Component is missing template or render function: ", o));
}
const ms = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return bn(), X(e, "get", ""), e[t];
  },
  set() {
    return w("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return w("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return X(e, "get", ""), e[t];
  }
};
function Tl(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return X(e, "get", "$slots"), t[n];
    }
  });
}
function Pl(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && w("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (P(n) ? o = "array" : /* @__PURE__ */ Q(n) && (o = "ref")), o !== "object" && w(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, ms));
      },
      get slots() {
        return o || (o = Tl(e));
      },
      get emit() {
        return (s, ...r) => e.emit(s, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, ms),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Ro(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(rr(ki(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ft)
        return ft[n](e);
    },
    has(t, n) {
      return n in t || n in ft;
    }
  })) : e.proxy;
}
const Al = /(?:^|[-_])\w/g, Il = (e) => e.replace(Al, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Gr(e, t = !0) {
  return A(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Jt(e, t, n = !1) {
  let o = Gr(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e) {
    const s = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    o = s(e.components) || e.parent && s(
      e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? Il(o) : n ? "App" : "Anonymous";
}
function Yr(e) {
  return A(e) && "__vccOpts" in e;
}
const Rl = (e, t) => {
  const n = /* @__PURE__ */ Bi(e, t, kt);
  if (process.env.NODE_ENV !== "production") {
    const o = Wr();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function $l() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(f) {
      if (!W(f))
        return null;
      if (f.__isVue)
        return ["div", e, "VueInstance"];
      if (/* @__PURE__ */ Q(f)) {
        we();
        const m = f.value;
        return De(), [
          "div",
          {},
          ["span", e, a(f)],
          "<",
          c(m),
          ">"
        ];
      } else {
        if (/* @__PURE__ */ lt(f))
          return [
            "div",
            {},
            ["span", e, /* @__PURE__ */ _e(f) ? "ShallowReactive" : "Reactive"],
            "<",
            c(f),
            `>${/* @__PURE__ */ ke(f) ? " (readonly)" : ""}`
          ];
        if (/* @__PURE__ */ ke(f))
          return [
            "div",
            {},
            ["span", e, /* @__PURE__ */ _e(f) ? "ShallowReadonly" : "Readonly"],
            "<",
            c(f),
            ">"
          ];
      }
      return null;
    },
    hasBody(f) {
      return f && f.__isVue;
    },
    body(f) {
      if (f && f.__isVue)
        return [
          "div",
          {},
          ...r(f.$)
        ];
    }
  };
  function r(f) {
    const m = [];
    f.type.props && f.props && m.push(i("props", /* @__PURE__ */ M(f.props))), f.setupState !== q && m.push(i("setup", f.setupState)), f.data !== q && m.push(i("data", /* @__PURE__ */ M(f.data)));
    const _ = u(f, "computed");
    _ && m.push(i("computed", _));
    const N = u(f, "inject");
    return N && m.push(i("injected", N)), m.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: f }]
    ]), m;
  }
  function i(f, m) {
    return m = Y({}, m), Object.keys(m).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        f
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(m).map((_) => [
          "div",
          {},
          ["span", o, _ + ": "],
          c(m[_], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(f, m = !0) {
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", o, f] : W(f) ? ["object", { object: m ? /* @__PURE__ */ M(f) : f }] : ["span", n, String(f)];
  }
  function u(f, m) {
    const _ = f.type;
    if (A(_))
      return;
    const N = {};
    for (const C in f.ctx)
      d(_, C, m) && (N[C] = f.ctx[C]);
    return N;
  }
  function d(f, m, _) {
    const N = f[_];
    if (P(N) && N.includes(m) || W(N) && m in N || f.extends && d(f.extends, m, _) || f.mixins && f.mixins.some((C) => d(C, m, _)))
      return !0;
  }
  function a(f) {
    return /* @__PURE__ */ _e(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const gs = "3.5.29", ge = process.env.NODE_ENV !== "production" ? w : z;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let io;
const vs = typeof window < "u" && window.trustedTypes;
if (vs)
  try {
    io = /* @__PURE__ */ vs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && ge(`Error creating trusted types policy: ${e}`);
  }
const Jr = io ? (e) => io.createHTML(e) : (e) => e, Ml = "http://www.w3.org/2000/svg", jl = "http://www.w3.org/1998/Math/MathML", Fe = typeof document < "u" ? document : null, Es = Fe && /* @__PURE__ */ Fe.createElement("template"), Ll = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const s = t === "svg" ? Fe.createElementNS(Ml, e) : t === "mathml" ? Fe.createElementNS(jl, e) : n ? Fe.createElement(e, { is: n }) : Fe.createElement(e);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => Fe.createTextNode(e),
  createComment: (e) => Fe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Fe.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, s, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      Es.innerHTML = Jr(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const c = Es.content;
      if (o === "svg" || o === "mathml") {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Fl = /* @__PURE__ */ Symbol("_vtc");
function Hl(e, t, n) {
  const o = e[Fl];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const bs = /* @__PURE__ */ Symbol("_vod"), Ul = /* @__PURE__ */ Symbol("_vsh"), kl = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Kl = /(?:^|;)\s*display\s*:/;
function Wl(e, t, n) {
  const o = e.style, s = J(n);
  let r = !1;
  if (n && !s) {
    if (t)
      if (J(t))
        for (const i of t.split(";")) {
          const c = i.slice(0, i.indexOf(":")).trim();
          n[c] == null && un(o, c, "");
        }
      else
        for (const i in t)
          n[i] == null && un(o, i, "");
    for (const i in n)
      i === "display" && (r = !0), un(o, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = o[kl];
      i && (n += ";" + i), o.cssText = n, r = Kl.test(n);
    }
  } else t && e.removeAttribute("style");
  bs in e && (e[bs] = r ? o.display : "", e[Ul] && (o.display = "none"));
}
const Bl = /[^\\];\s*$/, ys = /\s*!important$/;
function un(e, t, n) {
  if (P(n))
    n.forEach((o) => un(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Bl.test(n) && ge(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = ql(e, t);
    ys.test(n) ? e.setProperty(
      de(o),
      n.replace(ys, ""),
      "important"
    ) : e[o] = n;
  }
}
const Ns = ["Webkit", "Moz", "ms"], Kn = {};
function ql(e, t) {
  const n = Kn[t];
  if (n)
    return n;
  let o = pe(t);
  if (o !== "filter" && o in e)
    return Kn[t] = o;
  o = Dn(o);
  for (let s = 0; s < Ns.length; s++) {
    const r = Ns[s] + o;
    if (r in e)
      return Kn[t] = r;
  }
  return t;
}
const Os = "http://www.w3.org/1999/xlink";
function ws(e, t, n, o, s, r = Ei(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Os, t.slice(6, t.length)) : e.setAttributeNS(Os, t, n) : n == null || r && !Hs(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : et(n) ? String(n) : n
  );
}
function Ds(e, t, n, o, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Jr(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const c = r === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (c !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = Hs(n) : n == null && c === "string" ? (n = "", i = !0) : c === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (c) {
    process.env.NODE_ENV !== "production" && !i && ge(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      c
    );
  }
  i && e.removeAttribute(s || t);
}
function Gl(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Yl(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Vs = /* @__PURE__ */ Symbol("_vei");
function Jl(e, t, n, o, s = null) {
  const r = e[Vs] || (e[Vs] = {}), i = r[t];
  if (o && i)
    i.value = process.env.NODE_ENV !== "production" ? xs(o, t) : o;
  else {
    const [c, u] = zl(t);
    if (o) {
      const d = r[t] = Ql(
        process.env.NODE_ENV !== "production" ? xs(o, t) : o,
        s
      );
      Gl(e, c, d, u);
    } else i && (Yl(e, c, i, u), r[t] = void 0);
  }
}
const Cs = /(?:Once|Passive|Capture)$/;
function zl(e) {
  let t;
  if (Cs.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Cs); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : de(e.slice(2)), t];
}
let Wn = 0;
const Zl = /* @__PURE__ */ Promise.resolve(), Xl = () => Wn || (Zl.then(() => Wn = 0), Wn = Date.now());
function Ql(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Me(
      eu(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Xl(), n;
}
function xs(e, t) {
  return A(e) || P(e) ? e : (ge(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), z);
}
function eu(e, t) {
  if (P(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (s) => !s._stopped && o && o(s)
    );
  } else
    return t;
}
const Ss = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, tu = (e, t, n, o, s, r) => {
  const i = s === "svg";
  t === "class" ? Hl(e, o, i) : t === "style" ? Wl(e, n, o) : Kt(t) ? an(t) || Jl(e, t, n, o, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : nu(e, t, o, i)) ? (Ds(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ws(e, t, o, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !J(o)) ? Ds(e, pe(t), o, r, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), ws(e, t, o, i));
};
function nu(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ss(t) && A(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Ss(t) && J(n) ? !1 : t in e;
}
const Ts = {};
// @__NO_SIDE_EFFECTS__
function ou(e, t, n) {
  let o = /* @__PURE__ */ yc(e, t);
  ao(o) && (o = Y({}, o, t));
  class s extends $o {
    constructor(i) {
      super(o, i, n);
    }
  }
  return s.def = o, s;
}
const su = typeof HTMLElement < "u" ? HTMLElement : class {
};
class $o extends su {
  constructor(t, n = {}, o = As) {
    super(), this._def = t, this._props = n, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && o !== As ? this._root = this.shadowRoot : (process.env.NODE_ENV !== "production" && this.shadowRoot && ge(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow(
      Y({}, t.shadowRootOptions, {
        mode: "open"
      })
    ), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof $o) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._inheritParentContext(t));
  }
  _inheritParentContext(t = this._parent) {
    t && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      t._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, lr(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
    });
  }
  _processMutations(t) {
    for (const n of t)
      this._setAttr(n.attributeName);
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
    const t = (o, s = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: r, styles: i } = o;
      let c;
      if (r && !P(r))
        for (const u in r) {
          const d = r[u];
          (d === Number || d && d.type === Number) && (u in this._props && (this._props[u] = qo(this._props[u])), (c || (c = /* @__PURE__ */ Object.create(null)))[pe(u)] = !0);
        }
      this._numberProps = c, this._resolveProps(o), this.shadowRoot ? this._applyStyles(i) : process.env.NODE_ENV !== "production" && i && ge(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(o);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((o) => {
      o.configureApp = this._def.configureApp, t(this._def = o, !0);
    }) : t(this._def);
  }
  _mount(t) {
    (process.env.NODE_ENV !== "production" || __VUE_PROD_DEVTOOLS__) && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const o in n)
        H(this, o) ? process.env.NODE_ENV !== "production" && ge(`Exposed property "${o}" already exists on custom element.`) : Object.defineProperty(this, o, {
          // unwrap ref to be consistent with public instance behavior
          get: () => sr(n[o])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, o = P(n) ? n : Object.keys(n || {});
    for (const s of Object.keys(this))
      s[0] !== "_" && o.includes(s) && this._setProp(s, this[s]);
    for (const s of o.map(pe))
      Object.defineProperty(this, s, {
        get() {
          return this._getProp(s);
        },
        set(r) {
          this._setProp(s, r, !0, !this._patching);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let o = n ? this.getAttribute(t) : Ts;
    const s = pe(t);
    n && this._numberProps && this._numberProps[s] && (o = qo(o)), this._setProp(s, o, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, o = !0, s = !1) {
    if (n !== this._props[t] && (this._dirty = !0, n === Ts ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), s && this._instance && this._update(), o)) {
      const r = this._ob;
      r && (this._processMutations(r.takeRecords()), r.disconnect()), n === !0 ? this.setAttribute(de(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(de(t), n + "") : n || this.removeAttribute(de(t)), r && r.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), iu(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = Qe(this._def, Y(t, this._props));
    return this._instance || (n.ce = (o) => {
      this._instance = o, o.ce = this, o.isCE = !0, process.env.NODE_ENV !== "production" && (o.ceReload = (r) => {
        this._styles && (this._styles.forEach((i) => this._root.removeChild(i)), this._styles.length = 0), this._applyStyles(r), this._instance = null, this._update();
      });
      const s = (r, i) => {
        this.dispatchEvent(
          new CustomEvent(
            r,
            ao(i[0]) ? Y({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      o.emit = (r, ...i) => {
        s(r, i), de(r) !== r && s(de(r), i);
      }, this._setParent();
    }), n;
  }
  _applyStyles(t, n) {
    if (!t) return;
    if (n) {
      if (n === this._def || this._styleChildren.has(n))
        return;
      this._styleChildren.add(n);
    }
    const o = this._nonce;
    for (let s = t.length - 1; s >= 0; s--) {
      const r = document.createElement("style");
      if (o && r.setAttribute("nonce", o), r.textContent = t[s], this.shadowRoot.prepend(r), process.env.NODE_ENV !== "production")
        if (n) {
          if (n.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let i = this._childStyles.get(n.__hmrId);
            i || this._childStyles.set(n.__hmrId, i = []), i.push(r);
          }
        } else
          (this._styles || (this._styles = [])).push(r);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let n;
    for (; n = this.firstChild; ) {
      const o = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[o] || (t[o] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = this._getSlots(), n = this._instance.type.__scopeId;
    for (let o = 0; o < t.length; o++) {
      const s = t[o], r = s.getAttribute("name") || "default", i = this._slots[r], c = s.parentNode;
      if (i)
        for (const u of i) {
          if (n && u.nodeType === 1) {
            const d = n + "-s", a = document.createTreeWalker(u, 1);
            u.setAttribute(d, "");
            let f;
            for (; f = a.nextNode(); )
              f.setAttribute(d, "");
          }
          c.insertBefore(u, s);
        }
      else
        for (; s.firstChild; ) c.insertBefore(s.firstChild, s);
      c.removeChild(s);
    }
  }
  /**
   * @internal
   */
  _getSlots() {
    const t = [this];
    this._teleportTargets && t.push(...this._teleportTargets);
    const n = /* @__PURE__ */ new Set();
    for (const o of t) {
      const s = o.querySelectorAll("slot");
      for (let r = 0; r < s.length; r++)
        n.add(s[r]);
    }
    return Array.from(n);
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _beginPatch() {
    this._patching = !0, this._dirty = !1;
  }
  /**
   * @internal
   */
  _endPatch() {
    this._patching = !1, this._dirty && this._instance && this._update();
  }
  /**
   * @internal
   */
  _hasShadowRoot() {
    return this._def.shadowRoot !== !1;
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
    if (process.env.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((o) => this._root.removeChild(o)), n.length = 0);
    }
  }
}
const ru = /* @__PURE__ */ Y({ patchProp: tu }, Ll);
let Ps;
function zr() {
  return Ps || (Ps = dl(ru));
}
const iu = (...e) => {
  zr().render(...e);
}, As = (...e) => {
  const t = zr().createApp(...e);
  process.env.NODE_ENV !== "production" && (lu(t), uu(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const s = fu(o);
    if (!s) return;
    const r = t._component;
    !A(r) && !r.render && !r.template && (r.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const i = n(s, !1, cu(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
};
function cu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function lu(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => _i(t) || mi(t) || gi(t),
    writable: !1
  });
}
function uu(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        ge(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return ge(o), n;
      },
      set() {
        ge(o);
      }
    });
  }
}
function fu(e) {
  if (J(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && ge(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && ge(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function au() {
  $l();
}
process.env.NODE_ENV !== "production" && au();
function Is(e) {
  return e.replace(/-([a-z])/g, (t, n) => n.toUpperCase());
}
function On(e) {
  return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
function pu(e) {
  return e.map(On);
}
const du = ["validate", "getData", "setData", "reset"];
function hu(e, t, n = {}) {
  const {
    shadow: o = !0,
    props: s = [],
    events: r = [],
    methods: i = du
  } = n, u = /* @__PURE__ */ ou(t, {
    shadowRoot: o
  });
  class d extends u {
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
    _callMethod(f, ...m) {
      const _ = this._getVueInstance();
      if (!_) {
        console.warn(`[wc-utils] Vue 3 组件实例尚未挂载，无法调用 ${f}`);
        return;
      }
      const N = _.exposed;
      if (N && typeof N[f] == "function")
        return N[f](...m);
      const C = _.proxy;
      if (C && typeof C[f] == "function")
        return C[f](...m);
      console.warn(`[wc-utils] 组件未实现方法: ${f}，请确保已通过 defineExpose 暴露`);
    }
    validate() {
      const f = this._callMethod("validate");
      return f instanceof Promise ? f : Promise.resolve(f ?? !0);
    }
    getData() {
      return this._callMethod("getData") ?? {};
    }
    setData(f) {
      this._callMethod("setData", f);
    }
    reset() {
      this._callMethod("reset");
    }
  }
  return d._wcMeta = {
    tagName: e,
    framework: "vue3",
    props: s,
    events: r,
    attributes: s.map(On)
  }, customElements.get(e) ? console.warn(`[wc-utils] 自定义元素 "${e}" 已注册，跳过重复注册`) : customElements.define(e, d), d;
}
/**
  * vue-custom-element v3.3.0
  * (c) 2021 Karol Fabjańczuk
  * @license MIT
  */
Object.setPrototypeOf = Object.setPrototypeOf || Zr;
function Zr(e, t) {
  return e.__proto__ = t, e;
}
Zr.bind(Object);
function _u() {
  return !(typeof Symbol > "u" || typeof Reflect > "u" || typeof Proxy > "u" || Object.isSealed(Proxy));
}
var mu = _u(), gu = /* @__PURE__ */ function() {
  function e(t, n) {
    for (var o = 0; o < n.length; o++) {
      var s = n[o];
      s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
    }
  }
  return function(t, n, o) {
    return n && e(t.prototype, n), o && e(t, o), t;
  };
}();
function vu(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Rs(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function Eu(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
function Mo() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}
Object.setPrototypeOf(Mo.prototype, HTMLElement.prototype);
Object.setPrototypeOf(Mo, HTMLElement);
function bu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (typeof customElements > "u")
    return;
  function n() {
    t.shadow === !0 && HTMLElement.prototype.attachShadow && this.attachShadow({ mode: "open" }), typeof t.constructorCallback == "function" && t.constructorCallback.call(this);
  }
  function o() {
    typeof t.connectedCallback == "function" && t.connectedCallback.call(this);
  }
  function s() {
    typeof t.disconnectedCallback == "function" && t.disconnectedCallback.call(this);
  }
  function r(d, a, f) {
    typeof t.attributeChangedCallback == "function" && t.attributeChangedCallback.call(this, d, a, f);
  }
  function i(d, a) {
    var f = customElements.get(d);
    return typeof f < "u" ? f : customElements.define(d, a);
  }
  if (mu) {
    var c = function(d) {
      Eu(a, d);
      function a(f) {
        var m;
        vu(this, a);
        var _ = Rs(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this)), N = f ? HTMLElement.call(f) : _;
        return n.call(N), m = N, Rs(_, m);
      }
      return gu(a, null, [{
        key: "observedAttributes",
        get: function() {
          return t.observedAttributes || [];
        }
      }]), a;
    }(Mo);
    return c.prototype.connectedCallback = o, c.prototype.disconnectedCallback = s, c.prototype.attributeChangedCallback = r, i(e, c), c;
  } else {
    var u = function(a) {
      var f = a ? HTMLElement.call(a) : this;
      return n.call(f), f;
    };
    return u.observedAttributes = t.observedAttributes || [], u.prototype = Object.create(HTMLElement.prototype, {
      constructor: {
        configurable: !0,
        writable: !0,
        value: u
      }
    }), u.prototype.connectedCallback = o, u.prototype.disconnectedCallback = s, u.prototype.attributeChangedCallback = r, i(e, u), u;
  }
}
var yu = /-(\w)/g, co = function(t) {
  return t.replace(yu, function(n, o) {
    return o ? o.toUpperCase() : "";
  });
}, $s = /([^-])([A-Z])/g, Nu = function(t) {
  return t.replace($s, "$1-$2").replace($s, "$1-$2").toLowerCase();
};
function jo(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = e.length - t, o = new Array(n); n--; )
    o[n] = e[n + t];
  return o;
}
var Lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
  return typeof e;
} : function(e) {
  return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};
function Fo(e, t) {
  if (e == null)
    return t === Boolean ? !1 : void 0;
  var n = e, o = ["true", "false"].indexOf(e) > -1, s = parseFloat(n, 10), r = !isNaN(s) && isFinite(n) && typeof n == "string" && !n.match(/^0+[^.]\d*$/g);
  return t && t !== Boolean && (typeof n > "u" ? "undefined" : Lo(n)) !== t ? n = t(e) : o || t === Boolean ? n = n === "" ? !0 : n === "true" || n === !0 : r && (n = s), n;
}
function Bn(e, t) {
  if (e && e.length)
    e.forEach(function(s) {
      var r = co(s);
      t.camelCase.indexOf(r) === -1 && t.camelCase.push(r);
    });
  else if (e && (typeof e > "u" ? "undefined" : Lo(e)) === "object")
    for (var n in e) {
      var o = co(n);
      t.camelCase.indexOf(o) === -1 && t.camelCase.push(o), e[o] && e[o].type && (t.types[n] = [].concat(e[o].type)[0]);
    }
}
function Ms() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = {
    camelCase: [],
    hyphenate: [],
    types: {}
  };
  if (e.mixins && e.mixins.forEach(function(o) {
    Bn(o.props, t);
  }), e.extends && e.extends.props) {
    var n = e.extends.props;
    Bn(n, t);
  }
  return Bn(e.props, t), t.camelCase.forEach(function(o) {
    t.hyphenate.push(Nu(o));
  }), t;
}
function Ou(e, t) {
  t.camelCase.forEach(function(n, o) {
    Object.defineProperty(e, n, {
      get: function() {
        return this.__vue_custom_element__[n];
      },
      set: function(r) {
        if (((typeof r > "u" ? "undefined" : Lo(r)) === "object" || typeof r == "function") && this.__vue_custom_element__) {
          var i = t.camelCase[o];
          this.__vue_custom_element__[i] = r;
        } else {
          var c = t.types[t.camelCase[o]];
          this.setAttribute(t.hyphenate[o], Fo(r, c));
        }
      }
    });
  });
}
function wu(e, t, n) {
  var o = t.propsData || {};
  return n.hyphenate.forEach(function(s, r) {
    var i = n.camelCase[r], c = e.attributes[s] || e[i], u = null;
    n.types[i] && (u = n.types[i]), c instanceof Attr ? o[i] = Fo(c.value, u) : typeof c < "u" && (o[i] = c);
  }), o;
}
function Xr(e) {
  var t = {};
  return jo(e.attributes).forEach(function(n) {
    t[n.nodeName === "vue-slot" ? "slot" : n.nodeName] = n.nodeValue;
  }), t;
}
function Du(e) {
  if (e.childNodes.length) return e.childNodes;
  if (e.content && e.content.childNodes && e.content.childNodes.length)
    return e.content.childNodes;
  var t = document.createElement("div");
  return t.innerHTML = e.innerHTML, t.childNodes;
}
function Vu(e, t, n) {
  var o = Du(t), s = jo(o).map(function(r) {
    return r.nodeName === "#text" ? r.nodeValue : e(r.tagName, {
      attrs: Xr(r),
      domProps: {
        innerHTML: r.innerHTML
      }
    });
  });
  return n.slot = t.id, e("template", n, s);
}
function Cu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments[1], n = [];
  return jo(e).forEach(function(o) {
    if (o.nodeName === "#text")
      o.nodeValue.trim() && n.push(t("span", o.nodeValue));
    else if (o.nodeName !== "#comment") {
      var s = Xr(o), r = {
        attrs: s,
        domProps: {
          innerHTML: o.innerHTML === "" ? o.innerText : o.innerHTML
        }
      };
      s.slot && (r.slot = s.slot, s.slot = void 0);
      var i = o.tagName === "TEMPLATE" ? Vu(t, o, r) : t(o.tagName, r);
      n.push(i);
    }
  }), n;
}
function xu(e, t) {
  var n = { bubbles: !1, cancelable: !1, detail: t }, o = void 0;
  return typeof window.CustomEvent == "function" ? o = new CustomEvent(e, n) : (o = document.createEvent("CustomEvent"), o.initCustomEvent(e, n.bubbles, n.cancelable, n.detail)), o;
}
function js(e, t) {
  for (var n = arguments.length, o = Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    o[s - 2] = arguments[s];
  var r = xu(t, [].concat(o));
  e.dispatchEvent(r);
}
function Ls(e, t, n, o, s) {
  if (e.__vue_custom_element__)
    return Promise.resolve(e);
  var r = t.util.extend({}, n), i = wu(e, r, o), c = t.version && parseInt(t.version.split(".")[0], 10) || 0;
  function u() {
    this.$emit = function() {
      for (var j, $ = arguments.length, R = Array($), ee = 0; ee < $; ee++)
        R[ee] = arguments[ee];
      js.apply(void 0, [e].concat(R)), this.__proto__ && (j = this.__proto__.$emit).call.apply(j, [this].concat(R));
    };
  }
  if (r.beforeCreate = [].concat(r.beforeCreate || [], u), r._compiled) {
    var d = {}, a = r._Ctor;
    a && (d = Object.keys(a).map(function(L) {
      return a[L];
    })[0].options), d.beforeCreate = r.beforeCreate;
  }
  var f = void 0;
  if (c >= 2) {
    var m = e.cloneNode(!0).childNodes;
    f = {
      propsData: i,
      props: o.camelCase,
      computed: {
        reactiveProps: function() {
          var j = this, $ = {};
          return o.camelCase.forEach(function(R) {
            typeof j[R] < "u" && ($[R] = j[R]);
          }), $;
        }
      },
      render: function(j) {
        var $ = {
          props: this.reactiveProps
        };
        return j(r, $, Cu(m, j));
      }
    };
  } else if (c === 1)
    f = r, f.propsData = i;
  else {
    f = r;
    var _ = {};
    Object.keys(i).forEach(function(L) {
      _[L] = { default: i[L] };
    }), f.props = _;
  }
  var N = c >= 2 ? "<div></div>" : ("<div>" + e.innerHTML + "</div>").replace(/vue-slot=/g, "slot=");
  if (s.shadow && e.shadowRoot ? (e.shadowRoot.innerHTML = N, f.el = e.shadowRoot.children[0]) : (e.innerHTML = N, f.el = e.children[0]), s.shadow && s.shadowCss && e.shadowRoot) {
    var C = document.createElement("style");
    C.type = "text/css", C.appendChild(document.createTextNode(s.shadowCss)), e.shadowRoot.appendChild(C);
  }
  return Ou(e, o), typeof s.beforeCreateVueInstance == "function" && (f = s.beforeCreateVueInstance(f) || f), Promise.resolve(f).then(function(L) {
    return e.__vue_custom_element__ = new t(L), e.__vue_custom_element_props__ = o, e.getVueInstance = function() {
      var j = e.__vue_custom_element__;
      return j.$children.length ? j.$children[0] : j;
    }, e.removeAttribute("vce-cloak"), e.setAttribute("vce-ready", ""), js(e, "vce-ready"), e;
  });
}
function fn(e) {
  e.customElement = function(n, o) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = typeof o == "function", i = r && { props: s.props || [] }, c = Ms(r ? i : o), u = bu(n, {
      constructorCallback: function() {
        typeof s.constructorCallback == "function" && s.constructorCallback.call(this);
      },
      connectedCallback: function() {
        var a = this, f = r && o(), m = f && f.then && typeof f.then == "function";
        if (typeof s.connectedCallback == "function" && s.connectedCallback.call(this), r && !m)
          throw new Error("Async component " + n + " do not returns Promise");
        this.__detached__ || (m ? f.then(function(_) {
          var N = Ms(_);
          Ls(a, e, _, N, s).then(function() {
            typeof s.vueInstanceCreatedCallback == "function" && s.vueInstanceCreatedCallback.call(a);
          });
        }) : Ls(this, e, o, c, s).then(function() {
          typeof s.vueInstanceCreatedCallback == "function" && s.vueInstanceCreatedCallback.call(a);
        })), this.__detached__ = !1;
      },
      disconnectedCallback: function() {
        var a = this;
        this.__detached__ = !0, typeof s.disconnectedCallback == "function" && s.disconnectedCallback.call(this), s.destroyTimeout !== null && setTimeout(function() {
          a.__detached__ && a.__vue_custom_element__ && (a.__detached__ = !1, a.__vue_custom_element__.$destroy(!0), delete a.__vue_custom_element__, delete a.__vue_custom_element_props__);
        }, s.destroyTimeout || 3e3);
      },
      attributeChangedCallback: function(a, f, m) {
        if (this.__vue_custom_element__ && typeof m < "u") {
          var _ = co(a);
          typeof s.attributeChangedCallback == "function" && s.attributeChangedCallback.call(this, a, f, m);
          var N = this.__vue_custom_element_props__.types[_];
          this.__vue_custom_element__[_] = Fo(m, N);
        }
      },
      observedAttributes: c.hyphenate,
      shadow: !!s.shadow && !!HTMLElement.prototype.attachShadow
    });
    return u;
  };
}
typeof window < "u" && window.Vue && (window.Vue.use(fn), fn.installed && (fn.installed = !1));
const Su = ["validate", "getData", "setData", "reset"];
function Tu(e, t) {
  const n = e.props;
  if (!n || Array.isArray(n)) return null;
  const o = n[t];
  if (!o) return null;
  const s = o.type || o;
  return Array.isArray(s) ? s[0] : s;
}
const Pu = [Object, Array, Function];
async function Au(e, t, n = {}) {
  const { Vue: o, shadow: s = !0, props: r = [], events: i = [] } = n;
  if (!o)
    throw new Error("[wc-utils] Vue 2 适配器需要传入 Vue 构造函数：registerVue2(tagName, component, { Vue })");
  if (o.__vue_custom_element_installed || (o.use(fn), o.__vue_custom_element_installed = !0), customElements.get(e)) {
    console.warn(`[wc-utils] 自定义元素 "${e}" 已注册，跳过重复注册`);
    return;
  }
  o.customElement(e, t, {
    shadow: s,
    // 对同步组件，vue-custom-element 实际上从 component.props 自行提取，此项仅作备用
    props: r.length ? r : Object.keys(t.props || {}),
    events: i.length ? i : ["change", "error"],
    // 在 customElement 挂载后执行：代理接口方法 + 检测对象 prop 是否误用 attribute 传入
    vueInstanceCreatedCallback() {
      const u = this;
      Su.forEach((d) => {
        typeof u[d] > "u" && (u[d] = (...a) => {
          const f = u.__vue_custom_element__ && u.__vue_custom_element__.$children[0];
          if (f && typeof f[d] == "function")
            return f[d](...a);
          console.warn(`[wc-utils] Vue 2 组件未实现方法: ${d}`);
        });
      }), process.env.NODE_ENV !== "production" && Object.keys(t.props || {}).forEach((a) => {
        const f = Tu(t, a);
        if (!Pu.includes(f)) return;
        const m = On(a), _ = u.getAttribute(m);
        (_ === "[object Object]" || _ === "[object Array]" || _ === "function () {}") && console.warn(
          `[wc-utils] <${e}> prop "${a}" 收到了字符串 "${_}"，但其声明类型为 ${f.name}。
对象/数组/函数类型的 prop 无法通过 HTML attribute 传递，请在父组件中使用 .prop 修饰符：
  ✅  :${a}.prop="value"
  ❌  :${a}="value"（当前用法）`
        );
      });
    }
  });
  const c = customElements.get(e);
  c && (c._wcMeta = {
    tagName: e,
    framework: "vue2",
    props: r,
    events: i,
    attributes: r.map(On)
  });
}
const Iu = ["process-id", "task-id", "biz-id", "base-api-url", "auth-token"];
function Ru(e) {
  return "on" + e.charAt(0).toUpperCase() + e.slice(1);
}
function $u(e, t, n = {}) {
  const { React: o, ReactDOM: s, shadow: r = !0, props: i = [], events: c = [] } = n;
  if (!o || !s)
    throw new Error("[wc-utils] React 适配器需要传入 React 和 ReactDOM：registerReact(tagName, Component, { React, ReactDOM })");
  const u = i.length ? pu(i) : Iu, d = Array.from(/* @__PURE__ */ new Set(["change", "error", ...c])), a = typeof s.createRoot == "function";
  class f extends HTMLElement {
    constructor() {
      super(), this._ref = o.createRef(), this._props = {}, this._container = null, this._reactRoot = null, i.forEach((_) => {
        Object.defineProperty(this, _, {
          get: () => this._props[_],
          set: (N) => {
            this._props = { ...this._props, [_]: N }, this._container && this._render();
          },
          configurable: !0,
          enumerable: !0
        });
      });
    }
    static get observedAttributes() {
      return u;
    }
    connectedCallback() {
      r ? this.shadowRoot ? this._container = this.shadowRoot : this._container = this.attachShadow({ mode: "open" }) : this._container = this, u.forEach((_) => {
        const N = this.getAttribute(_);
        N !== null && (this._props[Is(_)] = N);
      }), this._render();
    }
    disconnectedCallback() {
      this._container && (a && this._reactRoot ? (this._reactRoot.unmount(), this._reactRoot = null) : s.unmountComponentAtNode(this._container));
    }
    attributeChangedCallback(_, N, C) {
      const L = Is(_);
      this._props = { ...this._props, [L]: C }, this._container && this._render();
    }
    _render() {
      if (!this._container) return;
      const _ = {};
      d.forEach((C) => {
        _[Ru(C)] = (L) => {
          this.dispatchEvent(new CustomEvent(C, { detail: L, bubbles: !0, composed: !0 }));
        };
      });
      const N = o.createElement(t, {
        ...this._props,
        ref: this._ref,
        ..._
      });
      a ? (this._reactRoot || (this._reactRoot = s.createRoot(this._container)), this._reactRoot.render(N)) : s.render(N, this._container);
    }
    // ─── 接口方法代理 ───────────────────────────────────────────────────────────
    validate() {
      var N, C;
      const _ = (C = (N = this._ref.current) == null ? void 0 : N.validate) == null ? void 0 : C.call(N);
      return _ instanceof Promise ? _ : Promise.resolve(_ ?? !0);
    }
    getData() {
      var _, N;
      return ((N = (_ = this._ref.current) == null ? void 0 : _.getData) == null ? void 0 : N.call(_)) ?? {};
    }
    setData(_) {
      var N, C;
      (C = (N = this._ref.current) == null ? void 0 : N.setData) == null || C.call(N, _);
    }
    reset() {
      var _, N;
      (N = (_ = this._ref.current) == null ? void 0 : _.reset) == null || N.call(_);
    }
  }
  return f._wcMeta = {
    tagName: e,
    framework: "react",
    props: i,
    events: d,
    attributes: u
  }, customElements.get(e) ? console.warn(`[wc-utils] 自定义元素 "${e}" 已注册，跳过重复注册`) : customElements.define(e, f), f;
}
const Mu = ["processId", "taskId", "bizId", "baseApiUrl", "authToken"], ju = ["change", "error"];
function Fu(e, t, n, o = {}) {
  if (!e || !e.includes("-"))
    throw new Error(`[wc-utils] 自定义元素标签名必须包含连字符（如 "my-form"），收到："${e}"`);
  const s = {
    shadow: !0,
    props: Mu,
    events: ju,
    ...o
  };
  switch (n) {
    case "vue3":
    case "vue":
      return hu(e, t, s);
    case "vue2":
      return Au(e, t, s);
    case "react":
      return $u(e, t, s);
    default:
      throw new Error(
        `[wc-utils] 不支持的框架类型: "${n}"。支持的值: "vue3", "vue2", "react"`
      );
  }
}
function Hu(e, { timeout: t = 1e4, wcTag: n, bypassSandbox: o = !1 } = {}) {
  return new Promise((s, r) => {
    if (n && window.customElements && window.customElements.get(n)) {
      s();
      return;
    }
    const i = document.querySelector(`script[src="${e}"]`);
    if (i) {
      i.addEventListener("load", s, { once: !0 }), i.addEventListener(
        "error",
        () => r(new Error(`[wc-utils] 脚本加载失败（已插入）: ${e}`)),
        { once: !0 }
      );
      return;
    }
    const c = document.createElement("script");
    c.src = e, c.async = !0;
    const u = setTimeout(() => {
      r(new Error(`[wc-utils] 脚本加载超时（${t}ms）: ${e}`)), c.remove();
    }, t);
    c.onload = () => {
      clearTimeout(u), s();
    }, c.onerror = () => {
      clearTimeout(u), r(new Error(`[wc-utils] 脚本加载失败: ${e}`)), c.remove();
    }, o ? Node.prototype.appendChild.call(document.head, c) : document.head.appendChild(c);
  });
}
export {
  ju as DEFAULT_EVENTS,
  Mu as DEFAULT_PROPS,
  On as camelToKebab,
  Is as kebabToCamel,
  Hu as loadFormScript,
  pu as propsToAttributes,
  $u as registerReact,
  Au as registerVue2,
  hu as registerVue3,
  Fu as registerWC
};
