import Vue from 'vue';
import { registerWC } from '@yxst/wc-utils';
import BusinessForm from './BusinessForm.vue';

registerWC('vue2-business-form', BusinessForm, 'vue2', {
  Vue,
  shadow: true,
  props: ['processId', 'taskId', 'bizId', 'baseApiUrl', 'authToken'],
  events: ['change', 'error'],
});

