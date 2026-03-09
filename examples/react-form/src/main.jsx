/**
 * React 业务表单入口
 * 将 BusinessForm 注册为 <react-business-form> 自定义元素
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerWC } from '@yxst/wc-utils';
import BusinessForm from './BusinessForm.jsx';

registerWC('react-business-form', BusinessForm, 'react', {
  shadow: true,
  props: ['processId', 'taskId', 'bizId', 'baseApiUrl', 'authToken'],
  events: ['change', 'error'],
  React,
  ReactDOM,
});
