/**
 * 属性名工具函数
 * kebab-case <-> camelCase 双向转换
 */

/**
 * kebab-case 转 camelCase
 * 例: 'base-api-url' -> 'baseApiUrl'
 */
export function kebabToCamel(str) {
  return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

/**
 * camelCase 转 kebab-case
 * 例: 'baseApiUrl' -> 'base-api-url'
 */
export function camelToKebab(str) {
  return str.replace(/([A-Z])/g, (c) => `-${c.toLowerCase()}`);
}

/**
 * 将 props 数组（camelCase）转换为 HTML 属性名数组（kebab-case）
 * 例: ['baseApiUrl', 'authToken'] -> ['base-api-url', 'auth-token']
 */
export function propsToAttributes(props) {
  return props.map(camelToKebab);
}
