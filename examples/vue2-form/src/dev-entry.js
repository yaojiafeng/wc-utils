import './main.js';

// 独立开发/调试用：在本页面直接插入自定义元素
const el = document.createElement('vue2-business-form');
el.setAttribute('process-id', 'P-DEV-001');
el.setAttribute('task-id', 'T-DEV-002');
el.setAttribute('base-api-url', '/api/mock');
el.setAttribute('auth-token', 'dev-token');
el.addEventListener('change', (e) => console.log('[vue2-form change]', e.detail));
el.addEventListener('error', (e) => console.log('[vue2-form error]', e.detail));

document.getElementById('app')?.appendChild(el);

