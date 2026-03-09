/**
 * 简易 Mock API 服务（Node.js HTTP）
 * 在开发时模拟业务方后端接口
 *
 * 启动：node src/mock-server.js
 * 接口：GET /users  →  返回审批人列表
 */

import { createServer } from 'http';

const USERS = [
  { id: 'u001', name: '李技术总监', department: '技术部' },
  { id: 'u002', name: '王产品经理', department: '产品部' },
  { id: 'u003', name: '赵财务总监', department: '财务部' },
  { id: 'u004', name: '陈人力主管', department: '人力资源部' },
  { id: 'u005', name: '刘法务专员', department: '法务部' },
];

const PORT = 3002;

createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json;charset=utf-8');

  if (req.url === '/users' && req.method === 'GET') {
    res.end(JSON.stringify(USERS));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
}).listen(PORT, () => {
  console.log(`[Mock API] 已启动：http://localhost:${PORT}`);
});
