/**
 * Vue 3 业务表单入口
 * 将 BusinessForm 注册为 <vue3-business-form> 自定义元素
 *
 * 打包后产物（vue3-form.umd.js）上传至 CDN，
 * 主应用通过 loadFormScript 动态加载后即可使用 <vue3-business-form> 标签。
 */

import { registerWC } from '@yxst/wc-utils';
import BusinessForm from './BusinessForm.vue';

registerWC('vue3-business-form', BusinessForm, 'vue3', {
  shadow: true,
  props: ['processId', 'taskId', 'bizId', 'baseApiUrl', 'authToken'],
  events: ['change', 'error'],
});
